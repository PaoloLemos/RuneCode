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
              <h1 className="font-display text-white text-4xl lg:text-5xl xl:text-6xl tracking-[0.12em] leading-[1.15] italic mb-8">
                ENCUENTRA<br />
                TU ESENCIA<br />
                CON RUNE<br />
                CODE
              </h1>
              
              <Link to="/catalogo" className="inline-block group">
                <span className="font-body text-sm tracking-[0.15em] text-[var(--color-orange)] group-hover:text-white transition-colors duration-300">
                  VER COLECCIÓN
                </span>
                <div className="h-[1px] bg-[var(--color-orange)] mt-2 group-hover:bg-white transition-colors duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right - Landscape with Floating Image (1/3) */}
        <div className="relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/fondoPiedras.avif)' }}
          />
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] aspect-[3/4] shadow-2xl"
          >
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-[var(--color-orange)]/85 z-10" />
              <img
                src="/images/nq blanco.png"
                alt="Colección RUNE CODE"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout - Like Wix Reference */}
      <div className="lg:hidden flex flex-col min-h-[calc(100vh-4rem)]">
        {/* Main Hero */}
        <div className="relative flex-1 bg-[var(--color-orange)]">
          <img
            src="/images/MujerRemeraBanner.png"
            alt="Modelo RUNE CODE"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 15%' }}
          />
          
          {/* Text Overlay */}
          <div className="absolute bottom-8 left-6 right-6 sm:left-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="font-display text-white text-[1.75rem] sm:text-3xl tracking-[0.1em] leading-[1.2] italic mb-5">
                ENCUENTRA TU<br />
                ESENCIA CON<br />
                RUNE CODE
              </h1>
              
              <Link to="/catalogo" className="inline-block">
                <span className="font-body text-xs tracking-[0.12em] text-[var(--color-orange)]">
                  VER COLECCIÓN
                </span>
                <div className="h-[1px] bg-[var(--color-orange)] mt-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Secondary - Landscape with Card */}
        <div className="relative h-52 sm:h-64">
          <img
            src="/images/fondoPiedras.avif"
            alt="Paisaje"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-[3/4] shadow-xl">
            <div className="relative w-full h-full">
              <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-[var(--color-orange)]/80 z-10" />
              <img
                src="/images/nq blanco.png"
                alt="Colección"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSplit
