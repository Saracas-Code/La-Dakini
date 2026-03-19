"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#lama", label: "Nuestro Lama" },
  { href: "#dakini", label: "La Dakini" },
  { href: "#galeria", label: "Galería" },
  { href: "#actualidad", label: "Actualidad" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resenias", label: "Reseñas" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-14 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#E8D8C4]">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          {/* Lotus SVG icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 22C14 22 6 17 6 11C6 8.2 9 6 12 7C12.8 7.3 13.5 7.8 14 8.5C14.5 7.8 15.2 7.3 16 7C19 6 22 8.2 22 11C22 17 14 22 14 22Z" stroke="#5E2A29" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M14 22C14 22 10 15 10 10C10 8 11.5 6.5 14 6.5C16.5 6.5 18 8 18 10C18 15 14 22 14 22Z" stroke="#5E2A29" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M14 22V8.5" stroke="#5E2A29" strokeWidth="1" strokeLinecap="round"/>
            <path d="M8 23.5H20" stroke="#5E2A29" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-serif text-[#5E2A29] text-[15px] font-semibold leading-tight tracking-wide">
            Centro Budista<br />
            <span className="text-[11px] font-normal tracking-widest text-[#724E48]">DHARMA KARUNA</span>
          </span>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center text-[#5E2A29] rounded-full hover:bg-[#FBF3DC] transition-colors"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Full-screen mobile nav */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FBF3DC] flex flex-col pt-20 px-8">
          <nav aria-label="Navegación principal">
            <ul className="flex flex-col gap-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2.5 text-[16px] font-serif text-[#5E2A29] border-b border-[#E8D8C4] hover:text-[#A72F27] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pb-10">
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#A72F27] text-white font-sans text-sm tracking-widest uppercase py-4 rounded-md hover:bg-[#8B2520] transition-colors"
            >
              Reservar estancia
            </a>
          </div>
        </div>
      )}
    </>
  )
}
