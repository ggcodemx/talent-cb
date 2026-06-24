import type { CollectionConfig } from 'payload'

export const Contacto: CollectionConfig = {
  slug: 'contacto',
  labels: { singular: 'Formulario de Contacto', plural: 'Formularios de Contacto' },
  admin: {
    group: 'CRM',
    useAsTitle: 'nombre',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    { name: 'nombre', type: 'text', label: 'Nombre', required: true },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'telefono', type: 'text', label: 'Teléfono' },
    { name: 'empresa', type: 'text', label: 'Empresa' },
    { name: 'mensaje', type: 'textarea', label: 'Mensaje', required: true },
    {
      name: 'creadoEn',
      type: 'date',
      label: 'Fecha de envío',
      admin: { readOnly: true },
    },
  ],
}
