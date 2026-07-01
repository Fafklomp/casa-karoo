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
            <p className="mt-3 text-xl md:text-2xl font-light text-stone/60" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              Rooted in place, guided by intention.
            </p>
          </div>

          {/* 5 Pillars */}
          <div className="flex flex-nowrap justify-between gap-2 md:gap-6 border-b border-stone/10 pb-12 mb-16">
            {[
              { label: 'Storytelling',   src: '/storytelling.mp4',  style: {} },
              { label: 'Wellbeing',      src: '/wellbeing.mp4',      style: {} },
              { label: 'Sustainability', src: '/sustainability.mp4', style: { objectPosition: '50% 30%' } },
              { label: 'Context',        src: '/context.mp4',        style: { objectPosition: '50% 70%' } },
              { label: 'Craftsmanship',  src: '/craftsmanship.mp4',  style: {} },
            ].map(({ label, src, style }) => (
              <div key={label} className="relative">
                <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border border-stone/10 bg-stone/5 shrink-0 overflow-hidden">
                  <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover" style={style} />
                </div>
                <svg
                  className="absolute pointer-events-none"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '180%', height: '180%' }}
                  viewBox="0 0 160 160"
                  overflow="visible"
                >
                  <defs>
                    <path id={`arc-${label}`} d="M 22,80 A 58,58 0 1,1 138,80" />
                  </defs>
                  <text fontSize="10" fontWeight="600" letterSpacing="2.5" fill="#3D2B1A" fontFamily="var(--font-display)" transform="rotate(-20, 80, 80)">
                    <textPath href={`#arc-${label}`} startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                </svg>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Our Story</p>
              <div className="w-full aspect-[5/4] md:aspect-auto overflow-hidden rounded-sm">
                <img src="/karoo-road.jpg" alt="The Karoo road" className="w-full h-full md:h-auto object-cover object-center md:object-contain" />
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
              <div className="w-full aspect-[5/4] overflow-hidden rounded-sm md:h-64 md:aspect-auto">
                <img src="/founder-mobile.jpg" alt="Jules Tucker" className="w-full h-full object-cover md:hidden" style={{ objectPosition: 'center 70%' }} />
                <img src="/founder.jpg" alt="Jules Tucker" className="hidden md:block w-full h-full object-cover object-top" />
              </div>
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
