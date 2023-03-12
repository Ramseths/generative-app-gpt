import Link from "next/link";

export default function Home() {
  return <div> 
    <h1>Hola</h1>
    <div>
      <Link href="/api/auth/login"> Iniciar Sesión</Link>
    </div>
  </div>;
}
