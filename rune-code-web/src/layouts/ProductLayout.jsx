import { Outlet } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

export default function ProductLayout() {
  return (
    <>
      <HeaderNav />
      <main className="bg-white">
        <Outlet />
      </main>
    </>
  )
}

