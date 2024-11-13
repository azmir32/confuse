'use client'

import { useState, useEffect } from 'react'
import { Menu, MousePointer, X } from 'lucide-react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' }
  ] as const;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container px-4 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className={styles['logo-container']}>
            <a href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <MousePointer className="h-6 w-6 text-[var(--primary-color)]" />
              <span className={styles['logo-text']}>Leaps</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {menuItems.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles['nav-link']}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles['mobile-menu-button']}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
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
        <div className={styles['mobile-menu']}>
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={styles['nav-link']}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}