import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Hero from '@/components/Hero'
import NewsSection from '@/components/NewsHomeSection'


async function getData() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const homeData = await payload.findGlobal({ slug: 'home-page' })

  return { homeData }
}


export default async function HomePage() {
  const { homeData } = await getData();
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <Hero />
      <NewsSection />
    </>
  )
}
