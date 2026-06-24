import type { GlobalConfig } from 'payload'

export const BlogPagel: GlobalConfig = {
  slug: 'page-blog',
  label: ' Página: Blog',
  access: { read: () => true },
  fields: [
    // ─── Hero ──────────────────────────────────────────────────────────────
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título (izquierda)',
          required: true,
          defaultValue: 'Blog',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción (derecha)',
          required: true,
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
