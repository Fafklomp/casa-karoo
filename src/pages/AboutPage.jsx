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
                  <text fontSize="13" fontWeight="600" letterSpacing="2.5" fill="#3D2B1A" fontFamily="var(--font-display)" transform="rotate(-20, 80, 80)" className="md:hidden">
                    <textPath href={`#arc-${label}`} startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                  <text fontSize="11" fontWeight="600" letterSpacing="2.5" fill="#3D2B1A" fontFamily="var(--font-display)" transform="rotate(-20, 80, 80)" className="hidden md:inline">
                    <textPath href={`#arc-${label}`} startOffset="50%" textAnchor="middle">
                      {label}
                    </textPath>
                  </text>
                </svg>
              </div>
            ))}
          </div>

          {/* Who We Are */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Who We Are</p>
              <div className="w-full aspect-[5/4] md:aspect-auto overflow-hidden rounded-sm">
                <img src="/who-we-are.jpg" alt="Rooidam Farm Stall, Karoo" className="w-full h-full md:h-auto object-cover object-center md:object-contain" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Casa Karoo is an interior design studio crafting soulful, personalised spaces. Our focus is on short-term rentals, where we bring the concept of a "guest room" to life, welcoming visitors into a space that feels like home.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Rooted in human-centred design and placemaking, we create interiors that respond not only to the people who inhabit them, but also to the character and context of the place they belong to.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                We believe great design is about more than aesthetics. Through thoughtful consideration of layout, light, flow, and materiality, we create spaces that feel intuitive, grounded, and welcoming. Spaces that support rest, connection, and a genuine sense of wellbeing.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Every Casa Karoo project is designed to be beautiful, enduring, and deeply lived in. Spaces that photograph beautifully, function effortlessly, and make people feel at home, whether they're staying for a weekend or a lifetime.
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start border-t border-stone/10 pt-12 mb-16">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold pt-1">Our Story</p>
              <div className="w-full aspect-[5/4] md:aspect-auto overflow-hidden rounded-sm">
                <img src="/karoo-road.jpg" alt="The Karoo road" className="w-full h-full md:h-auto object-cover object-center md:object-contain" />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Casa Karoo was born from a love of travel, thoughtful spaces, and the quiet beauty of the South African Karoo. Inspired by its vast landscapes, earthy palette, and sense of stillness, we create interiors that feel calm, intentional, and deeply connected to place.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Travel taught us that the spaces we remember most are rarely the grandest, but the ones with character. The guest room that feels like it was waiting for you, the home that reflects its surroundings, the details that make a stranger feel welcome. The difference between somewhere to stay and somewhere to belong.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                We believe every space tells a story, balancing beauty with function and carrying a distinct sense of place. From short-term rentals to hospitality and residential interiors, we create environments that feel considered, personal, and lived in. Spaces where people feel at home, wherever they are.
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
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Hi, I'm Jules!
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                Born in sunny South Africa, where I graduated from the University of Pretoria with an Honours degree in Interior Architecture. I've since been taken around the world by a love of adventure, design, discovering new places, and meeting people from all walks of life. Over the past few years, I've worked across luxury residential and hospitality projects in South Africa and abroad, gaining experience in everything from bespoke homes to guest-focused environments.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                My work is shaped by a belief that design should support the way people live, move, gather, and unwind. I'm drawn to spaces that feel effortless yet intentional. Where layout, light, colour, materiality, and detail come together to create environments with warmth, personality, and a genuine sense of ease.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                With experience spanning both design and construction, I approach each project with equal attention to beauty and practicality, creating spaces that are enduring, functional, and deeply personal to the people who use them.
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed text-stone/80 text-justify">
                At Casa Karoo, every project is an opportunity to create something thoughtful, timeless, and full of character.
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
                <li key={item} className="flex items-start gap-3 text-xs md:text-sm font-light text-stone/70">
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
