/**
 * ============================================================
 * globals/HomePage.ts — Contenido de la página de inicio
 * ============================================================
 * Permite al cliente editar todas las secciones del Home:
 *   - Hero (banner principal)
 *   - Sección de estadísticas / números
 *   - Sección "Por qué elegirnos"
 *   - CTA (llamada a la acción) central
 *
 * Los servicios y testimonios se traen desde sus colecciones.
 * ============================================================
 */

import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: '🏠 Página de Inicio',

  admin: {
    group: '🌐 Páginas',
    description: 'Edita el contenido visible en la página principal del sitio.',
  },

  fields: [
    // ── HERO ───────────────────────────────────────────────────
    {
      name: 'hero',
      label: '🖼 Hero — Banner Principal',
      type: 'group',
      admin: {
        description: 'La primera sección que ven los visitantes. Es la más importante.',
      },
      fields: [
        {
          name: 'badge',
          label: 'Etiqueta pequeña sobre el título',
          type: 'text',
          admin: {
            placeholder: 'Ej: Más de 20 años de experiencia',
            description: 'Aparece como chip pequeño sobre el título principal.',
          },
        },
        {
          name: 'heading',
          label: 'Título principal',
          type: 'text',
          required: true,
          admin: { placeholder: 'Expertos en Asesoría Fiscal para Empresas y Personas' },
        },
        {
          name: 'headingHighlight',
          label: 'Palabra(s) resaltadas del título',
          type: 'text',
          admin: {
            description:
              'Si el título dice "Expertos en Asesoría Fiscal", puedes resaltar "Asesoría Fiscal". El desarrollador aplicará el estilo.',
          },
        },
        {
          name: 'subheading',
          label: 'Subtítulo / Descripción',
          type: 'textarea',
          admin: {
            placeholder:
              'Maximiza tu patrimonio y minimiza tus impuestos con estrategias legales personalizadas.',
          },
        },
        {
          name: 'ctaPrimary',
          label: 'Botón principal',
          type: 'group',
          fields: [
            {
              name: 'label',
              label: 'Texto del botón',
              type: 'text',
              defaultValue: 'Agendar consulta gratuita',
            },
            {
              name: 'url',
              label: 'URL del botón',
              type: 'text',
              defaultValue: '/contacto',
            },
          ],
        },
        {
          name: 'ctaSecondary',
          label: 'Botón secundario',
          type: 'group',
          fields: [
            {
              name: 'label',
              label: 'Texto del botón',
              type: 'text',
              defaultValue: 'Ver nuestros servicios',
            },
            {
              name: 'url',
              label: 'URL del botón',
              type: 'text',
              defaultValue: '/servicios',
            },
          ],
        },
        {
          name: 'backgroundImage',
          label: 'Imagen de fondo del hero',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description:
              'Recomendado: 1920×1080px. Puede ser una foto del equipo, oficina, o imagen abstracta de finanzas.',
          },
        },
        {
          name: 'heroImage',
          label: 'Imagen principal del hero',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Imagen que aparece al lado del texto (si el diseño es split). Recomendado: 800×900px.',
          },
        },
      ],
    },

    // ── ESTADÍSTICAS ───────────────────────────────────────────
    {
      name: 'stats',
      label: '📊 Estadísticas / Números de Impacto',
      type: 'array',
      maxRows: 4,
      admin: {
        description:
          'Números que generan confianza. Ej: "500+ clientes", "20 años de experiencia", "$10M ahorrados".',
      },
      fields: [
        {
          name: 'value',
          label: 'Número o valor',
          type: 'text',
          required: true,
          admin: { placeholder: '500+' },
        },
        {
          name: 'label',
          label: 'Descripción del número',
          type: 'text',
          required: true,
          admin: { placeholder: 'Clientes satisfechos' },
        },
        {
          name: 'icon',
          label: 'Ícono (emoji)',
          type: 'text',
          admin: { placeholder: '👥' },
        },
      ],
    },

    // ── POR QUÉ ELEGIRNOS ──────────────────────────────────────
    {
      name: 'whyUs',
      label: '✅ Sección "¿Por qué elegirnos?"',
      type: 'group',
      fields: [
        {
          name: 'sectionBadge',
          label: 'Etiqueta de sección',
          type: 'text',
          defaultValue: 'Nuestra diferencia',
        },
        {
          name: 'title',
          label: 'Título de la sección',
          type: 'text',
          defaultValue: '¿Por qué elegir nuestra firma?',
        },
        {
          name: 'description',
          label: 'Descripción de la sección',
          type: 'textarea',
        },
        {
          name: 'reasons',
          label: 'Razones / Beneficios',
          type: 'array',
          maxRows: 6,
          fields: [
            {
              name: 'icon',
              label: 'Ícono',
              type: 'text',
              admin: { placeholder: '🛡️' },
            },
            {
              name: 'title',
              label: 'Título del beneficio',
              type: 'text',
              required: true,
              admin: { placeholder: 'Confidencialidad garantizada' },
            },
            {
              name: 'description',
              label: 'Descripción',
              type: 'textarea',
              admin: {
                placeholder: 'Tu información financiera siempre protegida bajo acuerdo de confidencialidad.',
              },
            },
          ],
        },
      ],
    },

    // ── SECCIONES TOGGLEABLES ──────────────────────────────────
    {
      name: 'sections',
      label: '👁 Visibilidad de Secciones',
      type: 'group',
      admin: {
        description: 'Activa o desactiva secciones completas de la página de inicio.',
      },
      fields: [
        {
          name: 'showStats',
          label: 'Mostrar sección de estadísticas',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showServices',
          label: 'Mostrar sección de servicios',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showWhyUs',
          label: 'Mostrar sección "¿Por qué elegirnos?"',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showTeam',
          label: 'Mostrar sección del equipo',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showTestimonials',
          label: 'Mostrar sección de testimonios',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showBlog',
          label: 'Mostrar artículos recientes del blog',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showFAQs',
          label: 'Mostrar preguntas frecuentes',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },

    // ── CTA CENTRAL ────────────────────────────────────────────
    {
      name: 'ctaSection',
      label: '📣 Sección CTA Central',
      type: 'group',
      admin: {
        description: 'Banner de llamada a la acción a mitad de la página.',
      },
      fields: [
        {
          name: 'heading',
          label: 'Título',
          type: 'text',
          defaultValue: '¿Listo para optimizar tu situación fiscal?',
        },
        {
          name: 'description',
          label: 'Descripción',
          type: 'textarea',
          defaultValue: 'Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte.',
        },
        {
          name: 'buttonLabel',
          label: 'Texto del botón',
          type: 'text',
          defaultValue: 'Agendar consulta gratuita',
        },
        {
          name: 'buttonUrl',
          label: 'URL del botón',
          type: 'text',
          defaultValue: '/contacto',
        },
        {
          name: 'backgroundImage',
          label: 'Imagen de fondo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
