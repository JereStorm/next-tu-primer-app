import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: 'Manejo de rutas Next.js',
    description: 'Manejo de rutas Next.js guia general para tus primeros pasos',
};

export default function RutasPage() {
    return (
        <>
            <main className="flex flex-col align-center px-20 mt-10 gap-15">
                <h1 className="text-5xl">
                    Rutas

                </h1>

                <h3 className="text-3xl">Carpeta "/app"</h3>

                <article className="rounded mx-auto text-xl border border-cyan-400 w-[50%] py-5 px-10">
                    <p>Todos los componentes por defecta de la carpeta <span>app</span> son generados del lado del servidor. Es decir que son <span>Server Components.</span></p>

                    <p className="mt-3">Si queremos que los componentes se renderizen del lado del cliente deberemos especificarselo!</p>
                </article>
            </main>

        </>
    )
}