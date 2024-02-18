// importar metadata de nexts para la pagina
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Princing Page",
  description: "Princing Page Description",
  keywords: ["Princing", "Page", "Description"],
};

export default function PrincingPage() {
  return (
    <main className="text-center">
        <h2 className="text-7xl">Princing Page</h2>
        <p className="mt-4">This is the princing page</p>
    </main>
  )
}
