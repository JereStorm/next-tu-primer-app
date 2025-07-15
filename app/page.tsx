import { Steps } from '../components/steps/Steps';

export default function HomePage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center mt-[150px] min-h-screen px-2 py-10 pb-20 gap-16 sm:p-20">
      {/* Encabezado principal de la guía */}
      <header className="text-center pt-16 mb-16 animate-fade-in-down">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 tracking-tight">
          Next.js 13/14: ¡Tu Primer App Sin Morir en el Intento!
        </h1>
        <p className="text-xl mb-15 sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Una guía práctica y sencilla para desarrolladores que dan sus primeros pasos con el **App Router**.
        </p>
      </header>

      <Steps />
    </div>
  );
}
