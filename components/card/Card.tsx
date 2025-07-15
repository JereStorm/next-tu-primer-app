// components/Card.tsx
import type { ReactNode } from 'react';

// Definimos la interfaz para las props del componente Card
interface CardProps {
    title: string;
    description: string;
    children: ReactNode; // 'ReactNode' permite cualquier contenido JSX (elementos, strings, etc.)
}


const Card = ({ title, description, children }: CardProps) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-8 transform transition-all duration-150 ease-in-out hover:shadow-2xl flex flex-col justify-between animate-fade-in-up">
            <div>
                <h2 className="text-3xl font-bold mb-4 text-white leading-tight">
                    {title}
                </h2>
                <p className="text-md text-gray-400 mb-6 leading-relaxed">
                    {description}
                </p>
                <div className="space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;