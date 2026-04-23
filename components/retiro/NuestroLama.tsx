import Image from "next/image"

export default function NuestroLama() {
  return (
    <section
      id="lama"
      className="bg-[#FFFFFF] px-6 py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
      aria-labelledby="lama-title"
    >
      <div className="mx-auto max-w-sm md:max-w-2xl lg:grid lg:max-w-6xl lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1fr)] lg:items-center lg:gap-12 xl:gap-16">
        <div className="lg:col-start-2">
          {/* Section label */}
          <p className="mb-3 font-sans text-[10px] tracking-[0.25em] uppercase text-[#A72F27]">
            Guía Espiritual
          </p>

          <h2
            id="lama-title"
            className="mb-5 font-serif text-2xl font-semibold leading-snug text-[#A72F27] text-balance md:text-3xl"
          >
            Nuestro Lama
          </h2>

          <div className="mb-8 h-[2px] w-8 bg-[#A72F27]" aria-hidden="true" />
        </div>

        {/* Portrait */}
        <div className="relative mb-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mb-0">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/lama-portrait.jpg"
              alt="Retrato del Venerable Lama Tenzin Dorje"
              width={600}
              height={700}
              className="aspect-[6/7] w-full object-cover lg:aspect-[5/6]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 38vw"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-[#724E48]/10 rounded-lg" />
          </div>
          {/* Name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#5E2A29]/80 to-transparent px-5 py-5 rounded-b-lg">
            <h3 className="font-serif text-[#FBF3DC] text-xl font-semibold">
              Venerable Lama Dorje Norbu
            </h3>
            <p className="font-sans text-[#FBF3DC]/80 text-xs tracking-widest uppercase mt-1">
              Guía espiritual del Monasterio Shambala Norbu
            </p>
          </div>
        </div>

        <div className="lg:col-start-2">
          <p className="mb-5 font-sans text-[0.9rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
            El Venerable Lama Dorje Norbu es el actual responsable espiritual del monasterio y el encargado de preservar y transmitir su legado. Formado en el Tíbet y con una larga trayectoria en la enseñanza de la práctica contemplativa, combina tradición y adaptación para acompañar a quienes llegan en busca de claridad, sentido y transformación personal.
            Su enfoque parte de una idea sencilla: cada experiencia, incluso la más inesperada, puede convertirse en una oportunidad de despertar si se sabe mirar con la actitud adecuada.
          </p>

          <p className="mb-6 font-sans text-[0.9rem] leading-relaxed text-[#724E48] md:text-[0.95rem]">
            A lo largo de los años, ha guiado a practicantes de distintos lugares del mundo, desarrollando un modelo de retiro que integra silencio, disciplina y acompañamiento personalizado, adaptado a las necesidades de cada visitante.
            En Shambala Norbu, el Lama Dorje no solo enseña: observa, interpreta y acompaña los procesos individuales, entendiendo que cada camino espiritual es único… y que a veces, lo esencial no es cuestionar la experiencia, sino aprender a sostenerla.
          </p>

          {/* Quotes */}
          <div className="rounded-lg border-l-2 border-[#A72F27] bg-[#FBF3DC] px-5 py-5">
            <blockquote className="font-serif text-[0.95rem] italic leading-relaxed text-[#5E2A29] md:text-base">
              "La mente busca certezas. El despertar empieza cuando dejamos de necesitarlas."
            </blockquote>
            <cite className="mt-3 block font-sans text-[0.75rem] tracking-wider text-[#A72F27] not-italic">
              — Lama Dorje Norbu
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
