import { Link } from 'react-router-dom'
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
    title: 'Full Furnishing Package',
    description:
      'End-to-end sourcing, procurement, and installation of all furniture, lighting, textiles, and accessories. We handle everything from first sketch to final arrangement.',
  },
  {
    number: '03',
    title: 'Styling & Staging',
    description:
      'A final-touch service to style your space for photography and guest arrival. Cushions, artwork, plants, tableware — the details that make guests say wow.',
  },
  {
    number: '04',
    title: 'Photography-Ready Setup',
    description:
      'We prepare your space specifically for listing photography: optimising layout, lighting, and styling so every shot earns its place on your listing.',
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
      'A short call to understand your listing, your guests, and what success looks like for you.',
  },
  {
    number: '03',
    title: 'Proposal & Quote',
    description:
      'We send you a tailored proposal with scope, timeline, and pricing. No surprises.',
  },
  {
    number: '04',
    title: 'Design & Sourcing',
    description:
      'We get to work — designing, sourcing, and coordinating everything so you don\'t have to.',
  },
  {
    number: '05',
    title: 'Handover',
    description:
      'Your space is ready for guests. We do a final walkthrough and hand over a styled, photo-ready listing.',
  },
]

export default function ServicesPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">What We Offer</p>
            <h1
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#2d2e8c' }}
            >
              Services
            </h1>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ number, title, description }) => (
              <div
                key={number}
                className="relative border border-sage/30 rounded-sm p-8 pt-10 overflow-hidden"
              >
                {/* Background number */}
                <span
                  className="absolute top-2 right-4 text-[5rem] leading-none text-stone/5 select-none pointer-events-none"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                >
                  {number}
                </span>

                {/* Gold number */}
                <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-4" style={{ color: '#fdbf69' }}>
                  {number}
                </p>

                <h2
                  className="text-2xl font-light leading-snug mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#2d2e8c' }}
                >
                  {title}
                </h2>

                <p className="text-xs md:text-sm font-light leading-relaxed text-stone/70">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Custom note */}
          <p className="mt-12 text-sm font-light text-stone/60">
            Custom packages available —{' '}
            <Link to="/contact" className="text-terra hover:text-terra/70 transition-colors duration-200 underline underline-offset-4">
              contact us
            </Link>{' '}
            to discuss your space.
          </p>

          {/* How It Works */}
          <div className="mt-24 mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">The Process</p>
            <h2
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#2d2e8c' }}
            >
              How it works
            </h2>
          </div>

          <div className="space-y-12">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start relative">
                <div className="relative pt-2">
                  <span
                    className="absolute top-0 left-0 text-[6rem] leading-none text-stone/5 select-none pointer-events-none"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
                  >
                    {number}
                  </span>
                  <div className="relative z-10 pt-8">
                    <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">{number}</p>
                  </div>
                </div>

                <div className="pt-1">
                  <h3
                    className="text-2xl md:text-3xl font-light leading-snug mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#2d2e8c' }}
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
        </section>
      </FadeIn>
    </PageTransition>
  )
}
