import Image from "next/image"

export default function LaDakini() {
  return (
    <section
      id="dakini"
      className="bg-[#FBF3DC] px-6 py-16"
      aria-labelledby="dakini-title"
    >
      <div className="max-w-sm mx-auto">
        {/* Section label */}
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27] mb-3">
          Sabiduría Femenina
        </p>

        <h2
          id="dakini-title"
          className="font-serif text-[#A72F27] text-2xl font-semibold text-balance leading-snug mb-5"
        >
          La Esencia de la Dakini
        </h2>

        <div className="w-8 h-[2px] bg-[#A72F27] mb-8" aria-hidden="true" />

        {/* Thangka image */}
        <div className="relative rounded-lg overflow-hidden shadow-md mb-7">
          <Image
            src="/images/dakini-thangka.jpg"
            alt="Detalle de un Thangka sagrado tibetano con figura de Dakini"
            width={600}
            height={500}
            className="w-full object-cover"
            sizes="(max-width: 640px) 100vw, 600px"
          />
          {/* Golden shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#5E2A29]/30 rounded-lg" />
        </div>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-5">
          En la tradición budista tibetana, la Dakini representa la energía iluminada de la sabiduría femenina —un principio dinámico y transformador que disuelve los obstáculos y guía a los practicantes hacia la realización.
        </p>

        <p className="font-sans text-[#724E48] text-[0.9rem] leading-relaxed mb-6">
          En nuestros retiros, honramos la esencia de la Dakini a través de prácticas específicas del Vajrayana, visualizaciones sagradas y el reconocimiento de la sabiduría inherente en toda experiencia.
        </p>

        {/* Sacred symbols row */}
        <div className="flex items-center justify-around py-5 border-t border-b border-[#E8D8C4]">
          {["ཨ", "ཧཱུཾ", "ཕཊ"].map((syllable, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-serif text-[#A72F27] text-2xl">{syllable}</span>
              <span className="font-sans text-[#724E48] text-[9px] tracking-widest uppercase">
                {["Cuerpo", "Habla", "Mente"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
