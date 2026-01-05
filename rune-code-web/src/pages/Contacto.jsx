import { motion } from 'framer-motion'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Layout from '../components/Layout'

const Contacto = () => {
  return (
    <Layout noBackground>
      {/* Hero - Split Layout Like Wix */}
      <section className="pt-16 md:pt-[70px]">
        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 min-h-[55vh] lg:min-h-[60vh]">
          {/* Left - Black with Framed Title */}
          <div className="bg-[#1f1f1f] flex items-center justify-center p-10 lg:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="border border-white px-12 py-8 lg:px-16 lg:py-10"
            >
              <h1 className="font-display text-white text-2xl lg:text-3xl xl:text-4xl tracking-[0.08em] text-center">
                CONTACTO
              </h1>
            </motion.div>
          </div>
          
          {/* Right - Woman Image */}
          <div className="relative overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src="https://static.wixstatic.com/media/ea26fd_de3ce029dcf54045ae136ddefd1cb5b5~mv2_d_1920_2097_s_2.jpg"
              alt="RUNE CODE Contacto"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {/* Title */}
          <div className="bg-[#1f1f1f] flex items-center justify-center py-20 px-8">
            <img 
              src="/images/contactoTitulo.png" 
              alt="Contacto"
              className="max-w-[280px] w-full"
            />
          </div>
          
          {/* Contact image with accents */}
          <div className="relative h-80">
            <img
              src="/images/contacto.png"
              alt="RUNE CODE Contacto"
              className="w-full h-full object-cover object-top"
            />
            {/* Orange line right */}
            <div className="absolute top-4 right-4 w-1 h-[85%] bg-[var(--color-orange)]" />
            {/* Orange triangle bottom-left */}
            <div 
              className="absolute bottom-0 left-0 w-0 h-0"
              style={{
                borderLeft: '70px solid var(--color-orange)',
                borderTop: '70px solid transparent'
              }}
            />
          </div>
        </div>
      </section>

      {/* Content Section - White Background with Grid Lines */}
      <section className="relative py-16 sm:py-20 bg-white">
        {/* Grid Lines Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: '25% 200px'
          }} />
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Image with Orange Accents (desktop only) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block order-2 lg:order-1"
            >
              {/* Orange corner accent top-left */}
              <div className="absolute -top-3 -left-3 w-20 h-24 border-t-2 border-l-2 border-[var(--color-orange)]" />
              
              <div className="relative">
                <img
                  src="/images/contacto.png"
                  alt="RUNE CODE"
                  className="w-full aspect-[3/4] object-cover"
                />
                
                {/* Orange triangle bottom-left */}
                <div 
                  className="absolute -bottom-2 -left-2 w-0 h-0"
                  style={{
                    borderLeft: '50px solid var(--color-orange)',
                    borderTop: '50px solid transparent'
                  }}
                />
              </div>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              {/* Arrow + Title */}
              <div className="flex items-start gap-4 mb-8">
                <span className="text-[var(--color-orange)] text-2xl mt-1">→</span>
                <h2 className="font-display text-[var(--color-orange)] text-xl sm:text-2xl tracking-wide leading-tight">
                  ¿DÓNDE NOS<br />ENCONTRAMOS?
                </h2>
              </div>
              
              <p className="font-body text-black/70 leading-relaxed mb-10 text-sm sm:text-base">
                Nos encontramos en la Ciudad de Maldonado; contamos con envíos dentro de la ciudad y 
                también hacemos envíos al interior del país.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/+59892550478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/5 rounded-xl hover:bg-[var(--color-orange)] group transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-[var(--color-orange)] rounded-full group-hover:bg-black transition-colors">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-black group-hover:text-white text-xs tracking-wide transition-colors">
                      WHATSAPP
                    </p>
                    <p className="font-body text-black/60 group-hover:text-white/80 text-sm transition-colors">
                      +598 92 550 478
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:runecode.uy@gmail.com"
                  className="flex items-center gap-4 p-4 bg-black/5 rounded-xl hover:bg-[var(--color-orange)] group transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-[var(--color-orange)] rounded-full group-hover:bg-black transition-colors">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-black group-hover:text-white text-xs tracking-wide transition-colors">
                      EMAIL
                    </p>
                    <p className="font-body text-black/60 group-hover:text-white/80 text-sm transition-colors">
                      runecode.uy@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/rune.code?igsh=MXg0M2NpZjNqcnl1cQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black/5 rounded-xl hover:bg-[var(--color-orange)] group transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-[var(--color-orange)] rounded-full group-hover:bg-black transition-colors">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-black group-hover:text-white text-xs tracking-wide transition-colors">
                      INSTAGRAM
                    </p>
                    <p className="font-body text-black/60 group-hover:text-white/80 text-sm transition-colors">
                      @rune.code
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-black/5 rounded-xl">
                  <div className="w-11 h-11 flex items-center justify-center bg-[var(--color-orange)] rounded-full">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display text-black text-xs tracking-wide">
                      UBICACIÓN
                    </p>
                    <p className="font-body text-black/60 text-sm">
                      Maldonado, Uruguay
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[var(--color-orange)]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-white text-xl sm:text-2xl md:text-3xl tracking-wide mb-8">
              ¿LISTO PARA MARCAR LA DIFERENCIA?
            </h3>
            <a
              href="https://wa.me/+59892550478?text=Hola, quiero más información sobre RUNE CODE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-black text-white font-display text-sm tracking-[0.12em] rounded-full hover:bg-gray-900 transition-all duration-300"
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
