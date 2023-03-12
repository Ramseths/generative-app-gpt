import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function CreatePost() {
    return <div> 
      <h1>Pagina de identificador</h1>
    </div>;
  }

  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {
        
      }
    };
  });