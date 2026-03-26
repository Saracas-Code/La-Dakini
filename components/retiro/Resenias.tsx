import ReseniaDobleCapaCard, {
  type ReseniaDobleCapa,
} from "@/components/retiro/ReseniaDobleCapaCard"

const resenias: ReseniaDobleCapa[] = [
  {
    id: 1,
    nombre: "Marisa",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 8,
    textoPublico:
      "Creía que ya llegaba tarde a todo. Aquí me sentí vista sin tener que explicarme, y eso me cambió más de lo que esperaba.",
    textoOculto:
      "Lo que no digo es que me vine arriba cosa mala. O sea, yo allí con mis monjes, mis masajitos… y pensando: ‘¿y si no vuelvo?’. Porque en casa soy la de siempre, pero allí… allí era alguien. Y eso engancha más de lo que parece.",
  },
  {
    id: 2,
    nombre: "Ernesto",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 0,
    textoPublico:
      "Vine con escepticismo y salí con menos ruido mental. No fue cómodo todo el tiempo, pero sí honesto.",
    textoOculto:
      "Yo fui a desmontar el chiringuito y acabé jodido yo. Porque una cosa te digo: a mí no me molestaba el budismo… me molestaba que ella estuviera tan bien sin mí. Y eso no lo llevaba nada bien.",
  },
  {
    id: 3,
    nombre: "Pelayo",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 2,
    textoPublico:
      "Al principio iba perdidísimo con las prácticas, luego les cogí cariño. Me fui tranquilo y con ganas de volver.",
    textoOculto:
      "Yo estaba más pendiente de que me dejaran propina y de caer bien que de otra cosa. Traducía lo que sonaba bonito y ya. Hubo un momento que pensé: ‘no tengo ni idea de lo que está pasando aquí’, pero claro… tampoco lo iba a decir.",
  },
  {
    id: 4,
    nombre: "Carla",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 2,
    textoPublico:
      "No me gustan los discursos vacíos y aquí no los encontré. Todo es bastante concreto y, para sorpresa mía, funciona.",
    textoOculto:
      "Había contenido por todos lados, una fantasía. Pero también te digo: cuando la cosa se puso rara de verdad, yo dejé de grabar. Porque ahí ya no sabía si estaba viviendo algo o explotándolo… y no me gustó mucho lo que vi.",
  },
  {
    id: 5,
    nombre: "Luis",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 3,
    textoPublico:
      "No tuve grandes revelaciones, tuve algo mejor: claridad sostenida. Desde entonces vivo con menos prisa por entenderlo todo.",
    textoOculto:
      "Yo iba buscando fe o algo así… pero me pillé comparándome con los demás, a ver quién estaba ‘más iluminado’. Y pensé: ‘muy bien no debo estar si hasta aquí vengo a competir’.",
  },
  {
    id: 6,
    nombre: "Rebeca y Alba",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 3,
    textoPublico:
      "Vinimos juntas por probar y acabamos agradeciendo cada día. Hubo risas, silencios raros y mucha verdad.",
    textoOculto:
      "Nos reímos mucho, sí… pero también evitamos hablar de nosotras de verdad. Porque una cosa es venir de viaje espiritual y otra ya decir en voz alta lo que nos pasa. Y ahí… nos callamos bastante.",
  },
  {
    id: 7,
    nombre: "María y Pablo",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 2,
    textoPublico:
      "Compartir el silencio nos acercó de una forma muy simple. Salimos más atentos el uno al otro.",
    textoOculto:
      "Allí todo era súper bonito, sí… pero también porque no había vida real. Ni curro, ni facturas, ni nada. A ver cómo de unidos estamos cuando volvamos a casa y nos toque lo de siempre.",
  },
  {
    id: 8,
    nombre: "Oliver",
    fotoPerfil: "/placeholder-user.jpg",
    estrellasPublicas: 5,
    estrellasOcultas: 2,
    textoPublico:
      "El retiro está muy bien llevado y no necesita adornos. Te coloca frente a ti mismo, y eso ya es mucho.",
    textoOculto:
      "Yo ese rollo me lo sé: cómo hablar, cómo sentarme, cómo parecer presente… todo. Pero hubo un momento que pensé: ‘vale, muy bien el personaje… ¿pero yo dónde estoy aquí?’ Y eso ya no me hizo tanta gracia.",
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
