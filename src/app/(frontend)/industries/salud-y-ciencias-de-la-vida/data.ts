import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Salud y Ciencias de la Vida.',
  heroDescription:
    'La consolidación de hospitales, las nuevas regulaciones y los modernos modelos de atención están transformando profundamente el sector salud. ',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Salud y Ciencias de la Vida' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Servicios especializados.',
      items: [
        {
          title: 'Modelos de Atención y Sostenibilidad Operativa',
          description:
            'El sector salud experimenta transformación profunda impulsada por consolidación de grupos hospitalarios, presiones regulatorias crecientes y adopción de nuevos modelos de atención médica. Trabajamos con hospitales privados, empresas farmacéuticas, compañías de dispositivos médicos y organizaciones de salud digital que demandan líderes capaces de balancear excelencia clínica con sostenibilidad operativa, navegar marcos regulatorios complejos y ejecutar en entornos altamente competitivos.',
          bulletsLeft: [
            { text: 'Consolidación de Grupos Hospitalarios' },
            { text: 'Nuevos Modelos de Atención Médica' },
          ],
          bulletsRight: [
            { text: 'Excelencia Clínica y Sostenibilidad' },
            { text: 'Entornos Altamente Competitivos' },
          ],
        },
        {
          title: 'Asuntos Regulatorios y Expansión Comercial',
          description:
            'La profundidad de nuestro conocimiento nos permite identificar ejecutivos que comprenden las particularidades de este sector, incluyendo operaciones clínicas, asuntos regulatorios y comercialización de productos de salud. Facilitamos el acceso al talento que estas organizaciones necesitan para profesionalización institucional, lanzamientos comerciales y expansión de servicios especializados.',
          bulletsLeft: [
            { text: 'Operaciones Clínicas y Sanitarias' },
            { text: 'Asuntos Regulatorios Complejos' },
          ],
          bulletsRight: [
            { text: 'Comercialización y Lanzamientos' },
            { text: 'Expansión de Servicios Especializados' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/salud-y-ciencias-de-la-vida'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
