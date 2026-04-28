import type { GlobalConfig } from 'payload'

export const HeroGlobal: GlobalConfig = {
  slug: 'hero',
  label: 'Hero (Carrusel principal)',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      minRows: 1,
      maxRows: 10,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen de fondo',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Título principal',
          required: true,
        },
        {
          name: 'subheading',
          type: 'textarea',
          label: 'Subtítulo / descripción',
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'Botones',
          maxRows: 3,
          labels: {
            singular: 'Botón',
            plural: 'Botones',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Texto del botón',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Enlace (URL)',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'autoplayInterval',
      type: 'number',
      label: 'Intervalo de autoplay (ms)',
      defaultValue: 6000,
      admin: {
        description: 'Tiempo en milisegundos entre slides. Ejemplo: 6000 = 6 segundos.',
      },
    },
  ],
}
