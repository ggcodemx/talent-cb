import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Servicios Profesionales.',
  heroDescription:
    'Ante un mercado de servicios profesionales en constante consolidación y especialización, apoyamos a firmas y despachos a encontrar el liderazgo adecuado.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Servicios Profesionales' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Retención de clientes clave.',
      items: [
        {
          title: 'Desarrollo de Prácticas y Estructuras de Socios',
          description:
            'Las firmas de servicios profesionales enfrentan presiones competitivas impulsadas por especialización creciente, consolidación de mercados y demanda de capacidades multidisciplinarias. Acompañamos a despachos legales, firmas de consultoría, empresas de auditoría y agencias especializadas que buscan líderes capaces de desarrollar nuevas prácticas, construir relaciones de largo plazo con clientes y gestionar estructuras de socios complejas.',
          bulletsLeft: [
            { text: 'Desarrollo de Prácticas Multidisciplinarias' },
            { text: 'Gestión de Estructuras Complejas de Socios' },
          ],
          bulletsRight: [
            { text: 'Especialización y Consolidación de Mercado' },
            { text: 'Relaciones de Largo Plazo con Clientes' },
          ],
        },
        {
          title: 'Modelos Basados en Expertise y Expansión',
          description:
            'El alcance de nuestra red nos permite identificar ejecutivos que comprenden las particularidades de este sector, incluyendo desarrollo de negocio, gestión de talento profesional y operación en modelos basados en expertise. Apoyamos a estas organizaciones en atraer el talento que necesitan para incorporación de equipo senior, apertura de prácticas especializadas y expansión a nuevas geografías.',
          bulletsLeft: [
            { text: 'Modelos de Operación Basados en Expertise' },
            { text: 'Estrategias de Desarrollo de Negocio' },
          ],
          bulletsRight: [
            { text: 'Incorporación de Equipo Senior' },
            { text: 'Apertura de Prácticas y Expansión Geográfica' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/servicios-profesionales'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
