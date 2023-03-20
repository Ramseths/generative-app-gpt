import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";
import { AppLayout } from "../../components/AppLayout";

export default function CreatePost(props) {

    const [content, setContent] = useState("");
    const [topic, setTopic] = useState("");
    const [keys, setKeys] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = fetch(`/api/generator`, {
        method: "POST",
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({topic, keys}),
      });

      const json = await (await res).json();
      console.log(json);
      setContent(json.post.content);
    }

    return <div> 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Genera un tutorial sobre:</label>
          <textarea className="resize-none border border-gray-500 w-full block my-3 px-5 py-2 rounded-sm" value={topic} onChange={e => setTopic(e.target.value)}></textarea>
        </div>
        <div>
        <label>Palabras claves:</label>
          <textarea className="resize-none border border-gray-500 w-full block my-3 px-5 py-2 rounded-sm" value={keys} onChange={e => setKeys(e.target.value)}></textarea>
        </div>
        <button className="btn" type="submit">Generar</button>
      </form>
      
      <div className="max-w-screen-sm p-9" dangerouslySetInnerHTML={{__html: content}}></div>
    </div>;
  }

  CreatePost.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}> {page} </AppLayout>
  };

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {

    }
  };
});