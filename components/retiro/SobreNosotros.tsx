import Image from "next/image"

export default function SobreNosotros() {
  return (
    <section
      id="nosotros"
      className="bg-[#FBF3DC] px-6 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="nosotros-title"
    >
      <div className="mx-auto max-w-sm md:max-w-2xl lg:max-w-6xl">
        <div className="lg:max-w-xl">
          {/* Section label */}
          <p className="mb-3 font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27]">
            Sobre Nosotros
          </p>

          <h2
            id="nosotros-title"
            className="mb-5 font-serif text-2xl font-semibold leading-snug text-[#A72F27] text-balance md:text-3xl"
          >
            Nuestra Comunidad
          </h2>

          <div className="mb-6 h-[2px] w-8 bg-[#A72F27]" aria-hidden="true" />
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,1.05fr)] lg:items-center lg:gap-12 xl:gap-16">
          <p className="mb-5 font-sans text-[0.9rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
            Somos una comunidad dedicada a la práctica y enseñanza del Dharma budista tibetano. Nuestro centro ofrece un espacio sagrado de tranquilidad y contemplación, donde practicantes de todos los niveles pueden profundizar su práctica espiritual.
          </p>

          {/* Embedded photo */}
          <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-lg shadow-sm lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:aspect-[5/4]">
            <Image
              src="/images/group-meditation.jpg"
              alt="Comunidad en meditación grupal en el monasterio"
              width={600}
              height={380}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 48vw"
            />
            <div className="absolute inset-0 rounded-lg bg-[#5E2A29]/10" />
          </div>

          <div>
            <p className="font-sans text-[0.9rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
              Fundado en la tradición Vajrayana, nuestro centro acoge a buscadores espirituales en retiros de meditación, enseñanzas del Dharma y prácticas contemplativas que transforman el corazón y la mente.
            </p>

            <div className="mt-8 flex items-center gap-3 lg:mt-10">
              <div className="h-8 w-px bg-[#A72F27]/40" aria-hidden="true" />
              <blockquote className="font-serif text-sm italic leading-relaxed text-[#5E2A29] md:text-base">
                "La paz interior es el camino y el destino."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
