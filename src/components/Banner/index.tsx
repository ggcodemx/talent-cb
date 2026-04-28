import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const BannerCTA = async () => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.findGlobal({ slug: 'banner-cta' as any}) as any

  const imagenUrl = typeof data?.imagen === 'object' ? data.imagen?.url : null

  return (
    <section className="relative w-full h-[520px] overflow-hidden z-0">

      {/* Imagen de fondo */}
      {imagenUrl && (
        <Image
          src={imagenUrl}
          alt="Banner CB Tax"
          fill
          className="object-cover object-center"
        />
      )}

      {/* Overlay gris oscuro */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Isotipo decorativo derecha */}
      <div className="absolute -right-66 top-1/2 -translate-y-1/2 w-[620px] h-[620px] opacity-90 pointer-events-none">
        <Image
          src="/api/media/file/iso_blnaco.png"
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-[90px] max-w-3xl">
        <h2 className="text-white text-4xl lg:text-6xl font-normal leading-tight mb-6">
          {data?.titulo}
        </h2>
        {data?.descripcion && (
          <p className="text-white font-light text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            {data.descripcion}
          </p>
        )}
        {data?.botonTexto && (
          <Link
            href={data.botonUrl ?? '/'}
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-2 rounded-full font-medium w-fit hover:bg-[#CC1517] transition-colors duration-200 text-base"
          >
            {data.botonTexto} →
          </Link>
        )}
      </div>

    </section>
  )
}

export default BannerCTA