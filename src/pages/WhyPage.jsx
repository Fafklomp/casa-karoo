import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

function PH({ children }) {
  return <span style={{ borderBottom: '2px solid #8A9EBA', paddingBottom: '1px' }}>{children}</span>
}

function PHB({ children }) {
  return <span style={{ borderBottom: '2px solid #8A9EBA', paddingBottom: '1px' }}>{children}</span>
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
              className="text-2xl md:text-4xl font-light leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              Design is your highest-ROI investment as a host.
            </h1>
          </div>

          {/* 2×2 grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map(({ number, title, description }) => (
              <div key={number} className="pb-4">
                <div>
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
            <p className="text-sm md:text-sm font-light leading-relaxed text-stone/70 max-w-2xl">
              Most hosts <PHB>underinvest</PHB> in their space and <PHB>overspend</PHB> on promotions. We flip that equation.
            </p>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
