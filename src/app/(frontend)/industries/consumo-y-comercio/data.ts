import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Consumo y comercio',
  heroDescription:
    'Ayudamos a retailers, marcas de consumo y plataformas digitales a responder a la rápida digitalización y a los cambios en las preferencias del mercado.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Consumo y comercio' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Facilitamos la conexión con profesionales.',
      items: [
        {
          title: 'Estrategia Omnicanal y Canales Digitales',
          description:
            'El sector de consumo y comercio experimenta transformación acelerada impulsada por digitalización de canales, cambios en preferencias de consumidores y consolidación de mercados. Colaboramos con retailers, marcas de consumo, empresas de hospitalidad y plataformas digitales que necesitan liderazgo capaz de integrar estrategias omnicanal, construir experiencias diferenciadas y ejecutar en entornos altamente competitivos.',
          bulletsLeft: [
            { text: 'Integración de Estrategias Omnicanal' },
            { text: 'Digitalización de Canales de Venta' },
          ],
          bulletsRight: [
            { text: 'Consolidación en Entornos Competitivos' },
            { text: 'Experiencias de Consumidor Diferenciadas' },
          ],
        },
        {
          title: 'Transformación Comercial y Expansión',
          description:
            'El alcance de nuestra experiencia nos permite identificar ejecutivos que entienden las dinámicas comerciales, la gestión de operaciones multicanal, el desarrollo de marcas y los procesos de expansión geográfica. Facilitamos la conexión con profesionales que estas organizaciones requieren para transformación digital, expansión estratégica y crecimiento sostenido en mercados competidos.',
          bulletsLeft: [
            { text: 'Gestión de Operaciones Multicanal' },
            { text: 'Desarrollo de Marcas y Posicionamiento' },
          ],
          bulletsRight: [
            { text: 'Procesos de Expansión Geográfica' },
            { text: 'Transformación Digital y Crecimiento Sostenido' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/consumo-y-comercio'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
