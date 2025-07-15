import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aprendiendo Next App",
  description: "Una app web dedicada a aprender sobre Next.js creada con amor por vercel",
  creator: "Jeremias Storm FullStack Developer",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <h3 className="text-xl mt-5 ms-5">    <span className="ms-5 underline hover:text-cyan-300 transition duration-150">
            <Link href={'/'}>Info Next</Link>
          </span>
            <span className="ms-5 underline hover:text-cyan-300 transition duration-150">
              <Link href={'/rutas'}>Rutas</Link>
            </span>
          </h3>

        </nav>
        {children}
      </body>
    </html>
  );
}
