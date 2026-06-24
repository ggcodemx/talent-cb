import type { GlobalConfig } from 'payload'

export const CareersPageGlobal: GlobalConfig = {
  slug: 'page-careers',
  label: ' Página: Carreras',
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
          defaultValue: 'Liderazgo',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción (derecha)',
          required: true,
        },
      ],
    },

    // ─── Split: verde + imagen ─────────────────────────────────────────────
    {
      name: 'split',
      type: 'group',
      label: '② Sección: Texto verde + Imagen',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
          defaultValue: 'Liderazgo y valores',
          admin: {
            description: 'Aparece en blanco sobre el fondo verde.',
          },
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Texto',
          required: true,
          admin: {
            description:
              'Puedes usar saltos de línea para separar párrafos. Cada línea en blanco crea un nuevo párrafo.',
            rows: 8,
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen (lado derecho)',
          required: true,
        },
      ],
    },

    // ─── Highlight: imagen izq + texto der ────────────────────────────────────
    {
      name: 'highlight',
      type: 'group',
      label: '③ Sección: Imagen izquierda + Texto derecho',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Texto pequeño superior (opcional)',
          admin: { description: 'Ej: Nuestro compromiso, Nuestra filosofía…' },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
          admin: {
            description: 'Usa saltos de línea para separar párrafos.',
            rows: 6,
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen (lado izquierdo)',
          required: true,
        },
      ],
    },

    // ─── Cards giratorias ──────────────────────────────────────────────────────
    {
      name: 'flipCards',
      type: 'group',
      label: '④ Cards giratorias',
      admin: {
        description:
          'Dos cards cuadradas con efecto flip al hacer hover. La izquierda tiene overlay negro y la derecha overlay verde.',
      },
      fields: [
        {
          name: 'cardLeft',
          type: 'group',
          label: 'Card izquierda (overlay negro)',
          fields: [
            { name: 'title', type: 'text', label: 'Título', required: true },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descripción (reverso)',
              required: true,
              admin: { rows: 4 },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen de fondo',
              required: true,
            },
          ],
        },
        {
          name: 'cardRight',
          type: 'group',
          label: 'Card derecha (overlay verde)',
          fields: [
            { name: 'title', type: 'text', label: 'Título', required: true },
            {
              name: 'description',
              type: 'textarea',
              label: 'Descripción (reverso)',
              required: true,
              admin: { rows: 4 },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen de fondo',
              required: true,
            },
          ],
        },
      ],
    },

    {
      name: 'values',
      type: 'array',
      label: '⑤ Nuestros valores fundamentales',
      minRows: 1,
      maxRows: 8,
      labels: { singular: 'Valor', plural: 'Valores' },
      admin: {
        description:
          'Cada valor aparece en la lista izquierda. Al hacer hover cambia la imagen y descripción a la derecha.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Nombre del valor',
          required: true,
          admin: { description: 'Ej: Valor de integridad, Valor de innovación…' },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen representativa',
          required: true,
        },
      ],
    },
  ],
}
