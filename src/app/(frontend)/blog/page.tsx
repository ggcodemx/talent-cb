export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHero from '@/components/PageHero'
import NewsCarousel from '@/components/NewsCarousel'
import NewsGrid from '@/components/NewsGrid'
import ExpertiseBlock, { type ExpertiseBlockProps } from '@/components/ExpertiseBlock'

async function getBlogData() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'page-blog' })
  } catch (error) {
    console.error('Error fetching page-blog:', error)
    return null
  }
}

export default async function BlogPage() {
  const page = await getBlogData()

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
      <PageHero title={page?.hero?.title ?? 'Blog'} description={page?.hero?.description ?? ''} />
      <NewsCarousel />
      <NewsGrid />
      {expertiseData && <ExpertiseBlock {...expertiseData} />}
    </>
  )
}
