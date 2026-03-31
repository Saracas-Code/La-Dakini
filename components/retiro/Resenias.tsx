import ReseniaDobleCapaCard, {
  type ReseniaDobleCapa,
} from "@/components/retiro/ReseniaDobleCapaCard"

const resenias: ReseniaDobleCapa[] = [
  {
    id: 1,
    nombre: "Marisa",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 10,
    textoPublico:
      "Muy recomendable. Te cuidan mejor que en casa.",
    textoOculto:
      "Verás que ahora soy mundialmente famosa.",
  },
  {
    id: 2,
    nombre: "Ernesto",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 3,
    estrellasOcultas: 0,
    textoPublico:
      "Una experiencia… inolvidable.",
    textoOculto:
      "Irse todos a la mierda.",
  },
  {
    id: 3,
    nombre: "Pelayo",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 3,
    textoPublico:
      "Un espacio dónde todos nos entendemos, como si tiene que ser por señas. ¡Amo mi trabajo! ¡Amo el retiro!",
    textoOculto:
      "Yo me saqué un B1 de chino mandarín por una web baratísima y me encuentro con que aquí se habla en tibetano y en tontería mística. Aquí la gente habla de energía, de vibración, de soltar… y yo asiento todo el rato como si lo pillara. Ayer traduje ‘abre tu canal interno’ como ‘tienes que ir más al baño’, que no sé si tiene algo que ver, pero coló. Aun así, sitio precioso, ambiente increíble y gente muy maja, que siempre ayuda. Estoy bien. Creo.",
  },
  {
    id: 4,
    nombre: "Carla",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 4,
    textoPublico:
      "Un lugar mágico para reconectar y volver renovada. Me noto hasta el cutis más depurado.",
    textoOculto:
      "No sabéis lo guay que me hubiese quedado el vlog para youtube si esta gente me hubiese dejado sacar el móvil más. Esto es contenido puro. O sea, hay momentos aquí que si no los grabas es un crimen. La luz, los monjes, la señora esa que ahora es como una diosa manchega… es que es perfecto. También os digo: hay mucho loco espiritual, pero del interesante, del que te da engagement. Yo os voy grabando todo de estrangis, porque por mis followers lo que sea. OS SUPER AMO.",
  },
  {
    id: 5,
    nombre: "Luis",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 4,
    estrellasOcultas: 5,
    textoPublico:
      "Puede que este lugar sea mi último recurso para mi salvación.",
    textoOculto:
      "Hay momentos en la vida en los que pierdes el rumbo y el sentido de tu vida. Que necesitas deconstruirte para volver más fuerte y yo necesitaba salir de mi zona de confort para salir de este agujero negro. He conocido a una mujer llamada Marisa con una sabiduría excepcional y que me entiende… No sé si he recuperado la fe, pero al menos ya no me da tanta vergüenza no tenerla.",
  },
  {
    id: 6,
    nombre: "Rebeca",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 5,
    textoPublico:
      "Estoy descubriendo lo que es la meditación y me flipa!",
    textoOculto:
      "Yo venía con expectativas muy concretas y ninguna incluía encontrarme a mí misma, pero oye… ha pasado. Aquí no hay bares, no hay hombres con pelo y aún así te acabas poniendo cachonda emocionalmente, que es peor. Mucho tiempo para pensar, mucho silencio… y Alba mirándome raro. No sé. Algo se ha movido. Y no ha sido solo la energía.",
  },
  {
    id: 7,
    nombre: "Alba",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 3,
    textoPublico:
      "Un viaje hacia dentro… aunque dé miedo",
    textoOculto:
      "A la mierda con todo. ¡Yo ya no quiero más hombres, yo la quiero a ella y de esta no se me va a escapar!",
  },
  {
    id: 8,
    nombre: "María",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 7,
    textoPublico:
      "Mejor que la luna de miel!",
    textoOculto:
      "QUE LE QUIERO, LE QUIERO, LE QUIERO Y QUIERO GRITARLO POR TODO EL TIBET!!!!! ES EL HOMBRE DE MI VIDAAAA!! Tengo una sorpresita que le va a hacer super feliz. ",
  },
  {
    id: 9,
    nombre: "Pablo",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 4,
    textoPublico:
      "Muy recomendable para reconectar con lo esencial.",
    textoOculto:
      "María está mega feliz… pero igual estaría bien tener alguna clasecilla por separado… Aún así el retiro genial y nosotros genial también. Todo genial.",
  },
  {
    id: 10,
    nombre: "Oliver",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 4,
    estrellasOcultas: 5,
    textoPublico:
      "Un entorno perfecto para expandir tu conocimiento y abrir tu mente. Buenas clases de yoga.",
    textoOculto:
      "Esto no es un retiro, esto es un portal. Aquí se está moviendo una energía muy concreta, muy elevada, muy sensual incluso. Yo ya venía trabajado de casa, pero aquí he encontrado un nivel de apertura bastante interesante. Hay personas con mucho potencial, otras más cerradas… y alguna que otra que está claramente lista para evolucionar conmigo. No voy a señalar, pero se sabe.",
  },
]

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
        {resenias.map((resenia) => (
          <ReseniaDobleCapaCard key={resenia.id} resenia={resenia} />
        ))}
      </div>
    </section>
  )
}
