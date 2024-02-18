// importar metadata de nexts para la pagina
import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Contact Page",
  description: "Contact Page Description",
  keywords: ["Contact", "Page", "Description"],
};

export default function ContactPage() {
  return (
    <main className="text-center">
        <h2 className="text-7xl">Contact Page</h2>
        <p className="mt-4">This is the contact page</p>
    </main>
  )
}
