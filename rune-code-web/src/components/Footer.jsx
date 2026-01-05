import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-black py-12 sm:py-16 border-t border-white/10">
      {/* Solid black background to cover any background image bleeding */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Redes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-display text-lg tracking-[0.2em] text-white mb-6">
              REDES
            </h4>
            <a
              href="https://www.instagram.com/rune.code?igsh=MXg0M2NpZjNqcnl1cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/70 hover:text-[var(--color-orange)] transition-colors duration-300 group"
            >
              <Instagram size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              <span className="font-body text-sm tracking-wide">Instagram</span>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:text-right"
          >
            <h4 className="font-display text-lg tracking-[0.2em] text-white mb-6">
              CONTACTO
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:runecode.uy@gmail.com"
                className="block font-body text-sm text-white/70 hover:text-[var(--color-orange)] transition-colors"
              >
                runecode.uy@gmail.com
              </a>
              <a
                href="https://wa.me/+59892550478"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-white/70 hover:text-[var(--color-orange)] transition-colors"
              >
                +598 92 550 478
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="font-body text-xs text-white/40 tracking-wide">
            © 2023 Creado por IN.EX
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
