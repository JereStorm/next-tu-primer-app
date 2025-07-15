// app/components/StepItem.tsx
import { ReactNode } from 'react';

// Definimos la interfaz para las props de StepItem
interface StepItemProps {
    title: string;
    description: string;
    gradientFrom: string; // Para el color de inicio del gradiente del título
    gradientTo: string;   // Para el color final del gradiente del título
    children: ReactNode;  // Contenido detallado del paso
}

export const StepItem = ({
    title,
    description,
    gradientFrom,
    gradientTo,
    children,
}: StepItemProps) => {
    return (
        <div className="bg-card border border-gray-700 rounded-xl p-8 shadow-xl animate-fade-in-up">
            <h2
                className={`text-4xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo} mb-6 leading-tight`}
            >
                {title}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
                {description}
            </p>
            {/* El contenido detallado de cada paso va aquí */}
            {children}
        </div>
    );
};