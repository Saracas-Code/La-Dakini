import Image from "next/image"

export default function LaDakini() {
  return (
    <section
      id="dakini"
      className="bg-[#FBF3DC] px-6 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="dakini-title"
    >
      <div className="mx-auto max-w-sm md:max-w-2xl lg:grid lg:max-w-6xl lg:grid-cols-[minmax(340px,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 xl:gap-16">
        <div className="lg:col-start-2">
          {/* Section label */}
          <p className="mb-3 font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27]">
            Sabiduría Femenina
          </p>

          <h2
            id="dakini-title"
            className="mb-5 font-serif text-2xl font-semibold leading-snug text-[#A72F27] text-balance md:text-3xl"
          >
            La Esencia de la Dakini
          </h2>

          <div className="mb-8 h-[2px] w-8 bg-[#A72F27]" aria-hidden="true" />
        </div>

        {/* Thangka image */}
        <div className="relative mb-7 aspect-[6/5] overflow-hidden rounded-lg shadow-md lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:aspect-[5/6]">
          <Image
            src="/images/dakini-thangka.jpg"
            alt="Detalle de un Thangka sagrado tibetano con figura de Dakini"
            width={600}
            height={500}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 45vw"
          />
          {/* Golden shimmer overlay */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-[#5E2A29]/30" />
        </div>

        <div className="lg:col-start-2">
          <p className="mb-5 font-sans text-[0.9rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
            En la tradición budista tibetana, la Dakini representa la energía iluminada de la sabiduría femenina —un principio dinámico y transformador que disuelve los obstáculos y guía a los practicantes hacia la realización.
          </p>

          <p className="mb-6 font-sans text-[0.9rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
            En nuestros retiros, honramos la esencia de la Dakini a través de prácticas específicas del Vajrayana, visualizaciones sagradas y el reconocimiento de la sabiduría inherente en toda experiencia.
          </p>

          {/* Sacred symbols row */}
          <div className="flex items-center justify-around border-y border-[#E8D8C4] py-5 lg:mt-8">
            {["ཨ", "ཧཱུཾ", "ཕཊ"].map((syllable, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="font-serif text-2xl text-[#A72F27]">{syllable}</span>
                <span className="font-sans text-[9px] tracking-widest text-[#724E48] uppercase">
                  {["Cuerpo", "Habla", "Mente"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
