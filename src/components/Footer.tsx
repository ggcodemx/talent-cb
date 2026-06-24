'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_COLUMNS = [
  {
    title: 'Oficinas',
    bold: true,
    links: [
      { label: 'Ciudad de México', href: '#' },
      { label: 'Monterrey', href: '#' },
      { label: 'Guadalajara', href: '#' },
    ],
  },
  {
    title: 'Servicios ',
    bold: false,
    links: [
      { label: 'Busqueda ejecutiva', href: '#' },
      { label: 'Estrategia de Talento', href: '#' },
      { label: 'Evaluación de Liderazgo', href: '#' },
      { label: 'Gobernanza', href: '#' },
    ],
  },
  {
    title: 'CB Talent',
    bold: false,
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Carreras', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Oficinas Globales', href: '#' },
    ],
  },
]

const LEGAL_LINKS = [
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Términos de Servicio', href: '#' },
  { label: 'Configuración de Cookies', href: '#' },
]

// ─── Social Icons ─────────────────────────────────────────────────────────────

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

// ─── Subscribe Form ───────────────────────────────────────────────────────────

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [sent, setSent] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white/15 rounded-full overflow-hidden border border-white/25 hover:border-white/50 transition-colors duration-200 mt-4"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Suscríbete con tu correo"
        aria-label="Correo para suscribirse"
        className="flex-1 bg-transparent px-5 py-3 text-sm text-white placeholder-white/60 outline-none min-w-0"
      />
      <button
        type="submit"
        aria-label="Enviar"
        className="
          flex-shrink-0 w-10 h-10 m-0.5 rounded-full
          bg-white/20 hover:bg-white text-white hover:text-green-700
          flex items-center justify-center
          transition-all duration-200 hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
      >
        {sent ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="w-4 h-4"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <ArrowRightIcon />
        )}
      </button>
    </form>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="page-padding pt-16 pb-8">
        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[220px_1fr_1fr_1fr_280px] gap-10 lg:gap-8 pb-12">
          {/* Col 1 — Brand */}
          <div>
            {/* Logo text — reemplaza con <Image> si tienes el SVG del logo */}
            <div className="flex items-center gap-2 mb-4">
              <Image src="/api/media/file/logo_blanco.png" alt="Logo" width={100} height={100} />
            </div>

            <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-[200px]">
              Construyendo el liderazgo del futuro.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { href: '#', icon: <LinkedInIcon />, label: 'LinkedIn' },
                { href: '#', icon: <TwitterIcon />, label: 'Twitter / X' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    w-9 h-9 rounded-full border border-white/40
                    flex items-center justify-center text-white/80
                    hover:border-white hover:text-white hover:bg-white/10
                    transition-all duration-200
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Cols 2-4 — Nav columns */}
          {NAV_COLUMNS.map((col, ci) => (
            <div key={ci}>
              <h4
                className={`text-sm mb-5 ${col.bold ? 'font-bold text-white' : 'font-semibold text-white'}`}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-white transition-colors duration-150 hover:underline underline-offset-2"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 5 — Subscribe */}
          <div>
            <h4 className="font-bold text-sm mb-2">Suscríbete</h4>
            <p className="text-white/75 text-sm leading-relaxed">
              Recibe las últimas actualizaciones y contenido exclusivo.
            </p>
            <SubscribeForm />
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/20" />

        {/* ── Legal bar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6">
          <p className="text-white/60 text-xs">© 2026 CB Talent. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/60 text-xs hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
