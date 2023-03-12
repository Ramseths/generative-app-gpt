import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";

export default function CreatePost(props) {
    return <div> 
      <h1>Crear nueva entrada</h1>
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