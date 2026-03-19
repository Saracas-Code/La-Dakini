export default function Footer() {
  return (
    <footer className="bg-[#5E2A29] px-6 py-10 text-center">
      <div className="max-w-sm mx-auto flex flex-col items-center gap-5">
        {/* Lotus symbol */}
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M14 22C14 22 6 17 6 11C6 8.2 9 6 12 7C12.8 7.3 13.5 7.8 14 8.5C14.5 7.8 15.2 7.3 16 7C19 6 22 8.2 22 11C22 17 14 22 14 22Z" stroke="#FBF3DC" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M14 22C14 22 10 15 10 10C10 8 11.5 6.5 14 6.5C16.5 6.5 18 8 18 10C18 15 14 22 14 22Z" stroke="#FBF3DC" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M14 22V8.5" stroke="#FBF3DC" strokeWidth="1" strokeLinecap="round"/>
          <path d="M8 23.5H20" stroke="#FBF3DC" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        <div>
          <p className="font-serif text-[#FBF3DC] text-lg font-semibold">Centro Dharma Karuna</p>
          <p className="font-sans text-[#FBF3DC]/60 text-[11px] tracking-widest uppercase mt-1">
            Retiros Espirituales Budistas
          </p>
        </div>

        <nav aria-label="Navegación del pie de página">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["Nosotros", "Lama", "Dakini", "Galería", "Actualidad", "Servicios", "Contacto"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-[#FBF3DC]/70 text-[11px] tracking-wider hover:text-[#FBF3DC] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full h-px bg-[#FBF3DC]/20" aria-hidden="true" />

        <p className="font-sans text-[#FBF3DC]/50 text-[10px] tracking-wide">
          © 2025 Centro Dharma Karuna · Todos los derechos reservados
        </p>
        <p className="font-serif text-[#FBF3DC]/40 text-[11px] italic">
          Que todos los seres sean felices
        </p>
      </div>
    </footer>
  )
}
