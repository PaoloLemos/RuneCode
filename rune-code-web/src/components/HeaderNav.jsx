import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'INICIO', path: '/' },
  { name: 'CATÁLOGO', path: '/catalogo' },
  { name: 'NOSOTROS', path: '/nosotros' },
  { name: 'CONTACTO', path: '/contacto' },
]

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false) // Para controlar la animación
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Manejar apertura con animación
  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
    // Pequeño delay para que el DOM se renderice antes de animar
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsMenuVisible(true)
      })
    })
  }, [])

  // Manejar cierre con animación
  const closeMenu = useCallback(() => {
    setIsMenuVisible(false)
    // Esperar a que termine la animación antes de desmontar
    setTimeout(() => {
      setIsMenuOpen(false)
    }, 400) // Duración de la animación
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    closeMenu()
  }, [location, closeMenu])

  // Bloquear scroll del body cuando el menú está abierto
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

  // Cerrar menú con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen, closeMenu])

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
        }`}
      >
        <div className="container-custom">
          {/* Mobile Layout - Centered brand */}
          <div className="flex md:hidden items-center justify-between h-16 px-1">
            {/* Spacer for balance */}
            <div className="w-10" />
            
            {/* Centered Brand - Large & Impactful */}
            <Link 
              to="/"
              className="font-brand text-[1.65rem] sm:text-3xl text-white hover:text-[var(--color-orange)] transition-colors duration-300 text-center"
            >
              RUNE CODE
            </Link>
            
            {/* Mobile Menu Toggle - Solo muestra hamburguesa (la X está en el overlay) */}
            <button
              onClick={openMenu}
              className="p-2 text-white"
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              <Menu size={26} />
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between h-[70px]">
            {/* Brand */}
            <Link 
              to="/"
              className="font-brand text-2xl text-white hover:text-[var(--color-orange)] transition-colors duration-300"
            >
              RUNE CODE
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center justify-center absolute left-1/2 -translate-x-1/2">
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
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Portal al body para evitar stacking context issues */}
      {isMenuOpen && createPortal(
        <div
          className="fixed inset-0 flex flex-col items-center justify-center"
          style={{
            zIndex: 9999,
            backgroundColor: '#262626',
            height: '100dvh',
            width: '100vw',
            paddingBottom: '20vh',
            // Animación slide desde arriba
            transform: isMenuVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          onClick={(e) => {
            // Cerrar al hacer clic fuera del menú (en el overlay)
            if (e.target === e.currentTarget) {
              closeMenu()
            }
          }}
        >
          {/* Botón cerrar (X) - Único, esquina superior derecha */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 p-2 text-white hover:text-[var(--color-orange)] transition-colors duration-300"
            aria-label="Cerrar menú"
            style={{
              opacity: isMenuVisible ? 1 : 0,
              transition: 'opacity 0.3s ease 0.2s',
            }}
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* Menu Items - Centrados horizontal y verticalmente (con offset hacia arriba) */}
          <nav 
            className="w-full flex justify-center px-12"
            style={{
              opacity: isMenuVisible ? 1 : 0,
              transform: isMenuVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s',
            }}
          >
            <ul className="flex flex-col items-center" style={{ width: '280px' }}>
              {navItems.map((item) => (
                <li 
                  key={item.path}
                  className="w-full flex flex-col items-center"
                >
                  {/* Línea separadora arriba de cada item */}
                  <div className="w-full h-px bg-white/20" />
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block py-6 text-center font-body text-[26px] tracking-[0.32em] uppercase transition-colors duration-300 ${
                      location.pathname === item.path 
                        ? 'text-[var(--color-orange)]' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* Línea final debajo del último item */}
              <div className="w-full h-px bg-white/20" />
            </ul>
          </nav>
        </div>,
        document.body
      )}
    </>
  )
}

export default HeaderNav
