import { getNewsByCategory } from '@/data/news'
import { ALL_SERVICES } from '@/data/services'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Gobernanza y organización.',
  heroDescription:
    'La claridad y el criterio en la toma de decisiones organizacionales dependen de la solidez de su gobernanza.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Gobernanza y organización.' },
  ],

  sections: [
    {
      tabLabel: 'Gobernanza y Organización',
      heading: 'Acompañamiento en gobernanza y organización.',
      items: [
        {
          title: 'Efectividad y evaluación de consejos',
          description:
            'Un consejo de administración cumple su función cuando opera con claridad, cuenta con la estructura adecuada y mantiene dinámicas de trabajo que permiten tomar decisiones de calidad. Evaluamos la efectividad de consejos en ejercicio, identificando áreas de formación, perfiles individuales y procesos de toma de decisiones que requieren atención. El proceso genera recomendaciones concretas sobre cambios en estructura y dinámicas de trabajo que fortalecen la capacidad del consejo para cumplir su función de supervisión y dirección estratégica.',
          bulletsLeft: [
            { text: 'Evaluación de efectividad de consejo de administración' },
            { text: 'Diagnóstico de dinámicas y estructura de trabajo' },
          ],
          bulletsRight: [
            { text: 'Recomendaciones de mejora para consejos' },
            { text: 'Optimización de procesos de toma de decisiones' },
          ],
        },
        {
          title: 'Gobernanza en empresas familiares',
          description:
            'Las empresas familiares enfrentan desafíos de gobernanza particulares donde la dinámica familiar, la propiedad y la gestión profesional del negocio deben coexistir con claridad de roles y acuerdos explícitos. Asesoramos en el diseño de estructuras que permiten separar estos ámbitos y establecer mecanismos de toma de decisiones que sostengan el crecimiento del negocio y la cohesión familiar. El trabajo abarca desde el diseño de protocolos familiares hasta la estructuración de consejos de administración y consejos de familia.',
          bulletsLeft: [
            { text: 'Claridad de roles entre propiedad y gestión' },
            { text: 'Estructuración de consejo de administración profesional' },
          ],
          bulletsRight: [
            { text: 'Planeación de sucesión en empresas familiares' },
            { text: 'Diseño e implementación de protocolos familiares' },
          ],
        },
        {
          title: 'Consejos consultivos y comités',
          description:
            'Los consejos consultivos y comités especializados amplían la capacidad de una organización para acceder a perspectivas externas, experiencia por industria y redes estratégicas relevantes para su operación. Apoyamos en el diseño, conformación y operación de estos órganos, desde la definición de su mandato hasta la identificación de los perfiles que mejor responden a sus objetivos. La correcta estructura requiere claridad sobre su propósito y su relación con la dirección ejecutiva.',
          bulletsLeft: [
            { text: 'Diseño y conformación de consejos consultivos' },
            { text: 'Integración de comités especializados por industria' },
          ],
          bulletsRight: [
            { text: 'Definición de mandatos y estructuras de operación' },
            { text: 'Alineación de perfiles con objetivos estratégicos' },
          ],
        },
        {
          title: 'Diseño organizacional',
          description:
            'El diseño de una estructura organizacional debe responder a los objetivos estratégicos y al momento de desarrollo de cada organización. Trabajamos con equipos directivos en el análisis y rediseño de estructuras que mejoran la claridad de roles, la eficiencia en la toma de decisiones y la capacidad de ejecución. Un diagnóstico de la estructura actual permite identificar brechas en el alcance de responsabilidades para traducirse en recomendaciones enfocadas.',
          bulletsLeft: [
            { text: 'Rediseño organizacional por crecimiento o cambio' },
            { text: 'Clarificación integral de roles y responsabilidades' },
          ],
          bulletsRight: [
            { text: 'Estructuración de nuevas unidades de negocio' },
            { text: 'Optimización y eficiencia en la toma de decisiones' },
          ],
        },
      ],
    },
  ],

  relatedNews: getNewsByCategory('Executive Search', 3),
  sidebar: {
    heading: 'Más servicios',
    links: ALL_SERVICES.filter((s) => s.href !== '/services/gobernanza-organizacion'),
    viewAllHref: '/services',
    viewAllLabel: 'Ver todos los servicios',
  },
}

export default data
