// components/ResumeServerComponents.jsx
export default function ResumeServerComponents() {
    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Card 1: Lo que debemos de saber */}
            <div className="bg-[#101010] shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Lo que debemos de saber Next.13+</h2>
                {/* Server components */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Server components</h3>
                    <p>Por defecto todos son Server Components a menos que especifiquemos lo contrario.</p>
                </div>
                {/* Evitar efectos */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Evitar efectos</h3>
                    <p>useEffect entre otros hooks que disparan acciones del lado del cliente, NO se pueden usar en server components.
                        Si es necesario, especificar "use client" en el inicio del archivo del componente.</p>
                </div>
            </div>

            {/* Card 2: Renderizado estático */}
            <div className="bg-[#101010] shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Renderizado estático</h2>
                <p>El renderizado estático es la opción por defecto en Next, esto mejora el performance y reduce enormemente la cantidad de contenido enviado al cliente.</p>
            </div>

            {/* Card 3: Fetch cache */}
            <div className="bg-[#101010] shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Fetch cache</h2>
                <p>Llamadas a Fetch, realizarán un caché de forma forzada por defecto a menos que se especifique lo contrario.
                    Fetch en Next, tiene propiedades para revalidar, mantener en caché y nunca mantenerlo en cache.</p>
            </div>
        </div>
    );
}