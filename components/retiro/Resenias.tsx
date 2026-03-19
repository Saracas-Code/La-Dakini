const resenias = [
  {
    id: 1,
    nombre: "María García",
    origen: "Madrid, España",
    fecha: "Enero 2025",
    estrellas: 5,
    texto:
      "Un lugar de transformación genuina. La enseñanza del Lama y la atmósfera del centro me permitieron conectar con una paz que no había sentido antes. Volveré sin duda.",
    retiro: "Retiro de Meditación Shamatha",
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    origen: "Buenos Aires, Argentina",
    fecha: "Noviembre 2024",
    estrellas: 5,
    texto:
      "El retiro de Dakini fue una experiencia que no tengo palabras para describir. La calidad de las enseñanzas, el entorno y la calidez de la comunidad son excepcionales.",
    retiro: "Retiro Dakini",
  },
  {
    id: 3,
    nombre: "Ana Ferreira",
    origen: "Lisboa, Portugal",
    fecha: "Octubre 2024",
    estrellas: 5,
    texto:
      "Vine con el corazón cargado y me marché con una ligereza que aún mantengo meses después. Las prácticas diarias y la guía espiritual son de una profundidad extraordinaria.",
    retiro: "Retiro de Fin de Semana",
  },
  {
    id: 4,
    nombre: "Jordi Puig",
    origen: "Barcelona, España",
    fecha: "Septiembre 2024",
    estrellas: 5,
    texto:
      "Ya llevo tres años visitando el centro y cada retiro es una nueva capa de comprensión. La tradición se transmite con pureza y rigor, y a la vez con una enorme accesibilidad.",
    retiro: "Curso de Tibetano",
  },
  {
    id: 5,
    nombre: "Sofía Ruiz",
    origen: "Ciudad de México, México",
    fecha: "Agosto 2024",
    estrellas: 5,
    texto:
      "Nunca había estado en un retiro budista y me recibieron con una hospitalidad increíble. Las instrucciones son claras para principiantes y a la vez profundas para los más avanzados.",
    retiro: "Introducción al Budismo",
  },
  {
    id: 6,
    nombre: "Tomás Iglesias",
    origen: "Sevilla, España",
    fecha: "Julio 2024",
    estrellas: 5,
    texto:
      "El silencio del lugar, la belleza de las prácticas y la sabiduría del Lama se combinan para crear algo difícil de encontrar en el mundo moderno. Un tesoro.",
    retiro: "Retiro de Verano",
  },
]

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#A72F27" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7 1L8.545 5.09H13L9.5 7.6L10.91 12L7 9.32L3.09 12L4.5 7.6L1 5.09H5.455L7 1Z" />
    </svg>
  )
}

export default function Resenias() {
  return (
    <section id="resenias" className="py-16 px-5 bg-[#FFFFFF]">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A72F27] font-sans mb-2">
          Voces de nuestra comunidad
        </p>
        <h2 className="font-serif text-[28px] text-[#5E2A29] leading-snug text-balance">
          Reseñas
        </h2>
        <div className="w-8 h-px bg-[#A72F27] mx-auto mt-4" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {resenias.map((r) => (
          <article
            key={r.id}
            className="bg-[#FBF3DC] rounded-xl p-5 flex flex-col gap-3"
          >
            {/* Stars */}
            <div className="flex gap-0.5" aria-label={`${r.estrellas} de 5 estrellas`}>
              {Array.from({ length: r.estrellas }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-[15px] text-[#5E2A29] leading-relaxed">
              &ldquo;{r.texto}&rdquo;
            </blockquote>

            {/* Meta */}
            <div className="flex items-end justify-between gap-2 pt-1 border-t border-[#E8D8C4]">
              <div>
                <p className="font-sans text-[13px] font-semibold text-[#5E2A29]">{r.nombre}</p>
                <p className="font-sans text-[11px] text-[#724E48]">{r.origen}</p>
              </div>
              <div className="text-right">
                <p className="font-sans text-[11px] text-[#A72F27] italic">{r.retiro}</p>
                <p className="font-sans text-[10px] text-[#724E48]">{r.fecha}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
