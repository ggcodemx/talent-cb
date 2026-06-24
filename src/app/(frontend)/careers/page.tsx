import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHero from '@/components/PageHero'
import LiderazgoSplit, { type LiderazgoSplitProps } from '@/components/LiderazgoSplit'
import LiderazgoHighlight, { type LiderazgoHighlightProps } from '@/components/LiderazgoHighlight'
import LiderazgoFlipCards, { type LiderazgoFlipCardsProps } from '@/components/LiderazgoFlipCards'
import AboutDesks, { type AboutDesksProps } from '@/components/AboutDesks'

async function getCareersData() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'page-careers' })
  } catch (error) {
    console.error('Error fetching page-careers:', error)
    return null
  }
}

export default async function CareersPage() {
  const page = await getCareersData()
  const pageAny = page as any

  const splitData: LiderazgoSplitProps | null =
    pageAny?.split?.title && pageAny?.split?.body && pageAny?.split?.image
      ? {
          title: pageAny.split.title,
          body: pageAny.split.body,
          image: {
            url:
              (typeof pageAny.split.image === 'object'
                ? pageAny.split.image.url
                : pageAny.split.image) ?? '',
            alt: typeof pageAny.split.image === 'object' ? (pageAny.split.image.alt ?? '') : '',
          },
        }
      : null

  // ── Highlight ─────────────────────────────────────────────────────────────────

  const highlightData: LiderazgoHighlightProps | null =
    pageAny?.highlight?.title && pageAny?.highlight?.description && pageAny?.highlight?.image
      ? {
          eyebrow: pageAny.highlight.eyebrow ?? undefined,
          title: pageAny.highlight.title,
          description: pageAny.highlight.description,
          image: {
            url:
              (typeof pageAny.highlight.image === 'object'
                ? pageAny.highlight.image.url
                : pageAny.highlight.image) ?? '',
            alt:
              typeof pageAny.highlight.image === 'object'
                ? (pageAny.highlight.image.alt ?? '')
                : '',
          },
        }
      : null

  // ── Flip Cards ───────────────────────────────────────────────────────────────

  const flipData: LiderazgoFlipCardsProps | null =
    pageAny?.flipCards?.cardLeft?.title && pageAny?.flipCards?.cardRight?.title
      ? {
          cardLeft: {
            title: pageAny.flipCards.cardLeft.title,
            description: pageAny.flipCards.cardLeft.description ?? '',
            image: {
              url: (typeof pageAny.flipCards.cardLeft.image === 'object'
                  ? pageAny.flipCards.cardLeft.image.url
                  : pageAny.flipCards.cardLeft.image) ?? '',
              alt:
                typeof pageAny.flipCards.cardLeft.image === 'object'
                  ? (pageAny.flipCards.cardLeft.image.alt ?? '')
                  : '',
            },
          },
          cardRight: {
            title: pageAny.flipCards.cardRight.title,
            description: pageAny.flipCards.cardRight.description ?? '',
            image: {
              url: (typeof pageAny.flipCards.cardRight.image === 'object'
                  ? pageAny.flipCards.cardRight.image.url
                  : pageAny.flipCards.cardRight.image) ?? '',
              alt:
                typeof pageAny.flipCards.cardRight.image === 'object'
                  ? (pageAny.flipCards.cardRight.image.alt ?? '')
                  : '',
            },
          },
        }
      : null

  // ── Valores ──────────────────────────────────────────────────────────────────

  const desksData: AboutDesksProps | null = pageAny?.values?.length
    ? {
        items: pageAny.values.map((d: any) => ({
          title: d.title,
          description: d.description,
          image: {
            url: (typeof d.image === 'object' ? d.image.url : d.image) ?? '',
            alt: typeof d.image === 'object' ? (d.image.alt ?? '') : '',
          },
        })),
      }
    : null

  return (
    <>
      <PageHero
        title={page?.hero?.title ?? 'Carreras'}
        description={page?.hero?.description ?? ''}
      />
      {flipData && <LiderazgoFlipCards {...flipData} />}

      {desksData && (
        <AboutDesks
          {...desksData}
          heading="Cultura de trabajo"
          imageAspect="16/9"
          largeDescription
        />
      )}
      {highlightData && <LiderazgoHighlight {...highlightData} />}
    </>
  )
}
