import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ObjectId } from "mongodb";
import { AppLayout } from "../../components/AppLayout";
import clientPromise from '../../lib/mongodb';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAppProps } from "../../lib/getAppProps";

export default function Post(props) {

    return (
      <div className="overflow-auto h-full">
      <div className="max-w-screen-sm mx-auto">
        <div className="text-sm font-bold mt-6 p-2 text-center text-blue-900 rounded-sm">
         - Problema - 
        </div>
        <div className="p-4 my-2 border border-stone-200 rounded-md">
          <div className="text-blue-900 text-2xl font-bold">{props.title}</div>
          <div className="mt-2">{props.metaDescription}</div>
        </div>
        <div className="text-sm text-blue-900 font-bold mt-6 p-2 text-center rounded-sm">
          Palabras Clave
        </div>
        <div className="flex flex-wrap pt-2 gap-1 justify-center">
          {props.keywords.split(',').map((keyword, i) => (
            <div key={i} className="p-2 rounded-full bg-blue-500 text-white">
              <FontAwesomeIcon icon={faHashtag} /> {keyword}
            </div>
          ))}
        </div>
        <div className="text-sm bg-blue-900 text-white text-center font-bold mt-6 p-2 rounded-sm">
          Explicación
        </div>
        <div className="px-4" dangerouslySetInnerHTML={{ __html: props.postContent || '' }} />
        <div className="p-4 my-2 border-stone-200 rounded-md">
          <div className="text-sm bg-blue-900 text-white text-center font-bold mt-2 p-2 rounded-sm">
            Resultado
          </div>
          <div className="mt-2 text-lg font-bold">{props.result}</div>
        </div>
      </div>
    </div>
    );
  }

  Post.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}> {page} </AppLayout>
  };

  export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context){
      const props = await getAppProps(context);
      const userSession = await getSession(context.req, context.res);
      const client = await clientPromise;
      const db = client.db("GenerativeContent");
      const user = await db.collection("users").findOne({
        auth0id: userSession.user.sub
      });

      const getPost = await db.collection("content").findOne({
        _id: new ObjectId(context.params.idpost),
        userId: user._id
      })

      if(!getPost){
        return {
          redirect: {
            destination: '/post/create',
            permanent: false
          }
        }
      }

      return {
        props: {
          postContent: getPost.content,
          title: getPost.title,
          metaDescription: getPost.metaDescription,
          keywords: getPost.keywords,
          result: getPost.result,
          ...props
        }
      }
    }
  });