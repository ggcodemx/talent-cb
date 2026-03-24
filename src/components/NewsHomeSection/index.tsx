// src/components/NewsSection/index.tsx
import Link from 'next/link'
import Image from 'next/image'

type NewsItem = {
  categoria: string
  titulo: string
  descripcion?: string
  imagen?: string
  href: string
  destacada?: boolean
}

const news: NewsItem[] = [
  {
    categoria: 'Lo más reciente',
    titulo: 'Nuevas regulaciones T-MEC para 2026: ¿Qué esperar?',
    descripcion:
      'Un vistazo detallado a las actualizaciones normativas que transformarán la producción regional y los requisitos de cumplimiento fiscal para el sector.',
    imagen: '/api/media/hero_tax.jpg',
    href: '/noticias/regulaciones-tmec-2026',
    destacada: true,
  },
  {
    categoria: 'Fiscal',
    titulo: 'Materialidad 2025: cómo documentar operaciones sin morir en el intento',
    href: '/noticias/materialidad-2025',
  },
  {
    categoria: 'Mercado Global',
    titulo: 'Cadenas de suministro: Resiliencia ante la volatilidad',
    href: '/noticias/cadenas-suministro',
  },
  {
    categoria: 'Fiscal',
    titulo: 'Reformas laborales y su impacto en el costo de producción',
    href: '/noticias/reformas-laborales',
  },
]

const NewsSection = () => {
  const destacada = news.find((n) => n.destacada)
  const secundarias = news.filter((n) => !n.destacada)

  return (
    <section className="py-16">
      <div className="page-padding">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black">Noticias Relevantes</h2>
          <Link
            href="/noticias"
            className="text-sm text-primary font-medium hover:underline"
          >
            Actualizar
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Noticia destacada */}
          {destacada && (
            <Link href={destacada.href} className="group relative rounded-2xl overflow-hidden h-[380px] block">
              {destacada.imagen && (
                <Image
                  src={destacada.imagen}
                  alt={destacada.titulo}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Badge */}
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                {destacada.categoria}
              </span>

              {/* Contenido */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold leading-snug mb-2">
                  {destacada.titulo}
                </h3>
                {destacada.descripcion && (
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {destacada.descripcion}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                  Leer más →
                </span>
              </div>
            </Link>
          )}

          {/* Noticias secundarias */}
          <div className="flex flex-col gap-4">
            {secundarias.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-1 border border-primary/30 rounded-2xl px-5 py-4 hover:border-primary transition-colors duration-200"
              >
                <span className="text-primary text-xs font-semibold uppercase tracking-wide">
                  {item.categoria}
                </span>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-black font-semibold text-sm leading-snug group-hover:text-primary transition-colors duration-200">
                    {item.titulo}
                  </h3>
                  <span className="text-primary shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default NewsSection