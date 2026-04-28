import type { GlobalConfig } from 'payload'

export const FeaturedSectionGlobal: GlobalConfig = {
  slug: 'featured-section',
  label: 'Sección Destacada',
  fields: [
    {
      name: 'titulo',
      type: 'text',
      label: 'Título',
      defaultValue: 'Más sobre CB Tax',
    },
    {
      name: 'descripcion',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'tarjetas',
      type: 'array',
      label: 'Tarjetas',
      minRows: 1,
      fields: [
        {
          name: 'titulo',
          type: 'text',
          label: 'Título',
          required: true,
        },
        {
          name: 'descripcion',
          type: 'textarea',
          label: 'Descripción',
        },
        {
          name: 'botonTexto',
          type: 'text',
          label: 'Texto del botón',
          defaultValue: 'Leer más',
        },
        {
          name: 'botonUrl',
          type: 'text',
          label: 'URL del botón',
          required: true,
        },
        {
          name: 'imagen',
          type: 'upload',
          label: 'Imagen',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}