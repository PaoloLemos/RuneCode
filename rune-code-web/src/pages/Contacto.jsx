import { motion } from 'framer-motion'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Contacto = () => {
  const contactItems = [
    {
      icon: <Phone size={24} />,
      label: 'WHATSAPP',
      value: '+598 92 550 478',
      href: 'https://wa.me/+59892550478'
    },
    {
      icon: <Mail size={24} />,
      label: 'EMAIL',
      value: 'runecode.uy@gmail.com',
      href: 'mailto:runecode.uy@gmail.com'
    },
    {
      icon: <Instagram size={24} />,
      label: 'INSTAGRAM',
      value: '@rune.code',
      href: 'https://www.instagram.com/rune.code'
    },
    {
      icon: <MapPin size={24} />,
      label: 'UBICACIÓN',
      value: 'Maldonado, Uruguay',
      href: null
    }
  ]

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
              CONTACTO
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

      {/* Info Section */}
      <section className="py-8 md:py-12 flex-grow">
        <div className="container-custom flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl w-full text-center mb-12 md:mb-16"
          >
            <h2 className="font-brand text-black text-lg md:text-xl mb-6">
              ¿DÓNDE NOS ENCONTRAMOS?
            </h2>
            <p className="font-body text-black/60 text-base md:text-lg leading-relaxed">
              Nos encontramos en la Ciudad de Maldonado. Contamos con envíos dentro de la ciudad 
              y también hacemos envíos al interior del país.
            </p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl w-full">
            {contactItems.map((item, index) => {
              const card = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`h-full flex flex-col items-center justify-center p-8 border border-gray-100 rounded-sm transition-all duration-300 ${item.href ? 'hover:border-[var(--color-orange)] hover:shadow-sm group' : ''}`}
                >
                  <div className="text-[var(--color-orange)] mb-4 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-brand text-[10px] tracking-[0.2em] text-black/40 mb-2 uppercase">
                    {item.label}
                  </span>
                  <p className="font-body text-black text-sm md:text-base text-center break-all">
                    {item.value}
                  </p>
                </motion.div>
              )

              return item.href ? (
                <a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              ) : (
                <div key={index} className="h-full">
                  {card}
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 md:mt-24 w-full"
          >
            <h3 className="font-brand text-black text-lg md:text-xl mb-8">
              ¿LISTO PARA MARCAR LA DIFERENCIA?
            </h3>
            <a
              href="https://wa.me/+59892550478?text=Hola, quiero más información sobre RUNE CODE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[var(--color-orange)] text-white font-brand text-xs tracking-[0.2em] hover:bg-[var(--color-orange-dark)] transition-all duration-300 hover:scale-105"
            >
              ESCRIBINOS AHORA
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
