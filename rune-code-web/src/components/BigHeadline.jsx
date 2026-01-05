import { motion } from 'framer-motion'

const BigHeadline = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.05em] sm:tracking-[0.08em] leading-tight">
            MODA URBANA PARA<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            QUIENES MARCAN<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            LA DIFERENCIA
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

export default BigHeadline
