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
  ],
}
