import Image from "next/image"

export default function SobreNosotros() {
  return (
    <section
      id="nosotros"
      className="bg-[#FBF3DC] px-6 py-16"
      aria-labelledby="nosotros-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Sobre Nosotros
        </p>

        <h2
          id="nosotros-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          Nuestra Comunidad
        </h2>

        <div className="w-8 h-[2px] bg-[#A72F27] mb-6" aria-hidden="true" />

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-5">
          Somos una comunidad dedicada a la práctica y enseñanza del Dharma budista tibetano. Nuestro centro ofrece un espacio sagrado de tranquilidad y contemplación, donde practicantes de todos los niveles pueden profundizar su práctica espiritual.
        </p>

        {/* Embedded photo */}
        <div className="relative rounded-lg overflow-hidden mb-5 shadow-sm">
          <Image
            src="/images/group-meditation.jpg"
            alt="Comunidad en meditación grupal en el monasterio"
            width={600}
            height={380}
            className="w-full object-cover"
            sizes="(max-width: 640px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-[#5E2A29]/10 rounded-lg" />
        </div>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed">
          Fundado en la tradición Vajrayana, nuestro centro acoge a buscadores espirituales en retiros de meditación, enseñanzas del Dharma y prácticas contemplativas que transforman el corazón y la mente.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <div className="w-px h-8 bg-[#A72F27]/40" aria-hidden="true" />
          <blockquote className="font-serif text-[#5E2A29] text-sm italic leading-relaxed">
            "La paz interior es el camino y el destino."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
