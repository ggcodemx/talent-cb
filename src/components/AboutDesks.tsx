'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DeskItem {
  title: string
  description: string
  image: { url: string; alt?: string }
}

export interface AboutDesksProps {
  items: DeskItem[]
  heading?: string
  imageAspect?: string
  largeDescription?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

const AboutDesks: React.FC<AboutDesksProps> = ({
  items,
  heading = 'Desks Internacionales',
  imageAspect = '16/6',
  largeDescription = false,
}) => {
  const [hovered, setHovered] = useState<number | null>(null)

  if (!items.length) return null

  const active = hovered ?? 0
  const current = items[active]

  return (
    <section className="w-full py-16 lg:py-24 page-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* ── Left: header + desk list ── */}
        <div>
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-3">
            Conocimiento profundo de industria
          </p>
          <h2 className="font-light text-3xl lg:text-4xl leading-tight text-gray-900 mb-10">
            {heading}
          </h2>

          <nav className="flex flex-col">
            {items.map((desk, i) => {
              const isActive = active === i
              return (
                <button
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative flex items-center justify-between py-5 border-b border-gray-100 text-left w-full overflow-hidden"
                >
                  {/* Sliding background on hover */}
                  <span
                    className={`absolute inset-0 bg-gray-50 transition-transform duration-500 ease-out origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />

                  {/* Active left accent bar */}
                  <span
                    className={`absolute left-0 top-0 h-full w-0.5 bg-primary rounded-full transition-all duration-500 ease-out ${
                      isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                    }`}
                  />

                  <span
                    className={`relative pl-4 text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'text-gray-700 group-hover:text-gray-900'
                    }`}
                  >
                    {desk.title}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`relative transition-all duration-400 ease-out ${
                      isActive
                        ? 'text-primary translate-x-0 opacity-100'
                        : 'text-gray-300 -translate-x-1 opacity-60 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-primary'
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* ── Right: image + description ── */}
        <div key={active} className="animate-fade-up">
          {/* Image */}
          <div className="relative mb-8 w-full">
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl " />
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: imageAspect }}
            >
              <Image
                src={current.image.url}
                alt={current.image.alt ?? current.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Description */}
          <p className={`text-gray-600 leading-relaxed ${largeDescription ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}`}>
            {current.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutDesks
