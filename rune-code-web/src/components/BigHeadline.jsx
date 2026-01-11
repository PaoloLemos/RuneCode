import { motion } from 'framer-motion'

const BigHeadline = () => {
  return (
    <section className="relative py-32 sm:py-48 lg:py-64 xl:py-80 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-black text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-[0.2em] sm:tracking-[0.25em] leading-[1.8] sm:leading-[1.9]">
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