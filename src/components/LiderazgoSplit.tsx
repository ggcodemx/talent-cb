import React from 'react'
import Image from 'next/image'

export interface LiderazgoSplitProps {
  title: string
  body: string
  image: { url: string; alt?: string }
}

const LiderazgoSplit: React.FC<LiderazgoSplitProps> = ({ title, body, image }) => {
  const paragraphs = body.split('\n').filter((p) => p.trim())

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      {/* ── Left: fondo verde ── */}
      <div className="bg-primary flex flex-col justify-center pl-6 md:pl-12 lg:pl-[200px] pr-8 md:pr-12 lg:pr-16 py-16 lg:py-24">
        <h2 className="text-white font-light text-2xl xl:text-3xl leading-tight mb-8">
          {title}
        </h2>
        <div className="space-y-5">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-white/80 text-base xl:text-lg leading-[1.85] font-light"
            >
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* ── Right: imagen ── */}
      <div className="relative min-h-[360px] lg:min-h-0">
        <Image
          src={image.url}
          alt={image.alt ?? title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}

export default LiderazgoSplit
