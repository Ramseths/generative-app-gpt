import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function CreatePost(props) {
    return <div> 
      <h1>Crear nueva entrada</h1>
    </div>;
  }

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      
    }
  };
});