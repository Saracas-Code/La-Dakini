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
  descripcion: string
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
    descripcion:
      "Sesiones diarias de meditación con acompañamiento personalizado.",
    imagen: "/images/meditacion_guiada.jpeg",
    alt: "Meditación Guiada",
  },
  {
    titulo: "Yoga Tibetano",
    descripcion:
      "Práctica de movimiento consciente inspirada en el Yantra Yoga.",
    imagen: "/images/yoga_tibetano.jpeg",
    alt: "Yoga Tibetano",
  },
  {
    titulo: "Consultas Privadas",
    descripcion:
      "Encuentros individuales con el Lama para recibir orientación espiritual.",
    imagen: "/images/consultas_privadas.jpeg",
    alt: "Consultas Privadas",
  },
  {
    titulo: "Filosofía Budista",
    descripcion:
      "Espacios de contemplación sobre los principios esenciales del budismo tibetano.",
    imagen: "/images/filosofia_budista.jpeg",
    alt: "Filosofía Budista",
  },
  {
    titulo: "Prácticas Rituales",
    descripcion:
      "Ceremonias tradicionales, cantos, ofrendas y prácticas devocionales.",
    imagen: "/images/gallery-3.jpg",
    alt: "Prácticas Rituales",
  },
  {
    titulo: "Retiros en Silencio",
    descripcion:
      "Experiencias de 3 a 21 días para profundizar en la observación de la mente.",
    imagen: "/images/retiro_silencio.jpeg",
    alt: "Retiros en Silencio",
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
