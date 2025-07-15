import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center">
                {children}
            </main>
        </div>
    );
}