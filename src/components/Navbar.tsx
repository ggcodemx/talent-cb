'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

export interface NavbarProps {
  logo?: {
    url: string
    alt: string
  }
  items: NavItem[]
  showSearch?: boolean
}

// ─── Dropdown Component ───────────────────────────────────────────────────────

interface DropdownProps {
  items: NavItem[]
  isOpen: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen }) => {
  return (
    <div
      className={`
        absolute top-full left-0 mt-2 min-w-[200px]
        bg-white border border-gray-100 rounded-md shadow-lg
        transition-all duration-200 origin-top z-50
        ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
      `}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href ?? '#'}
          className="
            block px-4 py-2.5 text-md text-green-700 
            hover:bg-green-50 hover:text-green-700
            transition-colors duration-150 first:rounded-t-md last:rounded-b-md
          "
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

// ─── Nav Item with Dropdown ───────────────────────────────────────────────────

interface NavLinkProps {
  item: NavItem
  mobile?: boolean
  onClose?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({ item, mobile = false, onClose }) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const hasChildren = item.children && item.children.length > 0

  if (mobile) {
    return (
      <div>
        {hasChildren ? (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-800 font-medium hover:text-green-700 transition-colors"
            >
              {item.label}
              <ChevronIcon
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="pl-4 border-l-2 border-green-100 ml-4 mb-2">
                {item.children!.map((child, i) => (
                  <Link
                    key={i}
                    href={child.href ?? '#'}
                    onClick={onClose}
                    className="block px-4 py-2 text-sm text-green-600 hover:text-green-700 transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href ?? '#'}
            onClick={onClose}
            className="block px-4 py-3 text-green-800 font-medium hover:text-green-700 transition-colors"
          >
            {item.label}
          </Link>
        )}
      </div>
    )
  }
  /** CAMBIOS en PC AQUÍ */
  return (
    <div ref={ref} className="relative">
      {hasChildren ? (
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-700 transition-colors duration-200 py-1"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {item.label}
          <ChevronIcon
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      ) : (
        <Link
          href={item.href ?? '#'}
          className="text-md font-light text-white hover:text-secondary transition-colors duration-200 py-1"
        >
          {item.label}
        </Link>
      )}

      {hasChildren && (
        <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <Dropdown items={item.children!} isOpen={isOpen} />
        </div>
      )}
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─── Main Navbar ──────────────────────────────────────────────────────────────

const Navbar: React.FC<NavbarProps> = ({ logo, items, showSearch = true }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed  top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {logo ? (
              <Image
                src={logo.url}
                alt={logo.alt}
                width={180}
                height={108}
                className="h-17 w-auto object-contain"
                priority
              />
            ) : (
              // Fallback logo placeholder
              <span className="text-green-700 font-bold text-xl tracking-tight">CB Tax</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {items.map((item, index) => (
              <NavLink key={index} item={item} />
            ))}

            {showSearch && (
              <button
                aria-label="Buscar"
                className="text-white hover:text-green-800 transition-colors duration-200 ml-1"
              >
                <SearchIcon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden text-gray-800 hover:text-green-700 transition-colors p-1"
          >
            {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-white border-t border-gray-100 shadow-lg
          transition-all duration-300 overflow-hidden
          ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 py-4 divide-y divide-gray-50">
          {items.map((item, index) => (
            <NavLink key={index} item={item} mobile onClose={() => setMobileOpen(false)} />
          ))}

          {showSearch && (
            <div className="pt-3 px-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors">
                <SearchIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Buscar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
