import type { GlobalConfig } from 'payload'

export const PageIndustriesGlobal: GlobalConfig = {
  slug: 'page-industries',
  label: ' Página: Industrias',
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
          defaultValue: 'Industrias',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción (derecha)',
          required: true,
        },
      ],
    },
    // ② Industries list
    {
      name: 'industries',
      type: 'array',
      label: 'Lista de industrias',
      minRows: 1,
      labels: { singular: 'Industria', plural: 'Industrias' },
      admin: {
        description:
          'Cada industria aparece en la lista derecha. Al hacer hover muestra su nombre, descripción e imagen en el panel izquierdo.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nombre de la industria',
          required: true,
          admin: { description: 'Ej: Consumer Products and Services' },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
          admin: { description: 'Texto corto que aparece bajo el título en el panel izquierdo.' },
        },
        {
          name: 'href',
          type: 'text',
          label: 'Enlace (URL)',
          required: true,
          admin: { description: 'Ej: /industries/technology' },
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

    {
      name: 'cards',
      type: 'group',
      label: '④ Cards con links (fondo verde)',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Texto pequeño superior',
          defaultValue: 'How we help clients',
          admin: { description: 'Texto pequeño que aparece arriba del título principal.' },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Título principal',
          required: true,
          defaultValue: "Let's turn your biggest opportunities into your next big moves.",
        },
        {
          name: 'items',
          type: 'array',
          label: 'Cards',
          minRows: 3,
          maxRows: 3,
          labels: { singular: 'Card', plural: 'Cards' },
          admin: {
            description:
              'Exactamente 3 cards. Cada una lleva al usuario a una sección de la página.',
          },
          fields: [
            { name: 'title', type: 'text', label: 'Título de la card', required: true },
            { name: 'description', type: 'textarea', label: 'Descripción breve', required: true },
            {
              name: 'href',
              type: 'text',
              label: 'Enlace (URL o ruta)',
              required: true,
              admin: { description: 'Ej: /services, /contact, #servicios' },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen de la card',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
