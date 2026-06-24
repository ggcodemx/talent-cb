import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import dotenv from 'dotenv'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

// ── Globales (contenido único: header, footer, ajustes) ──────
import { NavbarGlobal } from './globals/NavbarGlobal'
import { HomePageGlobal } from './globals/HomePage'
import { AboutPageGlobal } from './globals/AboutPage'
import { ContactPageGlobal } from './globals/ContactPage'
import { PageIndustriesGlobal } from './globals/PageIndustriesGlobal'
import { PageServicesGlobal } from './globals/PageServicesGlobal'
import { BlogPagel } from './globals/BlogPage'
import { LiderazgoPageGlobal } from './globals/LiderazgoPage'
import { CareersPageGlobal } from './globals/CareersPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, './.env'),
})

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  // ── Globales registrados ────────────────────────────────────
  globals: [
    NavbarGlobal,
    HomePageGlobal,
    AboutPageGlobal,
    ContactPageGlobal,
    PageIndustriesGlobal,
    PageServicesGlobal,
    BlogPagel,
    LiderazgoPageGlobal,
    CareersPageGlobal,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/cb-talent',
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'us-east-1',
      },
    }),
  ],
})
