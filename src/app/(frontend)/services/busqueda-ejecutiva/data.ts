import { getNewsByCategory } from '@/data/news'
import { ALL_SERVICES } from '@/data/services'

import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Búsqueda ejecutiva y de liderazgo directivo',
  heroDescription:
    'El liderazgo ejecutivo determina el éxito estratégico a largo plazo. Para evaluar posiciones C-suite, miramos más allá de la trayectoria tradicional y analizamos.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Búsqueda ejecutiva y de liderazgo directivo' },
  ],

  sections: [
    {
      tabLabel: 'Vista General',
      heading:
        'Liderazgo ejecutivo requiere evaluación que va más allá de trayectoria y credenciales.',
      items: [
        {
          title: 'Búsqueda Ejecutiva (C-Suite)',
          description:
            'Las decisiones de liderazgo ejecutivo determinan la capacidad de ejecución estratégica y la dirección organizacional de largo plazo. El liderazgo en posiciones C-suite requiere una evaluación que va más allá de trayectoria y credenciales; analizamos la compatibilidad estratégica, la capacidad de ejecución en contextos específicos, la alineación con la cultura organizacional y la dinámica del consejo. Nuestro proceso integra investigación de mercado profunda y evaluación de competencias clave.',
          bulletsLeft: [
            { text: 'Evaluación de Compatibilidad Estratégica' },
            { text: 'Alineación Cultural y Dinámica de Consejo' },
          ],
          bulletsRight: [
            { text: 'Directores Generales y Líderes de Unidad' },
            { text: 'Posiciones Clave: CEO, CFO, COO, CTO, CMO, CHRO' },
          ],
        },
        {
          title: 'Sucesión de Consejo y CEO',
          description:
            'Las sucesiones de CEO y Consejo demandan una evaluación profunda de las necesidades futuras de la organización, más allá de las capacidades requeridas en el presente. Trabajamos directamente con juntas directivas y comités en procesos de sucesión planificada, emergencias de liderazgo y transiciones generacionales. El trabajo incluye la evaluación comparativa de talento interno y externo y el análisis de compatibilidad cultural.',
          bulletsLeft: [
            { text: 'Evaluación Comparativa de Talento' },
            { text: 'Transiciones Generacionales y Emergencias' },
          ],
          bulletsRight: [
            { text: 'Posiciones Clave: CEO y Presidentes' },
            { text: 'Miembros de Consejo de Administración' },
          ],
        },
        {
          title: 'Búsquedas Estratégicas y Confidenciales',
          description:
            'Ciertos movimientos de talento requieren un manejo estrictamente confidencial hasta que la organización decida comunicarlos oficialmente. Trabajamos en reestructuraciones de liderazgo, establecimiento de operaciones en nuevos mercados y sucesiones donde la discreción es determinante. Protegemos los intereses de la organización y del talento evaluado bajo los más altos estándares éticos.',
          bulletsLeft: [
            { text: 'Reestructuraciones Sensibles de Liderazgo' },
            { text: 'Expansiones y Nuevos Mercados' },
          ],
          bulletsRight: [
            { text: 'Sucesiones y Movimientos Competitivos' },
            { text: 'Garantía Absoluta de Discreción y Ética' },
          ],
        },
      ],
    },
  ],

  relatedNews: getNewsByCategory('Executive Search', 3),
  sidebar: {
    heading: 'Más servicios',
    links: ALL_SERVICES.filter((s) => s.href !== '/services/busqueda-ejecutiva'),
    viewAllHref: '/services',
    viewAllLabel: 'Ver todos los servicios',
  },
}

export default data
