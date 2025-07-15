// app/components/Steps.tsx
import { StepItem } from '../step-item/StepItem'
// Definimos los datos de cada paso en un array
const guideStepsData = [
    {
        title: "Paso 1: Inicializando tu Proyecto Next.js 13/14",
        description: "Comienza tu aventura con Next.js con una configuración rápida y sin complicaciones.",
        gradientFrom: "from-blue-300",
        gradientTo: "to-cyan-400",
        content: (
            <>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">El Setup Sin Dolor y la Potencia de TurboPack</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Para crear tu nuevo proyecto Next.js con las últimas versiones y el <strong className="text-white">App Router</strong>, simplemente ejecuta este comando en tu terminal:
                </p>
                <pre className="bg-gray-700 p-4 rounded-lg text-white text-sm overflow-x-auto mb-4 border border-gray-600">
                    <code>npx create-next-app@latest</code>
                </pre>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Durante la instalación, selecciona: <strong className="text-white">TypeScript</strong>, <strong className="text-white">ESLint</strong>, <strong className="text-white">Tailwind CSS</strong> y, lo más importante, ¡<strong className="text-white">App Router</strong>! Next.js configurará automáticamente tu proyecto para usar <strong className="text-white">TurboPack</strong>, el nuevo motor de compilación increíblemente rápido, para un desarrollo ágil.
                </p>
            </>
        ),
    },
    {
        title: "Paso 2: Explorando el Nuevo Sistema de Rutas y Layouts",
        description: "Descubre cómo el App Router y sus convenciones simplifican el enrutamiento y la gestión de la UI.",
        gradientFrom: "from-purple-300",
        gradientTo: "to-fuchsia-400",
        content: (
            <>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">La Nueva Ruta al Éxito con el App Router</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    El <strong className="text-white">nuevo sistema de rutas de Next.js</strong>, conocido como el <strong className="text-white">App Router</strong>, utiliza un enfoque basado en carpetas. Cada carpeta dentro de <code className="bg-gray-700 px-1 rounded">app/</code> define un segmento de ruta, y el archivo <code className="bg-gray-700 px-1 rounded">page.tsx</code> dentro de una carpeta es lo que hace que esa ruta sea accesible y renderiza el contenido de la página.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Los <strong className="text-white">Layouts</strong> (<code className="bg-gray-700 px-1 rounded">layout.tsx</code>) son un concepto fundamental en el App Router. Te permiten compartir UI entre múltiples rutas. Por ejemplo, tu <code className="bg-gray-700 px-1 rounded">app/layout.tsx</code> raíz envuelve toda tu aplicación, incluyendo el `AppHeader` que creamos. Puedes incluso tener <strong className="text-white">Layouts anidados</strong>, lo que significa que un layout puede tener su propio sub-layout, ideal para estructuras de UI complejas.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Además, para la navegación, usarás el componente <strong className="text-white">Next Link</strong> (<code className="bg-gray-700 px-1 rounded">{'<Link href="...">'}</code>) para una navegación optimizada y el hook <code className="bg-gray-700 px-1 rounded">usePathname()</code> (que es un Client Hook) te permite saber la ruta actual, ideal para activar enlaces de navegación.
                </p>
            </>
        ),
    },
    {
        title: "Paso 3: Server Components vs. Client Components en la Práctica",
        description: "Aprende a diferenciar y usar correctamente los componentes de servidor y cliente en React.",
        gradientFrom: "from-orange-300",
        gradientTo: "to-red-400",
        content: (
            <>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">React Server Components: La Nueva Era del Rendimiento</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    ¡Recuerda: en Next.js con el App Router, <strong className="text-white">todos los componentes son React Server Components (RSC) por defecto</strong>! Esto significa que se renderizan completamente en el servidor, lo que mejora el rendimiento inicial de tu aplicación y reduce la cantidad de JavaScript enviada al navegador del usuario. Son perfectos para fetching de datos y contenido estático.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Si necesitas interactividad del lado del cliente (como usar hooks de React como `useState` o `useEffect`, manejar eventos del navegador, o acceder al DOM), debes convertir tu componente en un <strong className="text-white">Client Component</strong> añadiendo la directiva <code className="bg-gray-700 px-1 rounded">'use client'</code> al inicio de tu archivo.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Comprender cuándo usar <strong className="text-white">Server Components</strong> y <strong className="text-white">Client Components</strong> es clave para construir aplicaciones Next.js eficientes y optimizadas.
                </p>
            </>
        ),
    },
    {
        title: "Paso 3: Server Components vs. Client Components en la Práctica",
        description: "Aprende a diferenciar y usar correctamente los componentes de servidor y cliente en React.",
        gradientFrom: "from-orange-300",
        gradientTo: "to-red-400",
        content: (
            <>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">React Server Components: La Nueva Era del Rendimiento</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    ¡Recuerda: en Next.js con el App Router, <strong className="text-white">todos los componentes son React Server Components (RSC) por defecto</strong>! Esto significa que se renderizan completamente en el servidor, lo que mejora el rendimiento inicial de tu aplicación y reduce la cantidad de JavaScript enviada al navegador del usuario. Son perfectos para fetching de datos y contenido estático.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Si necesitas interactividad del lado del cliente (como usar hooks de React como `useState` o `useEffect`, manejar eventos del navegador, o acceder al DOM), debes convertir tu componente en un <strong className="text-white">Client Component</strong> añadiendo la directiva <code className="bg-gray-700 px-1 rounded">'use client'</code> al inicio de tu archivo.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Comprender cuándo usar <strong className="text-white">Server Components</strong> y <strong className="text-white">Client Components</strong> es clave para construir aplicaciones Next.js eficientes y optimizadas.
                </p>
            </>
        ),
    },
    {
        title: "Paso 4: Estilizando con Tailwind CSS y Optimización SEO (Metadata)",
        description: "Descubre cómo Tailwind CSS acelera tu diseño y cómo la Metadata mejora la visibilidad de tu app.",
        gradientFrom: "from-green-300",
        gradientTo: "to-lime-400",
        content: (
            <>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">¡Dale Estilo y Visibilidad a Tu App!</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Tailwind CSS</strong> es una excelente opción para aplicar estilos. Te permite usar clases de utilidad directamente en tu JSX para un diseño ágil y responsivo, sin escribir CSS personalizado. Es una herramienta poderosa para mantener un diseño consistente y rápido.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Además del estilo, la <strong className="text-white">Metadata</strong> es crucial para el SEO y la forma en que tu aplicación se muestra en los motores de búsqueda y redes sociales. En Next.js, puedes definir <strong className="text-white">Metadata</strong> directamente en tus `layout.tsx` y `page.tsx` exportando un objeto `metadata`. Esto te permite generar automáticamente <strong className="text-white">Metatags</strong> esenciales como **&lt;title&gt;**, **&lt;meta name=&quot;description&quot;&gt;**, y Open Graph tags para compartir tu contenido de forma efectiva.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    La combinación de Tailwind para el diseño visual y la Metadata para el SEO te ayudará a construir una aplicación atractiva y descubrible.
                </p>
            </>
        ),
    }, // <-- Coma para separar del siguiente objeto
    {
        title: "Paso 5: Desplegando tu Aplicación al Mundo con Vercel",
        description: "El último paso: ¡comparte tu creación con el mundo de forma increíblemente sencilla!",
        gradientFrom: "from-teal-300",
        gradientTo: "to-sky-400",
        content: (
            <>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">¡Muestra Tu Creación!</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Next.js está diseñado para un despliegue sencillo, especialmente con <strong className="text-white">Vercel</strong> (la compañía detrás de Next.js).
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Simplemente conecta tu repositorio de GitHub a Vercel, y este detectará automáticamente que es un proyecto Next.js y lo desplegará. Las actualizaciones se harán automáticamente con cada `push` a tu rama principal.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                    ¡Demuestra que crear y desplegar tu primera app Next.js es posible "sin morir en el intento"!
                </p>
            </>
        ), // <-- Cierre correcto del content del Paso 5
    },
];

export const Steps = () => {
    return (
        <div className="max-w-4xl mt-16 mx-auto px-2 sm:p-6 lg:p-8"> {/* Contenedor más estrecho para mejor lectura */}

            {/* Sección de los 5 pasos: ahora bloques de contenido fluido */}
            <section className="space-y-16"> {/* Espacio generoso entre cada paso */}

                {guideStepsData.map((step, index) => (
                    <StepItem
                        key={index} // Una key simple, pero en un caso real usarías un ID único
                        title={step.title}
                        description={step.description}
                        gradientFrom={step.gradientFrom}
                        gradientTo={step.gradientTo}
                    >
                        {step.content}
                    </StepItem>
                ))}
            </section>
        </div>
    );
};