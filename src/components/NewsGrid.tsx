'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NewsItem {
  id: string
  category: string
  title: string
  description: string
  image: string
  href: string
  date: string // ISO string
}

// ─── Static Data ──────────────────────────────────────────────────────────────

const ALL_NEWS: NewsItem[] = [
  {
    id: '1',
    category: 'Global Trends',
    title: 'Tech-Ready Leadership: A New Paradigm',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    href: '#',
    date: '2026-05-10',
  },
  {
    id: '2',
    category: 'Executive Search',
    title: 'The New Profile of the C-Suite Executive in Latin America',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    href: '#',
    date: '2026-05-05',
  },
  {
    id: '3',
    category: 'Talent Strategy',
    title: 'Succession Planning: Building Pipelines That Last',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    href: '#',
    date: '2026-04-28',
  },
  {
    id: '4',
    category: 'Board Advisory',
    title: 'The Future of Board Governance in 2026',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&q=80',
    href: '#',
    date: '2026-04-20',
  },
  {
    id: '5',
    category: 'Leadership',
    title: 'Building Resilient Leadership in Uncertain Times',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
    href: '#',
    date: '2026-04-14',
  },
  {
    id: '6',
    category: 'Executive Search',
    title: 'How Top Companies Attract C-Suite Talent',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    href: '#',
    date: '2026-04-07',
  },
  {
    id: '7',
    category: 'Talent Strategy',
    title: 'DE&I as a Competitive Advantage in 2026',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    href: '#',
    date: '2026-03-30',
  },
  {
    id: '8',
    category: 'Global Trends',
    title: 'ESG and Its Impact on Corporate Talent Decisions',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    href: '#',
    date: '2026-03-18',
  },
  {
    id: '9',
    category: 'Leadership',
    title: 'Culture as the New Currency of Executive Retention',
    description:
      'Cras volutpat nunc orci, fringilla rhoncus risus lacinia volutpat. Duis tempor purus sed interdum hendrerit.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80',
    href: '#',
    date: '2026-03-05',
  },
]

const CATEGORIES = ['Todas', 'Global Trends', 'Executive Search', 'Talent Strategy', 'Board Advisory', 'Leadership']
const PAGE_SIZE = 6

// ─── Icons ────────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const ChevronIcon = () => (
  <svg className="w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

// ─── News Card ────────────────────────────────────────────────────────────────

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-shadow duration-300 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9' }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover object-center transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Category tag */}
        <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-light px-3 py-1 rounded-sm z-10">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-gray-900 font-light text-base leading-snug mb-2">{item.title}</h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{item.description}</p>

        <Link
          href={item.href}
          className="inline-flex items-center gap-1.5 mt-4 text-primary text-sm font-light hover:gap-2.5 transition-all duration-200"
        >
          Read more
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export interface NewsGridProps {
  eyebrow?: string
  title?: string
  description?: string
}

const NewsGrid: React.FC<NewsGridProps> = ({
  eyebrow = 'Noticias',
  title = 'Trending now',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}) => {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState('Todas')
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    let list = [...ALL_NEWS]

    if (category !== 'Todas') {
      list = list.filter((n) => n.category === category)
    }

    if (keyword.trim()) {
      const kw = keyword.toLowerCase()
      list = list.filter(
        (n) =>
          n.title.toLowerCase().includes(kw) ||
          n.description.toLowerCase().includes(kw) ||
          n.category.toLowerCase().includes(kw),
      )
    }

    list.sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime()
      return sort === 'newest' ? diff : -diff
    })

    return list
  }, [keyword, category, sort])

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  // Reset pagination on filter change
  const handleCategory = (cat: string) => { setCategory(cat); setVisible(PAGE_SIZE) }
  const handleSort = (s: 'newest' | 'oldest') => { setSort(s); setVisible(PAGE_SIZE) }
  const handleKeyword = (v: string) => { setKeyword(v); setVisible(PAGE_SIZE) }

  return (
    <section className="w-full bg-[#f4f6f4] py-16 page-padding">

      {/* ── Header ── */}
      <div className="mb-10">
        <p className="text-primary text-base font-light mb-1">{eyebrow}</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-gray-900 font-light text-2xl lg:text-4xl leading-tight">{title}</h2>
            {description && (
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed mt-2 max-w-xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Filters bar ── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            value={keyword}
            onChange={(e) => handleKeyword(e.target.value)}
            placeholder="Buscar artículo..."
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 outline-none focus:border-primary transition-colors duration-200"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <select
            value={category}
            onChange={(e) => handleCategory(e.target.value)}
            className="appearance-none pl-4 pr-9 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-primary transition-colors duration-200 cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            <ChevronIcon />
          </span>
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => handleSort(e.target.value as 'newest' | 'oldest')}
            className="appearance-none pl-4 pr-9 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 outline-none focus:border-primary transition-colors duration-200 cursor-pointer"
          >
            <option value="newest">Más reciente</option>
            <option value="oldest">Más antiguo</option>
          </select>
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            <ChevronIcon />
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      {shown.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-gray-400 text-base">
          No se encontraron artículos con esos criterios.
        </div>
      )}

      {/* ── Load more ── */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="px-8 py-3 bg-primary text-white text-sm font-light rounded-full hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Cargar más
          </button>
        </div>
      )}
    </section>
  )
}

export default NewsGrid
