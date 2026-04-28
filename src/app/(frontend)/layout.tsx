import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Navbar, { type NavItem } from '@/components/Navbar'
import Footer from '@/components/Footer'

// ─── Fetch Navbar data from Payload Global ────────────────────────────────────

async function getNavbarData() {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await payload.findGlobal({ slug: 'navbar' })
    return data
  } catch (error) {
    console.error('Error fetching navbar data:', error)
    return null
  }
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navData = await getNavbarData()

  // Map Payload data to NavbarProps shape
  const navItems: NavItem[] = (navData?.items ?? []).map((item: any) => ({
    label: item.label,
    href: item.href,
    children: item.children?.map((child: any) => ({
      label: child.label,
      href: child.href,
    })),
  }))

  // Logo from Payload media
  const logo =
    navData?.logo && typeof navData.logo === 'object'
      ? {
          url: (navData.logo as any).url as string,
          alt: (navData.logo as any).alt ?? 'Logo',
        }
      : undefined

  return (
    <html lang="es">
      <body>
        <Navbar logo={logo} items={navItems} showSearch={navData?.showSearch ?? true} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
