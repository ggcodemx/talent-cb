import React from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FullWidthBannerProps {
  text: string
  image: {
    url: string
    alt?: string
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ text, image }) => {
  return (
    <section className="relative w-full h-40 md:h-52 overflow-hidden">
      {/* Background image */}
      <Image
        src={image.url}
        alt={image.alt ?? ''}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Primary color overlay */}
      <div className="absolute inset-0 bg-primary/65" />

      {/* Text */}
      <div className="relative z-10 h-full flex items-center justify-center page-padding">
        <h2 className="text-white font-light text-xl md:text-3xl text-center leading-snug max-w-4xl">
          {text}
        </h2>
      </div>
    </section>
  )
}

export default FullWidthBanner
