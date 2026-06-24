import { getNewsByCategory } from '@/data/news'
import { ALL_SERVICES } from '@/data/services'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Talento temporal y bajo demanda.',
  heroDescription:
    'Incorporar talento de alto nivel de forma inmediata requiere una red de profesionales experimentados y listos para actuar.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Talento temporal y bajo demanda.' },
  ],

  sections: [
    {
      tabLabel: 'Talento temporal y bajo demanda.',
      heading: 'Soluciones flexibles de talento senior.',
      items: [
        {
          title: 'Ejecutivos temporales',
          description:
            'La ausencia de un ejecutivo clave, una transición de liderazgo o el inicio de una operación nueva pueden requerir cobertura inmediata con un perfil de alto nivel. Identificamos ejecutivos con experiencia en roles comparables, disponibles para asumir responsabilidades de dirección por períodos definidos sin comprometer la continuidad operativa. La identificación considera experiencia comprobada, capacidad de integración rápida y habilidad para operar con efectividad desde su incorporación al rol.',
          bulletsLeft: [
            { text: 'Cobertura de posiciones ejecutivas en transición' },
            { text: 'Dirección temporal durante procesos de búsqueda' },
          ],
          bulletsRight: [
            { text: 'Liderazgo ejecutivo en arranque de operaciones' },
            { text: 'Garantía de continuidad operativa sin curvas de adaptación' },
          ],
        },
        {
          title: 'Líderes y expertos bajo demanda',
          description:
            'Algunas organizaciones necesitan acceso a capacidades específicas de liderazgo o conocimiento técnico por proyectos o períodos determinados, cuando el alcance del proyecto no justifica una contratación de largo plazo. Identificamos perfiles con experiencia relevante y disponibilidad para integrarse a equipos existentes con un mandato claro y acotado. La modalidad permite incorporar capacidades que complementan al equipo interno con total flexibilidad.',
          bulletsLeft: [
            { text: 'Liderazgo de proyectos estratégicos o de transformación' },
            { text: 'Acceso a expertise técnico o funcional acotado' },
          ],
          bulletsRight: [
            { text: 'Refuerzo de capacidades en crecimiento acelerado' },
            { text: 'Integración flexible de talento senior por objetivos' },
          ],
        },
        {
          title: 'Talento para transformación y reestructuración',
          description:
            'Los procesos de transformación organizacional y reestructuración demandan perfiles con experiencia específica en entornos de cambio, capaces de operar con velocidad y tomar decisiones en condiciones de alta complejidad. Seleccionamos perfiles con historial probado en este tipo de contextos, combinando experiencia técnica con las competencias de liderazgo que los procesos de cambio complejos requieren.',
          bulletsLeft: [
            { text: 'Liderazgo en procesos de reestructuración operativa' },
            { text: 'Dirección de transformaciones digitales o culturales' },
          ],
          bulletsRight: [
            { text: 'Gestión de crisis y recuperación organizacional' },
            { text: 'Toma de decisiones sólidas en alta complejidad' },
          ],
        },
      ],
    },
  ],

  relatedNews: getNewsByCategory('Executive Search', 3),
  sidebar: {
    heading: 'Más servicios',
    links: ALL_SERVICES.filter((s) => s.href !== '/services/talento-temporal-bajo-demanda'),
    viewAllHref: '/services',
    viewAllLabel: 'Ver todos los servicios',
  },
}

export default data
