'use client'

import React, { useState, useRef, useCallback } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface LinkItem {
  id: string
  title: string
  description: string
  href: string
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const LINKS: LinkItem[] = [
  {
    id: '1',
    title: 'Careers',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '#',
  },
  {
    id: '2',
    title: 'About us',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '#',
  },
  {
    id: '3',
    title: 'Empower',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '#',
  },
  {
    id: '4',
    title: 'Our Services',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '#',
  },
  {
    id: '5',
    title: 'Global Industries',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '#',
  },
  {
    id: '6',
    title: 'Leadership Advisory',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    href: '#',
  },
]

const VISIBLE = 3 // items visible at a time
const ITEM_H = 132 // px — height of each item including divider

// ─── Link Row ─────────────────────────────────────────────────────────────────

const LinkRow: React.FC<{ item: LinkItem }> = ({ item }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={item.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-start justify-between gap-6 py-6 border-b border-gray-200 last:border-0 transition-all duration-200"
      style={{ minHeight: ITEM_H }}
    >
      <div className="flex-1">
        {/* Title */}
        <h3
          className={`text-2xl font-light mb-2 transition-colors duration-200 ${
            hovered ? 'text-green-800' : 'text-green-700'
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`text-md leading-relaxed transition-colors duration-200 ${
            hovered ? 'text-gray-900' : 'text-gray-600'
          }`}
        >
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <div
        className={`
          flex-shrink-0 mt-1 w-8 h-8  flex items-center justify-center
           transition-all duration-300
          ${
            hovered
              ? 'border-green-600 text-primary scale-110'
              : 'border-green-600 bg-transparent text-green-600 scale-100'
          }
        `}
      >
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${hovered ? 'translate-x-0.5' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </a>
  )
}

// ─── Arrow Button ─────────────────────────────────────────────────────────────

const ArrowBtn: React.FC<{
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}> = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
    className={`
      w-11 h-11 border flex items-center justify-center
      transition-all duration-200
      ${
        disabled
          ? 'border-white/30 text-white/30 cursor-not-allowed'
          : 'border-white/70 text-white hover:bg-white/15 hover:border-white'
      }
    `}
  >
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      {direction === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  </button>
)

// ─── Main Component ───────────────────────────────────────────────────────────

const GrowthLinks: React.FC = () => {
  const [offset, setOffset] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)

  const maxOffset = LINKS.length - VISIBLE

  const scrollTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(next, maxOffset))
      setOffset(clamped)
      if (listRef.current) {
        listRef.current.scrollTo({ top: clamped * ITEM_H, behavior: 'smooth' })
      }
    },
    [maxOffset],
  )

  return (
    <section className="w-full py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16 items-start">
          {/* ── Left: green card (static) ── */}
          <div className="bg-green-700 rounded-2xl p-10 flex flex-col justify-between min-h-[435px]">
            <h2 className="text-white font-light text-4xl lg:text-4xl leading-tight">
              How can we
              <br />
              empower your
              <br />
              growth?
            </h2>

            {/* Arrows — bottom right of card */}
            <div className="flex items-center gap-0 justify-end mt-8">
              <ArrowBtn
                direction="left"
                onClick={() => scrollTo(offset - 1)}
                disabled={offset === 0}
              />
              <ArrowBtn
                direction="right"
                onClick={() => scrollTo(offset + 1)}
                disabled={offset >= maxOffset}
              />
            </div>
          </div>

          {/* ── Right: scrollable link list ── */}
          <div>
            {/* Section title */}
            <h3 className="text-gray-900 font-medium text-2xl">Leadership Insights</h3>

            {/* Clipping window — shows exactly VISIBLE items */}
            <div className="overflow-hidden" style={{ height: VISIBLE * ITEM_H }}>
              <div
                ref={listRef}
                className="overflow-y-auto h-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {LINKS.map((item) => (
                  <LinkRow key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthLinks
