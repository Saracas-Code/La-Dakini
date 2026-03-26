export type Noticia = {
  slug: string
  img: string
  alt: string
  titulo: string
  fecha: string
  ubicacion?: string
  tipo?: string
  destacada?: boolean
  extracto: string
  contenido: string[]
}

export const noticias: Noticia[] = [
  {
    slug: "despertar-proceso-colectivo",
    img: "/images/noticia5.jpeg",
    alt: "Participantes compartiendo su experiencia al cierre del retiro",
    titulo: "Experiencia compartida: el despertar como proceso colectivo",
    fecha: "22 de junio de 2026",
    ubicacion: "Valle de Nyima",
    extracto:
      "El retiro ha concluido tras varios días de profunda intensidad emocional y espiritual entre los participantes.",
    contenido: [
      "El retiro ha concluido tras varios días de profunda intensidad emocional y espiritual entre los participantes. Diversos asistentes han descrito la experiencia como un momento de apertura inesperada, en el que han podido expresar aspectos personales que permanecían ocultos hasta ahora. El proceso ha generado un clima de escucha, vulnerabilidad y conexión poco habitual. Desde el monasterio se recuerda que el despertar no es un estado permanente, sino una posibilidad que cada persona debe integrar en su vida cotidiana.",
    ],
  },
  {
    slug: "afluencia-inesperada-de-visitantes",
    img: "/images/noticia4.jpeg",
    alt: "Visitantes llegando al monasterio durante las jornadas abiertas",
    titulo: "Afluencia inesperada de visitantes tras los últimos acontecimientos",
    fecha: "19 de junio de 2026",
    ubicacion: "Valle de Nyima",
    extracto:
      "En los últimos días, el Monasterio Shambala Norbu ha registrado un aumento significativo de visitantes.",
    contenido: [
      "En los últimos días, el Monasterio Shambala Norbu ha registrado un aumento significativo de visitantes interesados en conocer de cerca los acontecimientos recientes. Con el fin de preservar la integridad del retiro, se han habilitado nuevas franjas de acceso y se recomienda a los interesados reservar con antelación. El Venerable Lama Dorje Norbu ha subrayado la importancia de sostener el equilibrio entre apertura y recogimiento: \"Cuando algo despierta interés, también despierta proyección. Nuestra labor es sostener ambos sin perder el centro.\"",
    ],
  },
  {
    slug: "practicas-intensivas-de-purificacion",
    img: "/images/noticia3.jpeg",
    alt: "Sesión individual de acompañamiento durante el retiro",
    titulo: "Un participante es sometido a prácticas intensivas de purificación",
    fecha: "18 de junio de 2026",
    ubicacion: "Monasterio Shambala Norbu",
    tipo: "Comunicado interno",
    extracto:
      "Durante los primeros días del retiro, uno de los participantes ha requerido un proceso intensivo de purificación.",
    contenido: [
      "Durante los primeros días del retiro, uno de los participantes ha sido identificado por el Lama como portador de una energía especialmente densa, lo que ha requerido la aplicación de prácticas intensivas de purificación. Estas incluyen sesiones prolongadas de silencio, inmersión en agua fría, trabajo corporal y acompañamiento cercano por parte del equipo del monasterio. Desde la dirección espiritual se recuerda que estos procesos forman parte del camino y que cada experiencia, por incómoda que resulte, es una oportunidad para disolver resistencias y avanzar hacia una comprensión más profunda.",
    ],
  },
  {
    slug: "posible-manifestacion-de-la-dakini",
    img: "/images/noticia2.jpeg",
    alt: "Comunidad reunida en el templo principal durante un comunicado",
    titulo: "Posible manifestación de la dakini en Shambala Norbu",
    fecha: "17 de junio de 2026",
    ubicacion: "Monasterio Shambala Norbu",
    tipo: "Comunicado extraordinario",
    destacada: true,
    extracto:
      "La comunidad monástica ha sido testigo de una experiencia espiritual de carácter excepcional.",
    contenido: [
      "En los últimos días, la comunidad del Monasterio Shambala Norbu ha sido testigo de una experiencia espiritual de carácter excepcional. Una de las participantes del retiro ha sido reconocida por varios miembros de la comunidad monástica como portadora de signos y cualidades que coinciden de forma sorprendente con las antiguas representaciones de la Dakini conservadas en los murales y textos del monasterio. La coincidencia ha despertado una profunda conmoción, así como un clima de recogimiento y reverencia entre los presentes. Desde la dirección espiritual del centro, el Venerable Lama Dorje Norbu ha invitado a acoger este acontecimiento con humildad y sin precipitación, recordando que hay experiencias que no deben ser comprendidas de inmediato, sino sostenidas con presencia. Por respeto al proceso y a la persona implicada, el monasterio mantendrá la máxima discreción en torno a los próximos desarrollos. \"No todo lo sagrado llega envuelto en certeza. A veces aparece, simplemente, y nos pide estar a la altura de su presencia.\" - Lama Dorje Norbu",
    ],
  },
  {
    slug: "nuevo-grupo-internacional-llega-al-monasterio",
    img: "/images/noticia1.jpeg",
    alt: "Grupo internacional llegando a las instalaciones del monasterio",
    titulo: "Nuevo grupo internacional de retiro llega al monasterio",
    fecha: "12 de junio de 2026",
    ubicacion: "Valle de Nyima",
    extracto:
      "El Monasterio Shambala Norbu ha recibido a un nuevo grupo internacional en busca de silencio y transformación personal.",
    contenido: [
      "El Monasterio Shambala Norbu ha recibido esta semana a un nuevo grupo de practicantes internacionales procedentes de distintos puntos de Europa, en busca de silencio, claridad y transformación personal. Entre los asistentes se encuentran perfiles diversos que reflejan la amplitud del camino espiritual contemporáneo: desde profesionales en transición vital hasta parejas que desean revisar su vínculo en un entorno de recogimiento. Como es habitual, el retiro se desarrollará bajo la guía del Venerable Lama Dorje Norbu, combinando prácticas de meditación, silencio y acompañamiento individual.",
    ],
  },
]

export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return noticias.find((noticia) => noticia.slug === slug)
}

export function getNoticiaIndexBySlug(slug: string): number {
  return noticias.findIndex((noticia) => noticia.slug === slug)
}
