import HeaderNav from './HeaderNav'
import Footer from './Footer'

const Layout = ({ children, noFooter = false }) => {
  return (
    <div className="relative min-h-screen bg-black">
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
