import photo from '../assets/photo.jpg'

function PH({ children }) {
  return <span style={{ borderBottom: '2px solid #8A9EBA', paddingBottom: '1px' }}>{children}</span>
}

export default function Hero() {
  return (
    <div className="px-6 md:px-16 pt-24 md:pt-20 pb-16 max-w-5xl mx-auto">
      {/* Mobile: photo + name side by side */}
      <div className="flex flex-row gap-5 items-end md:hidden mb-6">
        <div className="shrink-0">
          <img src={photo} alt="Jules Tucker" className="w-32 rounded-sm block" />
        </div>
        <div>
          <h1
            className="text-3xl font-light leading-tight mb-2"
            style={{ fontFamily: 'var(--font-display)', color: '#3D2B1A', fontStyle: 'italic' }}
          >
            Jules Tucker
          </h1>
          <p className="text-sm font-light tracking-wide text-stone/60">Interior Designer</p>
        </div>
      </div>

      {/* Mobile: bio below */}
      <div className="md:hidden space-y-4 mb-6">
        <p className="text-xs font-light leading-relaxed text-stone/80">
          My name is Jules, a South African trained Interior Architect passionate about <PH>storytelling</PH> and <PH>crafting</PH> spaces through the lens of <PH>human wellbeing</PH> &amp; <PH>sustainability</PH>. After gaining three years of professional experience, earning my LEED Green Associate credential, and graduating Cum Laude with my Honours in Interior Architecture, I have developed a strong commitment to designing interiors that exceed client expectations.
        </p>
        <p className="text-xs font-light leading-relaxed text-stone/80">
          My work spans luxury residential and hospitality projects across the world, where I have had the creative freedom to explore bespoke design solutions and refine my ability to craft detail-driven spaces that engage and inspire. My design approach blends <PH>aesthetics</PH>, <PH>comfort</PH>, <PH>place-making</PH> and <PH>brand identity</PH> to create <PH>meaningful</PH>, <PH>human-centred</PH> environments that tell <PH>stories</PH>. I am committed to delivering spaces that positively impact both their users and the environment.
        </p>
      </div>

      {/* Desktop: original layout */}
      <div className="hidden md:flex flex-row gap-16 items-end">
        <div className="md:sticky md:top-20 shrink-0">
          <img src={photo} alt="Jules Tucker" className="w-80 rounded-sm block" />
        </div>
        <div className="flex flex-col justify-start space-y-6">
          <div>
            <h1
              className="text-6xl font-light leading-tight mb-3"
              style={{ fontFamily: 'var(--font-display)', color: '#3D2B1A', fontStyle: 'italic' }}
            >
              Jules Tucker
            </h1>
            <p className="text-lg font-light tracking-wide text-stone/60">Interior Designer</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-light leading-relaxed text-stone/80">
              My name is Jules, a South African trained Interior Architect passionate about <PH>storytelling</PH> and <PH>crafting</PH> spaces through the lens of <PH>human wellbeing</PH> &amp; <PH>sustainability</PH>. After gaining three years of professional experience, earning my LEED Green Associate credential, and graduating Cum Laude with my Honours in Interior Architecture, I have developed a strong commitment to designing interiors that exceed client expectations.
            </p>
            <p className="text-sm font-light leading-relaxed text-stone/80">
              My work spans luxury residential and hospitality projects across the world, where I have had the creative freedom to explore bespoke design solutions and refine my ability to craft detail-driven spaces that engage and inspire. My design approach blends <PH>aesthetics</PH>, <PH>comfort</PH>, <PH>place-making</PH> and <PH>brand identity</PH> to create <PH>meaningful</PH>, <PH>human-centred</PH> environments that tell <PH>stories</PH>. I am committed to delivering spaces that positively impact both their users and the environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
