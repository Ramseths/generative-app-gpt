export const AppLayout = ({children}) => {
    return (
        <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden">
                <div className="bg-gray-700">
                    <div>Logo</div>
                    <div>Salida</div>
                </div>
                <div className="flex-1 overflow-auto bg-gray-600">
                    lista
                </div>
                <div className="bg-gray-700">
                    salir
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};