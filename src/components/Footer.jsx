import { SiInstagram } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

const socials = [
  { icon: SiInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: MdEmail,     href: 'mailto:hello@hellocasa.co',  label: 'Email'     },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-16 py-10 max-w-5xl mx-auto border-t border-stone/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-stone/30 tracking-wide">
          © {year} Hello Casa. All rights reserved.
        </p>
        <div className="flex items-center gap-10">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#fdbf69] hover:opacity-70 transition-opacity duration-200"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
