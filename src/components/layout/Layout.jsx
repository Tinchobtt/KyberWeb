import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

const Layout = () => {
  return (
    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh'}}>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout