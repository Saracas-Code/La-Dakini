const servicios = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 8v6l4 2" />
        <path d="M10 5.5C8 7 6.5 9.5 6.5 12" />
        <path d="M18 5.5C20 7 21.5 9.5 21.5 12" />
      </svg>
    ),
    titulo: "Meditación Guiada",
    descripcion: "Sesiones diarias de meditación con instrucción personalizada adaptada a todos los niveles.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 6c-3.5 0-6 3-6 8s2.5 8 6 8 6-3 6-8-2.5-8-6-8z" />
        <path d="M8 14c0-2 1-4 3-5" />
        <path d="M20 14c0-2-1-4-3-5" />
        <path d="M14 6V4" />
        <path d="M11 4.5 14 6l3-1.5" />
      </svg>
    ),
    titulo: "Yoga Tibetano",
    descripcion: "Práctica del Yantra Yoga según la tradición Dzogchen, integrando movimiento y respiración.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="14" cy="9" r="3.5" />
        <path d="M7 22c0-5 3.1-8 7-8s7 3 7 8" />
        <path d="M4 15.5h4" />
        <path d="M20 15.5h4" />
      </svg>
    ),
    titulo: "Consultas Privadas",
    descripcion: "Entrevistas personales con el Lama para orientación espiritual y resolución de dudas del Dharma.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="5" width="18" height="14" rx="2" />
        <path d="M5 10h18" />
        <path d="M10 5v5" />
        <path d="M18 5v5" />
        <path d="M9 14.5h4" />
        <path d="M9 17.5h6" />
      </svg>
    ),
    titulo: "Filosofía Budista",
    descripcion: "Talleres semanales sobre los textos fundamentales del budismo tibetano y la lógica del Dharma.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4 L16.5 10 L23 10.5 L18.5 15 L20 21.5 L14 18 L8 21.5 L9.5 15 L5 10.5 L11.5 10 Z" />
      </svg>
    ),
    titulo: "Prácticas Rituales",
    descripcion: "Iniciaciones, pujas y prácticas del Vajrayana en un ambiente sagrado y tradicional.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12a9 9 0 0018 0" />
        <path d="M14 3v18" />
        <path d="M5 12c0-5 4-9 9-9" />
        <path d="M23 12c0-5-4-9-9-9" />
      </svg>
    ),
    titulo: "Retiros en Silencio",
    descripcion: "Retiros intensivos en silencio de 3 a 21 días para una práctica meditativa profunda.",
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-[#FFFFFF] px-6 py-16"
      aria-labelledby="servicios-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Lo Que Ofrecemos
        </p>
        <h2
          id="servicios-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Nuestras Ofrendas
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        <div className="flex flex-col gap-4">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="bg-[#FBF3DC] rounded-lg p-4 flex items-start gap-4 border border-[#E8D8C4]"
            >
              <div className="text-[#A72F27] shrink-0">{s.icon}</div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-[#5E2A29] text-[0.95rem] font-semibold leading-snug">
                  {s.titulo}
                </h3>
                <p className="font-sans text-[#724E48] text-[0.8rem] leading-relaxed">
                  {s.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
