import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";

export default function CreatePost(props) {

    const handleClick = async () => {
      const res = fetch(`/api/generator`, {
        method: "POST"
      });

      const json = await (await res).json();
      console.log(json);
    }

    return <div> 
      <h1>Crear nueva entrada</h1>
      <button className="btn" onClick={handleClick}>Generar</button>
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