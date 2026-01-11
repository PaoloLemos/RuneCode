import { Outlet } from "react-router-dom"
import HeaderNav from "../components/HeaderNav" // AJUSTÁ si la ruta cambia

export default function MainLayout() {
  return (
    <>
      <HeaderNav />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}
