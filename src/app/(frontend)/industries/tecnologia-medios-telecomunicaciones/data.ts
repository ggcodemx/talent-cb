import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Tecnología, Medios y Telecomunicaciones.',
  heroDescription:
    'La inversión acelerada, los ecosistemas digitales cada vez más maduros y la consolidación de empresas regionales han transformado significativamente el sector tecnológico.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Tecnología, Medios y Telecomunicaciones' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Conectando organizaciones.',
      items: [
        {
          title: 'Escalamiento Ágil y Ecosistemas Digitales',
          description:
            'El sector tecnológico ha evolucionado significativamente impulsado por inversión acelerada, maduración de ecosistemas digitales y consolidación de empresas de escala regional. Colaboramos con startups tecnológicas en crecimiento, empresas de software, plataformas digitales y operadores de telecomunicaciones que necesitan liderazgo capaz de escalar organizaciones rápidamente, ejecutar transformaciones digitales y competir por talento en mercados altamente demandados.',
          bulletsLeft: [
            { text: 'Escalamiento Rápido de Organizaciones' },
            { text: 'Maduración de Ecosistemas Digitales' },
          ],
          bulletsRight: [
            { text: 'Atracción de Talento Altamente Demandado' },
            { text: 'Ejecución de Transformaciones Digitales' },
          ],
        },
        {
          title: 'Desarrollo de Producto y Expansión Geográfica',
          description:
            'Nuestra experiencia en este ecosistema nos permite identificar ejecutivos que dominan las dinámicas tecnológicas, incluyendo desarrollo de producto, gestión de ingeniería y comercialización de soluciones digitales. Conectamos a estas organizaciones con profesionales que requieren para construcción de equipos técnicos, preparación para eventos de liquidez y expansión de operaciones en múltiples geografías.',
          bulletsLeft: [
            { text: 'Desarrollo de Producto e Ingeniería' },
            { text: 'Comercialización de Soluciones Digitales' },
          ],
          bulletsRight: [
            { text: 'Preparación para Eventos de Liquidez' },
            { text: 'Expansión Operativa Multigeográfica' },
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
    links: ALL_INDUSTRIES.filter(
      (i) => i.href !== '/industries/tecnologia-medios-telecomunicaciones',
    ),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
