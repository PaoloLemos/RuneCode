import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const tiles = [
  {
    id: 1,
    title: 'NUEVAS\nTENDENCIAS',
    image: '/images/WhatsApp Image 2026-01-11 at 5.34.32 PM.jpeg',
    link: '/catalogo',
  },
  {
    id: 2,
    title: 'FAVORITOS DE\nLA TEMPORADA',
    image: '/images/Modelo1.png',
    link: '/catalogo',
  },
  {
    id: 3,
    title: 'SE PARTE DE\nNUESTRA\nCOMUNIDAD',
    image: 'https://static.wixstatic.com/media/ea26fd_79c443e19a9b47c8890ba50aa9dbbc48~mv2_d_1920_2097_s_2.jpg',
    link: '/nosotros',
  },
]

const FeatureTiles = () => {
  return (
    <section className="relative pt-[40px] pb-16 md:pb-24 bg-white">
      <div className="container-custom">
        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {tiles.map((tile, index) => (
            <TileCard key={tile.id} tile={tile} index={index} />
          ))}
        </div>

        {/* Mobile - Stacked */}
        <div className="md:hidden flex flex-col gap-8">
          {tiles.map((tile, index) => (
            <TileCard key={tile.id} tile={tile} index={index} isMobile />
          ))}
        </div>
      </div>
    </section>
  )
}

const TileCard = ({ tile, index, isMobile = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      <Link 
        to={tile.link}
        className={`block relative overflow-hidden group ${
          isMobile ? 'aspect-[4/5]' : 'aspect-[3/4]'
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={tile.image}
            alt={tile.title.replace('\n', ' ')}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        {/* Text Overlay Box */}
        <motion.div 
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          whileInView={{ opacity: 1, y: 0, x: '-50%' }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.7, 
            delay: (index * 0.1) + 0.2,
            ease: "easeOut"
          }}
          className="absolute bottom-6 left-1/2 w-[90%] bg-[var(--color-orange)] p-5 sm:p-6 lg:p-8 transition-all duration-300 group-hover:bg-[var(--color-orange-dark)] text-center shadow-xl"
        >
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: (index * 0.1) + 0.6,
              ease: "easeOut"
            }}
            className="font-display text-white text-2xl sm:text-3xl lg:text-4xl tracking-wider leading-[1.1] whitespace-pre-line uppercase"
          >
            {tile.title}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default FeatureTiles

