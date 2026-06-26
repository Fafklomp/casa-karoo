import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

const stats = [
  { value: '5★', label: 'Reviews' },
  { value: 'Higher', label: 'Nightly Rates' },
  { value: 'Faster', label: 'Bookings' },
]

export default function HeroPage() {
  return (
    <PageTransition>
      <FadeIn>
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20 pb-16 max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-6">
              Interior Design for Short-Term Rentals
            </p>
            <h1
              className="text-4xl md:text-6xl font-light leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              Turn your rental into a standout listing.
            </h1>
            <p className="text-sm md:text-base font-light leading-relaxed text-stone/70 mb-10 max-w-xl">
              Interior design and furnishing packages built for Airbnb hosts who want better photos, stronger reviews, and higher nightly rates.
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

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 border-t border-stone/10 pt-10">
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
        </section>

        {/* Spacer before footer */}
        <div className="pb-12" />
      </FadeIn>
    </PageTransition>
  )
}
