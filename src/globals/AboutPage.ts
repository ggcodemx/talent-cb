import type { GlobalConfig } from 'payload'

export const AboutPageGlobal: GlobalConfig = {
  slug: 'page-about',
  label: ' Página: About',
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
          defaultValue: 'About Us',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción (derecha)',
          required: true,
        },
      ],
    },

    // ─── Split Image + Blocks ───────────────────────────────────────────────
    {
      name: 'split',
      type: 'group',
      label: 'Sección: Imagen + Bloques',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen (izquierda)',
          required: true,
        },
        {
          name: 'blockOne',
          type: 'group',
          label: 'Bloque superior (derecha)',
          fields: [
            { name: 'title', type: 'text', label: 'Título', required: true },
            { name: 'description', type: 'textarea', label: 'Descripción', required: true },
          ],
        },
        {
          name: 'blockTwo',
          type: 'group',
          label: 'Bloque inferior (derecha)',
          fields: [
            { name: 'title', type: 'text', label: 'Título', required: true },
            { name: 'description', type: 'textarea', label: 'Descripción', required: true },
          ],
        },
      ],
    },

    {
      name: 'services',
      type: 'array',
      label: '③ Servicios (bloque interactivo)',
      minRows: 1,
      maxRows: 6,
      labels: {
        singular: 'Servicio',
        plural: 'Servicios',
      },
      admin: {
        description:
          'Cada servicio aparece como un link en el lado izquierdo. Al hacer clic muestra su imagen, tag, título y descripción en el lado derecho.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título del servicio',
          required: true,
          admin: {
            description: 'Aparece en el menú izquierdo y como título del panel derecho.',
          },
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Tag / Categoría',
          required: true,
          admin: {
            description:
              'Texto pequeño verde que aparece arriba del título. Ej: "Integration", "Strategy".',
          },
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
          label: 'Imagen del servicio',
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

    // ─── Desks Internacionales ─────────────────────────────────────────────
    {
      name: 'desks',
      type: 'array',
      label: '⑤ Desks Internacionales',
      minRows: 1,
      maxRows: 8,
      labels: { singular: 'Desk', plural: 'Desks' },
      admin: {
        description:
          'Cada desk aparece en la lista izquierda. Al hacer hover cambia la imagen y descripción a la derecha.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Nombre del desk',
          required: true,
          admin: { description: 'Ej: Desk Asiático, Desk Norteamericano…' },
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

    // Cards CTA
  ],
}
