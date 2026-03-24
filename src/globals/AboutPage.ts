/**
 * ============================================================
 * globals/AboutPage.ts — Página "Nosotros / Quiénes Somos"
 * ============================================================
 */

import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: '🏢 Página Nosotros',

  admin: {
    group: '🌐 Páginas',
    description: 'Edita el contenido de la página /nosotros.',
  },

  fields: [
    {
      name: 'hero',
      label: 'Hero de la página',
      type: 'group',
      fields: [
        {
          name: 'heading',
          label: 'Título',
          type: 'text',
          defaultValue: 'Nuestra Firma',
        },
        {
          name: 'subheading',
          label: 'Subtítulo',
          type: 'textarea',
        },
        {
          name: 'image',
          label: 'Imagen del hero',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Foto de la oficina o equipo completo. Recomendado: 1200×600px.' },
        },
      ],
    },
    {
      name: 'story',
      label: 'Historia de la firma',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Título de la sección',
          type: 'text',
          defaultValue: 'Nuestra historia',
        },
        {
          name: 'content',
          label: 'Historia',
          type: 'richText',
          admin: {
            description: 'Cuenta la historia de la firma: cuándo se fundó, misión, valores.',
          },
        },
        {
          name: 'image',
          label: 'Imagen de la sección',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'values',
      label: 'Valores de la firma',
      type: 'array',
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          label: 'Ícono',
          type: 'text',
          admin: { placeholder: '🎯' },
        },
        {
          name: 'title',
          label: 'Valor',
          type: 'text',
          admin: { placeholder: 'Integridad' },
        },
        {
          name: 'description',
          label: 'Descripción',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'certifications',
      label: 'Certificaciones y membresías',
      type: 'array',
      admin: {
        description:
          'Logos de asociaciones, certificaciones o premios. Recomendado: PNG transparente 200×100px.',
      },
      fields: [
        {
          name: 'logo',
          label: 'Logo',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'name',
          label: 'Nombre de la certificación',
          type: 'text',
          admin: { placeholder: 'Miembro del IMCP' },
        },
        {
          name: 'url',
          label: 'URL (opcional)',
          type: 'text',
        },
      ],
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
