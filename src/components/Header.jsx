import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'SeelieSec Advisor', href: '/advisor' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg-deep/80 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="font-serif text-xl text-text-heading hover:text-accent-green-light transition-colors">
            SeelieSec <span className="text-accent-green">SecaaS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${
                  location.pathname === link.href ? 'text-accent-green-light' : 'text-text-secondary hover:text-text-heading'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="rounded-lg bg-accent-green px-4 py-2 text-sm font-semibold text-bg-deep hover:bg-accent-green-light transition-colors">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden text-text-heading" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav - TODO: animate with framer-motion */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-deep border-t border-border-subtle px-6 py-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-text-secondary hover:text-text-heading"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
