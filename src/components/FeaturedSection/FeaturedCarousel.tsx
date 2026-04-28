'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDE_DURATION = 6000

type Tarjeta = {
  titulo: string
  descripcion?: string
  botonTexto?: string
  botonUrl: string
  imagen: { url: string; alt?: string }
}

type Props = {
  titulo: string
  descripcion?: string
  tarjetas: Tarjeta[]
}

const FeaturedCarousel = ({ titulo, descripcion, tarjetas }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(progress)
  progressRef.current = progress

  const goTo = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % tarjetas.length)
    setProgress(0)
  }, [tarjetas.length])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next()
          return 0
        }
        return prev + 100 / (SLIDE_DURATION / 100)
      })
    }, 100)
    return () => clearInterval(interval)
  }, [isPaused, next])

  const getPosition = (index: number) => {
    const total = tarjetas.length
    const diff = (index - activeIndex + total) % total
    if (diff === 0) return 'center'
    if (diff === 1 || diff === -(total - 1)) return 'right'
    if (diff === total - 1 || diff === -1) return 'left'
    if (diff === 2) return 'far-right'
    return 'far-left'
  }

  if (!tarjetas || tarjetas.length === 0) return null

  return (
    <section
      className="py-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="page-padding text-center mb-12">
        <button
          onClick={next}
          className="text-primary text-sm font-semibold mb-3 block mx-auto hover:underline"
        >
          Actualizar
        </button>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">{titulo}</h2>
        {descripcion && (
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">{descripcion}</p>
        )}
      </div>

      {/* Carrusel */}
      <div className="relative flex items-center justify-center h-[500px] lg:h-[560px]">
        {tarjetas.map((tarjeta, index) => {
          const pos = getPosition(index)

          const styles: Record<string, string> = {
            center: 'z-30 scale-110 opacity-100 translate-x-0 w-[380px] lg:w-[440px]',
            left: 'z-20 scale-90 opacity-100 -translate-x-[340px] lg:-translate-x-[420px] w-[320px] lg:w-[360px]',
            right:
              'z-20 scale-90 opacity-100 translate-x-[340px] lg:translate-x-[420px] w-[320px] lg:w-[360px]',
            'far-left':
              'z-10 scale-75 opacity-100 -translate-x-[600px] lg:-translate-x-[700px] w-[280px]',
            'far-right':
              'z-10 scale-75 opacity-100 translate-x-[600px] lg:translate-x-[700px] w-[280px]',
          }

          const isCenter = pos === 'center'

          return (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`absolute h-[420px] lg:h-[480px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${styles[pos] ?? 'opacity-0 scale-50'}`}
            >
              {/* Imagen */}
              <div className="relative w-full h-full">
                <Image
                  src={tarjeta.imagen.url}
                  alt={tarjeta.imagen.alt ?? tarjeta.titulo}
                  fill
                  className="object-cover object-center"
                />

                {/* Overlay — más oscuro en centro */}
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isCenter
                      ? 'bg-gradient-to-t from-black/80 via-black/40 to-black/10'
                      : 'bg-black/40'
                  }`}
                />

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3
                    className={`text-white font-bold transition-all duration-500 ${
                      isCenter ? 'text-2xl mb-3' : 'text-xl mb-0'
                    }`}
                  >
                    {tarjeta.titulo}
                  </h3>

                  {/* Descripción y botón solo en activa */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isCenter ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {tarjeta.descripcion && (
                      <p className="text-white/75 text-sm leading-relaxed mb-4">
                        {tarjeta.descripcion}
                      </p>
                    )}
                    {tarjeta.botonTexto && (
                      <Link
                        href={tarjeta.botonUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#CC1517] transition-colors duration-200"
                      >
                        {tarjeta.botonTexto} →
                      </Link>
                    )}
                  </div>
                </div>

                {/* Barra de progreso en tarjeta activa */}
                {isCenter && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20">
                    <div
                      className="h-full bg-primary transition-none"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Dots navegación */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {tarjetas.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCarousel
