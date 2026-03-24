/**
 * ============================================================
 * globals/SiteSettings.ts — Configuración global del sitio
 * ============================================================
 * Este global contiene ajustes que afectan TODO el sitio:
 *   - Logo y nombre
 *   - Redes sociales
 *   - Información de contacto
 *   - Horarios de atención
 *   - Scripts de analítica (Google Analytics, etc.)
 *
 * Solo existe UNA instancia. Se edita en:
 *   Panel Admin → Globales → Ajustes del Sitio
 * ============================================================
 */

import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: '⚙️ Ajustes del Sitio',

  admin: {
    group: '🌐 Configuración',
    description:
      'Configuración general del sitio: logo, contacto, redes sociales. Cambia aquí para actualizar todo el sitio.',
  },

  fields: [
    // ── Identidad de la firma ──────────────────────────────────
    {
      name: 'firmName',
      label: 'Nombre de la firma',
      type: 'text',
      required: true,
      defaultValue: 'Tax Advisors',
      admin: { placeholder: 'Ej: González & Asociados · Consultores Fiscales' },
    },
    {
      name: 'tagline',
      label: 'Eslogan',
      type: 'text',
      admin: { placeholder: 'Ej: Tu socio estratégico en materia fiscal' },
    },
    {
      name: 'logo',
      label: 'Logo principal',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Recomendado: SVG o PNG transparente, mínimo 400px de ancho.',
      },
    },
    {
      name: 'logoDark',
      label: 'Logo versión oscura',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          'Versión del logo para fondos oscuros (header con fondo negro, footer, etc.).',
      },
    },
    {
      name: 'favicon',
      label: 'Favicon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Ícono del navegador. Ideal: ICO o PNG 32×32px.',
      },
    },

    // ── Información de contacto ────────────────────────────────
    {
      name: 'contact',
      label: 'Información de Contacto',
      type: 'group',
      fields: [
        {
          name: 'phone',
          label: 'Teléfono principal',
          type: 'text',
          admin: { placeholder: '+1 (555) 000-0000' },
        },
        {
          name: 'phoneAlt',
          label: 'Teléfono alternativo',
          type: 'text',
        },
        {
          name: 'whatsapp',
          label: 'Número de WhatsApp',
          type: 'text',
          admin: {
            placeholder: '15550000000',
            description: 'Solo números, con código de país. Sin +, espacios ni guiones.',
          },
        },
        {
          name: 'email',
          label: 'Email general',
          type: 'email',
          admin: { placeholder: 'contacto@tufirma.com' },
        },
        {
          name: 'emailAppointments',
          label: 'Email para citas',
          type: 'email',
          admin: { placeholder: 'citas@tufirma.com' },
        },
        {
          name: 'address',
          label: 'Dirección',
          type: 'textarea',
          admin: {
            placeholder: '123 Main Street, Suite 400\nNew York, NY 10001',
          },
        },
        {
          name: 'googleMapsUrl',
          label: 'URL de Google Maps',
          type: 'text',
          admin: {
            description: 'Link para abrir la ubicación en Google Maps.',
            placeholder: 'https://maps.google.com/?q=...',
          },
        },
      ],
    },

    // ── Horarios ───────────────────────────────────────────────
    {
      name: 'schedule',
      label: 'Horarios de Atención',
      type: 'group',
      fields: [
        {
          name: 'weekdays',
          label: 'Lunes a Viernes',
          type: 'text',
          defaultValue: '9:00 AM – 6:00 PM',
        },
        {
          name: 'saturday',
          label: 'Sábado',
          type: 'text',
          defaultValue: '10:00 AM – 2:00 PM',
        },
        {
          name: 'sunday',
          label: 'Domingo',
          type: 'text',
          defaultValue: 'Cerrado',
        },
        {
          name: 'note',
          label: 'Nota adicional de horario',
          type: 'text',
          admin: {
            placeholder: 'Ej: Durante temporada de declaraciones, atendemos hasta las 8 PM',
          },
        },
      ],
    },

    // ── Redes sociales ─────────────────────────────────────────
    {
      name: 'socialMedia',
      label: 'Redes Sociales',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          label: 'LinkedIn',
          type: 'text',
          admin: { placeholder: 'https://linkedin.com/company/tu-firma' },
        },
        {
          name: 'facebook',
          label: 'Facebook',
          type: 'text',
          admin: { placeholder: 'https://facebook.com/tufirma' },
        },
        {
          name: 'instagram',
          label: 'Instagram',
          type: 'text',
          admin: { placeholder: 'https://instagram.com/tufirma' },
        },
        {
          name: 'twitter',
          label: 'Twitter / X',
          type: 'text',
          admin: { placeholder: 'https://twitter.com/tufirma' },
        },
        {
          name: 'youtube',
          label: 'YouTube',
          type: 'text',
          admin: { placeholder: 'https://youtube.com/@tufirma' },
        },
      ],
    },

    // ── SEO Global ─────────────────────────────────────────────
    {
      name: 'seoDefaults',
      label: 'SEO por Defecto',
      type: 'group',
      admin: {
        description: 'Se aplica cuando una página no tiene SEO personalizado.',
      },
      fields: [
        {
          name: 'titleTemplate',
          label: 'Plantilla de título',
          type: 'text',
          defaultValue: '%s | Tu Firma Tax',
          admin: {
            description: '%s se reemplaza con el título de cada página.',
          },
        },
        {
          name: 'defaultDescription',
          label: 'Descripción por defecto',
          type: 'textarea',
          maxLength: 160,
          admin: { placeholder: 'Servicios de asesoría fiscal para empresas y personas físicas.' },
        },
        {
          name: 'ogImage',
          label: 'Imagen por defecto para redes sociales',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Recomendado: 1200×630px.' },
        },
      ],
    },

    // ── Scripts ────────────────────────────────────────────────
    {
      name: 'scripts',
      label: 'Scripts de Analítica',
      type: 'group',
      admin: {
        description: '⚠️ Solo el desarrollador debe modificar esta sección.',
      },
      fields: [
        {
          name: 'googleAnalyticsId',
          label: 'Google Analytics ID',
          type: 'text',
          admin: { placeholder: 'G-XXXXXXXXXX' },
        },
        {
          name: 'googleTagManagerId',
          label: 'Google Tag Manager ID',
          type: 'text',
          admin: { placeholder: 'GTM-XXXXXXX' },
        },
        {
          name: 'facebookPixelId',
          label: 'Facebook Pixel ID',
          type: 'text',
        },
      ],
    },

    // ── Header ─────────────────────────────────────────────────
    {
      name: 'navigation',
      label: 'Menú de Navegación',
      type: 'array',
      admin: {
        description: 'Define los enlaces del menú principal. Arrastra para reordenar.',
      },
      fields: [
        {
          name: 'label',
          label: 'Texto del enlace',
          type: 'text',
          required: true,
          admin: { placeholder: 'Servicios' },
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
          admin: { placeholder: '/servicios' },
        },
        {
          name: 'openInNewTab',
          label: 'Abrir en nueva pestaña',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },

    // ── Footer ─────────────────────────────────────────────────
    {
      name: 'footerText',
      label: 'Texto del Footer',
      type: 'text',
      defaultValue: '© 2024 Tu Firma Tax. Todos los derechos reservados.',
      admin: {
        description: 'Texto de derechos de autor que aparece al fondo del sitio.',
      },
    },
    {
      name: 'footerDisclaimer',
      label: 'Disclaimer legal del footer',
      type: 'textarea',
      admin: {
        placeholder:
          'La información en este sitio es de carácter general y no constituye asesoría legal.',
      },
    },
  ],
}
