import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Impacto Social.',
  heroDescription:
    'La necesidad de medir resultados y asegurar la sostenibilidad financiera exige una mayor profesionalización en las organizaciones de impacto social.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Impacto Social' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Conectando organizaciones.',
      items: [
        {
          title: 'Sostenibilidad Financiera y Operación Institucional',
          description:
            'El sector de impacto social experimenta profesionalización impulsada por creciente institucionalización, demanda de medición de resultados y búsqueda de sostenibilidad financiera. Acompañamos a fundaciones, ONGs, empresas sociales y organizaciones del tercer sector que buscan líderes capaces de equilibrar misión de impacto con operación institucional, estructurar modelos de financiamiento y construir capacidades organizacionales que permitan escalamiento.',
          bulletsLeft: [
            { text: 'Equilibrio de Misión e Impacto' },
            { text: 'Modelos de Financiamiento Sostenible' },
          ],
          bulletsRight: [
            { text: 'Medición de Resultados e Impacto' },
            { text: 'Capacidades de Escalamiento Organizacional' },
          ],
        },
        {
          title: 'Fortalecimiento de Gobernanza y Programas Medibles',
          description:
            'La amplitud de nuestra experiencia nos permite identificar ejecutivos que comprenden las particularidades de este sector, incluyendo gestión de recursos limitados, relaciones con donantes y diseño de programas con impacto medible. Conectamos a estas organizaciones con el talento que necesitan para profesionalizar operaciones, fortalecer gobernanza y transitar hacia modelos con mayor autonomía financiera.',
          bulletsLeft: [
            { text: 'Gestión de Recursos Limitados' },
            { text: 'Relaciones Estratégicas con Donantes' },
          ],
          bulletsRight: [
            { text: 'Diseño de Programas Medibles' },
            { text: 'Profesionalización y Autonomía Financiera' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/impacto-social'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
