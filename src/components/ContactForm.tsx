'use client'

import React, { useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CarouselCard {
  image: { url: string; alt?: string }
  title: string
  description: string
  href: string
}

export interface ContactFormProps {
  carouselCards: CarouselCard[]
}

// ─── Static carousel data (editable aquí) ────────────────────────────────────

const DEFAULT_CARDS: CarouselCard[] = [
  {
    image: {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      alt: 'Carreras',
    },
    title: 'Carreras',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '/careers',
  },
  {
    image: {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
      alt: 'Sobre CB Talent',
    },
    title: 'Sobre CB Talent',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '/about',
  },
  {
    image: {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
      alt: 'Nuestros Servicios',
    },
    title: 'Nuestros Servicios',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '/services',
  },
]

// ─── Social Icons ─────────────────────────────────────────────────────────────

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

// ─── Carousel ─────────────────────────────────────────────────────────────────

const Carousel: React.FC<{ cards: CarouselCard[] }> = ({ cards }) => {
  const [current, setCurrent] = useState(0)
  const total = cards.length
  const card = cards[current]

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <div className="flex flex-col gap-6">
      {/* Social header */}
      <div>
        <h3 className="text-green-700 font-semibold text-xl mb-2">Sigue nuestras redes sociales</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs">
          Nuestro equipo está preparado para comprender sus necesidades específicas y desarrollar
          soluciones personalizadas que generen impacto sostenible.
        </p>
        <div className="flex gap-3">
          {[
            { href: '#', icon: <LinkedInIcon />, label: 'LinkedIn' },
            { href: '#', icon: <TwitterIcon />, label: 'Twitter' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-full border border-green-700 flex items-center justify-center text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Card carousel */}
      <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
        {/* Background image */}
        <Image
          key={current}
          src={card.image.url}
          alt={card.image.alt ?? card.title}
          fill
          className="object-cover object-center animate-fade-up"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-primary/60" />

        {/* Arrow controls — top right */}
        <div className="absolute top-4 right-4 z-10 flex gap-1">
          {[
            { dir: 'prev', fn: prev, d: 'M15 18 9 12 15 6' },
            { dir: 'next', fn: next, d: 'M9 18 15 12 9 6' },
          ].map(({ dir, fn, d }) => (
            <button
              key={dir}
              onClick={fn}
              aria-label={dir}
              className="w-9 h-9 border border-white/60 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 rounded"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={d} />
              </svg>
            </button>
          ))}
        </div>

        {/* Card content — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
          <h4 className="text-white font-semibold text-lg mb-1">{card.title}</h4>
          <p className="text-white/75 text-xs leading-relaxed mb-3 line-clamp-2">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/60 text-white hover:bg-white hover:text-green-700 transition-all duration-200"
          >
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
      </div>
    </div>
  )
}

// ─── Field components ─────────────────────────────────────────────────────────

const Field: React.FC<{ placeholder: string; type?: string; className?: string }> = ({
  placeholder,
  type = 'text',
  className = '',
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full border-b border-primary pb-2 pt-1 text-sm text-primary placeholder-primary/50 bg-transparent outline-none focus:border-green-700 transition-colors duration-200 ${className}`}
  />
)

// ─── Main Component ───────────────────────────────────────────────────────────

const ContactForm: React.FC<{ carouselCards?: CarouselCard[] }> = ({
  carouselCards = DEFAULT_CARDS,
}) => {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [hovered, setHovered] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: conecta con tu API route /api/contact
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
    formRef.current?.reset()
    setTimeout(() => setSent(false), 5000)
  }, [])

  return (
    <section className="w-full py-16 page-padding bg-white">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">
          {/* ── Left: Form ── */}
          <div>
            <h2 className="text-green-700 font-semibold text-2xl lg:text-3xl mb-8">
              Envia tu consulta.
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-6">
                <Field placeholder="Nombre" />
                <Field placeholder="Apellidos" />
              </div>

              {/* Row 2 */}
              <Field placeholder="Empresa" />

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-6">
                <Field placeholder="Email" type="email" />
                <Field placeholder="Teléfono" type="tel" />
              </div>

              {/* Row 4 */}
              <Field placeholder="Cargo" />

              {/* Row 5 — Select */}
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full border-b border-gray-300 pb-2 pt-1 text-sm text-primary bg-transparent outline-none focus:border-green-700 transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Servicio
                  </option>
                  <option value="executive-search">Executive Search</option>
                  <option value="talent-mapping">Talent Mapping</option>
                  <option value="board-advisory">Board Advisory</option>
                  <option value="onboarding">Onboarding</option>
                </select>
                <svg
                  className="absolute right-0 bottom-3 w-4 h-4 text-primary pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* Row 6 — Textarea */}
              <textarea
                placeholder="¿Cómo podemos ayudarte?"
                rows={3}
                className="w-full border-b border-gray-300 pb-2 pt-1 text-sm text-primary placeholder-primary/50 bg-transparent outline-none focus:border-green-700 transition-colors duration-200 resize-none"
              />

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading || sent}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="relative flex items-center gap-6 px-7 py-2 bg-green-700 text-white text-sm font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_6px_24px_rgba(22,163,74,0.45)] hover:scale-[1.03] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  {/* Hover shimmer */}
                  <span
                    className={`absolute inset-0 bg-white/10 transition-transform duration-500 ${hovered ? 'translate-x-0' : '-translate-x-full'}`}
                  />

                  <span className="relative">
                    {loading ? 'Enviando...' : sent ? '¡Mensaje enviado!' : 'Enviar'}
                  </span>

                  <span className="relative">
                    {sent ? (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
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
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* ── Right: Social + Carousel ── */}
          <Carousel cards={carouselCards} />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
