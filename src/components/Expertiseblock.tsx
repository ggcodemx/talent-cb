'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExpertiseBlockProps {
  image: {
    url: string
    alt?: string
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────

const ExpertiseBlock: React.FC<ExpertiseBlockProps> = ({ image }) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* ── Left: green content panel ── */}
        <div className="bg-primary pl-6 md:pl-12 lg:pl-[200px] pr-8 md:pr-14 py-16 flex flex-col justify-center">
          <div className="max-w-xl lg:mr-0">
            <p className="text-white text-sm font-light mb-4 tracking-wider">
              Estrategia de Talento
            </p>

            <h2 className="text-white font-light text-2xl lg:text-4xl leading-tight mb-6">
              ¿Cómo acompañamos
              <br />
              su crecimiento?
            </h2>

            <p className="text-white text-base font-light leading-relaxed mb-10">
              Conozca a profundidad nuestras áreas de especialización y la estructura de industrias
              en las que operamos. Cada práctica responde a dinámicas específicas de mercado y
              desafíos particulares de talento.
            </p>

            {/* Fixed buttons — edita los href aquí si cambian las rutas */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="
                  flex items-center gap-2 px-6 py-3
                  border border-white/60 rounded-xl
                  text-white text-sm font-medium
                  transition-all duration-200
                  hover:bg-white/10 hover:border-white
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
              >
                Servicios
              </Link>

              <Link
                href="/industries"
                className="
                  flex items-center gap-2 px-6 py-3
                  border border-white/60 rounded-xl
                  text-white text-sm font-medium
                  transition-all duration-200
                  hover:bg-white/10 hover:border-white
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
              >
                Industrias Globales
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right: image panel ── */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src={image.url}
            alt={image.alt ?? 'Expertise image'}
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default ExpertiseBlock
