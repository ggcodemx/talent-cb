import type { GlobalConfig } from 'payload'

export const BannerGlobal: GlobalConfig = {
  slug: 'banner-cta',
  label: 'Banner CTA',
      fields: [
        {
          name: 'titulo',
          type: 'text',
          label: 'Título',
          required: true,
          defaultValue: 'Come bring the energy to change the World'
        },
        {
          name: 'descripcion',
          type: 'textarea',
          label: 'Descripción',
        },
        {
          name: 'botonTexto',
          type: 'text',
          label: 'Texto del botón',
          defaultValue: 'Contáctanos',
        },
        {
          name: 'botonUrl',
          type: 'text',
          label: 'URL del botón',
          required: true,
          defaultValue:'/contacto'
        },
        {
          name: 'imagen',
          type: 'upload',
          label: 'Imagen',
          relationTo: 'media',
          required: true,
        },
      ],
    }
