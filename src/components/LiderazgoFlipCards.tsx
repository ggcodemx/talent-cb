'use client'

import React from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FlipCard {
  title: string
  description: string
  image: { url: string; alt?: string }
}

export interface LiderazgoFlipCardsProps {
  cardLeft: FlipCard
  cardRight: FlipCard
}

// ─── Single card ──────────────────────────────────────────────────────────────

const HoverCard: React.FC<{ card: FlipCard }> = ({ card }) => (
  <div className="group relative w-full overflow-hidden" style={{ height: '50vh' }}>
    {/* Background image with subtle zoom */}
    <Image
      src={card.image.url}
      alt={card.image.alt ?? card.title}
      fill
      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />

    {/* Base dark overlay — always visible */}
    <div className="absolute inset-0 bg-black/45 transition-opacity duration-500 group-hover:opacity-0" />

    {/* Primary overlay — appears on hover */}
    <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-90" />

    {/* Default state: title bottom-left */}
    <div className="absolute bottom-0 left-0 p-8 lg:p-12 transition-opacity duration-300 group-hover:opacity-0">
      <div className="w-10 h-0.5 mb-4 bg-white/70" />
      <h3 className="text-white font-light text-2xl lg:text-3xl xl:text-4xl leading-tight">
        {card.title}
      </h3>
    </div>

    {/* Hover state: title + description centered */}
    <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-14 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
      <div className="w-10 h-0.5 mb-6 bg-white/70" />
      <h3 className="text-white font-light text-2xl lg:text-3xl leading-tight mb-5">
        {card.title}
      </h3>
      <p className="text-white/85 text-base lg:text-lg leading-[1.8] font-light">
        {card.description}
      </p>
    </div>
  </div>
)

// ─── Main component ───────────────────────────────────────────────────────────

const LiderazgoFlipCards: React.FC<LiderazgoFlipCardsProps> = ({ cardLeft, cardRight }) => (
  <section className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <HoverCard card={cardLeft} />
      <HoverCard card={cardRight} />
    </div>
  </section>
)

export default LiderazgoFlipCards
