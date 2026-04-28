import { getPayload } from 'payload'
import configPromise from '@payload-config'
import FeaturedCarousel from './FeaturedCarousel'

const FeaturedSection = async () => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'featured-section' as any }) 
  const tarjetas = (data?.tarjetas ?? []).map((t: any) => ({
    titulo: t?.titulo ?? '',
    descripcion: t?.descripcion ?? '',
    botonTexto: t?.botonTexto ?? 'Leer más',
    botonUrl: t?.botonUrl ?? '/',
    imagen: {
      url: typeof t?.imagen === 'object' ? t.imagen?.url ?? '' : '',
      alt: typeof t?.imagen === 'object' ? t.imagen?.alt ?? '' : '',
    },
  }))

  return (
    <FeaturedCarousel
      titulo={data?.titulo ?? 'Más sobre CB Tax'}
      descripcion={data?.descripcion}
      tarjetas={tarjetas}
    />
  )
}

export default FeaturedSection