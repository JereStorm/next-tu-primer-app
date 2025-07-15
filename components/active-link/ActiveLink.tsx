'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();

    return (
        <Link className={`hover:underline hover:text-blue-400 m-2 transition-all ${(pathName === path) && 'text-cyan-600'}`} href={path}>
            {text}
        </Link >
    );
};