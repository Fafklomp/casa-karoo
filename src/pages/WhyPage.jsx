import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

function PH({ children }) {
  return (
    <span className="relative inline-block">
      <svg aria-hidden="true" className="absolute inset-0 w-full h-full" viewBox="0 0 120 24" preserveAspectRatio="none" style={{ top: '10%', height: '85%' }}>
        <path d="M2,18 C10,8 20,4 40,6 C60,8 80,5 100,7 C112,8 118,12 118,16 C118,20 110,22 90,21 C70,20 40,21 20,20 C8,19 2,21 2,18 Z" fill="#C4A882" opacity="0.7"/>
      </svg>
      <span className="relative">{children}</span>
    </span>
  )
}

const reasons = [
  {
    number: '01',
    title: 'Better Photos',
    description:
      'Listings with professionally styled spaces get significantly more clicks. Great design gives photographers something to work with.',
  },
  {
    number: '02',
    title: 'Higher Nightly Rates',
    description:
      'A well-designed space commands a premium. Guests pay more for spaces that feel intentional, comfortable, and distinctive.',
  },
  {
    number: '03',
    title: 'Stronger Reviews',
    description:
      'Guests notice the details. Thoughtful design leads to 5-star reviews that compound into more bookings over time.',
  },
  {
    number: '04',
    title: 'Faster Bookings',
    description:
      'A listing that stands out in search gets booked faster, reducing vacancy and maximising your return.',
  },
]

export default function WhyPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">The Case for Design</p>
            <h1
              className="text-3xl md:text-5xl font-light leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              Design is your highest-ROI investment as a host.
            </h1>
          </div>

          {/* 2×2 grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map(({ number, title, description }) => (
              <div key={number} className="relative pt-8 pb-4">
                {/* Background number */}
                <span
                  className="absolute top-0 left-0 text-[5rem] sm:text-[8rem] leading-none text-stone/5 select-none pointer-events-none"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900 }}
                >
                  {number}
                </span>
                <div className="relative z-10 pt-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-3">{title}</p>
                  <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing paragraph */}
          <div className="border-t border-stone/10 pt-12">
            <p className="text-sm md:text-base font-light leading-relaxed text-stone/70 max-w-2xl">
              Most hosts <PH>underinvest</PH> in their space and <PH>overspend</PH> on promotions. We flip that equation.
            </p>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
