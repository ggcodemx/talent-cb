/**
 * ============================================================
 * globals/ContactPage.ts — Contenido de la página de contacto
 * ============================================================
 */

import type { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: '📞 Página de Contacto',

  admin: {
    group: '🌐 Páginas',
    description: 'Edita el contenido de la página /contacto.',
  },

  fields: [
    {
      name: 'heading',
      label: 'Título principal',
      type: 'text',
      defaultValue: 'Contáctanos',
    },
    {
      name: 'subheading',
      label: 'Subtítulo',
      type: 'textarea',
      defaultValue: 'Estamos aquí para resolver tus dudas. Agenda tu consulta gratuita hoy.',
    },
    {
      name: 'formTitle',
      label: 'Título del formulario',
      type: 'text',
      defaultValue: 'Envíanos un mensaje',
    },
    {
      name: 'formSuccessMessage',
      label: 'Mensaje de éxito al enviar el formulario',
      type: 'textarea',
      defaultValue: '¡Gracias por contactarnos! Te responderemos en menos de 24 horas hábiles.',
    },
    {
      name: 'consultationInfo',
      label: 'Información de consulta gratuita',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Título',
          type: 'text',
          defaultValue: 'Consulta inicial gratuita',
        },
        {
          name: 'duration',
          label: 'Duración',
          type: 'text',
          defaultValue: '30 minutos',
        },
        {
          name: 'description',
          label: 'Descripción',
          type: 'textarea',
          defaultValue: 'Sin compromiso. Analizamos tu situación y te decimos cómo podemos ayudarte.',
        },
        {
          name: 'calendarUrl',
          label: 'URL de Calendly u otra herramienta de citas',
          type: 'text',
          admin: {
            placeholder: 'https://calendly.com/tu-firma/consulta',
            description: 'Si usas Calendly, Acuity u otra app de citas, pega el link aquí.',
          },
        },
      ],
    },
    {
      name: 'mapEmbed',
      label: 'Embed de Google Maps',
      type: 'textarea',
      admin: {
        description:
          'Pega aquí el código iframe de Google Maps. Ve a maps.google.com → Compartir → Insertar mapa.',
        placeholder: '<iframe src="https://www.google.com/maps/embed?..." ...></iframe>',
      },
    },
    {
      name: 'seo',
      label: 'SEO',
      type: 'group',
      fields: [
        { name: 'metaTitle', label: 'Título SEO', type: 'text' },
        { name: 'metaDescription', label: 'Meta descripción', type: 'textarea', maxLength: 160 },
      ],
    },
  ],
}
