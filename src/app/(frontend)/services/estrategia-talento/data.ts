import { getNewsByCategory } from '@/data/news'
import { ALL_SERVICES } from '@/data/services'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Estrategia de talento e inteligencia de mercado.',
  heroDescription:
    'Respaldamos a las organizaciones con la estrategia e inteligencia de mercado necesarias para tomar decisiones de talento precisas, oportunas y basadas en datos.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Estrategia de talento e inteligencia de mercado' },
  ],

  sections: [
    {
      tabLabel: 'Enfoque Especializado',
      heading: 'Elementos fundamentales para el éxito organizacional.',
      items: [
        {
          title: 'Estrategia de Talento y Planeación de Capital Humano',
          description:
            'La competitividad de una organización está directamente ligada a su capacidad para anticipar necesidades de talento. Trabajamos con equipos directivos en el diseño de estrategias que alinean la estructura de talento con los objetivos de negocio a corto y mediano plazo, abarcando diagnóstico de capacidades, proyecciones de crecimiento y escenarios de sucesión.',
          bulletsLeft: [
            { text: 'Planeación Estratégica de Capital Humano' },
            { text: 'Diagnóstico de Capacidades Organizacionales' },
          ],
          bulletsRight: [
            { text: 'Diseño de Planes de Desarrollo de Talento' },
            { text: 'Alineación de Estructura con Objetivos' },
          ],
        },
        {
          title: 'Mapeo de Talento',
          description:
            'El mapeo de talento genera inteligencia estructurada sobre perfiles específicos, identificando dónde se concentra el talento relevante, en qué organizaciones opera y cuál es su momento profesional actual. Este análisis ofrece un panorama real del mercado que permite planear movimientos con mayor certeza y tomar decisiones de contratación con información de primera mano.',
          bulletsLeft: [
            { text: 'Inteligencia de Búsqueda para Posiciones Críticas' },
            { text: 'Análisis de Disponibilidad de Perfiles Especializados' },
          ],
          bulletsRight: [
            { text: 'Benchmarking de Talento Competitivo' },
            { text: 'Panorama en Tiempo Real del Mercado' },
          ],
        },
        {
          title: 'Compensación y Benchmarking Salarial',
          description:
            'La estructura de compensación de una organización debe reflejar con precisión el estándar del mercado para sostener decisiones de atracción y retención con respaldo. Generamos análisis comparativos de compensación total para posiciones específicas, con datos desglosados por industria, tamaño de organización y geografía para estructurar ofertas competitivas.',
          bulletsLeft: [
            { text: 'Benchmarking de Posiciones Ejecutivas y Gerenciales' },
            { text: 'Revisión de Esquemas de Compensación Variable' },
          ],
          bulletsRight: [
            { text: 'Análisis Salarial para Mercados de Nearshoring' },
            { text: 'Estructuración de Ofertas Competitivas con Respaldo' },
          ],
        },
      ],
    },
  ],

  relatedNews: getNewsByCategory('Executive Search', 3),
  sidebar: {
    heading: 'Más servicios',
    links: ALL_SERVICES.filter((s) => s.href !== '/services/estrategia-talento'),
    viewAllHref: '/services',
    viewAllLabel: 'Ver todos los servicios',
  },
}

export default data
