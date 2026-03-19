import Image from "next/image"

const noticias = [
  {
    img: "/images/news-1.jpg",
    alt: "Sesión de enseñanza del Dharma en el monasterio",
    titulo: "Nuevas Enseñanzas del Dharma — Primavera 2025",
    fecha: "15 Marzo, 2025",
    extracto:
      "El Lama impartirá un ciclo de enseñanzas sobre el Mahamudra y la naturaleza de la mente durante el mes de abril.",
  },
  {
    img: "/images/news-2.jpg",
    alt: "Ceremonia de mandala de arena tibetano",
    titulo: "Creación del Gran Mandala de Arena",
    fecha: "2 Febrero, 2025",
    extracto:
      "Nuestros monjes crearán un exquisito mandala de arena Kalachakra abierto al público durante toda la semana.",
  },
  {
    img: "/images/news-3.jpg",
    alt: "Participantes en meditación caminando en el bosque",
    titulo: "Retiro de Meditación en Silencio — Verano",
    fecha: "18 Enero, 2025",
    extracto:
      "Las inscripciones para el retiro intensivo de verano en silencio de siete días ya están abiertas. Plazas muy limitadas.",
  },
]

export default function Actualidad() {
  return (
    <section
      id="actualidad"
      className="bg-[#FBF3DC] px-6 py-16"
      aria-labelledby="actualidad-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Noticias
        </p>
        <h2
          id="actualidad-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Actualidad del Monasterio
        </h2>
        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        <ul className="flex flex-col gap-5">
          {noticias.map((noticia, i) => (
            <li key={i}>
              <article className="flex gap-4 bg-[#FFFFFF] rounded-lg overflow-hidden shadow-sm border border-[#E8D8C4]">
                {/* Thumbnail */}
                <div className="relative w-24 shrink-0">
                  <Image
                    src={noticia.img}
                    alt={noticia.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                {/* Text */}
                <div className="py-4 pr-4 flex flex-col justify-center gap-1.5">
                  <time className="font-sans text-[10px] text-[#A72F27] tracking-wider uppercase">
                    {noticia.fecha}
                  </time>
                  <h3 className="font-serif text-[#5E2A29] text-[0.85rem] font-semibold leading-snug">
                    {noticia.titulo}
                  </h3>
                  <p className="font-sans text-[#724E48] text-[0.78rem] leading-relaxed line-clamp-2">
                    {noticia.extracto}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
