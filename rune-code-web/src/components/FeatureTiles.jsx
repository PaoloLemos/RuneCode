import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const tiles = [
  {
    id: 1,
    title: 'NUEVAS\nTENDENCIAS',
    image: 'https://static.wixstatic.com/media/ea26fd_009d35a5ba2d46cab1ed6f151db97449~mv2_d_1920_2097_s_2.jpg',
    link: '/catalogo',
    overlayPosition: 'bottom-left',
  },
  {
    id: 2,
    title: 'FAVORITOS DE\nLA TEMPORADA',
    image: 'https://static.wixstatic.com/media/ea26fd_de3ce029dcf54045ae136ddefd1cb5b5~mv2_d_1920_2097_s_2.jpg',
    link: '/catalogo',
    overlayPosition: 'bottom-right',
  },
  {
    id: 3,
    title: 'SE PARTE DE\nNUESTRA\nCOMUNIDAD',
    image: 'https://static.wixstatic.com/media/ea26fd_79c443e19a9b47c8890ba50aa9dbbc48~mv2_d_1920_2097_s_2.jpg',
    link: '/nosotros',
    overlayPosition: 'bottom-right',
  },
]

const FeatureTiles = () => {
  return (
    <section className="relative py-4 bg-white">
      <div className="container-custom">
        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-1">
          {tiles.map((tile, index) => (
            <TileCard key={tile.id} tile={tile} index={index} />
          ))}
        </div>

        {/* Mobile - Stacked */}
        <div className="md:hidden flex flex-col gap-4">
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
        <div 
          className={`absolute bg-[var(--color-orange)] p-4 sm:p-5 lg:p-6 transition-all duration-300 group-hover:bg-[var(--color-orange-dark)] ${
            tile.overlayPosition === 'bottom-left' 
              ? 'bottom-6 left-0' 
              : 'bottom-6 right-0'
          }`}
          style={{ maxWidth: isMobile ? '70%' : '75%' }}
        >
          <h3 className="font-display text-white text-lg sm:text-xl lg:text-2xl tracking-wide leading-tight whitespace-pre-line">
            {tile.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}

export default FeatureTiles

