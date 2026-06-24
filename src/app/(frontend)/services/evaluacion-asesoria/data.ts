import { getNewsByCategory } from '@/data/news'
import { ALL_SERVICES } from '@/data/services'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Evaluación y asesoría de liderazgo.',
  heroDescription: 'Ayudamos a las organizaciones a evaluar, desarrollar y preparar a sus líderes.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Evaluación y asesoría de liderazgo.' },
  ],

  sections: [
    {
      tabLabel: 'Evaluación y Asesoría',
      heading: 'Liderazgo efectivo requiere evaluación rigurosa y asesoría especializada.',
      items: [
        {
          title: 'Evaluación ejecutiva y de liderazgo',
          description:
            'Determinar si un líder es el adecuado para una posición o un momento organizacional específico requiere más que una revisión de trayectoria. Aplicamos metodología de evaluación que analiza competencias de liderazgo, estilo de gestión, capacidad de decisión bajo presión y compatibilidad con el equipo y la cultura donde operará. Los resultados generan un perfil detallado que la organización puede utilizar tanto para decisiones de contratación como para el diseño de planes de desarrollo individualizados.',
          bulletsLeft: [
            { text: 'Evaluación previa a contratación ejecutiva' },
            { text: 'Diagnóstico de equipos directivos' },
          ],
          bulletsRight: [
            { text: 'Evaluación en procesos de sucesión' },
            { text: 'Diseño de planes de desarrollo individualizados' },
          ],
        },
        {
          title: 'Evaluación de potencial y preparación',
          description:
            'No todo talento de alto desempeño está preparado para asumir mayor responsabilidad en el momento en que la organización lo necesita. Evaluamos el potencial de crecimiento y el nivel de preparación de profesionales identificados como sucesores o candidatos a posiciones de mayor alcance. Este análisis considera capacidades actuales, brechas de desarrollo y velocidad de aprendizaje, ofreciendo a la organización una lectura objetiva y documentada sobre cuándo y bajo qué condiciones ese talento está listo para el siguiente paso.',
          bulletsLeft: [
            { text: 'Evaluación de candidatos internos a promoción' },
            { text: 'Identificación de talento de alto potencial' },
          ],
          bulletsRight: [
            { text: 'Análisis de brechas de desarrollo y aprendizaje' },
            { text: 'Preparación de sucesores para posiciones críticas' },
          ],
        },
        {
          title: 'Integración ejecutiva',
          description:
            'Los primeros meses de un ejecutivo en una nueva posición determinan en gran medida su efectividad de largo plazo. Estructuramos procesos de integración que aceleran la comprensión del contexto organizacional, la construcción de relaciones clave y el alineamiento con las expectativas del rol. Este acompañamiento reduce el tiempo de adaptación y aumenta la probabilidad de que el ejecutivo genere impacto sostenido en los plazos y condiciones que la organización requiere desde el inicio.',
          bulletsLeft: [
            { text: 'Integración de ejecutivos contratados externamente' },
            { text: 'Transiciones internas a posiciones de mayor responsabilidad' },
          ],
          bulletsRight: [
            { text: 'Incorporación de liderazgo en entornos de cambio' },
            { text: 'Aceleración y alineamiento con las expectativas del rol' },
          ],
        },
      ],
    },
    {
      tabLabel: 'Desarrollo y Coaching',
      heading: 'Desarrollo de liderazgo y coaching.',
      items: [
        {
          title: 'Programas de Desarrollo y Acompañamiento',
          description:
            'El desarrollo de capacidades de liderazgo requiere intervenciones estructuradas y sostenidas en el tiempo, no eventos aislados. Diseñamos programas de desarrollo y procesos de coaching ejecutivo adaptados al perfil, momento profesional y objetivos específicos de cada líder. El trabajo se orienta a fortalecer competencias concretas, mejorar dinámicas de equipo y preparar a los líderes para los desafíos que su organización enfrentará en los próximos ciclos.',
          bulletsLeft: [
            { text: 'Coaching ejecutivo individualizado' },
            { text: 'Programas de desarrollo para equipos directivos' },
          ],
          bulletsRight: [
            { text: 'Intervenciones de liderazgo en transformación' },
            { text: 'Fortalecimiento de competencias y dinámicas de equipo' },
          ],
        },
      ],
    },
  ],

  relatedNews: getNewsByCategory('Executive Search', 3),
  sidebar: {
    heading: 'Más servicios',
    links: ALL_SERVICES.filter((s) => s.href !== '/services/evaluacion-asesoria'),
    viewAllHref: '/services',
    viewAllLabel: 'Ver todos los servicios',
  },
}

export default data
