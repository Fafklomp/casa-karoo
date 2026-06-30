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
              className="text-2xl md:text-4xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
            >
              About Us
            </h1>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Our Story</p>
              <div className="w-2/3 md:w-full h-36 md:h-56 overflow-hidden rounded-sm">
                <img src="/karoo-road.jpg" alt="The Karoo road" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-light leading-relaxed text-stone/80">
                Casa Karoo was born from a love of thoughtful spaces, grounded living, and the quiet beauty of the South African Karoo. Inspired by its vast landscapes, earthy palette, and sense of stillness, we create interiors that feel calm, intentional, and deeply connected to place.
              </p>
              <p className="text-sm font-light leading-relaxed text-stone/80">
                We believe that every space tells a story. One that balances beauty with function and leaves a lasting impression. From short-term rentals to hospitality and residential interiors, we transform spaces into meaningful experiences where people feel at home, wherever they are.
              </p>
            </div>
          </div>

          {/* Founder */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-stone/10 pt-12 mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">The Founder</p>
              <img src="/founder.jpg" alt="Jules Tucker" className="w-1/2 md:w-full h-auto rounded-sm block" />
            </div>
            <div className="space-y-4">
              <p className="text-sm font-light leading-relaxed text-stone/80">
                Hi, I'm Jules!
              </p>
              <p className="text-sm font-light leading-relaxed text-stone/80">
                As a trained Interior Architect, I've always believed that the spaces we inhabit shape how we feel, connect and experience the world. My career has taken me from designing luxury hospitality projects and private residences to working across diverse environments, each reinforcing the importance of thoughtful, human-centred design.
              </p>
              <p className="text-sm font-light leading-relaxed text-stone/80">
                I believe that great design is more than creating beautiful spaces. It's about creating meaningful experiences. Whether it's a short-term rental that guests remember long after they've left, a boutique hospitality space with its own unique story, or a home that feels effortlessly lived in, every project is approached with intention, care and attention to detail.
              </p>
              <p className="text-sm font-light leading-relaxed text-stone/80">
                At Casa Karoo, every space is thoughtfully curated to balance beauty with function, creating environments that are authentic, memorable and designed to be lived in.
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
