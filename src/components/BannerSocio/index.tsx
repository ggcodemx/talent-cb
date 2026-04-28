// src/components/BannerSocio/index.tsx
import Link from 'next/link'

const BannerSocio = () => {
  return (
    <section className="bg-primary w-full py-25">
      <div className="page-padding flex flex-col md:flex-row items-center md:items-start  gap-60">

        {/* Título izquierda */}
        <h2 className="text-white text-3xl lg:text-4xl font-normal leading-tight max-w-xs shrink-0">
          Encuentra un socio estratégico
        </h2>

        {/* Descripción + botón derecha */}
        <div className="flex flex-col gap-8 max-w-3xl">
          <p className="text-white text-base lg:text-lg leading-relaxed text-justify">
            CB Tax acompaña a las organizaciones en la toma de decisiones fiscales y
            contables desde un enfoque estratégico. El trabajo se desarrolla de manera
            cercana, con criterio técnico sólido y soluciones alineadas a las necesidades
            específicas de cada organización.
          </p>
          <Link
            href="/sobre-cb-tax"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-2 rounded-full font-normal w-fit hover:bg-gray-100 transition-colors duration-200"
          >
            Conocer más →
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BannerSocio