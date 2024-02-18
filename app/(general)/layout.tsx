import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main className="grid place-items-center h-96">
                <h1 className="text-indigo-700 font-bold text-4xl">Hola Mundo</h1>
                {children}
            </main>
            <Footer />
        </>

    );
}
