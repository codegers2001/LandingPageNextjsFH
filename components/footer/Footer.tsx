import React from 'react'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white text-center">
      {/* muestrame el año y con el texto de derechos reservados */}
      <p>© {new Date().getFullYear()} Todos los Derechos Reservados - CodegersTec</p>
    </footer>
  )
}
