import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

export default function GalleryPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="pt-20">
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
              Coming soon.
            </p>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
