import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'INICIO', path: '/' },
  { name: 'CATÁLOGO', path: '/catalogo' },
  { name: 'NOSOTROS', path: '/nosotros' },
  { name: 'CONTACTO', path: '/contacto' },
]

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* Brand */}
          <Link 
            to="/"
            className="font-display text-xl md:text-2xl tracking-[0.25em] text-white hover:text-[var(--color-orange)] transition-colors duration-300 z-50"
          >
            RUNE CODE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`font-body text-sm tracking-[0.1em] transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-[var(--color-orange)]' 
                        : 'text-white hover:text-[var(--color-orange)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white z-50"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Like Wix Reference */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#262626] z-40">
          {/* Header with X */}
          <div className="flex items-center justify-end h-16 px-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white"
            >
              <X size={28} />
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="px-6 pt-8">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li 
                  key={item.path}
                  className={`border-b border-white/20 ${index === 0 ? 'border-t' : ''}`}
                >
                  <Link
                    to={item.path}
                    className={`block py-5 text-center font-body text-xl tracking-[0.15em] transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-[var(--color-orange)]' 
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default HeaderNav
