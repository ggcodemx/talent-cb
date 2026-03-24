import type { GlobalConfig } from 'payload'

export const HeroGlobal: GlobalConfig = {
  slug: 'hero',
  label: 'Hero Principal',
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'titulo',
          type: 'text',
          label: 'Título',
          required: true,
        },
        {
          name: 'subtitulo',
          type: 'text',
          label: 'Subtítulo',
        },
        {
          name: 'botonTexto',
          type: 'text',
          label: 'Texto del botón',
        },
        {
          name: 'botonUrl',
          type: 'text',
          label: 'URL del botón',
        },
        {
          name: 'imagenFondo',
          type: 'upload',
          label: 'Imagen de fondo',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}