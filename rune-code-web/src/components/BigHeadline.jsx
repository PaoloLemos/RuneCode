import { motion } from 'framer-motion'

const BigHeadline = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Corner accents */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-12 left-8 md:left-16 w-24 md:w-40 h-[1px] bg-black origin-left"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute top-12 left-8 md:left-16 w-[1px] h-16 md:h-24 bg-black origin-top"
        />
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-12 right-8 md:right-16 w-24 md:w-40 h-[1px] bg-black origin-right"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-12 right-8 md:right-16 w-[1px] h-16 md:h-24 bg-black origin-bottom"
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          initial={{ opacity: 0, rotate: -15 }}
          whileInView={{ opacity: 0.04, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute -top-20 -right-20 w-80 h-80 border border-black rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          whileInView={{ opacity: 0.03, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 border border-black"
          style={{ transform: 'rotate(45deg)' }}
        />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Small tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs md:text-sm tracking-[0.4em] text-gray-400 uppercase mb-8 md:mb-12"
          >
            Rune Code Collection
          </motion.p>
          
          {/* Main headline */}
          <h2 className="font-display text-black leading-[1.15] md:leading-[1.2]">
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.12em] md:tracking-[0.18em]"
            >
              MODA URBANA
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.12em] md:tracking-[0.18em] my-2 md:my-4"
            >
              PARA QUIENES
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.12em] md:tracking-[0.18em] relative inline-block"
            >
              MARCAN
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 h-[3px] md:h-[4px] bg-[var(--color-orange)]"
              />
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.12em] md:tracking-[0.18em] mt-2 md:mt-4"
            >
              LA DIFERENCIA
            </motion.span>
          </h2>
          
          {/* Decorative line below */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="mx-auto mt-12 md:mt-16 w-16 md:w-24 h-[1px] bg-black"
          />
          
          {/* Subtle caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-body text-[10px] md:text-xs tracking-[0.3em] text-gray-400 uppercase mt-6 md:mt-8"
          >
            Streetwear Premium
          </motion.p>
        </motion.div>
      </div>
      
      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-black/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default BigHeadline
