// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link'; // Importa Link para los enlaces externos
import Image from 'next/image';

// Metadata específica para esta página
export const metadata: Metadata = {
    title: 'Contacto JStorm',
    description: 'Conoce al autor de esta guía de Next.js.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] p-6 sm:p-10 lg:p-16 text-gray-100">
            <h1 className="text-5xl py-5 sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8 text-center tracking-tight animate-fade-in-down">
                ¡Hola! Soy Jeremías Storm
            </h1>

            {/* Main Contact Card Container */}
            <div className="bg-card border border-gray-700 rounded-xl shadow-2xl p-8 sm:p-10 lg:p-12 w-full max-w-4xl text-center animate-fade-in-up"> {/* Increased max-w for better content flow */}

                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 lg:gap-16"> {/* Increased gap for more breathing room */}

                    {/* Left Column: Image and Social Links */}
                    <div className="flex flex-col items-center text-center flex-shrink-0 md:w-1/3"> {/* Responsive width for image column */}
                        <Image
                            src="/jeremias.jpg"
                            alt="Foto de perfil de Jeremías"
                            width={200}
                            height={200}
                            className="rounded-full object-cover shadow-md mb-6"
                        />
                        <h2 className="text-3xl font-bold text-white mb-4">Conectemos</h2>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                            <Link
                                href="https://github.com/jerestorm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-medium" // Slightly smaller font for links
                            >
                                <span>GitHub</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/jerestormdev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
                            >
                                <span>LinkedIn</span>
                            </Link>
                            <Link
                                href="mailto:stormjeremiasdev@gmail.com" // Corrected mailto link
                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
                            >
                                <span>Email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: About Me Text and CTA */}
                    <div className="text-left md:w-2/3"> {/* Responsive width for text column */}
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                            Soy un <strong className="text-cyan-400">programador full-stack con más de 4 años de experiencia</strong> en desarrollo de software. Creé esta guía de Next.js para ayudarte a dar tus primeros pasos en este emocionante framework sin complicaciones.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                            Mi objetivo es hacer que el aprendizaje de Next.js 13/14 sea accesible y divertido, consolidando mis propios conocimientos y compartiéndolos con la comunidad. Si tienes preguntas, comentarios, o simplemente quieres conectar, ¡no dudes en contactarme!
                        </p>
                        <a href="mailto:stormjeremiasdev@gmail.com" className="inline-block bg-blue-900 hover:bg-blue-700 text-white py-3 px-6 rounded-sm transition duration-300 ease-in-out transform hover:scale-105">
                            Enviar un correo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}