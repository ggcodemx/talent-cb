'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DropdownItem {
  label: string
  href: string
}

export interface ExpertiseBlockProps {
  image: {
    url: string
    alt?: string
  }
  serviceItems: DropdownItem[]
  industryItems: DropdownItem[]
}

// ─── Dropdown Menu (Sin cambios, solo para que compile) ───────────────────────

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center gap-3 px-5 py-3
          border border-white/60 rounded-xl
          text-white text-sm font-medium
          transition-all duration-200
          hover:bg-white/10 hover:border-white
          focus:outline-none focus:ring-2 focus:ring-white/40
          ${open ? 'bg-white/10 border-white' : ''}
        `}
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        className={`
          absolute top-full left-0 mt-3 w-64 z-30
          bg-white rounded-xl shadow-xl border border-gray-100
          overflow-hidden
          transition-all duration-250 origin-top
          ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-90 pointer-events-none'}
        `}
      >
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

// ─── Main Component (Ajustado a Full Width) ───────────────────────────────────

const ExpertiseBlock: React.FC<ExpertiseBlockProps> = ({ image, serviceItems, industryItems }) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="bg-primary px-8 py-16 lg:px-20 flex flex-col justify-center">
          <div className="max-w-xl ml-auto lg:mr-0">
            <p className="text-white text-md font-semilight mb-4 tracking-wider">
              Knowledge Capital
            </p>

            <h2 className="text-white font-light text-4xl lg:text-5xl leading-tight mb-6">
              How can we empower
              <br />
              your growth?
            </h2>

            <p className="text-white text-lg leading-relaxed mb-10">
              Learn more about our core areas of expertise by selecting your topic of interest
              below.
            </p>

            <div className="flex flex-wrap gap-4">
              <DropdownMenu label="Service Expertise" items={serviceItems} />
              <DropdownMenu label="Global Industries" items={industryItems} />
            </div>
          </div>
        </div>

        {/* ── Right: image panel ── */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src={image.url}
            alt={image.alt ?? 'Expertise image'}
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default ExpertiseBlock
