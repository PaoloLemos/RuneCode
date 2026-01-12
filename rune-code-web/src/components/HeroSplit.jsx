import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSplit = () => {
  return (
    <section className="relative min-h-screen pt-16 md:pt-[70px]">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 min-h-[calc(100vh-70px)]">
        {/* Left - Woman with Orange Background (2/3) */}
        <div className="col-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-orange)]" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src="/images/MujerRemeraBanner.png"
              alt="Modelo RUNE CODE"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Text Overlay - Bottom Left */}
          <div className="absolute bottom-16 left-12 xl:left-20 z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >

<section className="hero"></section>
            <h4 className="hero-title">
  <span className="hero-line">ENCUENTRA</span>
  <span className="hero-line">TU ESENCIA</span>
  <span className="hero-line">CON RUNE</span>
  <span className="hero-line">CODE</span>
</h4>


              
              <Link to="/catalogo" className="inline-block group">
                <span className="font-body text-sm tracking-[0.15em] text-white group-hover:text-white/80 transition-colors duration-300">
                  VER COLECCIÓN
                </span>
                <div className="h-[1px] bg-white mt-2 group-hover:bg-white/80 transition-colors duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right - Black panel with subtle gradient */}
        <div className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
          {/* RC Mark Animation - Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="font-display text-[8rem] xl:text-[10rem] text-[var(--color-orange)] leading-none tracking-tight"
              >
                R
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="font-display text-[8rem] xl:text-[10rem] text-white leading-none tracking-tight -ml-4"
              >
                C
              </motion.span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 blur-3xl bg-[var(--color-orange)]/10 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================
          MOBILE LAYOUT - Modern Full-Screen Hero
          ============================================ */}
      <div className="lg:hidden relative h-[calc(100vh-4rem)] overflow-hidden">
        {/* Background - Orange fallback */}
        <div className="absolute inset-0 bg-[var(--color-orange)]" />
        
        {/* Hero Image - Mobile optimized version */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src="/images/MujerRemeraBannerMovil.png"
            alt="Modelo RUNE CODE"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Gradient Overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        
        {/* Content Container - Positioned over image */}
        <div className="absolute inset-0 flex flex-col justify-end pb-8 px-6 sm:px-8">
          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-display text-white text-[2rem] sm:text-[2.5rem] tracking-[0.15em] leading-[1.2] italic mb-6">
              ENCUENTRA<br />
              TU ESENCIA<br />
              <span className="text-[var(--color-orange)]">CON RUNE CODE</span>
            </h1>
            
            <Link 
              to="/catalogo" 
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-body text-sm tracking-[0.2em] text-white uppercase">
                Ver Colección
              </span>
              <motion.span 
                className="text-white text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* RC Mark - Small elegant version at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center gap-1 mb-2"
          >
            <span className="font-display text-4xl text-[var(--color-orange)] leading-none">R</span>
            <span className="font-display text-4xl text-white/80 leading-none">C</span>
          </motion.div>
          
          {/* Subtle scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[1px] h-8 bg-white/40"
            />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        {/* Orange accent line - right */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute top-20 right-4 w-[2px] h-24 bg-[var(--color-orange)] origin-top"
        />
        
        {/* Corner accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-0 right-0 w-0 h-0"
          style={{
            borderRight: '60px solid var(--color-orange)',
            borderTop: '60px solid transparent',
          }}
        />
      </div>
    </section>
  )
}

export default HeroSplit
