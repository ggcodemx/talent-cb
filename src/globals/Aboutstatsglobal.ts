import type { GlobalConfig } from 'payload'

export const AboutStatsGlobal: GlobalConfig = {
  slug: 'about-stats',
  label: 'Sección: Acerca de / Estadísticas',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título principal',
      required: true,
      defaultValue: 'Executive Search and Leadership Consultancy Firm',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      required: true,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Estadísticas',
      minRows: 1,
      maxRows: 3,
      labels: {
        singular: 'Estadística',
        plural: 'Estadísticas',
      },
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Número (incluye símbolo, ej: 75+)',
          required: true,
          admin: {
            description: 'Escribe el número con su sufijo si aplica, ej: "75+", "200", "98%"',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Descripción del número',
          required: true,
        },
      ],
    },
  ],
}
