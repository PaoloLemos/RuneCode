import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

/**
 * Nosotros Page - High Fidelity Migration from Wix
 * Original: https://lemospaolo2.wixsite.com/rune-wear/nosotros
 * 
 * Design System:
 * - Primary Orange: #ea5823 (RGB: 234, 88, 35)
 * - Black: #000000
 * - Dark Gray: #1f1f1f
 * - White: #ffffff
 * 
 * Typography (Wix → React mapping):
 * - dinneuzeitgroteskltw01-_812426 → Oswald (display titles)
 * - avenir-lt-w01_35-light1475496 → Montserrat (body text, light 300)
 */

// ====== SVG COMPONENTS - Exact from Wix ======

// Arrow SVG - Rotated 135deg in the orange box
const ArrowIcon = () => (
  <svg 
    preserveAspectRatio="xMidYMid meet" 
    viewBox="1.95 9.05 56.15 42" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-8 fill-current text-[#ea5823]"
    style={{ transform: 'rotate(135deg)' }}
    role="presentation" 
    aria-hidden="true"
  >
    <g>
      <path d="M56.5 27.6H10.4l14.7-14.7c.6-.6.6-1.6 0-2.2L24 9.5c-.6-.6-1.6-.6-2.2 0L2.4 28.9c-.6.6-.6 1.6 0 2.2l1.2 1.2 18.3 18.3c.6.6 1.6.6 2.2 0l1.2-1.2c.6-.6.6-1.6 0-2.2L10.4 32.4h46.1c.9 0 1.6-.7 1.6-1.6v-1.7c0-.8-.7-1.5-1.6-1.5z" />
    </g>
  </svg>
)

// Triangle Corner SVG - Bottom right of orange box
const TriangleCorner = () => (
  <svg 
    preserveAspectRatio="xMidYMid meet" 
    viewBox="10.305 4.552 131.804 131.5" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20 fill-current text-[#ea5823]"
    role="presentation" 
    aria-hidden="true"
  >
    <g>
      <path d="M142.109 136.052H10.305V4.552l131.804 131.5z" />
    </g>
  </svg>
)

// ====== ANIMATION VARIANTS ======
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -40, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
  visible: { 
    opacity: 1, 
    x: 0, 
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
  }
}

// ====== TYPOGRAPHY STYLES (Matching Wix exactly) ======
const typography = {
  // Main title - Wix uses 70px DIN Neuzeit Grotesk
  heroTitle: {
    fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
    fontSize: '70px',
    fontWeight: 400,
    letterSpacing: '0.05em',
    lineHeight: 'normal',
  },
  heroTitleMobile: {
    fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
    fontSize: '40px',
    fontWeight: 400,
    letterSpacing: '0.05em',
    lineHeight: 'normal',
  },
  // Section title - 40px
  sectionTitle: {
    fontFamily: "'Oswald', 'Bebas Neue', sans-serif",
    fontSize: '40px',
    fontWeight: 400,
    letterSpacing: 'normal',
    lineHeight: 'normal',
  },
  // Body text - Wix uses Avenir Light 16px
  bodyText: {
    fontFamily: "'Montserrat', 'avenir-lt-w01_35-light1475496', sans-serif",
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '1.5em',
  },
  // Footer titles
  footerTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '30px',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  // Footer links
  footerLink: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '16px',
    lineHeight: '2em',
  },
  // Copyright
  copyright: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '14px',
    lineHeight: 'normal',
  }
}

const Nosotros = () => {
  return (
    <Layout noBackground noFooter>
      {/* ====== HERO SECTION - Split Layout ====== */}
      <section className="pt-16 md:pt-[70px]">
        {/* Desktop Layout - Exact 50/50 split like Wix */}
        <div className="hidden md:grid md:grid-cols-2 min-h-[460px]">
          {/* Left Column - Black with Title Box */}
          <div className="bg-black flex items-center justify-center p-8">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="border border-white/80 px-12 py-10"
              style={{ borderWidth: '1px' }}
            >
              <h1 
                className="text-white text-center"
                style={typography.heroTitle}
              >
                SOBRE NOSOTROS
              </h1>
            </motion.div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative overflow-hidden h-[460px]">
            <motion.img
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              src="/images/heroNosotros.jpg"
              alt="RUNE CODE - Nosotros"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden">
          {/* Title Section */}
          <div className="bg-black flex items-center justify-center py-16 px-6">
            <motion.div 
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="border border-white/80 px-8 py-6"
            >
              <h1 
                className="text-white text-center"
                style={typography.heroTitleMobile}
              >
                SOBRE NOSOTROS
              </h1>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <div className="h-[300px]">
            <img
              src="/images/heroNosotros.jpg"
              alt="RUNE CODE"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ====== CONTENT SECTION - Stone Background ====== */}
      <section 
        className="relative py-12 md:py-16"
        style={{
          backgroundImage: 'url(/images/fondoPiedras.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="container-custom relative z-10">
          {/* Welcome Text - Matching Wix Typography */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <div 
              className="text-white/90 space-y-6"
              style={typography.bodyText}
            >
              <p>
                Bienvenidos a Rune Wear, una marca de ropa juvenil originada en Punta del Este. 
                Nuestro principal objetivo es ofrecerte prendas únicas que reflejen tu estilo y personalidad.
              </p>
              <p>
                En Rune, creemos que la moda es una forma de expresión, por eso lanzamos colecciones, 
                inspiradas en las tendencias más actuales. Pero eso no es todo; también ofrecemos la 
                posibilidad de personalizar tus prendas. Si tienes una idea o un diseño en mente, 
                ¡estamos aquí para hacerlo realidad! Queremos que cada uno de nuestros clientes se 
                sienta especial y auténtico en lo que lleva puesto.
              </p>
              <p>
                Únete a nuestra comunidad y descubre cómo podemos ayudarte a destacar con estilo.
              </p>
            </div>
          </motion.div>

          {/* Orange Box + Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left - Orange Box with Arrow and Title */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative bg-[#ea5823] p-8 md:p-12 min-h-[280px] flex flex-col justify-center"
            >
              {/* Arrow Icon - Top Left */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <ArrowIcon />
              </div>

              {/* Title - Centered */}
              <div className="text-center pt-8">
                <h2 
                  className="text-[#1f1f1f]"
                  style={typography.sectionTitle}
                >
                  QUIÉNES SOMOS
                </h2>
              </div>

              {/* Triangle Corner - Bottom Right */}
              <div className="absolute bottom-0 right-0 transform rotate-180">
                <TriangleCorner />
              </div>
            </motion.div>

            {/* Right - Person Image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative overflow-hidden"
            >
              <img
                src="/images/personaNosotros.jpg"
                alt="RUNE CODE Team"
                className="w-full h-[350px] md:h-[467px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER SECTION - Matching Wix Style ====== */}
      <section className="bg-black py-12 md:py-16">
        <div className="container-custom">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {/* RUNE Column */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 
                className="text-[#1f1f1f] mb-4"
                style={typography.footerTitle}
              >
                RUNE
              </h3>
              <div className="space-y-1">
                <Link 
                  to="/"
                  className="block text-white/50 hover:text-white transition-colors duration-200 underline"
                  style={typography.footerLink}
                >
                  Inicio
                </Link>
                <Link 
                  to="/catalogo"
                  className="block text-white/50 hover:text-white transition-colors duration-200 underline"
                  style={{...typography.footerLink, lineHeight: 'normal'}}
                >
                  Catálogo
                </Link>
              </div>
            </motion.div>

            {/* REDES Column */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 
                className="text-[#1f1f1f] mb-4"
                style={typography.footerTitle}
              >
                REDES
              </h3>
              <a 
                href="https://www.instagram.com/rune.code?igsh=MXg0M2NpZjNqcnl1cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 hover:text-white transition-colors duration-200 underline"
                style={typography.footerLink}
              >
                Instagram
              </a>
            </motion.div>

            {/* Empty column for layout balance on desktop */}
            <div className="hidden md:block" />
          </div>

          {/* Social Icons + Copyright */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Copyright */}
            <p 
              className="text-white/40 text-center md:text-left"
              style={typography.copyright}
            >
              © 2023 Creado por IN.EX con{' '}
              <a 
                href="https://wix.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white/60 transition-colors duration-200"
              >
                Wix.com
              </a>
            </p>

            {/* Social Bar - Using original Wix images */}
            <div className="flex items-center gap-4">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/+59892550478"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-200 bg-white/10"
                aria-label="Whatsapp"
              >
                <img 
                  src="/images/N O S O T R O S _ Rune Wear_files/11062b_f2ffb02bc607453abfd2d2389e6e1fa4~mv2.png"
                  alt="Whatsapp"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/rune.code?igsh=OXhkdjU1Yno4aTFz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-200 bg-white/10"
                aria-label="Instagram"
              >
                <img 
                  src="/images/N O S O T R O S _ Rune Wear_files/e1aa082f7c0747168d9cf43e77046142.png"
                  alt="Instagram"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
              
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@rune.code"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity duration-200 bg-white/10"
                aria-label="TikTok"
              >
                <img 
                  src="/images/N O S O T R O S _ Rune Wear_files/11062b_66167d61316d4665841f3397360d54a9~mv2.png"
                  alt="TikTok"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default Nosotros
