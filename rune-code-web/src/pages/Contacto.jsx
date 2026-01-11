import { motion } from 'framer-motion'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Layout from '../components/Layout'

const Contacto = () => {
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
              CONTACTO
            </h1>
            <div className="w-16 h-[2px] bg-[var(--color-orange)] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="font-display text-black text-xl sm:text-2xl tracking-[0.08em] mb-4">
              ¿DÓNDE NOS ENCONTRAMOS?
            </h2>
            <p className="font-body text-black/60 text-sm sm:text-base leading-relaxed">
              Nos encontramos en la Ciudad de Maldonado. Contamos con envíos dentro de la ciudad 
              y también hacemos envíos al interior del país.
            </p>
          </motion.div>

          {/* Contact Links */}
          <div className="max-w-md mx-auto space-y-6">
            <motion.a
              href="https://wa.me/+59892550478"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[var(--color-orange)] transition-colors"
            >
              <Phone size={24} className="text-[var(--color-orange)]" />
              <div>
                <p className="font-display text-black text-sm tracking-wide">WHATSAPP</p>
                <p className="font-body text-black/60 text-sm">+598 92 550 478</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:runecode.uy@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[var(--color-orange)] transition-colors"
            >
              <Mail size={24} className="text-[var(--color-orange)]" />
              <div>
                <p className="font-display text-black text-sm tracking-wide">EMAIL</p>
                <p className="font-body text-black/60 text-sm">runecode.uy@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/rune.code"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[var(--color-orange)] transition-colors"
            >
              <Instagram size={24} className="text-[var(--color-orange)]" />
              <div>
                <p className="font-display text-black text-sm tracking-wide">INSTAGRAM</p>
                <p className="font-body text-black/60 text-sm">@rune.code</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg"
            >
              <MapPin size={24} className="text-[var(--color-orange)]" />
              <div>
                <p className="font-display text-black text-sm tracking-wide">UBICACIÓN</p>
                <p className="font-body text-black/60 text-sm">Maldonado, Uruguay</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[var(--color-orange)]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-white text-xl sm:text-2xl tracking-wide mb-6">
              ¿LISTO PARA MARCAR LA DIFERENCIA?
            </h3>
            <a
              href="https://wa.me/+59892550478?text=Hola, quiero más información sobre RUNE CODE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-black text-white font-display text-sm tracking-[0.1em] hover:bg-gray-900 transition-colors"
            >
              ESCRIBINOS AHORA
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacto
