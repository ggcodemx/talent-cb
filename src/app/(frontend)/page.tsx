import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeroCarousel, { type HeroSlide } from '@/components/HeroCarousel'
import AboutStats, { type AboutStatsProps } from '@/components/AboutStats'
import InsightsCarousel from '@/components/InsightsCarousel'
import ExpertiseBlock, { type ExpertiseBlockProps } from '@/components/ExpertiseBlock'
import GrowthLinks from '@/components/GrowthLinks'
import CtaBanner from '@/components/CtaBanner'

// ─── Fetch único para toda la página ─────────────────────────────────────────

async function getHomeData() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'page-home' })
  } catch (error) {
    console.error('Error fetching page-home:', error)
    return null
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const page = await getHomeData()

  // ── Hero ──────────────────────────────────────────────────────────────────
  const heroSlides: HeroSlide[] = (page?.hero?.slides ?? []).map((s: any) => ({
    id: s.id,
    heading: s.heading,
    subheading: s.subheading ?? undefined,
    image: {
      url: (typeof s.image === 'object' ? s.image.url : s.image) ?? '',
      alt: typeof s.image === 'object' ? (s.image.alt ?? '') : '',
    },
  }))

  // ── About Stats ───────────────────────────────────────────────────────────
  const aboutStats: AboutStatsProps | null = page?.aboutStats
    ? {
        title: page.aboutStats.title ?? '',
        description: page.aboutStats.description ?? '',
        stats: (page.aboutStats.stats ?? []).map((s: any) => ({
          number: s.number,
          label: s.label,
        })),
      }
    : null

  // ── Expertise Block ───────────────────────────────────────────────────────
  const expertiseData: ExpertiseBlockProps | null = page?.expertiseBlock?.image
    ? {
        image: {
          url: (typeof page.expertiseBlock.image === 'object'
              ? page.expertiseBlock.image.url
              : page.expertiseBlock.image) ?? '',
          alt:
            typeof page.expertiseBlock.image === 'object'
              ? (page.expertiseBlock.image.alt ?? '')
              : '',
        },
      }
    : null

  return (
    <>
      {heroSlides.length > 0 && (
        <HeroCarousel slides={heroSlides} autoplayInterval={page?.hero?.autoplayInterval ?? 6000} />
      )}

      {aboutStats && <AboutStats {...aboutStats} />}

      <InsightsCarousel />

      {expertiseData && <ExpertiseBlock {...expertiseData} />}

      <GrowthLinks />

      <CtaBanner />
    </>
  )
}
