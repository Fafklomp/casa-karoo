import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import ImageBanner from '../components/ImageBanner'

const galleryImages = Array.from({ length: 13 }, (_, i) => `/banner/${i + 1}.webp`)

function Lightbox({ gallery, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex)
  const touchStartX = useRef(null)

  function navigate(dir) {
    setIndex(i => Math.min(Math.max(i + dir, 0), gallery.length - 1))
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  setIndex(i => Math.max(i - 1, 0))
      if (e.key === 'ArrowRight') setIndex(i => Math.min(i + 1, gallery.length - 1))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, gallery.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1)
        touchStartX.current = null
      }}
    >
      <motion.img
        key={gallery[index]}
        src={gallery[index]}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="max-w-full max-h-full object-contain rounded-sm cursor-default"
        onClick={e => e.stopPropagation()}
      />

      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-150 p-2"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {index < gallery.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate(1) }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-150 p-2"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
        {index + 1} / {gallery.length}
      </p>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-150 text-xl leading-none"
        aria-label="Close"
      >
        ✕
      </button>
    </motion.div>
  )
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null) // { index }

  // Split images into two columns for masonry effect
  const col1 = galleryImages.filter((_, i) => i % 2 === 0)
  const col2 = galleryImages.filter((_, i) => i % 2 === 1)

  function openLightbox(index) {
    setLightbox({ index })
  }

  return (
    <PageTransition>
      <FadeIn>
        <section className="pt-20">
          {/* Banner */}
          <ImageBanner />

          {/* Header */}
          <div className="px-6 md:px-16 pt-16 pb-8 max-w-5xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">Portfolio</p>
            <h1
              className="text-2xl md:text-4xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              Our Work
            </h1>
            <p className="mt-4 text-sm font-light text-stone/60">
              Selected projects — placeholder images from our portfolio.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="px-6 md:px-16 pb-24 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                {col1.map((src, i) => {
                  const originalIndex = i * 2
                  return (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="w-full h-auto rounded-sm cursor-zoom-in hover:opacity-90 transition-opacity duration-150"
                      onClick={() => openLightbox(originalIndex)}
                    />
                  )
                })}
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-3 mt-8">
                {col2.map((src, i) => {
                  const originalIndex = i * 2 + 1
                  return (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="w-full h-auto rounded-sm cursor-zoom-in hover:opacity-90 transition-opacity duration-150"
                      onClick={() => openLightbox(originalIndex)}
                    />
                  )
                })}
              </div>
            </div>

            <p className="mt-10 text-xs text-stone/40 tracking-wide">
              Full before/after case studies coming soon.
            </p>
          </div>
        </section>
      </FadeIn>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            gallery={galleryImages}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
