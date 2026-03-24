import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeroCarousel from './HeroCarousel'

const Hero = async () => {
  const payload = await getPayload({ config: configPromise })
  const hero = await payload.findGlobal({ slug: 'hero' })

  const slides = (hero.slides ?? []).map((slide: any) => ({
    titulo: slide.titulo,
    subtitulo: slide.subtitulo,
    botonTexto: slide.botonTexto,
    botonUrl: slide.botonUrl,
    imagenFondo: {
      url: typeof slide.imagenFondo === 'object' ? slide.imagenFondo?.url : '',
      alt: typeof slide.imagenFondo === 'object' ? slide.imagenFondo?.alt : '',
    },
  }))

  return <HeroCarousel slides={slides} />
}

export default Hero