'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// ─── Data ─────────────────────────────────────────────────────────────────────

const OFFICES = [
  {
    city: 'Ciudad de México',
    description:
      'Especialización en búsquedas ejecutivas, directivas y de talento especializado para servicios profesionales, banca, consumo y sectores regulados.',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=900&q=80',
  },
  {
    city: 'Monterrey',
    description:
      'Experiencia en talento ejecutivo y técnico para automotriz, nearshoring, energía, infraestructura y empresas familiares en transformación.',
    image: '/api/media/file/hero1.jpg',
  },
  {
    city: 'Guadalajara',
    description:
      'Enfoque en liderazgo para tecnología, medios, telecomunicaciones y scale-ups en crecimiento acelerado.',
    image: 'https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=900&q=80',
  },
]

// ─── Office Card ──────────────────────────────────────────────────────────────

const OfficeCard: React.FC<(typeof OFFICES)[0]> = ({ city, description, image }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: '4/5' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with subtle zoom */}
      <Image
        src={image}
        alt={city}
        fill
        className={`object-cover object-center transition-transform duration-700 ease-out ${
          hovered ? 'scale-110' : 'scale-100'
        }`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Permanent bottom gradient so city name is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Green overlay — slides up on hover */}
      <div
        className={`absolute inset-0 bg-primary transition-all duration-500 ease-out ${
          hovered ? 'opacity-90' : 'opacity-0'
        }`}
      />

      {/* Decorative top-left corner accent */}
      <div
        className={`absolute top-5 left-5 w-6 h-6 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-5 right-5 w-6 h-6 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7 z-10">
        {/* Description — visible only on hover, slides up */}
        <p
          className={`text-white/90 text-sm leading-relaxed mb-5 transition-all duration-500 ease-out ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {description}
        </p>

        {/* City name + divider */}
        <div>
          <div
            className={`w-8 h-px bg-white/60 mb-3 transition-all duration-300 ${
              hovered ? 'w-12' : 'w-8'
            }`}
          />
          <h3 className="text-white font-light text-2xl lg:text-3xl leading-tight tracking-wide">
            {city}
          </h3>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const AboutOffices: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 page-padding">
      {/* Header */}
      <div className="mb-12">
        <p className="text-primary text-sm font-medium mb-3">Amplia red de atracción de talento</p>
        <h2 className="font-light text-3xl lg:text-4xl leading-tight">Nuestras oficinas</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        {OFFICES.map((office) => (
          <OfficeCard key={office.city} {...office} />
        ))}
      </div>
    </section>
  )
}

export default AboutOffices
