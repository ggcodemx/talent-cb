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
    imagen: '/api/media/file/fondo.jpg',
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
        <p className="text-md py-2 font-semibold text-primary"> Actualizar</p>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black">Noticias Relevantes</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Noticia destacada */}
          {destacada && (
            <Link
              href={destacada.href}
              className="group relative rounded-2xl overflow-hidden h-[555px] w-full block"
            >
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

              {/* Contenido */}
              <div className="absolute inset-0 p-18 flex flex-col justify-center items-left">
                {/* El badge ahora puede ir aquí dentro si prefieres, o mantenerse absoluto arriba */}
                {/* Badge */}
                <span className=" w-[120px] top-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                  {destacada.categoria}
                </span>

                <h3 className="text-white pt-6 text-3xl font-bold leading-snug mb-2 max-w-md">
                  {destacada.titulo}
                </h3>

                {destacada.descripcion && (
                  <p className="text-white text-base leading-relaxed mb-4 line-clamp-3 max-w-lg">
                    {destacada.descripcion}
                  </p>
                )}

                <span className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors w-[120px] ">
                  Leer más{' '}
                  <svg
                    width="18" // Tamaño ligeramente ajustado
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="white"
                      strokeWidth="2" // Grosor aumentado para mejor visibilidad
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
                className="group flex flex-col gap-1 border border-primary/30 rounded-2xl px-5 py-6 hover:border-primary transition-colors duration-200"
              >
                <span className="text-primary text-[22px] font-semibold uppercase tracking-wide">
                  {item.categoria}
                </span>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-black font-semibold text-[25px] leading-snug group-hover:text-primary transition-colors duration-200">
                    {item.titulo}
                  </h3>
                  <svg
                    width="36" // Tamaño ligeramente ajustado
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="RED"
                      strokeWidth="2" // Grosor aumentado para mejor visibilidad
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
