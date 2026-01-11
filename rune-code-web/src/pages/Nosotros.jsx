import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] mb-4">
              SOBRE NOSOTROS
            </h1>
            <div className="w-16 h-[2px] bg-[var(--color-orange)] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6 font-body text-black/80 text-base leading-relaxed">
              <p>
                Bienvenidos a Rune Wear, una marca de ropa juvenil originada en Punta del Este. 
                Nuestro principal objetivo es ofrecerte prendas únicas que reflejen tu estilo y personalidad.
              </p>
              <p>
                En Rune, creemos que la moda es una forma de expresión, por eso lanzamos colecciones 
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

          {/* Quiénes Somos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-12 text-center"
          >
            <h2 className="font-display text-[var(--color-orange)] text-2xl sm:text-3xl tracking-[0.08em] mb-4">
              QUIÉNES SOMOS
            </h2>
            <p className="font-body text-black/60 text-sm sm:text-base">
              Una marca uruguaya con pasión por la moda urbana y el estilo auténtico.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/catalogo"
              className="inline-block px-8 py-3 bg-[var(--color-orange)] text-white font-display text-sm tracking-[0.1em] hover:bg-[var(--color-orange-dark)] transition-colors"
            >
              VER CATÁLOGO
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* RUNE Column */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-white/30 text-xl mb-4">RUNE</h3>
              <div className="space-y-2">
                <Link 
                  to="/"
                  className="block text-white/60 hover:text-white transition-colors font-body text-sm"
                >
                  Inicio
                </Link>
                <Link 
                  to="/catalogo"
                  className="block text-white/60 hover:text-white transition-colors font-body text-sm"
                >
                  Catálogo
                </Link>
                <Link 
                  to="/contacto"
                  className="block text-white/60 hover:text-white transition-colors font-body text-sm"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* REDES Column */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-white/30 text-xl mb-4">REDES</h3>
              <div className="space-y-2">
                <a 
                  href="https://www.instagram.com/rune.code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-white transition-colors font-body text-sm"
                >
                  Instagram
                </a>
                <a 
                  href="https://wa.me/+59892550478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-white transition-colors font-body text-sm"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://www.tiktok.com/@rune.code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-white transition-colors font-body text-sm"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
        
        </div>
      </section>
    </Layout>
  )
}

export default Nosotros
