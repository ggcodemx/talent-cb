import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Servicios Financieros.',
  heroDescription:
    'El sector financiero enfrenta dinámicas complejas que requieren liderazgo innovador y estrategias adaptativas. Nuestro enfoque se centra en identificar y desarrollar talento que pueda navegar estos entornos cambiantes con éxito.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Servicios Financieros' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Crecimiento estratégico.',
      items: [
        {
          title: 'Rigor Institucional e Innovación Digital',
          description:
            'El sector financiero enfrenta una transformación impulsada por digitalización de servicios, entrada de competidores tecnológicos y transformación de modelos de negocio. Asistimos a bancos, aseguradoras, fondos de inversión, fintechs y gestoras de activos que requieren liderazgo capaz de mantener operaciones reguladas con rigor institucional, construir capacidades digitales y competir en mercados donde la innovación define ventajas competitivas.',
          bulletsLeft: [
            { text: 'Digitalización de Servicios Financieros' },
            { text: 'Operaciones Reguladas y Rigor Institucional' },
          ],
          bulletsRight: [
            { text: 'Modelos de Negocio Basados en Innovación' },
            { text: 'Competitividad ante Entrantes Tecnológicos' },
          ],
        },
        {
          title: 'Gestión de Riesgos y Cumplimiento Regulatorio',
          description:
            'Nuestra trayectoria en el sector nos permite identificar ejecutivos que entienden las complejidades de esta industria, incluyendo gestión de riesgos, cumplimiento regulatorio y desarrollo de productos financieros. La experiencia acumulada conecta a estas organizaciones con el talento que requieren para transformaciones tecnológicas, estructuración de nuevas unidades y crecimiento en segmentos estratégicos.',
          bulletsLeft: [
            { text: 'Gestión de Riesgos Complejos' },
            { text: 'Estrictos Marcos de Cumplimiento Regulatorio' },
          ],
          bulletsRight: [
            { text: 'Desarrollo de Productos Financieros Avanzados' },
            { text: 'Estructuración de Nuevas Unidades Estratégicas' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/servicios-financieros'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
