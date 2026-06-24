'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Industry {
  name: string
  description: string
  href: string
  image: { url: string; alt?: string }
}

export interface IndustriesBlockProps {
  industries: Industry[]
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

const TICKER_WORDS = [
  'Experiencia Local',
  'Búsqueda Ejecutiva',
  'Asesoría de Talento',
  'Liderazgo de Consejo',
  'Alcance Global',
]

const Ticker: React.FC = () => {
  // Duplicate for seamless loop
  const words = [...TICKER_WORDS, ...TICKER_WORDS]

  return (
    <div className="w-full bg-primary overflow-hidden py-6">
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 18s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track flex items-center gap-0">
        {words.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`text-2xl lg:text-3xl font-light tracking-tight whitespace-nowrap px-8 ${
                i % 2 === 0 ? 'text-white/50' : 'text-secondary'
              }`}
            >
              {word}
            </span>
            <span className="text-white/30 text-2xl">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Industries List ──────────────────────────────────────────────────────────

const IndustriesBlock: React.FC<IndustriesBlockProps> = ({ industries }) => {
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <>
      <Ticker />

      <section className="w-full py-16 page-padding bg-white">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
            {/* ── Left: title, description, image ── */}
            <div className="lg:sticky lg:top-28">
              <h2 className="text-green-700 font-light text-xl lg:text-2xl leading-snug mb-4">
                {current.name}
              </h2>

              <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 max-w-xs">
                {current.description}
              </p>

              <div className="w-10 h-0.5 bg-green-700 mb-6" />

              <div
                key={active}
                className="relative rounded-2xl overflow-hidden animate-fade-up"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={current.image.url}
                  alt={current.image.alt ?? current.name}
                  fill
                  className="object-cover object-center"
                  sizes="320px"
                />
              </div>
            </div>

            {/* ── Right: industry list ── */}
            <div className="flex flex-col">
              {industries.map((industry, i) => (
                <Link
                  key={i}
                  href={industry.href}
                  onMouseEnter={() => setActive(i)}
                  className={`
                    group flex items-center justify-between
                    py-5 border-b border-gray-100
                    transition-all duration-200
                    ${active === i ? 'pl-4 border-b-secondary' : 'pl-0 hover:pl-4'}
                  `}
                >
                  <span
                    className={`
                    text-lg font-medium transition-colors duration-200
                    ${active === i ? 'text-green-700' : 'text-gray-800 group-hover:text-green-700'}
                  `}
                  >
                    {industry.name}
                  </span>

                  <svg
                    className={`
                      w-4 h-4 flex-shrink-0 transition-all duration-200
                      ${active === i ? 'text-green-700 translate-x-0' : 'text-gray-300 group-hover:text-green-600 group-hover:translate-x-1'}
                    `}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndustriesBlock
