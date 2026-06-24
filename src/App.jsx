import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import HeroPage from './pages/HeroPage'
import ServicesPage from './pages/ServicesPage'
import WhyPage from './pages/WhyPage'
import GalleryPage from './pages/GalleryPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<HeroPage />} />
        <Route path="/services"     element={<ServicesPage />} />
        <Route path="/why"          element={<WhyPage />} />
        <Route path="/gallery"      element={<GalleryPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact"      element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#F7F4EF' }}>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  )
}
