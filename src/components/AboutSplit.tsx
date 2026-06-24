import React from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AboutSplitBlock {
  title: string
  description: string
}

export interface AboutSplitProps {
  image: {
    url: string
    alt?: string
  }
  blocks: [AboutSplitBlock, AboutSplitBlock]
}

// ─── Component ────────────────────────────────────────────────────────────────

const BLOCK_COLORS = ['bg-primary', 'bg-secondary']

const AboutSplit: React.FC<AboutSplitProps> = ({ image, blocks }) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* ── Left: image ── */}
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src={image.url}
            alt={image.alt ?? ''}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* ── Right: two text blocks ── */}
        <div className="flex flex-col">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`${BLOCK_COLORS[i]} flex-1 flex flex-col justify-center pl-8 md:pl-12 pr-6 md:pr-12 lg:pr-[200px] py-12 lg:py-0`}
            >
              <h3 className="text-white font-light text-2xl lg:text-3xl mb-3">{block.title}</h3>
              <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-6xl">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSplit
