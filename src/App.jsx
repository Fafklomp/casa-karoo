import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Nav from './components/Nav'
import HeroPage from './pages/HeroPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MissionPage from './pages/MissionPage'
import Footer from './components/Footer'

function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<HeroPage />} />
        <Route path="/services"     element={<ServicesPage />} />
        <Route path="/gallery"      element={<GalleryPage />} />
        <Route path="/about"        element={<AboutPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="/mission"      element={<MissionPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#F5F0E8' }}>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  )
}
