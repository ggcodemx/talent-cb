'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NewsItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  href: string
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const NEWS: NewsItem[] = [
  {
    id: '1',
    category: 'Global Trends',
    title: 'Tech-Ready Leadership: A New Paradigm',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    href: '#',
  },
  {
    id: '2',
    category: 'Executive Search',
    title: 'The New Profile of the C-Suite Executive in Latin America',
    description:
      'Organizations are redefining leadership criteria. Cultural adaptability and digital fluency are now table stakes for the top roles.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    href: '#',
  },
  {
    id: '3',
    category: 'Talent Strategy',
    title: 'Succession Planning: Building Pipelines That Last',
    description:
      'Companies that invest in long-term succession frameworks outperform peers by 20% in retention and leadership continuity.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    href: '#',
  },
]

// ─── Arrow Button ─────────────────────────────────────────────────────────────

const ArrowBtn: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({
  direction,
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
    className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
  >
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      {direction === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  </button>
)

// ─── Main Component ───────────────────────────────────────────────────────────

const GRADIENT_SIDE =
  'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)'
const GRADIENT_CENTER =
  'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)'

const NewsCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const total = NEWS.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  const prevIndex = (current - 1 + total) % total
  const nextIndex = (current + 1) % total

  return (
    <section className="w-full bg-white py-12 md:py-16 page-padding">
      {/* Eyebrow */}
      <p className="text-center text-primary text-base font-light mb-8 md:mb-10">
        Últimas noticias
      </p>

      {/* 
    Cambiamos el paddingBottom en línea por clases de Tailwind.
    En móvil es un aspecto de tarjeta vertical (aspect-[4/5] o h-[450px]), 
    y en pantallas grandes (md:) vuelve a la proporción horizontal original.
  */}
      <div className="relative w-full h-[480px] md:h-auto md:aspect-[3/1]">
        <div className="absolute inset-0">
          {/* ── Left card (prev) ── Oculta en móvil (hidden md:block) */}
          <div
            className="hidden md:block absolute z-0 rounded-2xl overflow-hidden opacity-40 cursor-pointer hover:opacity-60 transition-opacity duration-300"
            style={{ left: '16%', width: '26%', top: '8%', bottom: '8%' }}
            onClick={prev}
          >
            {NEWS.map((item, i) => (
              <div
                key={item.id}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === prevIndex ? 1 : 0 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="26vw"
                />
              </div>
            ))}
            <div className="absolute inset-0 z-10" style={{ background: GRADIENT_SIDE }} />
          </div>

          {/* ── Center card (current) ── 
          En móvil ocupa todo el ancho (left-0 right-0), en md: vuelve a su posición (left-[29%] right-[29%])
      */}
          <div className="absolute top-0 bottom-0 z-10 rounded-2xl overflow-hidden shadow-xl left-0 right-0 md:left-[29%] md:right-[29%]">
            {/* Imágenes en crossfade */}
            {NEWS.map((item, i) => (
              <div
                key={item.id}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Gradient fijo encima de las imágenes */}
            <div className="absolute inset-0 z-10" style={{ background: GRADIENT_CENTER }} />

            {/* Textos en crossfade con ligero slide-up. Ajustamos padding interno en móvil (p-5 md:p-7) */}
            {NEWS.map((item, i) => (
              <div
                key={item.id}
                className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-20 transition-all duration-500 ease-in-out"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'translateY(0)' : 'translateY(10px)',
                  transitionDelay: i === current ? '150ms' : '0ms',
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                <span className="inline-block bg-secondary text-white text-xs font-light px-3 py-1 rounded-sm mb-2 md:mb-3">
                  {item.category}
                </span>

                {/* Ajustamos tamaño de letra adaptable */}
                <h3 className="text-white font-light text-lg md:text-xl lg:text-2xl leading-snug mb-1 md:mb-2">
                  {item.title}
                </h3>

                {/* Texto de descripción recortado opcionalmente si es hiper largo en móvil */}
                <p className="text-white/85 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-white text-sm font-light hover:text-green-300 transition-colors duration-200"
                >
                  Leer más
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* ── Right card (next) ── Oculta en móvil (hidden md:block) */}
          <div
            className="hidden md:block absolute z-0 rounded-2xl overflow-hidden opacity-40 cursor-pointer hover:opacity-60 transition-opacity duration-300"
            style={{ right: '16%', width: '26%', top: '8%', bottom: '8%' }}
            onClick={next}
          >
            {NEWS.map((item, i) => (
              <div
                key={item.id}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: i === nextIndex ? 1 : 0 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="26vw"
                />
              </div>
            ))}
            <div className="absolute inset-0 z-10" style={{ background: GRADIENT_SIDE }} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
        <ArrowBtn direction="left" onClick={prev} />
        <ArrowBtn direction="right" onClick={next} />
      </div>
    </section>
  )
}

export default NewsCarousel
