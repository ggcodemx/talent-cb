import { getNewsByCategory } from '@/data/news'
import { ALL_SERVICES } from '@/data/services'
import type { DetailPageTemplateProps } from '@/components/DetailPageTemplate'

const data: DetailPageTemplateProps = {
  heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  heroTitle: 'Búsqueda profesional y de liderazgo medio.',
  heroDescription:
    'El éxito operativo de una organización depende de quienes convierten la estrategia en acciones concretas.',
  breadcrumb: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/services' },
    { label: 'Búsqueda profesional y de liderazgo medio' },
  ],

  sections: [
    {
      tabLabel: 'Enfoque Especializado',
      heading: 'Enfoque Especializado.',
      items: [
        {
          title: 'Búsqueda de Liderazgo Medio y Senior',
          description:
            'La solidez operativa de una organización depende en gran medida de quienes traducen las decisiones estratégicas en ejecución concreta. Evaluamos profesionales para posiciones de dirección y gerencia senior con historial probado en entornos de alta exigencia, con atención particular a su desempeño dentro de estructuras organizacionales comparables y su habilidad para mantener resultados consistentes.',
          bulletsLeft: [
            { text: 'Traducción de Estrategia en Ejecución' },
            { text: 'Historial Probado en Alta Exigencia' },
          ],
          bulletsRight: [
            { text: 'Posiciones: Gerentes de Área y Directores' },
            { text: 'Coordinadores y Líderes de Equipo' },
          ],
        },
        {
          title: 'Roles Especializados y Críticos',
          description:
            'Algunas posiciones combinan conocimiento técnico profundo con responsabilidad operativa, lo que reduce el universo de talento disponible y eleva el costo de una contratación incorrecta. Analizamos el perfil técnico en función del entorno real donde operará el profesional, considerando la composición del equipo y las exigencias del contexto operativo mediante una precisa investigación de mercado.',
          bulletsLeft: [
            { text: 'Precisión en Investigación de Mercado' },
            { text: 'Validación de Competencias Técnicas' },
          ],
          bulletsRight: [
            { text: 'Perfiles: Regulación, Compliance y Datos' },
            { text: 'Expertos en Cadena de Suministro y Procesos' },
          ],
        },
        {
          title: 'Contratación para Crecimiento Acelerado',
          description:
            'Las organizaciones en expansión necesitan incorporar talento con rapidez sin que la velocidad comprometa la calidad de cada decisión de contratación. Acompañamos estos procesos con una metodología que sostiene el estándar de evaluación, abarcando desde la definición de perfiles hasta la priorización de incorporaciones según el momento de desarrollo y exigencia de la operación.',
          bulletsLeft: [
            { text: 'Evaluación Eficiente en Tiempos Cortos' },
            { text: 'Sostenibilidad del Estándar de Selección' },
          ],
          bulletsRight: [
            { text: 'Expansión Regional o Nacional de Empresas' },
            { text: 'Construcción de Nuevas Unidades Operativas' },
          ],
        },
        {
          title: 'Talento para Nearshoring y Expansión',
          description:
            'La instalación de operaciones en nuevos mercados demanda profesionales con experiencia en entornos de arranque, capacidad para trabajar con recursos limitados y conocimiento del contexto regulatorio y cultural local. Identificamos talento local o perfiles dispuestos a relocalizarse, aprovechando nuestra experiencia acumulada en proyectos de nearshoring en México.',
          bulletsLeft: [
            { text: 'Atracción de Talento Local y Relocalización' },
            { text: 'Conocimiento Regulatorio y Cultural Local' },
          ],
          bulletsRight: [
            { text: 'Instalación de Centros de Manufactura' },
            { text: 'Proyectos de Nearshoring en México y LATAM' },
          ],
        },
      ],
    },
  ],

  relatedNews: getNewsByCategory('Executive Search', 3),
  sidebar: {
    heading: 'Más servicios',
    links: ALL_SERVICES.filter((s) => s.href !== '/services/busqueda-profesional'),
    viewAllHref: '/services',
    viewAllLabel: 'Ver todos los servicios',
  },
}

export default data
