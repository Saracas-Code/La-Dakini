export type Noticia = {
  slug: string
  img: string
  alt: string
  titulo: string
  fecha: string
  extracto: string
  contenido: string[]
}

export const noticias: Noticia[] = [
  {
    slug: "ensenanzas-dharma-primavera-2025",
    img: "/images/news-1.jpg",
    alt: "Sesion de ensenanza del Dharma en el monasterio",
    titulo: "Nuevas Ensenanzas del Dharma - Primavera 2025",
    fecha: "15 Marzo, 2025",
    extracto:
      "El Lama impartira un ciclo de ensenanzas sobre el Mahamudra y la naturaleza de la mente durante el mes de abril.",
    contenido: [
      "Durante el mes de abril celebraremos un nuevo ciclo de ensenanzas abierto a practicantes de distintos niveles. El programa estara centrado en la practica de Mahamudra y en el reconocimiento directo de la naturaleza de la mente.",
      "Cada encuentro incluira una sesion de exposicion, meditacion guiada y un espacio final para preguntas. El objetivo es que las personas asistentes puedan integrar la practica en su vida diaria, mas alla del retiro puntual.",
      "La participacion requiere inscripcion previa para organizar el aforo del templo y los materiales de estudio. En los proximos dias compartiremos horarios detallados y recomendaciones para preparar la practica personal antes del inicio.",
    ],
  },
  {
    slug: "gran-mandala-arena",
    img: "/images/news-2.jpg",
    alt: "Ceremonia de mandala de arena tibetano",
    titulo: "Creacion del Gran Mandala de Arena",
    fecha: "2 Febrero, 2025",
    extracto:
      "Nuestros monjes crearan un exquisito mandala de arena Kalachakra abierto al publico durante toda la semana.",
    contenido: [
      "La comunidad monastica iniciara la construccion de un mandala de arena Kalachakra como practica de contemplacion y ofrenda para el bienestar de todos los seres. El proceso podra visitarse cada dia en horario continuo.",
      "Ademas de observar el trabajo en directo, se ofreceran breves explicaciones sobre el simbolismo de cada fase y sobre la tradicion que acompana este tipo de ceremonias. Es una oportunidad unica para acercarse a esta practica viva.",
      "El cierre se realizara con la disolucion ritual del mandala, recordando la impermanencia y la compasion universal. Invitamos a quienes asistan a participar con una actitud de silencio respetuoso y presencia consciente.",
    ],
  },
  {
    slug: "retiro-silencio-verano",
    img: "/images/news-3.jpg",
    alt: "Participantes en meditacion caminando en el bosque",
    titulo: "Retiro de Meditacion en Silencio - Verano",
    fecha: "18 Enero, 2025",
    extracto:
      "Las inscripciones para el retiro intensivo de verano en silencio de siete dias ya estan abiertas. Plazas muy limitadas.",
    contenido: [
      "Ya esta abierto el periodo de inscripcion para el retiro intensivo de verano en formato de silencio completo. Durante siete dias combinaremos meditacion sentada, meditacion caminando y periodos de descanso consciente.",
      "El retiro esta pensado para quienes desean profundizar en estabilidad mental, claridad y observacion compasiva. Se recomienda llegar con una practica basica estable, aunque el equipo guiara cada jornada con instrucciones precisas.",
      "Las plazas son limitadas para preservar la calidad del acompanamiento y el entorno de recogimiento. La inscripcion incluye alojamiento, manutencion y una sesion preparatoria online para resolver dudas practicas antes de la llegada.",
    ],
  },
]

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return noticias.find((noticia) => noticia.slug === slug)
}

export function getNoticiaIndexBySlug(slug: string): number {
  return noticias.findIndex((noticia) => noticia.slug === slug)
}
