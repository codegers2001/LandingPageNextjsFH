// importar metadata de nexts para la pagina
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "About Page",
  description: "About Page Description",
  keywords: ["About", "Page", "Description"],
};

export default function AboutPage() {
  return (
    <main className="text-center">
        <h2 className="text-7xl">About Page</h2>
        <p className="mt-4">This is the about page</p>
    </main>
  )
}
