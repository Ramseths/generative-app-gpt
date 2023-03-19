import Link from "next/link";
import Image from "next/image";
import {useUser} from "@auth0/nextjs-auth0/client";

export const AppLayout = ({children}) => {

    const {user} = useUser();

    return (
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <div className="bg-gray-700 px-2">
                    <div>Logo</div>
                    <Link href="/post/create" className="block bg-blue-500 tracking-wider w-full text-center text-white cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-blue-900 transition-colors">Crear nuevo</Link>
                </div>
                <div className="bg-gray-700 flex items-center gap-2 border-b border-b-white/50 h-20 px-2">
                    {!!user ? 
                    (<>
                        <div className="min-w-[50px]">
                        <Image
                            src={user.picture}
                            height={50}
                            width={50}
                            className="rounded-full"
                        />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold">{user.name}</div>
                            <Link href="/api/auth/logout" className="text-sm">Cerrar Sesión</Link>
                        </div>
                        
                    </>) :
                        (<Link href="/api/auth/login">Iniciar Sesión</Link>)
                    }
                </div>
                <div className="flex-1 overflow-auto bg-gray-600">
                    lista
                </div>
                
                
            </div>
            <div>{children}</div>
        </div>
    );
};