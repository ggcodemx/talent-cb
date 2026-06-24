'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AboutCard {
  title: string
  description: string
  href: string
  image: {
    url: string
    alt?: string
  }
}

export interface AboutCardsProps {
  eyebrow: string
  heading: string
  cards: [AboutCard, AboutCard, AboutCard]
}

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card: React.FC<{ card: AboutCard }> = ({ card }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={card.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={card.image.url}
          alt={card.image.alt ?? card.title}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        {/* shimmer line top */}
        <div
          className={`absolute top-0 left-0 right-0 h-[3px] bg-white transition-transform duration-400 origin-left ${hovered ? 'scale-x-100' : 'scale-x-0'}`}
        />
      </div>

      {/* Content */}
      <div className={`flex-1 pt-5 pb-2 transition-colors duration-300`}>
        {/* Title + arrow */}
        <div className="flex items-center gap-2 mb-2">
          <h3
            className={`text-xl font-light transition-colors duration-300 ${hovered ? 'text-white' : 'text-white/90'}`}
          >
            {card.title}
          </h3>
          <svg
            className={`w-4 h-4 text-white transition-transform duration-300 ${hovered ? 'translate-x-1' : 'translate-x-0'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>

        {/* Description */}
        <p
          className={`text-sm font-light leading-relaxed transition-colors duration-300 ${hovered ? 'text-white' : 'text-white'}`}
        >
          {card.description}
        </p>

        {/* Underline indicator */}
        <div
          className={`mt-4 h-[2px] bg-white/40 rounded-full transition-all duration-300 ${hovered ? 'w-full' : 'w-0'}`}
        />
      </div>
    </Link>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

const AboutCards: React.FC<AboutCardsProps> = ({ eyebrow, heading, cards }) => {
  return (
    <section className="w-full bg-primary py-16 page-padding">
      <div>
        {/* Header */}
        <p className="text-white text-base font-light mb-3">{eyebrow}</p>
        <h2 className="text-white font-light text-2xl lg:text-3xl leading-tight mb-12 max-w-4xl">
          {heading}
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCards
