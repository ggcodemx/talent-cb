import type { GlobalConfig } from 'payload'

export const NavbarGlobal: GlobalConfig = {
  slug: 'navbar',
  label: 'Navegación principal',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Elementos del menú',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          label: 'Enlace (URL)',
        },
        {
          name: 'children',
          type: 'array',
          label: 'Sub-elementos (dropdown)',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Etiqueta',
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
      name: 'showSearch',
      type: 'checkbox',
      label: 'Mostrar ícono de búsqueda',
      defaultValue: true,
    },
  ],
}
