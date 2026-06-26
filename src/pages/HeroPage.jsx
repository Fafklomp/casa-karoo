import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'
import WorldMap from '../components/WorldMap'

const stats = [
  { value: '5★', label: 'Reviews' },
  { value: 'Higher', label: 'Nightly Rates' },
  { value: 'Faster', label: 'Bookings' },
]

export default function HeroPage() {
  return (
    <PageTransition>
      <FadeIn>
        {/* Cover photo with heading overlay */}
        <div className="relative w-full h-[48vh] md:h-[56vh] overflow-hidden">
          <img src="/cover.jpg" alt="The Karoo" className="w-full h-full object-cover" style={{ objectPosition: 'center 60%' }} />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 left-0 right-0 flex justify-center px-6 md:px-16 pt-20">
            <h1
              className="text-2xl md:text-4xl font-light leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#fff' }}
            >
              Interiors that turn a rental into a retreat.
            </h1>
          </div>
        </div>

        {/* Hero */}
        <section className="flex flex-col justify-center px-6 md:px-16 pt-10 pb-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">
              Interior Design for Short-Term Rentals
            </p>
            <p className="text-sm md:text-sm font-light leading-relaxed text-stone/70 mb-10 max-w-xl">
              Interior design & furnishing packages built for rental hosts who want better photos, stronger reviews & higher nightly rates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="text-xs tracking-widest uppercase bg-stone text-offwhite px-8 py-3 rounded-full hover:bg-stone/80 transition-colors duration-200"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="text-xs tracking-widest uppercase text-terra border border-terra/60 px-8 py-3 rounded-full hover:bg-terra hover:border-terra hover:text-offwhite transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>

        </section>

        {/* World map */}
        <WorldMap />

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 px-6 md:px-16 pb-16 max-w-5xl mx-auto border-t border-stone/10 pt-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span
                className="text-2xl font-light"
                style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
              >
                {value}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Spacer before footer */}
        <div className="pb-12" />
      </FadeIn>
    </PageTransition>
  )
}
