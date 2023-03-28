import Link from "next/link";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
  <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative bg-gray-700">
     
     <div className="relative z-10 px-10 text-white py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
       <Logo/>
        <p className="mb-4">Esta aplicación de SaaS con IA utiliza el modelo de lenguaje GPT (Generative Pre-trained Transformer) para resolver problemas matemáticos.</p>
        <Link href="/post/create" className="btn">Entrar</Link>
     </div>
  </div>
  );
}
