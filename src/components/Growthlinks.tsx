'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'

// ─── Data ─────────────────────────────────────────────────────────────────────

interface LinkItem {
  id: string
  title: string
  description: string
  href: string
}

interface Slide {
  phrase: string
  image: string
}

const LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'Carreras',
    description:
      'Únase a una firma donde el rigor analítico y la profundidad de relaciones definen nuestra práctica. Buscamos profesionales con perspectiva de largo plazo.',
    href: '#',
  },
  {
    id: '2',
    title: 'Sobre nosotros',
    description:
      'Una firma de búsqueda ejecutiva construida sobre relaciones de largo plazo, resultados verificables y compromiso con cada organización que asesoramos.',
    href: '#',
  },
  {
    id: '3',
    title: ' Nuestro enfoque',
    description:
      'Metodología probada que integra inteligencia de industria, evaluación integral de liderazgo y seguimiento post-contratación para asegurar integración exitosa.',
    href: '#',
  },
  /*  {
    id: '4',
    title: 'Noticias',
    description:
      ' Anuncios institucionales, movimientos relevantes de la firma y participación en foros de liderazgo, gobernanza y estrategia de talento.',
    href: '#',
  }, */
]

const SLIDES: Slide[] = [
  {
    phrase: '¿Cómo generamos\nvalor sostenible?',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    phrase: 'Liderazgo ques\ntransforma\n organizaciones.',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
  },
  {
    phrase: 'Socio estratégico\nen busqueda\nejecutiva.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    phrase: 'Soluciones\nde talento.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
]

// ─── Link Row ─────────────────────────────────────────────────────────────────

const LinkRow: React.FC<{ item: LinkItem }> = ({ item }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-start justify-between gap-6 py-6 border-b border-gray-200 last:border-0 transition-all duration-200"
    >
      <div className="flex-1">
        <h3
          className={`text-lg font-light mb-2 transition-colors duration-200 ${hovered ? 'text-green-800' : 'text-green-700'}`}
        >
          {item.title}
        </h3>
        <p
          className={`text-sm font-light leading-relaxed transition-colors duration-200 ${hovered ? 'text-gray-900' : 'text-gray-600'}`}
        >
          {item.description}
        </p>
      </div>
      <div
        className={`
        flex-shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center border
        transition-all duration-300
        ${hovered ? 'border-green-600 bg-green-600 text-white scale-110' : 'border-green-600 bg-transparent text-green-600'}
      `}
      >
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-0.5' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
  )
}

// ─── Arrow Button ─────────────────────────────────────────────────────────────

const ArrowBtn: React.FC<{
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
    className={`
      w-11 h-11 border flex items-center justify-center transition-all duration-200
      ${disabled ? 'border-white/30 text-white/30 cursor-not-allowed' : 'border-white/70 text-white hover:bg-white/15 hover:border-white'}
    `}
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

const GrowthLinks: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((next: number) => {
    setCurrent(next)
    setAnimKey((k) => k + 1)
  }, [])

  const slide = SLIDES[current]

  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes slideUpReveal {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .slide-up-reveal {
          animation: slideUpReveal 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <section className="w-full py-16 page-padding bg-white">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-10 lg:gap-16 items-start">
            {/* ── Left: phrase carousel card ── */}
            <div className="relative rounded-2xl overflow-hidden min-h-[450px] flex flex-col justify-between">
              {/* Background image — slides up on change */}
              <div key={animKey} className="slide-up-reveal absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="480px"
                />
                {/* overlay so text stays readable */}
                <div className="absolute inset-0 bg-primary/60" />
              </div>

              {/* Phrase text */}
              <div className="relative z-10 p-10 flex-1 flex items-start">
                <h2
                  key={`phrase-${animKey}`}
                  className="slide-up-reveal text-white font-light text-3xl lg:text-4xl leading-tight whitespace-pre-line"
                >
                  {slide.phrase}
                </h2>
              </div>

              {/* Arrows */}
              <div className="relative z-10 flex items-center gap-0 justify-end p-6">
                <ArrowBtn
                  direction="left"
                  onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
                />
                <ArrowBtn direction="right" onClick={() => goTo((current + 1) % SLIDES.length)} />
              </div>
            </div>

            {/* ── Right: fixed 3 links ── */}
            <div>
              <h3 className="text-gray-900 font-light text-2xl lg:text-3xl mb-2">
                Conozca a profundidad CB Talent
              </h3>
              <div>
                {LINKS.map((item) => (
                  <LinkRow key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GrowthLinks
