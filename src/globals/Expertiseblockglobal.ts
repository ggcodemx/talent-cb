import type { GlobalConfig } from 'payload'

export const ExpertiseBlockGlobal: GlobalConfig = {
  slug: 'expertise-block',
  label: 'Sección: Expertise / Industrias',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen lateral derecha',
      required: true,
    },
    {
      name: 'serviceItems',
      type: 'array',
      label: 'Botón 1 — Service Expertise (lista)',
      minRows: 1,
      labels: {
        singular: 'Servicio',
        plural: 'Servicios',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Nombre del servicio',
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
    {
      name: 'industryItems',
      type: 'array',
      label: 'Botón 2 — Global Industries (lista)',
      minRows: 1,
      labels: {
        singular: 'Industria',
        plural: 'Industrias',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Nombre de la industria',
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
}
