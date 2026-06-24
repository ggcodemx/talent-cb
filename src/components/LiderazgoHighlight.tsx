'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export interface LiderazgoHighlightProps {
  eyebrow?: string
  title: string
  description: string
  image: { url: string; alt?: string }
}

const LiderazgoHighlight: React.FC<LiderazgoHighlightProps> = ({
  eyebrow,
  title,
  description,
  image,
}) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const paragraphs = description.split('\n').filter((p) => p.trim())

  return (
    <section ref={ref} className="w-full bg-secondary/10 overflow-hidden">
      <div className="page-padding py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left: imagen ── */}
          <div className="group relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src={image.url}
              alt={image.alt ?? title}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* ── Right: texto ── */}
          <div
            className={`flex flex-col justify-center transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {eyebrow && (
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-5">
                {eyebrow}
              </p>
            )}

            {/* Línea animada */}
            <div className="mb-7 h-px bg-gray-200 w-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-700 ease-out delay-200"
                style={{ width: visible ? '40%' : '0%' }}
              />
            </div>

            <h2
              className={`text-gray-900 font-light text-2xl xl:text-3xl leading-tight mb-7 transition-all duration-700 ease-out delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {title}
            </h2>

            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-gray-600 text-base xl:text-lg leading-[1.8] font-light transition-all duration-700 ease-out ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiderazgoHighlight
