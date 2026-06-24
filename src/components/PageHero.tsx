import React from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PageHeroProps {
  title: string
  description: string
}

// ─── Component ────────────────────────────────────────────────────────────────

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <section className="w-full bg-white pt-32 md:pt-40 pb-20 page-padding min-h-[45vh] lg:h-[40vh] flex items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left — Title */}
        <h1 className="text-green-700 font-light text-3xl lg:text-5xl leading-tight">{title}</h1>

        {/* Right — Description */}
        <p className="text-gray-800 text-lg font-light leading-relaxed">{description}</p>
      </div>
    </section>
  )
}

export default PageHero
