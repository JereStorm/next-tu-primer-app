// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link'; // Importa Link para los enlaces externos
import { GitCommitIcon, LogIcon, MailIcon } from '@primer/octicons-react'; // Iconos para tus redes

// Metadata específica para esta página
export const metadata: Metadata = {
    title: 'Contacto JStorm',
    description: 'Conoce al autor de esta guía de Next.js.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] p-6 sm:p-10 lg:p-16 text-gray-100">
            <h1 className="text-5xl py-5 sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8 text-center tracking-tight animate-fade-in-down">
                ¡Hola! Soy Jeremias Storm
            </h1>

            <div className="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 max-w-2xl text-center space-y-6 animate-fade-in-up">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    Soy un <span className='text-cyan-400'>programador full-stack con más de 4 años de experiencia</span> en desarrollo de software. He creado esta guía de Next.js para ayudarte a dar tus primeros pasos en este emocionante framework sin complicaciones.
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                    Mi objetivo es hacer que el aprendizaje de Next.js 13/14 sea accesible y divertido, consolidando mis propios conocimientos y compartiéndolos con la comunidad.
                </p>

                <div className="pt-6 border-t border-gray-700 mt-6 space-y-4">
                    <h2 className="text-3xl font-bold text-white mb-4">Conectemos</h2>
                    <div className="flex justify-center gap-6">
                        <Link
                            href="https://github.com/jerestorm" // ¡Cámbialo por tu usuario de GitHub!
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                        >
                            <GitCommitIcon size={24} /> GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jerestormdev" // ¡Cámbialo por tu URL de LinkedIn!
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                        >
                            <LogIcon size={24} /> LinkedIn
                        </Link>
                        <Link
                            href="stormjeremiasdev@gmail.com" // ¡Cámbialo por tu dirección de correo!
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                        >
                            <MailIcon size={24} /> Email
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}