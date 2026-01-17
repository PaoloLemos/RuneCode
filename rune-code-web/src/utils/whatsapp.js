/**
 * Builds a WhatsApp URL for product purchase
 * @param {Object} params
 * @param {string} params.phone
 * @param {Object} params.product
 * @param {string} params.size
 * @param {number} params.qty
 * @param {string} [params.color]
 * @param {string} params.currentUrl
 * @returns {string}
 */
export const buildWhatsAppUrl = ({ phone, product, size, qty, color, currentUrl }) => {
  // Creamos muchos saltos de línea para "esconder" el link abajo
  const separator = '\n'.repeat(10); 

  const message = `*¡Hola! Quiero comprar:*
- *Producto:* ${product.name}
- *Talle:* ${size}${color ? `\n- *Color:* ${color}` : ''}
- *Cantidad:* ${qty}
- *Precio unitario:* $${product.price}${separator}`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

