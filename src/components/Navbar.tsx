'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

export interface NavbarProps {
  logo?: { url: string; alt: string }
  items: NavItem[]
  showSearch?: boolean
}

// ─── Mega Menu Static Data ────────────────────────────────────────────────────

type MegaLink = { label: string; href: string; desc?: string }

type ColumnsMega = {
  type: 'columns'
  eyebrow: string
  href: string
  columns: MegaLink[][]
  image: string
  imageAlt: string
}

type InsightsMega = {
  type: 'insights'
  eyebrow: string
  href: string
  posts: { title: string; date: string; href: string; tag: string }[]
  image: string
  imageAlt: string
}

type SectionsMega = {
  type: 'sections'
  href: string
  sections: { title: string; items: MegaLink[] }[]
  image: string
  imageAlt: string
}

type ServiceGroup = {
  category: string
  href: string
  items: { label: string; href: string }[]
}

type GroupedMega = {
  type: 'grouped'
  eyebrow: string
  href: string
  columns: ServiceGroup[][]
  image: string
  imageAlt: string
}

type MegaData = ColumnsMega | InsightsMega | SectionsMega | GroupedMega

// Maps label variants (any language/case) → MEGA_DATA key
const LABEL_KEY_MAP: Record<string, string> = {
  servicios: 'Services',
  services: 'Services',
  industrias: 'Industrias',
  industries: 'Industrias',
  insights: 'Insights',
  blog: 'Insights',
  about: 'About',
  'sobre nosotros': 'About',
  'sobre cb talent': 'About',
  sobre: 'About',
}

function getMegaKey(label: string): string {
  return LABEL_KEY_MAP[label.toLowerCase()] ?? label
}

const MEGA_DATA: Record<string, MegaData> = {
  Industrias: {
    type: 'columns',
    eyebrow: 'Industrias',
    href: '/industries',
    columns: [
      [
        { label: 'Automotriz', href: '/industries/automotriz' },
        { label: 'Consumo y comercio', href: '/industries/consumo-y-comercio' },
        { label: 'Educación', href: '/industries/educacion' },
        { label: 'Energía e infraestructura', href: '/industries/energia-e-infraestructura' },
        { label: 'Impacto social', href: '/industries/impacto-social' },
      ],
      [
        { label: 'Industria y manufactura', href: '/industries/industria-y-manufactura' },
        { label: 'Salud y ciencias de la vida', href: '/industries/salud-y-ciencias-de-la-vida' },
        { label: 'Servicios financieros', href: '/industries/servicios-financieros' },
        { label: 'Servicios profesionales', href: '/industries/servicios-profesionales' },
        {
          label: 'Tecnología, medios y telecomunicaciones',
          href: '/industries/tecnologia-medios-telecomunicaciones',
        },
      ],
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
    imageAlt: 'Industrias CB Talent',
  },

  Services: {
    type: 'columns',
    eyebrow: 'Servicios',
    href: '/services',
    columns: [
      [
        {
          label: 'Búsqueda ejecutiva y de liderazgo directivo',
          href: '/services/busqueda-ejecutiva',
        },
        { label: 'Búsqueda profesional y de liderazgo medio', href: '/services/liderazgo-medio' },
        {
          label: 'Estrategia de talento e inteligencia de mercado',
          href: '/services/estrategia-talento',
        },
      ],
      [
        { label: 'Evaluación y asesoría de liderazgo', href: '/services/evaluacion' },
        { label: 'Gobernanza y organización', href: '/services/gobernanza' },
        { label: 'Talento temporal y bajo demanda', href: '/services/talento-temporal' },
      ],
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80',
    imageAlt: 'Servicios CB Talent',
  },

  Insights: {
    type: 'insights',
    eyebrow: 'Últimos insights',
    href: '/blog',
    posts: [
      {
        title: 'El futuro del talento ejecutivo en México',
        date: 'Mayo 2026',
        href: '/blog/futuro-talento',
        tag: 'Tendencias',
      },
      {
        title: 'Nearshoring: oportunidades para el liderazgo regional',
        date: 'Abril 2026',
        href: '/blog/nearshoring',
        tag: 'Industria',
      },
      {
        title: 'Diversidad e inclusión en el C-suite',
        date: 'Marzo 2026',
        href: '/blog/diversidad',
        tag: 'Liderazgo',
      },
    ],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80',
    imageAlt: 'Insights CB Talent',
  },

  About: {
    type: 'columns',
    eyebrow: 'Sobre CB Talent',
    href: '/about',
    columns: [
      [
        { label: 'Quiénes somos', href: '/about' },
        { label: 'Nuestro enfoque y valor', href: '/about' },
        { label: 'Presencia local e internacional', href: '/about' },
        { label: 'Liderazgo', href: '/leadership' },
      ],
    ],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80',
    imageAlt: 'Sobre CB Talent',
  },
}

// ─── Panel Shared Image ───────────────────────────────────────────────────────

const PanelImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="flex-shrink-0 border-l border-white/10 pl-6 xl:pl-12 flex flex-col">
    <div
      className="relative flex-1 w-52 xl:w-72 2xl:w-80 rounded-xl overflow-hidden"
      style={{ minHeight: '180px' }}
    >
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="320px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  </div>
)

// ─── Panel Layouts ────────────────────────────────────────────────────────────

const ColumnsPanel: React.FC<{ data: ColumnsMega }> = ({ data }) => (
  <div className="flex gap-8 xl:gap-16 items-stretch">
    <div className="flex-1">
      <Link
        href={data.href}
        className="text-white text-xl xl:text-2xl font-semibold mb-3 hover:text-white/75 transition-colors duration-200 inline-block"
      >
        {data.eyebrow}
      </Link>
      <div className="w-8 h-0.5 bg-white mb-5 xl:mb-6" />
      <div className="flex gap-6 xl:gap-16">
        {data.columns.map((col, ci) => (
          <div key={ci} className="flex flex-col flex-1">
            {col.map((item, li) => (
              <Link
                key={li}
                href={item.href}
                className="group flex items-center gap-4 py-1.5 xl:py-2 text-white hover:text-white text-lg xl:text-lg font-light leading-snug transition-all duration-200"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-200 ease-out">
                  {item.label}
                </span>
                <svg
                  className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
    <PanelImage src={data.image} alt={data.imageAlt} />
  </div>
)

const InsightsPanel: React.FC<{ data: InsightsMega }> = ({ data }) => (
  <div className="flex gap-8 xl:gap-16 items-stretch">
    <div className="flex-1">
      <Link
        href={data.href}
        className="text-white text-xl xl:text-2xl font-semibold mb-3 hover:text-white/75 transition-colors duration-200 inline-block"
      >
        {data.eyebrow}
      </Link>
      <div className="w-8 h-0.5 bg-white mb-5 xl:mb-6" />
      <div className="flex flex-col">
        {data.posts.map((post, i) => (
          <Link
            key={i}
            href={post.href}
            className="group flex gap-4 items-start py-4 transition-colors duration-200"
          >
            <span className="text-white/25 text-xs font-medium tabular-nums mt-0.5 w-4 flex-shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-white/40 text-xs">{post.date}</span>
                <span className="inline-block w-px h-3 bg-white/20" />
                <span className="text-white/40 text-xs">{post.tag}</span>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-white group-hover:text-white text-lg xl:text-lg font-light leading-snug transition-colors duration-200 group-hover:translate-x-0.5 transform-gpu">
                  {post.title}
                </p>
                <svg
                  className="w-4 h-4 flex-shrink-0 mt-1 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
        <Link
          href="/blog"
          className="mt-5 inline-flex items-center gap-1.5 text-white/45 hover:text-white text-lg font-medium transition-colors duration-200 group/all"
        >
          Ver todos los insights
          <svg
            className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
    <PanelImage src={data.image} alt={data.imageAlt} />
  </div>
)

const SectionsPanel: React.FC<{ data: SectionsMega }> = ({ data }) => (
  <div className="flex gap-12 xl:gap-16 items-stretch">
    <div className="flex-1 flex gap-10 xl:gap-16">
      {data.sections.map((section, si) => (
        <div key={si} className="flex-1">
          <p className="text-white text-base font-semibold mb-3">{section.title}</p>
          <div className="w-8 h-0.5 bg-white mb-6" />
          <div className="flex flex-col">
            {section.items.map((item, li) => (
              <Link
                key={li}
                href={item.href}
                className="group flex items-start py-2 transition-colors duration-200"
              >
                <div>
                  <span className="inline-flex items-center gap-6 text-white/75 group-hover:text-white text-base font-light transition-all duration-200 group-hover:translate-x-1">
                    {item.label}
                    <svg
                      className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  {item.desc && (
                    <span className="block text-white/30 text-xs mt-0.5">{item.desc}</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    <PanelImage src={data.image} alt={data.imageAlt} />
  </div>
)

const GroupedPanel: React.FC<{ data: GroupedMega }> = ({ data }) => (
  <div className="flex gap-8 xl:gap-14 items-stretch">
    <div className="flex-1">
      <p className="text-white text-xl xl:text-2xl font-semibold mb-3">{data.eyebrow}</p>
      <div className="w-8 h-0.5 bg-white mb-5 xl:mb-7" />
      <div className="flex gap-6 xl:gap-14">
        {data.columns.map((col, ci) => (
          <div key={ci} className="flex flex-col flex-1 gap-7">
            {col.map((group, gi) => (
              <div key={gi}>
                <Link
                  href={group.href}
                  className="group flex items-center gap-2 text-white font-semibold text-lg xl:text-base leading-snug mb-2 xl:mb-3 hover:text-white/75 transition-colors duration-200"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 ease-out">
                    {group.category}
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <div className="flex flex-col gap-1">
                  {group.items.map((item, li) => (
                    <span
                      key={li}
                      className="flex items-start gap-2 py-0.5 text-white/50 text-lg font-light leading-snug"
                    >
                      <span className="text-white/30 mt-px flex-shrink-0 text-base leading-none">
                        ·
                      </span>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <PanelImage src={data.image} alt={data.imageAlt} />
  </div>
)

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useNavContext() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isDetailPage = /^\/(industries|services)\/.+/.test(pathname)
  return { isHome, isDetailPage, pathname }
}

function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

function absoluteHref(href: string | undefined): string {
  if (!href) return '#'
  if (href.startsWith('/') || href.startsWith('#') || href.startsWith('http')) return href
  return '/' + href
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

const MobileNavItem: React.FC<{ item: NavItem; onClose: () => void }> = ({ item, onClose }) => {
  const [open, setOpen] = useState(false)
  const megaData = MEGA_DATA[getMegaKey(item.label)]

  const allLinks: { label: string; href: string }[] = []
  if (megaData) {
    if (megaData.type === 'columns') {
      megaData.columns.forEach((col) => col.forEach((l) => allLinks.push(l)))
    } else if (megaData.type === 'sections') {
      megaData.sections.forEach((s) => s.items.forEach((l) => allLinks.push(l)))
    } else if (megaData.type === 'insights') {
      megaData.posts.forEach((p) => allLinks.push({ label: p.title, href: p.href }))
    }
  } else if (item.children) {
    item.children.forEach((c) => allLinks.push({ label: c.label, href: absoluteHref(c.href) }))
  }

  const hasChildren = allLinks.length > 0

  return (
    <div>
      {hasChildren ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between w-full px-4 py-3 text-gray-800 font-light hover:text-green-700 transition-colors"
          >
            {item.label}
            <ChevronIcon
              className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
          {open && (
            <div className="pl-4 border-l-2 border-green-100 ml-4 mb-2">
              {allLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={onClose}
                  className="block px-4 py-2 text-lg text-green-600 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={absoluteHref(item.href)}
          onClick={onClose}
          className="block px-4 py-3 text-green-800 font-medium hover:text-green-700 transition-colors"
        >
          {item.label}
        </Link>
      )}
    </div>
  )
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

const Navbar: React.FC<NavbarProps> = ({ logo, items, showSearch = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastMenuKey = useRef<string | null>(null)
  const { isHome, isDetailPage, pathname } = useNavContext()
  const scrolled = useScrolled()

  const isLight = isHome || (isDetailPage && !scrolled) || !!activeMenu

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    lastMenuKey.current = key
    setActiveMenu(key)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  useEffect(() => {
    setActiveMenu(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Keeps content visible during fade-out transition
  const displayKey = activeMenu ?? lastMenuKey.current
  const displayData = displayKey ? MEGA_DATA[displayKey] : null
  const isMegaOpen = !!activeMenu

  const textColor = isLight
    ? 'text-white hover:text-white/70'
    : 'text-green-700 hover:text-green-800'
  const searchColor = isLight
    ? 'text-white hover:text-white/70'
    : 'text-green-700 hover:text-green-800'
  const scrolledBg = isHome ? 'bg-primary shadow-sm' : 'bg-white shadow-sm'
  const headerBg = isMegaOpen ? 'bg-primary' : scrolled ? scrolledBg : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="page-padding">
        <div className="flex items-center justify-between h-14 lg:h-16 xl:h-20">
          {/* Logo */}
          <Link href="/" onClick={() => setActiveMenu(null)} className="flex-shrink-0">
            {logo ? (
              <Image
                src={isLight ? logo.url : '/api/media/file/logo_verde.png'}
                alt={logo.alt}
                width={200}
                height={200}
                className="h-10 lg:h-12 xl:h-16 w-auto object-contain"
                priority
              />
            ) : (
              <span
                className={`font-bold text-base xl:text-xl tracking-tight ${isLight ? 'text-white' : 'text-green-700'}`}
              >
                CB Talent
              </span>
            )}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-9">
            {items.map((item, index) => {
              const megaKey = getMegaKey(item.label)
              const hasMega = !!MEGA_DATA[megaKey]
              const isActive = activeMenu === megaKey

              if (hasMega) {
                return (
                  <Link
                    key={index}
                    href={absoluteHref(item.href)}
                    onMouseEnter={() => openMenu(megaKey)}
                    onMouseLeave={scheduleClose}
                    aria-expanded={isActive}
                    className={`flex items-center gap-1 text-lg xl:text-xl font-medium transition-colors duration-200 py-1 whitespace-nowrap ${textColor}`}
                  >
                    {item.label}
                    <ChevronIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                    />
                  </Link>
                )
              }

              return (
                <Link
                  key={index}
                  href={absoluteHref(item.href)}
                  className={`text-lg xl:text-xl font-medium transition-colors duration-200 py-1 whitespace-nowrap ${textColor}`}
                >
                  {item.label}
                </Link>
              )
            })}

            {showSearch && (
              <button
                aria-label="Buscar"
                className={`transition-colors duration-200 ml-1 ${searchColor}`}
              >
                <SearchIcon className="w-[18px] h-[18px]" />
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="xl:hidden text-gray-800 hover:text-green-700 transition-colors p-1"
          >
            {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mega Menu Panel ── */}
      <div
        className={`absolute top-full left-0 right-0 bg-primary border-t border-white/10 overflow-hidden transition-all duration-300 ease-out z-40 ${
          isMegaOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {/* Depth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent pointer-events-none" />
        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        {displayData && (
          <div className="page-padding py-8 xl:py-12 relative">
            {displayData.type === 'columns' && <ColumnsPanel data={displayData as ColumnsMega} />}
            {displayData.type === 'insights' && (
              <InsightsPanel data={displayData as InsightsMega} />
            )}
            {displayData.type === 'sections' && (
              <SectionsPanel data={displayData as SectionsMega} />
            )}
            {displayData.type === 'grouped' && <GroupedPanel data={displayData as GroupedMega} />}
          </div>
        )}
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`xl:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 divide-y divide-gray-50">
          {items.map((item, index) => (
            <MobileNavItem key={index} item={item} onClose={() => setMobileOpen(false)} />
          ))}
          {showSearch && (
            <div className="pt-3 px-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors">
                <SearchIcon className="w-4 h-4" />
                <span className="text-lg font-medium">Buscar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
