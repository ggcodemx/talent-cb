'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceItem {
  title: string
  tag: string
  description: string
  image: {
    url: string
    alt?: string
  }
}

export interface AboutServicesProps {
  items: ServiceItem[]
}

// ─── Component ────────────────────────────────────────────────────────────────

const AboutServices: React.FC<AboutServicesProps> = ({ items }) => {
  const [pinned, setPinned] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  if (!items.length) return null

  const active = hovered ?? pinned
  const current = items[active]

  return (
    <section className="w-full py-16 page-padding bg-white">
      <div>
        <div className="bg-green-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 items-start">
            {/* ── Left: numbered nav ── */}
            <nav className="flex flex-col border-r border-primary pr-8">
              {items.map((item, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setPinned(i)}
                  className="text-left py-5 group"
                >
                  {/* Number */}
                  <span
                    className={`block text-xs font-medium mb-1 transition-colors duration-200 ${
                      active === i ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <span
                    className={`block text-lg font-light transition-colors duration-200 leading-snug ${
                      active === i ? 'text-primary' : 'text-secondary group-hover:text-green-600'
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Pinned indicator */}
                  {pinned === i && (
                    <span className="block mt-2 w-8 h-0.5 bg-green-700 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* ── Right: content panel ── */}
            <div key={active} className="animate-fade-up">
              {/* Image */}
              <div
                className="relative w-full rounded-2xl overflow-hidden mb-6"
                style={{ aspectRatio: '16/9', maxHeight: '260px' }}
              >
                <Image
                  src={current.image.url}
                  alt={current.image.alt ?? current.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Tag */}
              <p className="text-secondary text-sm font-medium mb-1">{current.tag}</p>

              {/* Title */}
              <h3 className="text-primary font-light text-2xl lg:text-3xl mb-3">{current.title}</h3>

              {/* Description */}
              <p className="whitespace-pre-line text-gray-600 text-sm text-justify lg:text-base leading-relaxed max-w-full">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutServices
