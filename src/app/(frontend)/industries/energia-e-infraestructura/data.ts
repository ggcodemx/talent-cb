import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Energía e Infraestructura.',
  heroDescription:
    'La transición hacia fuentes renovables y la modernización de la infraestructura crítica exigen un nuevo perfil de liderazgo en el sector.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Energía e Infraestructura' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Conectando profesionales.',
      items: [
        {
          title: 'Transición Energética y Proyectos de Gran Escala',
          description:
            'El sector de energía e infraestructura vive una reconfiguración impulsada por transición hacia energías renovables, desarrollo de proyectos de gran escala y modernización de infraestructura crítica. Asistimos a desarrolladores, empresas de construcción, operadores energéticos y compañías de infraestructura que demandan líderes capaces de estructurar proyectos complejos, gestionar múltiples actores y ejecutar en marcos regulatorios dinámicos.',
          bulletsLeft: [
            { text: 'Transición hacia Energías Renovables' },
            { text: 'Estructuración de Proyectos Complejos' },
          ],
          bulletsRight: [
            { text: 'Modernización de Infraestructura Crítica' },
            { text: 'Marcos Regulatorios Dinámicos' },
          ],
        },
        {
          title: 'Financiamiento y Ejecución de Megaproyectos',
          description:
            'Nuestra trayectoria nos permite identificar ejecutivos que dominan las complejidades de este sector, incluyendo financiamiento de proyectos, gestión de construcción y operación de activos de largo plazo. Nuestra capacidad permite conectar profesionales que estas organizaciones requieren para nuevos desarrollos, transiciones energéticas y ejecución de megaproyectos en plazos críticos.',
          bulletsLeft: [
            { text: 'Financiamiento de Proyectos (Project Finance)' },
            { text: 'Gestión de Construcción Avanzada' },
          ],
          bulletsRight: [
            { text: 'Operación de Activos de Largo Plazo' },
            { text: 'Ejecución de Megaproyectos Críticos' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/energia-e-infraestructura'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
