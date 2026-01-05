import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Layout from '../components/Layout'

const products = [
  {
    id: 1,
    name: 'RENAISSANCE TEE',
    description: 'Camiseta oversized con estampado renacentista. Diseño exclusivo de ángel con detalles artísticos.',
    price: 1200,
    image: '/images/angelRemera.jpeg',
  },
  {
    id: 2,
    name: 'NEVER QUIT AZUL',
    description: 'Camiseta oversized en azul steel con diseño "Never Quit". Estampado frontal y trasero.',
    price: 1200,
    image: '/images/neverQuitAzul.jpeg',
  },
  {
    id: 3,
    name: 'NEVER QUIT MARRÓN',
    description: 'Camiseta oversized en tono marrón tierra con diseño "Never Quit". Algodón de alta calidad.',
    price: 1200,
    image: '/images/NeverQuitMarron.jpeg',
  },
  {
    id: 4,
    name: 'AURA TEE',
    description: 'Camiseta negra con tipografía gótica "Aura". Diseño de estatua clásica en la espalda.',
    price: 1200,
    image: '/images/AuraRemera.jpeg',
  },
]

const Catalogo = () => {
  return (
    <Layout noBackground>
      {/* Minimal header space for navbar */}
      <div className="pt-14 md:pt-16 bg-white" />
      
      {/* Products Section - All in white */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white min-h-screen">
        <div className="container-custom">
          {/* Title inside white section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="font-display text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.1em]">
              CATÁLOGO
            </h1>
            <div className="w-20 h-1 bg-[var(--color-orange)] mx-auto mt-6" />
          </motion.div>

          {/* Products Grid - More spacious */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-12 lg:gap-10">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-20 sm:mt-24"
          >
            <p className="font-body text-black/60 mb-8 text-lg">
              ¿Tenés alguna consulta sobre nuestros productos?
            </p>
            <a
              href="https://wa.me/+59892550478?text=Hola, quiero consultar sobre los productos de Rune Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-black text-white font-display text-sm tracking-[0.15em] rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              CONTACTANOS
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}

const ProductCard = ({ product, index }) => {
  const whatsappLink = `https://wa.me/+59892550478?text=Hola, me interesa el producto: ${encodeURIComponent(product.name)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Price Tag - Rounded */}
        <div className="absolute top-4 right-4 bg-[var(--color-orange)] px-4 py-2 rounded-full">
          <span className="font-display text-white text-sm font-medium">
            ${product.price}
          </span>
        </div>
      </div>

      {/* Product Info - More spacing */}
      <div className="p-6 sm:p-7">
        <h3 className="font-display text-black text-xl tracking-wide mb-4 group-hover:text-[var(--color-orange)] transition-colors">
          {product.name}
        </h3>
        
        <p className="font-body text-sm text-black/60 mb-8 leading-relaxed">
          {product.description}
        </p>

        {/* CTA Button - Smooth rounded, black with white text */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          <MessageCircle size={18} strokeWidth={1.5} />
          <span className="font-display text-sm tracking-[0.1em]">CONSULTAR</span>
        </a>
      </div>
    </motion.div>
  )
}

export default Catalogo
