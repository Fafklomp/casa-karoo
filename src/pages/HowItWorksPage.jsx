import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

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

export default function HowItWorksPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-20 pb-12 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">The Process</p>
            <h1
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              How it works
            </h1>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start relative">
                {/* Background number */}
                <div className="relative pt-1">
                  <span
                    className="absolute top-0 left-0 text-[5rem] leading-none text-stone/5 select-none pointer-events-none"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900 }}
                  >
                    {number}
                  </span>
                  <div className="relative z-10 pt-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold">{number}</p>
                  </div>
                </div>

                <div className="pt-1">
                  <h2
                    className="text-2xl md:text-2xl font-light leading-snug mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
                  >
                    {title}
                  </h2>
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
