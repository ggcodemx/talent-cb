import Link from 'next/link'

type NavItem = {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Industrias', href: '/capabilities' },
  { label: 'Servicios', href: '/services' },
  { label: 'Noticias', href: '/news' },
  { label: 'Sobre CB Tax', href: '/about' },
  { label: 'Liderazgo', href: '/lidership' },
]

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100  relative">
      <nav className="page-padding h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/api/media/file/CB_Tax_Logotipo_Rojo.png"
            alt="CB Tax Logo"
            className="h-18 w-auto"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xl text-black font-normal hover:text-red-600 transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2 bg-primary text-white text-xl font-light rounded-xl hover:bg-secondary transition-colors duration-200 shrink-0"
        >
          Contacto
        </Link>

        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-5 h-0.5 bg-gray-700 block" />
          <span className="w-5 h-0.5 bg-gray-700 block" />
          <span className="w-5 h-0.5 bg-gray-700 block" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
