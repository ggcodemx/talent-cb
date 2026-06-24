import type { GlobalConfig } from 'payload'

export const HomePageGlobal: GlobalConfig = {
  slug: 'page-home',
  label: 'Página: Home',
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero (Carrusel)',
      fields: [
        {
          name: 'slides',
          type: 'array',
          label: 'Slides',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', label: 'Imagen', required: true },
            { name: 'heading', type: 'text', label: 'Título', required: true },
            { name: 'subheading', type: 'textarea', label: 'Subtítulo' },
          ],
        },
        {
          name: 'autoplayInterval',
          type: 'number',
          label: 'Intervalo autoplay (ms)',
          defaultValue: 6000,
        },
      ],
    },
    {
      name: 'aboutStats',
      type: 'group',
      label: 'Sección Estadísticas',
      fields: [
        { name: 'title', type: 'text', label: 'Título', required: true },
        { name: 'description', type: 'textarea', label: 'Descripción' },
        {
          name: 'stats',
          type: 'array',
          label: 'Estadísticas',
          maxRows: 3,
          fields: [
            { name: 'number', type: 'text', label: 'Número (ej: 75+)', required: true },
            { name: 'label', type: 'text', label: 'Descripción', required: true },
          ],
        },
      ],
    },
    {
      name: 'expertiseBlock',
      type: 'group',
      label: 'Sección Expertise',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen lateral',
          required: true,
        },
      ],
    },
  ],
}
