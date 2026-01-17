import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import ProductLayout from "./layouts/ProductLayout"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import ProductDetailPage from "./pages/ProductDetailPage"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
      <Route element={<ProductLayout />}>
        <Route path="/producto/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
