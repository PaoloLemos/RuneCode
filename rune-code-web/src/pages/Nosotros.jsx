import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Nosotros = () => {
  return (
    <div className="bg-white flex flex-col min-h-[calc(100vh-70px)]">
      {/* Hero Section */}
      <section className="pt-[50px] pb-12 md:pt-28 md:pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-brand text-black text-3xl sm:text-4xl md:text-6xl mb-6 text-center">
              SOBRE NOSOTROS
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-[var(--color-orange)]" 
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 md:py-12 flex-grow">
        <div className="container-custom flex flex-col items-center">
          <div className="max-w-3xl w-full space-y-12 md:space-y-16">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="space-y-6 font-body text-black/80 text-base md:text-lg leading-relaxed">
                <p>
                  Bienvenidos a <span className="text-[var(--color-orange)] font-brand text-sm tracking-widest">RUNE CODE</span>, 
                  una marca de ropa juvenil originada en Punta del Este. 
                  Nuestro principal objetivo es ofrecerte prendas únicas que reflejen tu estilo y personalidad.
                </p>
                <p>
                  En Rune, creemos que la moda es una forma de expresión, por eso lanzamos colecciones 
                  inspiradas en las tendencias más actuales. Pero eso no es todo; también ofrecemos la 
                  posibilidad de personalizar tus prendas.
                </p>
                <p>
                  Si tienes una idea o un diseño en mente, ¡estamos aquí para hacerlo realidad! 
                  Queremos que cada uno de nuestros clientes se sienta especial y auténtico en lo que lleva puesto.
                </p>
              </div>
            </motion.div>

            {/* Quiénes Somos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center flex flex-col items-center"
            >
              <h2 className="font-brand text-black text-lg md:text-xl mb-6 uppercase">
                QUIÉNES SOMOS
              </h2>
              <div className="w-12 h-[1px] bg-gray-200 mb-8" />
              <p className="font-body text-black/60 text-base md:text-lg italic">
                "Una marca uruguaya con pasión por la moda urbana y el estilo auténtico."
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center pt-8"
            >
              <Link
                to="/catalogo"
                className="inline-block px-12 py-4 bg-black text-white font-brand text-xs tracking-[0.2em] hover:bg-[var(--color-orange)] transition-all duration-300 hover:scale-105"
              >
                VER CATÁLOGO
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros
