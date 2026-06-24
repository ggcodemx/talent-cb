import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHero from '@/components/PageHero'
import IndustriesBlock, { type IndustriesBlockProps } from '@/components/IndustriesBlock'
import AboutCards, { type AboutCardsProps } from '@/components/AboutCards'
import CtaBanner from '@/components/CtaBanner'

async function getServicesData() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'page-services' })
  } catch (error) {
    console.error('Error fetching page-services:', error)
    return null
  }
}

export default async function Services() {
  const page = await getServicesData()

  const industriesData: IndustriesBlockProps | null = page?.services?.length
    ? {
        industries: page.services.map((ind: any) => ({
          name: ind.name,
          description: ind.description,
          href: ind.href,
          image: {
            url: (typeof ind.image === 'object' ? ind.image.url : ind.image) ?? '',
            alt: typeof ind.image === 'object' ? (ind.image.alt ?? '') : '',
          },
        })),
      }
    : null

  // ── Cards ──────────────────────────────────────────────────────────────────
  const cardsData: AboutCardsProps | null =
    page?.cards?.items?.length === 3
      ? {
          eyebrow: page.cards.eyebrow ?? 'How we help clients',
          heading: page.cards.heading ?? '',
          cards: page.cards.items.map((c: any) => ({
            title: c.title,
            description: c.description,
            href: c.href,
            image: {
              url: (typeof c.image === 'object' ? c.image.url : c.image) ?? '',
              alt: typeof c.image === 'object' ? (c.image.alt ?? '') : '',
            },
          })) as AboutCardsProps['cards'],
        }
      : null

  return (
    <>
      <PageHero
        title={page?.hero?.title ?? 'Industries'}
        description={page?.hero?.description ?? ''}
      />
      {industriesData && <IndustriesBlock {...industriesData} />}
      {cardsData && <AboutCards {...cardsData} />}
      <CtaBanner />
    </>
  )
}
