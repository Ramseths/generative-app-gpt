import Image from "next/image";
import Link from "next/link";
import { Logo } from "../components/Logo";
import BackgroundImage from "../public/background.svg"

export default function Home() {
  return (
  <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
     
     <div className="relative z-10 px-10 text-white py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
       <Logo/>
        <p className="mb-4">Esta aplicación de SaaS con IA utiliza el modelo de lenguaje GPT (Generative Pre-trained Transformer) para generar contenido de blog.</p>
        <Link href="/post/create" className="block bg-blue-500 tracking-wider w-full text-center text-white cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Entrar</Link>
     </div>
    
  </div>
  );
}
