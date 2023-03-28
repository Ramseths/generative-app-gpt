import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { Configuration, OpenAIApi  } from "openai";
import clientPromise from '../../lib/mongodb';

export default withApiAuthRequired (async function handler(req, res) {
    const {user} = await getSession(req, res);
    const client = await clientPromise;
    const db = client.db("GenerativeContent");

    await db.collection("users").insertOne(
        {
            auth0id: user.sub,
        }
    );


    const userProfile = await db.collection("users").findOne({
        auth0id: user.sub
    });

    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(config);

    const {topic, keys} = req.body;

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        temperature: 0,
        max_tokens: 3600,
        prompt: `Escriba una explicación detallada sobre la resolución del problema: ${topic}, que se dirige a las siguientes palabras clave separadas por comas: ${keys}.
        El contenido debe ser formateado en HTML SEO Frendly
        El formato de regreso debe ser un stringified JSON en el siguiente formato:
        {
            "content": Contenido de la explicación
            "title": Titulo del problema
            "metaDescription": La meta descripción va aquí
            "result": Resultado del problema
        }`,
    });

    const parsed = JSON.parse(response.data.choices[0]?.text.split("\n").join(""));

    const post = await db.collection("content").insertOne({
        content: parsed?.content,
        title: parsed?.title,
        metaDescription: parsed?.metaDescription,
        result: parsed?.result,
        topic,
        keywords: keys,
        userId: userProfile._id,
        date: new Date(),
    });

    console.log('Response', response);
    res.status(200).json({
        postId: post.insertedId,
    });
});