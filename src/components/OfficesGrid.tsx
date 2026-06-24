'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// ─── Static Data ──────────────────────────────────────────────────────────────

const OFFICES = [
  {
    city: 'Ciudad de México',
    address: '128 Canary Wharf Plaza\nLondon, E14 5AA, United Kingdom',
    mapUrl: 'https://maps.google.com/?q=Ciudad+de+Mexico',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80',
  },
  {
    city: 'Guadalajara',
    address: '128 Canary Wharf Plaza\nLondon, E14 5AA, United Kingdom',
    mapUrl: 'https://maps.google.com/?q=Guadalajara+Mexico',
    image: 'https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=800&q=80',
  },
  {
    city: 'Monterrey',
    address: '128 Canary Wharf Plaza\nLondon, E14 5AA, United Kingdom',
    mapUrl: 'https://maps.google.com/?q=Monterrey+Mexico',
    image: '/api/media/file/hero1.jpg',
  },
]

// ─── Office Card ──────────────────────────────────────────────────────────────

const OfficeCard: React.FC<(typeof OFFICES)[0]> = ({ city, address, mapUrl, image }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image with zoom */}
      <Image
        src={image}
        alt={city}
        fill
        className={`object-cover object-center transition-transform duration-700 ease-out ${
          hovered ? 'scale-110' : 'scale-100'
        }`}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Base dark gradient — always visible so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Primary color overlay — appears on hover */}
      <div
        className={`absolute inset-0 bg-primary transition-opacity duration-500 ${
          hovered ? 'opacity-50' : 'opacity-0'
        }`}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
        <h3 className="text-white font-light text-2xl lg:text-3xl mb-3 leading-tight">{city}</h3>

        <p className="text-white/80 text-sm leading-relaxed mb-5 whitespace-pre-line">{address}</p>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-sm font-medium group/link"
        >
          Ver en mapa
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const OfficesGrid: React.FC = () => {
  return (
    <section className="w-full">
      <div className="text-center py-10 page-padding">
        <p className="text-green-700 text-sm font-light mb-1">Talento ejecutivo</p>
        <h2 className="text-gray-900 font-light text-2xl lg:text-3xl">Nuestras oficinas</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {OFFICES.map((office) => (
          <OfficeCard key={office.city} {...office} />
        ))}
      </div>
    </section>
  )
}

export default OfficesGrid
