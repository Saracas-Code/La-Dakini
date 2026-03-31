export type ServicioPrincipal = {
  slug: string
  titulo: string
  etiqueta: string
  categoria: string
  resumen: string
  img: string
  alt: string
  introduccion: string[]
  indicaciones: string[]
  protocolos: string[]
  importante: string
  nota: string
}

export type ServicioSecundario = {
  titulo: string
  imagen: string
  alt: string
}

export const serviciosPrincipales: ServicioPrincipal[] = [
  {
    slug: "programa-intensivo-de-purificacion",
    titulo: "Programa Intensivo de Purificación",
    etiqueta: "Servicio principal",
    categoria: "Práctica de transformación",
    resumen:
      "No todo viajero llega preparado para la apertura. Un proceso profundo de transformación diseñado para ablandar resistencias internas, suavizar la rigidez del carácter y abrir el camino hacia una práctica espiritual auténtica.",
    img: "/images/hero-meditation.jpg",
    alt: "Espacio de práctica contemplativa preparado para una sesión intensiva del retiro",
    introduccion: [
      "No todo viajero llega preparado para la apertura. Algunas energías necesitan primero ser ablandadas, drenadas, sacudidas o humildemente reordenadas.",
      "Nuestro programa intensivo de purificación está indicado para participantes con dificultad para soltar el control, resistencia devocional o una rigidez interna que aún necesita atravesar un proceso previo de reordenación.",
    ],
    indicaciones: [
      "exceso de pensamiento",
      "rigidez del carácter",
      "resistencia devocional",
      "densidad vibracional",
      "una marcada dificultad para soltar el control",
    ],
    protocolos: [
      "baños de agua helada al amanecer",
      "ceremonias de humo de larga exposición",
      "inmersión en silencio correctivo",
      "ayunos parciales de reajuste",
      "prácticas de postura sostenida",
      "caminatas contemplativas de resistencia",
      "recitación prolongada de mantras",
      "protocolos de desapego material y físico",
      "observación consciente del malhumor",
      "ejercicios de vaciamiento del orgullo",
    ],
    importante:
      "Toda purificación auténtica produce, al menos en una primera fase, cierta incomodidad del ego. Lo que la mente interpreta como castigo, el alma suele reconocerlo como oportunidad.",
    nota:
      "Los procesos de purificación pueden generar frío, cansancio, irritabilidad, llanto, resistencia, confusión, enfado con el guía o una súbita necesidad de abandonar el retiro. En la mayoría de los casos, estas reacciones indican que la práctica está funcionando.",
  },
]

export const serviciosSecundarios: ServicioSecundario[] = [
  {
    titulo: "Meditación Guiada",
    imagen: "/images/meditacion_guiada.jpeg",
    alt: "Meditación Guiada",
  },
  {
    titulo: "Yoga Tibetano",
    imagen: "/images/yoga_tibetano.jpeg",
    alt: "Yoga Tibetano",
  },
  {
    titulo: "Consultas privadas con el Lama",
    imagen: "/images/consultas_privadas.jpeg",
    alt: "Consultas privadas con el Lama",
  },
  {
    titulo: "Enseñanzas de Filosofía Budista",
    imagen: "/images/filosofia_budista.jpeg",
    alt: "Enseñanzas de Filosofía Budista",
  },
  {
    titulo: "Rituales tradicionales",
    imagen: "/images/gallery-3.jpg",
    alt: "Ceremonia religiosa con lámparas de mantequilla",
  },
  {
    titulo: "Retiros de 3 a 21 días",
    imagen: "/images/retiro_silencio.jpeg",
    alt: "Retiros de 3 a 21 días",
  },
]

export function getServicioPrincipalBySlug(
  slug: string,
): ServicioPrincipal | undefined {
  return serviciosPrincipales.find((servicio) => servicio.slug === slug)
}

export function getServicioPrincipalIndexBySlug(slug: string): number {
  return serviciosPrincipales.findIndex((servicio) => servicio.slug === slug)
}
