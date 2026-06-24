import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import OfficesGrid from '@/components/OfficesGrid'

async function getContactData() {
  try {
    const payload = await getPayload({ config: configPromise })
    return await payload.findGlobal({ slug: 'page-contact' })
  } catch (error) {
    console.error('Error fetching page-contact:', error)
    return null
  }
}

export default async function Contact() {
  const page = await getContactData()

  return (
    <>
      <PageHero
        title={page?.hero?.title ?? 'Contacto'}
        description={page?.hero?.description ?? ''}
      />
      <ContactForm />
      <OfficesGrid />
    </>
  )
}
