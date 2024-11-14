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
        <div className="flex h-20 items-center justify-between"> {/* Increased height */}
          {/* Logo */}
          <div className={styles['logo-container']}>
            <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <span className={styles['logo-text']}>Leaps</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block"> {/* Changed from md:block to lg:block */}
            <ul className="flex items-center gap-8"> {/* Increased gap */}
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
            className={`${styles['mobile-menu-button']} lg:hidden`}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" /> 
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles['mobile-menu']}>
          <div className="container px-4 py-6"> {/* Increased padding */}
            <nav className="flex flex-col space-y-6"> {/* Increased spacing */}
              {menuItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={styles['nav-link']}
                  onClick={() => setIsMenuOpen(false)}
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