import { Configuration, OpenAIApi  } from "openai";

export default async function handler(req, res) {

    const config = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(config);

    const topic = "Top algortimos de machine learning";
    const keys = "supervisado, no supervisado, por refuerzo";

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        temperature: 0,
        max_tokens: 3600,
        prompt: `Escriba una entrada de blog larga sobre ${topic}, que se dirige a las siguientes palabras clave separadas por comas: ${keys}.
        El contenido debe ser formateado en SEO-frendly HTML.
        La respuesta debe incluir un titulo HTML apropiado y contenido meta de la descripción.
        El formato de regreso debe ser un stringified JSON en el siguiente formato:
        {
            "content": Contenido del blog aquí
            "title": Titulo aquí
            "metaDescription": La meta descripción va aquí
        }`,
    });

    console.log('Response', response);
    res.status(200).json({ post: JSON.parse(response.data.choices[0]?.text) });
}