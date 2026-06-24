'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroSlide {
  id?: string
  heading: string
  subheading?: string
  image: {
    url: string
    alt?: string
  }
}

export interface HeroCarouselProps {
  slides: HeroSlide[]
  autoplayInterval?: number // ms, default 6000
}

// ─── Hero Carousel ─────────────────────────────────────────────────────────────

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides, autoplayInterval = 6000 }) => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = slides.length

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), 700)
    },
    [animating, current],
  )

  const next = useCallback(() => {
    goTo((current + 1) % total)
  }, [current, total, goTo])

  // Autoplay
  useEffect(() => {
    if (total <= 1) return
    timerRef.current = setTimeout(next, autoplayInterval)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, next, autoplayInterval, total])

  if (!slides || slides.length === 0) return null

  const slide = slides[current]

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      aria-label="Hero carousel"
    >
      {/* ── Slides (background images) ── */}
      {slides.map((s, i) => (
        <div
          key={s.id ?? i}
          aria-hidden={i !== current}
          className={`
            absolute inset-0 transition-opacity duration-700 ease-in-out
            ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        >
          <Image
            src={s.image.url}
            alt={s.image.alt ?? s.heading}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* ── Content ── */}
      <div className="relative z-20 h-full flex items-center page-padding">
        <div className="max-w-2xl">
          {/* Heading */}
          <h1
            key={`heading-${current}`}
            className="
              text-white font-light leading-tight
              text-3xl sm:text-4xl lg:text-5xl
              animate-fade-up
            "
          >
            {slide.heading}
          </h1>

          {/* Subheading */}
          {slide.subheading && (
            <p
              key={`sub-${current}`}
              className="
                mt-4 text-white/85 text-base sm:text-lg leading-relaxed font-light
                max-w-xl animate-fade-up animation-delay-150
              "
            >
              {slide.subheading}
            </p>
          )}

          {/* Decorative line */}
          <div
            key={`line-${current}`}
            className="mt-8 h-[3px] w-40 bg-primary animate-fade-up animation-delay-300"
          />
        </div>
      </div>

      {/* ── Bottom-right arrow controls ── */}
      {total > 1 && (
        <div className="absolute bottom-8 right-6 md:right-12 lg:right-[200px] z-20 flex gap-3">
          <button
            onClick={() => goTo((current - 1 + total) % total)}
            aria-label="Slide anterior"
            className="
              w-9 h-9 border border-white/70 hover:border-white
              bg-black/20 hover:bg-black/40
              flex items-center justify-center
              text-white transition-all duration-200
              focus:outline-none
            "
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => goTo((current + 1) % total)}
            aria-label="Siguiente slide"
            className="
              w-9 h-9 border border-white/70 hover:border-white
              bg-black/20 hover:bg-black/40
              flex items-center justify-center
              text-white transition-all duration-200
              focus:outline-none
            "
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default HeroCarousel
