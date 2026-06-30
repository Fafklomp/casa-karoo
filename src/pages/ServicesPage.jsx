import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCamera, FiTrendingUp, FiStar, FiZap } from 'react-icons/fi'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

const services = [
  {
    number: '01',
    title: 'Design Consultation',
    description:
      'A focused session to define your space\'s style direction, colour palette, and furniture layout. Perfect for hosts who want a clear plan to execute themselves.',
  },
  {
    number: '02',
    title: 'Design Package',
    description:
      'End-to-end sourcing, procurement, and installation of all furniture, lighting, textiles, and accessories. We handle everything from first sketch to final arrangement.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Reach Out',
    description:
      'Fill in the contact form or send us a message. Tell us about your space, your goals, and your timeline.',
  },
  {
    number: '02',
    title: 'Discovery Call',
    description:
      'A focused introduction call to understand your listing, your vision, and what success looks like for your short-term rental.',
  },
  {
    number: '03',
    title: 'Proposal & Quote',
    description:
      'We send you a tailored proposal outlining scope, deliverables, timeline, and pricing. Clear, considered, and transparent.',
  },
  {
    number: '04',
    title: 'Design',
    description:
      'We develop your concept, including schematic design options, mood boards, material direction, and furniture layouts. This is where your space begins to take shape.',
  },
  {
    number: '05',
    title: 'Design Package Delivery',
    description:
      'You receive your complete design package, including technical drawings and FF&E specifications… ready for you or your local team to bring to life!',
  },
]

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

function PH({ children }) {
  return <span style={{ borderBottom: '2px solid #8A9EBA', paddingBottom: '1px' }}>{children}</span>
}

function PHB({ children }) {
  return <span style={{ borderBottom: '2px solid #8A9EBA', paddingBottom: '1px' }}>{children}</span>
}

function ServiceAccordion() {
  const [open, setOpen] = useState(null)

  const items = [
    {
      id: 'consultation',
      title: 'Design Consultation',
      description: (
        <>
          A focused session to get to know each other, understand your <PH>vision</PH>, define your project's <PH>goals</PH>, <PH>limitations and opportunities</PH>. Together, we will explore the potential design direction, colour palette, and furniture layout.
        </>
      ),
    },
    {
      id: 'package',
      title: 'Design Package',
      description: (
        <ul className="space-y-2 text-xs md:text-sm font-light leading-relaxed text-stone/70 list-none">
          {[
            <>X3 <PH>schematic design</PH> concepts, each exploring a different layout and design direction for your space.</>,
            <>X3 curated <PH>look-and-feel</PH> (FF&E) boards, illustrating the furniture, finishes, lighting, and styling.</>,
            <>A cohesive <PH>colour and material palette</PH>.</>,
            <><PH>Construction drawings</PH>, including plans, elevations, and custom joinery details where required to communicate the design intent.</>,
            <>Curated furniture, lighting, and décor selections.</>,
            <>A comprehensive <PH>FF&E schedule</PH> with product specifications and shopping links.</>,
            <>Artwork, styling, and finishing-touch recommendations.</>,
          ].map((item, i) => (
            <li key={i} className="flex gap-2"><span className="shrink-0 text-sage">•</span><span>{item}</span></li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(({ id, title, description }) => {
        const isOpen = open === id
        return (
          <button
            key={id}
            className="relative border-2 rounded-sm p-8 pt-10 overflow-hidden text-left w-full group"
            style={{ borderColor: '#8A9EBA' }}
            onClick={() => setOpen(isOpen ? null : id)}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-light leading-snug" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}>
                {title}
              </h2>
              <span
                className="ml-4 shrink-0 text-xl text-stone/40 group-hover:text-stone/70"
                style={{ display: 'inline-block', transition: 'transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </div>
            {isOpen && (
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70 mt-4">
                {description}
              </p>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">What We Offer</p>
            <h1
              className="text-2xl md:text-4xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              Services
            </h1>
          </div>

          {/* Service accordion */}
          <ServiceAccordion />

          {/* Custom note */}
          <p className="mt-12 text-sm font-light text-stone/60">
            Custom packages available —{' '}
            <Link to="/contact" className="text-terra hover:text-terra/70 transition-colors duration-200 underline underline-offset-4">
              contact us
            </Link>{' '}
            to discuss your space.
          </p>

          {/* How It Works */}
          <div className="border-t border-stone/10 mt-24" />
          <div className="mt-16 mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">The Process</p>
            <h2
              className="text-2xl md:text-4xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              How it works
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex gap-6 md:grid md:grid-cols-[200px_1fr] md:gap-16 items-start relative">
                <div className="relative pt-2 shrink-0">
                  <span
                    className="absolute top-0 left-0 text-[5rem] leading-none text-stone/5 select-none pointer-events-none"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900 }}
                  >
                    {number}
                  </span>
                  <div className="relative z-10 pt-8">
                    <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">{number}</p>
                  </div>
                </div>
                <div className="pt-1">
                  <h3
                    className="text-2xl md:text-2xl font-light leading-snug mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
                  >
                    {title}
                  </h3>
                  <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why It Works */}
          <div className="border-t border-stone/10 mt-24" />
          <div className="mt-16 mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">The Case for Design</p>
            <h2
              className="text-2xl md:text-4xl font-light leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              Why it works
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-light leading-snug text-stone/60 max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              Design is your highest-ROI investment as a host.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="pb-4">
              <div className="flex items-center gap-2 mb-3"><FiCamera className="text-[#8A9EBA]" size={16} /><p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">Better Photos</p></div>
              <div className="border-2 rounded-sm p-4" style={{ borderColor: '#8A9EBA' }}>
                <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                  A well-designed, styled space gives photographers something to work with — resulting in images that <PH>stop the scroll</PH> and drive more clicks to your listing.
                </p>
              </div>
              <p className="text-xs font-light text-stone/40 mt-2 italic">
                Airbnb reports that listings with high-quality photos receive significantly more views and are booked up to 24% more often than listings without. — Airbnb Host Resources
              </p>
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-2 mb-3"><FiTrendingUp className="text-[#8A9EBA]" size={16} /><p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">Higher Nightly Rates</p></div>
              <div className="border-2 rounded-sm p-4" style={{ borderColor: '#8A9EBA' }}>
                <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                  A well-designed space <PH>commands a premium</PH>. Guests pay more for spaces that feel intentional, comfortable, and distinctive.
                </p>
              </div>
              <p className="text-xs font-light text-stone/40 mt-2 italic">
                STR analytics firm AirDNA found that design-forward listings consistently achieve 20–35% higher average daily rates than comparable properties.
              </p>
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-2 mb-3"><FiStar className="text-[#8A9EBA]" size={16} /><p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">Stronger Reviews</p></div>
              <div className="border-2 rounded-sm p-4" style={{ borderColor: '#8A9EBA' }}>
                <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                  Guests notice the details. Thoughtful design leads to <PH>5-star reviews</PH> that compound into more bookings over time.
                </p>
              </div>
              <p className="text-xs font-light text-stone/40 mt-2 italic">
                According to Airbnb's host research, listings rated 4.8★ or above appear up to 3× more frequently in search results than lower-rated properties.
              </p>
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-2 mb-3"><FiZap className="text-[#8A9EBA]" size={16} /><p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">Faster Bookings</p></div>
              <div className="border-2 rounded-sm p-4" style={{ borderColor: '#8A9EBA' }}>
                <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                  A listing that <PH>stands out in search</PH> gets booked faster, reducing vacancy and maximising your return.
                </p>
              </div>
              <p className="text-xs font-light text-stone/40 mt-2 italic">
                Optimised, visually compelling listings fill their calendars up to 2× faster, directly reducing vacancy loss. — Transparent Short-Term Rental Report
              </p>
            </div>
          </div>

          <div className="border-t border-stone/10 pt-12">
            <p className="text-sm md:text-sm font-light leading-relaxed max-w-2xl" style={{ color: '#8A9EBA' }}>
              Most hosts underinvest in their space and overspend on promotions. We flip that equation.
            </p>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
