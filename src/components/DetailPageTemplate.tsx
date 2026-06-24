'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { NewsItem } from '@/data/news'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BulletItem {
  text: string
}

interface ContentItem {
  title: string
  description: string
  bulletsLeft?: BulletItem[]
  bulletsRight?: BulletItem[]
}

interface Section {
  tabLabel: string
  heading: string
  items: ContentItem[]
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface SidebarLink {
  label: string
  href: string
}

interface SidebarSection {
  heading: string
  links: SidebarLink[]
  viewAllHref: string
  viewAllLabel: string
}

export interface DetailPageTemplateProps {
  heroImage: string
  heroTitle: string
  heroDescription?: string
  breadcrumb?: BreadcrumbItem[]
  sections: Section[]
  relatedNews: NewsItem[]
  sidebar?: SidebarSection
  insightPromo?: {
    leftBlock: { image: string; eyebrow: string; title: string; href: string }
    rightBlock: { image: string; eyebrow: string; title: string; href: string }
  }
}

// ─── News Card ────────────────────────────────────────────────────────────────

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
  <article className="relative w-full aspect-square  overflow-hidden group shadow-md">
    {/* Imagen de fondo ocupando el 100% del cuadrado */}
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
      sizes="(max-width: 768px) 100vw, 33vw"
    />

    {/* Degradado oscuro inferior para garantizar contraste y lectura del texto */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

    {/* Contenido alineado en la parte inferior de la imagen */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-start">
      {/* Categoría en recuadro verde primary */}
      <span className="bg-secondary text-white text-xs font-semibold tracking-wide px-3 py-1.5 rounded-xl mb-3 uppercase">
        {item.category}
      </span>

      {/* Título de la noticia en h3 */}
      <h3 className="text-white font-light text-lg lg:text-xl leading-snug mb-3 line-clamp-2">
        {item.title}
      </h3>

      {/* Enlace/Botón "Read more" */}
      <Link
        href={item.href}
        className="inline-flex items-center gap-1.5 text-white/90 text-sm font-light hover:text-green-300 transition-colors duration-200"
      >
        Leer más
        <svg
          className="w-4 h-4"
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
  </article>
)

// ─── Main Component ───────────────────────────────────────────────────────────

const DetailPageTemplate: React.FC<DetailPageTemplateProps> = ({
  heroImage,
  heroTitle,
  heroDescription,
  breadcrumb,
  sections,
  relatedNews,
  sidebar,
  insightPromo,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const newsRef = useRef<HTMLElement | null>(null)
  const allTabs = [...sections.map((s) => s.tabLabel), 'Latest News']

  const scrollToSection = (index: number) => {
    const target = index === sections.length ? newsRef.current : sectionRefs.current[index]
    if (target) {
      const offset = 80
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setActiveTab(index)
  }

  useEffect(() => {
    const allRefs = [...sectionRefs.current.slice(0, sections.length), newsRef.current]
    const observers: IntersectionObserver[] = []

    allRefs.forEach((ref, i) => {
      if (!ref) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(i)
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
      )
      obs.observe(ref)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sections.length])

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative w-full" style={{ height: '72vh', minHeight: 520 }}>
        {heroImage && (
          <Image
            src={heroImage}
            alt={heroTitle}
            fill
            className="object-cover object-center"
            priority
          />
        )}
        {/* Gradient: darker left for title, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />

        {/* Content layout */}
        <div className="absolute inset-0 page-padding flex flex-col justify-between py-12 lg:py-16">
          {/* Title — vertically centered in upper area */}
          <div className="flex-1 flex items-center">
            <h1 className="text-white font-light text-2xl lg:text-4xl xl:text-5xl leading-tight max-w-xs sm:max-w-sm lg:max-w-2xl">
              {heroTitle}
            </h1>
          </div>

          {/* Info card — bottom right */}
          <div className="flex justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 w-full max-w-sm lg:max-w-md shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
              {/* Active tab label */}
              <p className="text-white/60 text-sm font-light mb-4 tracking-wide uppercase">
                {allTabs[activeTab]}
              </p>

              {/* Short description */}
              {heroDescription && (
                <p className="text-white/90 text-sm leading-relaxed mb-6">{heroDescription}</p>
              )}

              {/* Breadcrumb navigation */}
              {breadcrumb && breadcrumb.length > 0 && (
                <div className="flex flex-wrap items-center gap-y-1.5">
                  {breadcrumb.map((crumb, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="mx-2.5 text-white/30 text-xs select-none">•</span>}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="text-sm font-light text-white/70 hover:text-white transition-colors duration-200"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-sm font-medium text-white">{crumb.label}</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Content Sections + Sidebar ── */}
      <div className="w-full bg-white page-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main sections column */}
          <div className={sidebar ? 'lg:col-span-9' : 'lg:col-span-12'}>
            {sections.map((section, sIdx) => (
              <section
                key={sIdx}
                ref={(el) => {
                  sectionRefs.current[sIdx] = el
                }}
                className="py-16 lg:py-24 border-b border-light last:border-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
                  {/* Columna Izquierda: Título de la sección FIXED/STICKY en desktop */}
                  <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start self-start">
                    <h2 className="text-secondary font-light text-2xl lg:text-3xl tracking-tight">
                      {section.heading}
                    </h2>
                    <div className="w-24 h-[4px] bg-primary mt-6" />
                  </div>

                  {/* Columna Derecha: Contenidos que se desplazan con el scroll */}
                  <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24">
                    {section.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="border-b border-light pb-16 lg:pb-24 last:border-0 last:pb-0"
                      >
                        <h3 className="text-gray-900 font-light text-xl lg:text-2xl mb-4">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 max-w-3xl text-justify">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                          <div className="flex flex-col gap-3">
                            {item.bulletsLeft?.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-[5px] lg:mt-[9px]" />
                                <span className="text-secondary font-light text-sm lg:text-base leading-normal">
                                  {bullet.text}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col gap-3">
                            {item.bulletsRight?.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-[5px] lg:mt-[9px]" />
                                <span className="text-secondary font-light text-sm lg:text-base leading-normal">
                                  {bullet.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar Estático */}
          {sidebar && (
            <aside className="hidden lg:block lg:col-span-3">
              {/* Le quitamos el padding superior excesivo para que empiece 
                  exactamente a la misma altura que el título de la izquierda */}
              <div className="pt-16 lg:pt-24">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  {sidebar.heading}
                </p>
                <ul className="flex flex-col">
                  {sidebar.links.map((link: SidebarLink, i: number) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between gap-3 py-4 border-b border-light text-sm text-gray-700 hover:text-primary transition-colors duration-200 group leading-snug"
                      >
                        <span>{link.label}</span>
                        <svg
                          className="w-4 h-4 shrink-0 text-gray-300 group-hover:text-primary transition-colors duration-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={sidebar.viewAllHref}
                  className="inline-flex items-center gap-2 text-primary text-sm font-light mt-6 hover:gap-3 transition-all duration-200"
                >
                  {sidebar.viewAllLabel}
                  <svg
                    className="w-4 h-4"
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
            </aside>
          )}
        </div>
      </div>

      {/* ── Latest News ── */}
      <section
        ref={(el) => {
          newsRef.current = el
        }}
        className="w-full bg-light/40 py-16 page-padding"
      >
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-base font-light mb-1">Automotriz</p>
            <h2 className="text-gray-900 font-light text-2xl lg:text-3xl">Últimas noticias</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary text-sm font-light hover:gap-3 transition-all duration-200 flex-shrink-0 mb-2"
          >
            Ver todas la noticias
            <svg
              className="w-4 h-4"
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

        {relatedNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-base">No related news available.</p>
        )}
      </section>

      {/* ── Dual Insight Promo Section ── */}
      {insightPromo && (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[50vh] lg:h-[60vh]">
          {/* Bloque Izquierdo (Overlay Negro) */}
          <Link
            href={insightPromo.leftBlock.href}
            className="relative w-full h-[400px] lg:h-full flex flex-col justify-center items-start pl-6 md:pl-12 lg:pl-[200px] pr-8 md:pr-12 group overflow-hidden"
          >
            <Image
              src={insightPromo.leftBlock.image}
              alt={insightPromo.leftBlock.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay Negro Semi-transparente */}
            <div className="absolute inset-0 bg-black/75 transition-opacity duration-300 group-hover:bg-black/70 z-10" />

            {/* Contenido */}
            <div className="relative z-20 max-w-md">
              <span className="text-white font-semibold text-sm lg:text-base mb-2 block tracking-wide">
                {insightPromo.leftBlock.eyebrow}
              </span>
              <h2 className="text-white font-light text-2xl md:text-3xl lg:text-4xl leading-tight">
                {insightPromo.leftBlock.title}
              </h2>
            </div>
          </Link>

          {/* Bloque Derecho (Overlay Verde Secondary) */}
          <Link
            href={insightPromo.rightBlock.href}
            className="relative w-full h-[400px] lg:h-full flex flex-col justify-center items-start pl-8 md:pl-12 pr-6 md:pr-12 lg:pr-[200px] group overflow-hidden"
          >
            <Image
              src={insightPromo.rightBlock.image}
              alt={insightPromo.rightBlock.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay Verde Esmeralda / Secondary */}
            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply transition-opacity duration-300 group-hover:bg-secondary/75 z-10" />

            {/* Contenido */}
            <div className="relative z-20 max-w-md">
              <span className="text-white/90 font-light text-sm lg:text-base mb-2 block tracking-wide">
                {insightPromo.rightBlock.eyebrow}
              </span>
              <h2 className="text-white font-light text-2xl md:text-3xl lg:text-4xl leading-tight">
                {insightPromo.rightBlock.title}
              </h2>
            </div>
          </Link>
        </section>
      )}
    </>
  )
}

export default DetailPageTemplate
