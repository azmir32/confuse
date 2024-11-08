'use client'
import { useState } from 'react'
import { Menu, MousePointer, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import styles from '@/styles/header.module.css'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '/features', label: 'Features' },
    { href: '#demo', label: 'Demo' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className={`${styles.header} sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className={`flex items-center gap-2 ${styles['logo-container']}`}>
            <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <MousePointer className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">Leaps</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" className={`font-medium shadow-sm hover:shadow-md transition-all ${styles['cta-button']}`}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground mobile-menu-button"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t ${styles['mobile-menu']}`}>
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
              <Button className="w-full mt-4 shadow-sm hover:shadow-md transition-all">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}