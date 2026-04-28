'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroButton {
  label: string
  href: string
}

export interface HeroSlide {
  id?: string
  heading: string
  subheading?: string
  buttons?: HeroButton[]
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
      className="relative w-full h-screen min-h-[600px] overflow-hidden "
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
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1
              key={`heading-${current}`}
              className="
                text-white font-light leading-tight
                text-4xl sm:text-5xl lg:text-6xl
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
                  mt-4 text-white/85 text-base sm:text-lg leading-relaxed
                  max-w-xl animate-fade-up animation-delay-150
                "
              >
                {slide.subheading}
              </p>
            )}

            {/* Buttons */}
            {slide.buttons && slide.buttons.length > 0 && (
              <div
                key={`btns-${current}`}
                className="mt-8 flex flex-wrap gap-4 animate-fade-up animation-delay-300"
              >
                {slide.buttons.map((btn, bi) => (
                  <Link
                    key={bi}
                    href={btn.href}
                    className="
                      inline-flex items-center px-6 py-3
                      bg-secondary hover:bg-green-700
                      text-white text-sm font-light
                       transition-colors duration-200
                      focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-transparent
                    "
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Dots indicator ── */}
      {total > 1 && (
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`
                rounded-full transition-all duration-300
                ${i === current ? 'bg-white w-6 h-2' : 'bg-white/40 hover:bg-white/70 w-2 h-2'}
              `}
            />
          ))}
        </div>
      )}

      {/* ── Arrow controls ── */}
      {total > 1 && (
        <>
          <button
            onClick={() => goTo((current - 1 + total) % total)}
            aria-label="Slide anterior"
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full bg-white/20 hover:bg-white/40
              flex items-center justify-center
              text-white transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => goTo((current + 1) % total)}
            aria-label="Siguiente slide"
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-20
              w-10 h-10 rounded-full bg-white/20 hover:bg-white/40
              flex items-center justify-center
              text-white transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-white/50
            "
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}
    </section>
  )
}

export default HeroCarousel
