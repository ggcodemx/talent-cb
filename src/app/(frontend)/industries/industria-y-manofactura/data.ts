import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Industria y Manufactura.',
  heroDescription:
    'La manufactura moderna debe adaptarse a nuevos procesos, cadenas de suministro más eficientes y la presión de competir en mercados globales.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Industria y Manufactura' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Equipos de alto desempeño.',
      items: [
        {
          title: 'Eficiencia Operativa y Transformación Tecnológica',
          description:
            'La manufactura avanzada enfrenta retos impulsados por automatización de procesos, optimización de cadenas de valor y presiones de eficiencia operativa en mercados globales. Colaboramos con empresas industriales, productores especializados, operadores logísticos y fabricantes que necesitan liderazgo capaz de modernizar operaciones, gestionar transformaciones tecnológicas y mantener competitividad en entornos de márgenes ajustados.',
          bulletsLeft: [
            { text: 'Automatización de Procesos Avanzados' },
            { text: 'Optimización de Cadenas de Valor' },
          ],
          bulletsRight: [
            { text: 'Eficiencia Operativa Global' },
            { text: 'Competitividad en Márgenes Ajustados' },
          ],
        },
        {
          title: 'Gestión de Plantas e Implementación de Industria 4.0',
          description:
            'Nuestra experiencia sectorial nos permite identificar ejecutivos que dominan las dinámicas de este sector, incluyendo gestión de plantas, mejora continua y seguridad industrial. Identificamos el talento que estas organizaciones requieren para reestructuraciones operativas, implementación de industria 4.0 y desarrollo de capacidades en equipos de alto desempeño.',
          bulletsLeft: [
            { text: 'Gestión de Plantas y Centros Operativos' },
            { text: 'Estrategias de Mejora Continua' },
          ],
          bulletsRight: [
            { text: 'Implementación de Industria 4.0' },
            { text: 'Equipos Operativos de Alto Desempeño' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/industria-y-manofactura'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
