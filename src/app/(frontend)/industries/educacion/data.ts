import { getNewsByCategory } from '@/data/news'
import { ALL_INDUSTRIES } from '@/data/industries'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Educación.',
  heroDescription:
    'Ante la evolución de los modelos pedagógicos y la exigencia de calidad, apoyamos a las instituciones educativas a fortalecer su gestión.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Industrias', href: '/industries' },
    { label: 'Educación' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading: 'Sector en Transformación',
      items: [
        {
          title: 'Modelos Pedagógicos e Innovación Educativa',
          description:
            'La educación experimenta cambios significativos impulsados por demanda creciente de calidad académica, evolución de modelos pedagógicos y necesidad de profesionalización en estructuras de liderazgo. Apoyamos a instituciones privadas, grupos educativos, edtechs y empresas de capacitación corporativa que buscan líderes capaces de equilibrar excelencia académica con sostenibilidad financiera, implementar innovación educativa y navegar estructuras de gobierno complejas.',
          bulletsLeft: [
            { text: 'Evolución de Modelos Pedagógicos' },
            { text: 'Innovación Educativa y EdTech' },
          ],
          bulletsRight: [
            { text: 'Sostenibilidad Financiera e Institucional' },
            { text: 'Estructuras de Gobierno Complejas' },
          ],
        },
        {
          title: 'Gestión Académica y Modelos Escalables',
          description:
            'La profundidad de nuestra experiencia nos permite identificar ejecutivos que comprenden las particularidades de este sector, incluyendo gestión académica, operaciones institucionales y modelos de educación híbrida. Apoyamos en identificar el talento que estas organizaciones necesitan para procesos de profesionalización, integración tecnológica y desarrollo de modelos escalables de largo plazo.',
          bulletsLeft: [
            { text: 'Gestión Académica y Operaciones' },
            { text: 'Modelos de Educación Híbrida' },
          ],
          bulletsRight: [
            { text: 'Procesos de Profesionalización' },
            { text: 'Modelos Escalables de Largo Plazo' },
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
    links: ALL_INDUSTRIES.filter((i) => i.href !== '/industries/educacion'),
    viewAllHref: '/industries',
    viewAllLabel: 'Ver todas las industrias',
  },
}

export default data
