'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDE_DURATION = 6000 // 6 segundos

type Slide = {
  titulo: string
  subtitulo?: string
  botonTexto?: string
  botonUrl?: string
  imagenFondo: {
    url: string
    alt?: string
  }
}

type Props = {
  slides: Slide[]
}

const HeroCarousel = ({ slides }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  if (!slides || slides.length === 0) {
    return null
  }

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [slides.length])

  // Timer de progreso
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 100 / (SLIDE_DURATION / 100)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.imagenFondo.url}
            alt={slide.imagenFondo.alt ?? slide.titulo}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Contenido activo */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-[90px]">
        <div key={activeIndex} className="flex flex-col gap-4 max-w-xl animate-fadeIn">
          <h1 className="text-white text-5xl font-semibold lg:text-6xl leading-tight">
            {slides[activeIndex].titulo}
          </h1>
          {slides[activeIndex].subtitulo && (
            <p className="text-white font-light text-xl">{slides[activeIndex].subtitulo}</p>
          )}
          {slides[activeIndex].botonTexto && (
            <Link
              href={slides[activeIndex].botonUrl ?? '/'}
              // Agregamos `justify-center` y un `gap` más pequeño para mejor espaciado
              className="mt-4 inline-flex items-center justify-center gap-x-2.5 bg-[#E31D19] text-white px-8 py-3 rounded-full w-fit hover:bg-[#CC1517] transition-all duration-200 group"
            >
              {/* Envolvemos el texto en un span para un mejor control */}
              <span className="font-medium text-lg leading-none pt-[1px]">
                {slides[activeIndex].botonTexto}
              </span>

              {/* Contenedor específico para la flecha con ajuste de alineación */}
              {/* El `mt-[1px]` o `top-[1px]` son los ajustes clave */}
              <div className="flex-shrink-0 relative top-[1px] group-hover:translate-x-1.5 transition-transform duration-200">
                <svg
                  width="22" // Tamaño ligeramente ajustado
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="white"
                    strokeWidth="2" // Grosor aumentado para mejor visibilidad
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Navegación inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-[90px]">
        <div
          className="grid border-t border-white/20"
          style={{ gridTemplateColumns: `repeat(${slides.length}, 1fr)` }}
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="relative py-5 text-left pr-6 group"
            >
              {/* Título del slide */}
              <span
                className={`text-sm font-medium transition-colors duration-300 ${
                  index === activeIndex ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                }`}
              >
                {slide.titulo}
              </span>

              {/* Barra de progreso */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20">
                {index === activeIndex && (
                  <div
                    className="h-full bg-[#E31D19] transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
