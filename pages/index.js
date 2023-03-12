import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {

  const {user} = useUser();
  console.log("Info: ", user);

  return (<div> 
    <h1>Página de Inicio</h1>
    <div>
      {!!user ? 
      (<>
        <div>
          <Image
            src={user.picture}
            height={50}
            width={50}
          />
        </div>
        <Link href="/api/auth/logout">Salir</Link>
      </>) :
        (<Link href="/api/auth/login">Iniciar Sesión</Link>)
      }
    </div>
  </div>
  );
}
