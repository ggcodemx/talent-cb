import type { GlobalConfig } from 'payload'

export const ContactPageGlobal: GlobalConfig = {
  slug: 'page-contact',
  label: ' Página: Contact',
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
          defaultValue: 'Contact Us',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción (derecha)',
          required: true,
        },
      ],
    },
  ],
}
