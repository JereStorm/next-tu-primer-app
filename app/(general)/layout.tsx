export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <main className="flex flex-col items-center">
                {children}
            </main>
        </div>
    );
}