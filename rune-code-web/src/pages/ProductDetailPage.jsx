import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Minus, Plus, MessageCircle } from 'lucide-react'
import { products, WHATSAPP_PHONE } from '../constants/products'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))

  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [error, setError] = useState('')

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-white">
        <h2 className="font-display text-3xl mb-4 text-black">PRODUCTO NO ENCONTRADO</h2>
        <Link 
          to="/catalogo" 
          className="font-body text-sm tracking-widest border border-black px-8 py-3 text-black hover:bg-black hover:text-white transition-colors"
        >
          VOLVER AL CATÁLOGO
        </Link>
      </div>
    )
  }

  const handleQuantityChange = (type) => {
    if (type === 'plus') setQuantity(prev => prev + 1)
    if (type === 'minus' && quantity > 1) setQuantity(prev => prev - 1)
  }

  const handleWhatsAppClick = () => {
    if (!selectedSize) {
      setError('Por favor selecciona un talle')
      return
    }
    setError('')
    
    const whatsappUrl = buildWhatsAppUrl({
      phone: WHATSAPP_PHONE,
      product,
      size: selectedSize,
      qty: quantity,
      currentUrl: window.location.href
    })
    
    window.open(whatsappUrl, '_blank')
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-70px)] bg-white flex flex-col overflow-hidden">
      {/* Main content - takes full height with padding */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 lg:gap-8 min-h-0">
        
        {/* Left: Image Gallery */}
        <div className="flex-1 lg:flex-[1.2] flex flex-col min-h-0">
          <div className="relative flex-1 bg-gray-50 overflow-hidden group min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={product.images[activeImageIndex] || '/images/placeholder.png'}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
            
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                >
                  <ChevronLeft size={20} className="text-black" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                >
                  <ChevronRight size={20} className="text-black" />
                </button>
              </>
            )}
          </div>
          
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-3 overflow-x-auto flex-shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-16 lg:w-16 lg:h-20 border-2 transition-colors ${
                    activeImageIndex === idx ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto lg:max-w-md">
          {/* Back link */}
          <nav className="mb-4 flex-shrink-0">
            <Link to="/catalogo" className="text-xs tracking-widest text-black hover:text-gray-600 transition-colors flex items-center gap-1 font-body">
              <ChevronLeft size={14} /> VOLVER AL CATÁLOGO
            </Link>
          </nav>

          {/* Product name */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-widest mb-2 text-black">
            {product.name}
          </h1>
          
          {/* Price */}
          <p className="font-body text-lg sm:text-xl mb-4 text-black font-medium">
            ${product.price.toLocaleString('es-AR')}
          </p>

          {/* Description */}
          <p className="font-body text-sm text-black/70 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="mb-5">
            <div className="flex justify-between items-center mb-3">
              <span className="font-body text-sm tracking-widest uppercase text-black font-medium">
                Talle {selectedSize && <span className="ml-2 text-[var(--color-orange)]">— {selectedSize}</span>}
              </span>
              {error && <span className="text-red-600 text-xs font-body uppercase animate-pulse">{error}</span>}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size)
                    setError('')
                  }}
                  className={`w-11 h-11 flex items-center justify-center border font-body text-sm transition-all ${
                    selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-black/30 text-black hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <span className="block font-body text-sm tracking-widest uppercase mb-3 text-black font-medium">Cantidad</span>
            <div className="flex items-center w-28 border border-black/30">
              <button 
                onClick={() => handleQuantityChange('minus')}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Minus size={14} className="text-black" />
              </button>
              <span className="flex-1 text-center font-body text-black">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('plus')}
                className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Plus size={14} className="text-black" />
              </button>
            </div>
          </div>

          {/* Selected options summary */}
          {selectedSize && (
            <div className="mb-4 p-3 bg-gray-50 border border-gray-200">
              <p className="font-body text-xs uppercase tracking-widest text-black/60 mb-1">Tu selección:</p>
              <p className="font-body text-sm text-black">
                <strong>Talle:</strong> {selectedSize}
                {quantity > 1 && <> · <strong>Cantidad:</strong> {quantity}</>}
              </p>
            </div>
          )}

          {/* CTA Button */}
          {product.inStock === false ? (
            <div className="w-full py-4 flex items-center justify-center gap-3 font-display tracking-[0.15em] text-sm flex-shrink-0 bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white/90">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
              </svg>
              SOLD OUT
            </div>
          ) : (
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={selectedSize ? { scale: 1.02 } : {}}
              whileTap={selectedSize ? { scale: 0.98 } : {}}
              className={`w-full py-4 flex items-center justify-center gap-3 font-display tracking-[0.15em] text-sm flex-shrink-0 transition-all duration-300 ${
                selectedSize 
                  ? 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <motion.span
                animate={selectedSize ? { rotate: [0, -10, 10, -5, 5, 0] } : {}}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <MessageCircle size={20} />
              </motion.span>
              COMPRAR POR WHATSAPP
            </motion.button>
          )}

          <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-black/50 font-body flex-shrink-0">
            IVA incluido. Envío calculado al finalizar la compra.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
