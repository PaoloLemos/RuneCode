import HeaderNav from './HeaderNav'
import Footer from './Footer'

const Layout = ({ children, noBackground = false, noFooter = false }) => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Global Background Image - Only if not disabled */}
      {!noBackground && (
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/fondoPiedras.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <HeaderNav />
        <main>
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </div>
  )
}

export default Layout
