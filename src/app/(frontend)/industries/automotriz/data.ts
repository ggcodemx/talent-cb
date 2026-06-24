import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=80',
  heroTitle: 'Automotriz.',
  heroDescription:
    'La industria automotriz vive una transformación significativa impulsada por la expansión global, electrificación de vehículos y reconfiguración de cadenas de suministro a nivel internacional.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Automotriz' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Enfoque Especializado.',
      items: [
        {
          title: 'Operaciones Globales y Cadena de Suministro',
          description:
            'La industria automotriz vive una transformación significativa impulsada por la expansión global, electrificación de vehículos y reconfiguración de cadenas de suministro a nivel internacional. Trabajamos con fabricantes, proveedores y nuevos entrantes tecnológicos que requieren liderazgo ejecutivo capaz de navegar este contexto de cambio acelerado, integrando equipos completos y talento global en operaciones locales con estructuras organizacionales complejas.',
          bulletsLeft: [
            { text: 'Electrificación y Nuevas Tecnologías' },
            { text: 'Reconfiguración de Suministro Internacional' },
          ],
          bulletsRight: [
            { text: 'Integración de Talento Global' },
            { text: 'Estructuras Organizacionales Complejas' },
          ],
        },
        {
          title: 'Atracción de Liderazgo Ejecutivo y Calidad',
          description:
            'Nuestro conocimiento del ecosistema automotriz nos permite identificar ejecutivos que comprenden las dinámicas de esta industria, desde gestión de operaciones complejas hasta negociación con múltiples niveles organizacionales y cumplimiento de estándares de calidad. Identificamos y atraemos el talento que estas organizaciones requieren en su etapa actual de desarrollo y expansión.',
          bulletsLeft: [
            { text: 'Gestión de Operaciones Complejas' },
            { text: 'Negociación Multinivel' },
          ],
          bulletsRight: [
            { text: 'Estándares de Calidad Internacional' },
            { text: 'Estrategias de Expansión Corporativa' },
          ],
        },
      ],
    },
  ],

  insightPromo: {
    leftBlock: {
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80',
      eyebrow: 'Últimas Noticias',
      title: 'Perspectivas de la Industria',
      href: '/blog/perspectivas-industria-1',
    },
    rightBlock: {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
      eyebrow: 'Últimas Noticias',
      title: 'Perspectivas de la Industria',
      href: '/blog/perspectivas-industria-2',
    },
  },

  relatedNews: getNewsByCategory('Global Trends', 3),
  sidebar: {
    heading: 'Más industrias',
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/automotriz'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
