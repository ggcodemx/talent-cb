'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface InsightCard {
  id: string
  category: string
  title: string
  image: string
  href?: string
}

// ─── Static Data (se reemplazará por blog dinámico más adelante) ──────────────

const INSIGHTS: InsightCard[] = [
  {
    id: '1',
    category: 'Talent Strategy',
    title: 'DE&I as a Competitive Advantage',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    href: '#',
  },
  {
    id: '2',
    category: 'Board Advisory',
    title: 'The Future of Board Governance in 2025',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    href: '#',
  },
  {
    id: '3',
    category: 'Board Advisory',
    title: 'The Future of Board Governance in 2025',
    image: 'https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&q=80',
    href: '#',
  },
  {
    id: '4',
    category: 'Leadership',
    title: 'Building Resilient Leadership in Uncertain Times',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    href: '#',
  },
  {
    id: '5',
    category: 'Executive Search',
    title: 'How Top Companies Attract C-Suite Talent',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    href: '#',
  },
  {
    id: '6',
    category: 'Culture',
    title: 'Culture as the New Currency of Retention',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    href: '#',
  },
  {
    id: '7',
    category: 'Talent Strategy',
    title: 'Succession Planning for the Modern Enterprise',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    href: '#',
  },
  {
    id: '8',
    category: 'Board Advisory',
    title: 'ESG and Its Impact on Corporate Boards',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    href: '#',
  },
]

// ─── Card Component ───────────────────────────────────────────────────────────

const InsightCardItem: React.FC<{ card: InsightCard }> = ({ card }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={card.href ?? '#'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 w-[340px] sm:w-[380px]  overflow-hidden block cursor-pointer"
      style={{ aspectRatio: '3/3.5' }}
    >
      {/* Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className={`object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
        sizes="380px"
      />

      {/* Gradient overlay — always present, deeper on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-80'}`}
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
        }}
      />

      {/* Hover shimmer line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-green-500 transition-transform duration-300 ${hovered ? 'scale-x-100' : 'scale-x-0'}`}
        style={{ transformOrigin: 'left' }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Category pill */}
        <span className="inline-block bg-green-600 text-white text-xs font-light px-3 py-1  mb-3">
          {card.category}
        </span>

        {/* Title */}
        <h3
          className={`text-white font-light text-xl leading-snug transition-transform duration-300 ${hovered ? '-translate-y-1' : 'translate-y-0'}`}
        >
          {card.title}
        </h3>

        {/* Read more — aparece en hover */}
        <div
          className={`flex items-center gap-1.5 mt-3 text-green-400 text-sm font-medium transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          Read more
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
        </div>
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
      w-11 h-11 border border-gray-300 flex items-center justify-center
      transition-all duration-200
      ${
        disabled
          ? 'text-gray-300 cursor-not-allowed'
          : 'text-gray-700 hover:border-green-600 hover:text-green-600 hover:bg-green-50'
      }
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

interface InsightsCarouselProps {
  eyebrow?: string
  title?: string
  cards?: InsightCard[]
}

const InsightsCarousel: React.FC<InsightsCarouselProps> = ({
  eyebrow = 'Knowledge Capital',
  title = 'Leadership Insights',
  cards = INSIGHTS,
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const visibleCount = 3
  const cardWidth = 380 + 24 // width + gap
  const maxIndex = Math.max(0, cards.length - visibleCount)

  const scrollTo = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(i, maxIndex))
      setIndex(next)
      if (trackRef.current) {
        trackRef.current.scrollTo({ left: next * cardWidth, behavior: 'smooth' })
      }
    },
    [maxIndex, cardWidth],
  )

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="text-green-700 text-md font-semilight mb-1">{eyebrow}</p>
            <h2 className="text-gray-900 font-light text-3xl lg:text-4xl">{title}</h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-0 self-center">
            <ArrowBtn direction="left" onClick={() => scrollTo(index - 1)} disabled={index === 0} />
            <ArrowBtn
              direction="right"
              onClick={() => scrollTo(index + 1)}
              disabled={index >= maxIndex}
            />
          </div>
        </div>

        {/* Cards track — scrollable but sin scrollbar visible */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <InsightCardItem key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightsCarousel
