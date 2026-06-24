export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHero from '@/components/PageHero'
import AboutSplit, { type AboutSplitProps } from '@/components/AboutSplit'
import AboutServices, { type AboutServicesProps } from '@/components/AboutServices'
import AboutCards, { type AboutCardsProps } from '@/components/AboutCards'
import AboutOffices from '@/components/AboutOffices'
import AboutDesks, { type AboutDesksProps } from '@/components/AboutDesks'
import FullWidthBanner from '@/components/FullWidthBanner'

async function getAboutData() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'page-about' })
  } catch (error) {
    console.error('Error fetching page-about:', error)
    return null
  }
}

export default async function AboutPage() {
  const page = await getAboutData()

  // ── Split ──────────────────────────────────────────────────────────────────
  const splitData: AboutSplitProps | null =
    page?.split?.image && page?.split?.blockOne && page?.split?.blockTwo
      ? {
          image: {
            url: (typeof page.split.image === 'object' ? page.split.image.url : page.split.image) ?? '',
            alt: typeof page.split.image === 'object' ? (page.split.image.alt ?? '') : '',
          },
          blocks: [
            {
              title: page.split.blockOne.title ?? '',
              description: page.split.blockOne.description ?? '',
            },
            {
              title: page.split.blockTwo.title ?? '',
              description: page.split.blockTwo.description ?? '',
            },
          ],
        }
      : null

  // ── Services ───────────────────────────────────────────────────────────────
  const servicesData: AboutServicesProps | null = page?.services?.length
    ? {
        items: page.services.map((s: any) => ({
          title: s.title,
          tag: s.tag,
          description: s.description,
          image: {
            url: (typeof s.image === 'object' ? s.image.url : s.image) ?? '',
            alt: typeof s.image === 'object' ? (s.image.alt ?? '') : '',
          },
        })),
      }
    : null

  // ── Desks ──────────────────────────────────────────────────────────────────
  const pageAny = page as any
  const desksData: AboutDesksProps | null = pageAny?.desks?.length
    ? {
        items: pageAny.desks.map((d: any) => ({
          title: d.title,
          description: d.description,
          image: {
            url: (typeof d.image === 'object' ? d.image.url : d.image) ?? '',
            alt: typeof d.image === 'object' ? (d.image.alt ?? '') : '',
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
        title={page?.hero?.title ?? 'About Us'}
        description={page?.hero?.description ?? ''}
      />
      {splitData && <AboutSplit {...splitData} />}
      {servicesData && <AboutServices {...servicesData} />}
      <AboutOffices />
      {desksData && <AboutDesks {...desksData} />}

      <FullWidthBanner
        text="Ready for elevate your leadership?"
        image={{
          url: '/api/media/file/hero1.jpg',
          alt: 'Banner image',
        }}
      />
    </>
  )
}
