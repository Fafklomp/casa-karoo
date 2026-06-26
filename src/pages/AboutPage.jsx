import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

export default function AboutPage() {
  return (
    <PageTransition>
      <FadeIn>
        <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-4">Who We Are</p>
            <h1
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              About Us
            </h1>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Our Story</p>
            <div className="space-y-4">
              <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                My name is Jules, a South African trained Interior Architect passionate about crafting
                spaces through the lens of human wellbeing and sustainability. After gaining three years
                of professional practice, earning my LEED Green Associate credential, and graduating
                Cum Laude with my Honours in Interior Architecture, I have developed a strong commitment
                to designing interiors that exceed client expectations.
              </p>
              <p className="text-sm md:text-base font-light leading-relaxed text-stone/80">
                My work spans luxury residential and hospitality projects across the world, where I have
                had the creative freedom to explore bespoke design solutions and refine my ability to
                craft detail-driven spaces that engage and inspire those who experience them. My design
                approach blends aesthetics, comfort, and brand identity to create meaningful,
                human-centered environments. I am committed to delivering spaces that positively impact
                both their users and the environment, and I plan to continue advancing my sustainability
                and wellbeing expertise through LEED AP ID+C and WELL AP credentials.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-stone/10 pt-12">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Credentials</p>
            <ul className="space-y-3">
              {[
                'Honours in Interior Architecture — Cum Laude',
                'LEED Green Associate',
                '3+ Years Professional Practice',
                'Luxury Residential & Hospitality Projects Worldwide',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-light text-stone/70">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
