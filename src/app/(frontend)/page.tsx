// ─────────────────────────────────────────────────────────────────────────────
// src/app/(frontend)/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeroCarousel, { type HeroSlide } from '@/components/HeroCarousel'
import AboutStats, { type AboutStatsProps } from '@/components/AboutStats'
import InsightsCarousel from '@/components/Insightscarousel'
import ExpertiseBlock, { type ExpertiseBlockProps } from '@/components/ExpertiseBlock'
import GrowthLinks from '@/components/GrowthLinks'
import CtaBanner from '@/components/Ctabanner'

async function getHeroData() {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({ slug: 'hero' })
    return data
  } catch (error) {
    console.error('Error fetching hero data:', error)
    return null
  }
}

async function getAboutStatsData(): Promise<AboutStatsProps | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({ slug: 'about-stats' as any })

    return {
      title: data.title ?? '',
      description: data.description ?? '',
      stats: (data.stats ?? []).map((s: any) => ({
        number: s.number,
        label: s.label,
      })),
    }
  } catch (error) {
    console.error('Error fetching about-stats data:', error)
    return null
  }
}

async function getExpertiseData(): Promise<ExpertiseBlockProps | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({ slug: 'expertise-block' })

    return {
      image: {
        url: typeof data.image === 'object' ? (data.image as any).url : '',
        alt: typeof data.image === 'object' ? ((data.image as any).alt ?? '') : '',
      },
      serviceItems: (data.serviceItems ?? []).map((item: any) => ({
        label: item.label,
        href: item.href,
      })),
      industryItems: (data.industryItems ?? []).map((item: any) => ({
        label: item.label,
        href: item.href,
      })),
    }
  } catch (error) {
    console.error('Error fetching expertise-block data:', error)
    return null
  }
}

export default async function HomePage() {
  const [heroData, aboutStats, expertiseData] = await Promise.all([
    getHeroData(),
    getAboutStatsData(),
    getExpertiseData(),
  ])

  // Mapea los datos de Payload al shape que espera HeroCarousel
  const slides: HeroSlide[] = (heroData?.slides ?? []).map((slide: any) => ({
    id: slide.id,
    heading: slide.heading,
    subheading: slide.subheading ?? undefined,
    image: {
      url: typeof slide.image === 'object' ? slide.image.url : slide.image,
      alt: typeof slide.image === 'object' ? (slide.image.alt ?? '') : '',
    },
    buttons: (slide.buttons ?? []).map((btn: any) => ({
      label: btn.label,
      href: btn.href,
    })),
  }))

  return (
    <>
      <HeroCarousel slides={slides} autoplayInterval={6000} />

      {/* El resto de las secciones de tu home van aquí debajo */}

      {aboutStats && <AboutStats {...aboutStats} />}
      <InsightsCarousel />

      {expertiseData && <ExpertiseBlock {...expertiseData} />}

      <GrowthLinks />
      <CtaBanner />
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AGREGA ESTO en tu globals.css  (o en styles.css si lo prefieres)
// ─────────────────────────────────────────────────────────────────────────────
//
// @keyframes fade-up {
//   from {
//     opacity: 0;
//     transform: translateY(24px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }
//
// .animate-fade-up {
//   animation: fade-up 0.6s ease both;
// }
//
// .animation-delay-150 {
//   animation-delay: 150ms;
// }
//
// .animation-delay-300 {
//   animation-delay: 300ms;
// }
