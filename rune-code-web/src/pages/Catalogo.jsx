import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../constants/products'

const Catalogo = () => {
  return (
    <section className="bg-white min-h-screen w-full">
      {/* Main Container - PERFECTLY centered with equal padding on both sides */}
      <div className="container-catalog">
        
        {/* Title Block - centered with proper spacing */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20"
        >
          <h1 
            className="
              font-brand text-black
              text-[clamp(2.5rem,7vw,5rem)]
              text-center
            "
          >
            CATÁLOGO
          </h1>
        </motion.header>

        {/* Products Grid - 3 columns on desktop like reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
      
      {/* White space before footer - exactly 50px */}
      <div className="h-[50px] bg-white" />
    </section>
  )
}

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative aspect-[4/5] w-full overflow-hidden cursor-pointer"
    >
      <Link to={`/producto/${product.id}`} className="block w-full h-full">
        {/* Product Image - Square, no rounded corners */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay - Darkens and shows name */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-center justify-center">
          <h3 className="font-display text-white text-xl sm:text-2xl lg:text-3xl tracking-[0.15em] text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 transform translate-y-4 group-hover:translate-y-0">
            {product.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  )
}

export default Catalogo
