import { Steps } from '../components/steps/Steps';

export default function HomePage() {
  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen px-2 pb-10 gap-16 sm:p-20">
        {/* Encabezado principal de la guía */}
        <header className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 tracking-tight">
            Next.js 13/14: ¡Tu Primer App Sin Morir en el Intento!
          </h1>
          <p className="text-xl mb-8 sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Esta guía está diseñada para <strong>desarrolladores que se inician con Next.js 13/14 y el App Router</strong>, ofreciendo un camino claro y práctico para construir tu primera aplicación completa. Aprende los fundamentos clave, desde la configuración inicial hasta el despliegue, <strong>evitando las complejidades innecesarias</strong>.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Para una inmersión más profunda y detalles técnicos exhaustivos, siempre puedes consultar la{' '}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-semibold underline"
            >
              documentación oficial de Next.js
            </a>
            .
          </p>
        </header>
      </div>
      <Steps /></>
  );
}
