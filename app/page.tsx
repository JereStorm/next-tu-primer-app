
export default function HomePage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="text-center mb-12 animate-fade-in-down">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 tracking-tight">
          Next.js 13/14: ¡Tu Primer Paso!
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto">
          Aprende los fundamentos de los Server Components y optimiza tu aplicación sin "morir en el intento".
        </p>
      </header>
    </div>
  );
}
