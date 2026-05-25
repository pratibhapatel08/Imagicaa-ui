import { Outlet } from 'react-router-dom'
import Footer from '../components/home/Footer.jsx'
import Navbar from '../components/home/Navbar.jsx'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
