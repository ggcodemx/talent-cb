import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import dotenv from 'dotenv'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

// ── Globales (contenido único: header, footer, ajustes) ──────
import { NavbarGlobal } from './globals/NavbarGlobal'
import { HeroGlobal } from './globals/HeroGlobal'
import { FeaturedSectionGlobal } from './globals/FeaturedSection'
import { BannerGlobal } from './globals/Banner'
import { AboutStatsGlobal } from './globals/Aboutstatsglobal'
import { ExpertiseBlockGlobal } from './globals/Expertiseblockglobal'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(__dirname, './.env'),
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
    HeroGlobal,
    FeaturedSectionGlobal,
    BannerGlobal,
    NavbarGlobal,
    AboutStatsGlobal,
    ExpertiseBlockGlobal,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/cb-talent',
  }),
  sharp,
  plugins: [],
})
