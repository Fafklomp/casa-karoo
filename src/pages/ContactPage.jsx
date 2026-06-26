import { useState } from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { SiInstagram } from 'react-icons/si'
import PageTransition from '../components/PageTransition'
import FadeIn from '../components/FadeIn'

const projectTypes = [
  'Design Consultation',
  'Full Furnishing Package',
  'Styling & Staging',
  'Photography-Ready Setup',
  'Not sure yet',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Casa Karoo enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Casa Karoo,\n\nMy name is ${form.name} and my email is ${form.email}.\n\nService of interest: ${form.projectType}\n\n${form.message}`
    )
    window.location.href = `mailto:juliaktucker@gmail.com?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full bg-transparent border-b border-stone/15 py-3 text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:border-terra transition-colors duration-200'

  return (
    <PageTransition>
      <FadeIn>
        <section id="contact" className="py-24 px-6 md:px-16 pt-32 max-w-5xl mx-auto border-t border-stone/10">
          <div className="mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">Let's Talk</p>
            <h1
              className="text-2xl md:text-3xl font-light leading-tight"
              style={{ fontFamily: 'var(--font-display)', color: '#3D2B1A', fontStyle: 'italic' }}
            >
              Start a project
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <p className="text-sm font-light leading-relaxed text-stone/60 mb-8">
                Tell us about your space and we'll get back to you within 48 hours.
              </p>
              <div className="flex items-center gap-3 mt-1">
                <MdEmail size={22} style={{ color: '#C4A882' }} />
                <a
                  href="mailto:juliaktucker@gmail.com"
                  className="text-sm text-stone/50 hover:text-stone transition-colors duration-200"
                >
                  juliaktucker@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <MdPhone size={22} style={{ color: '#C4A882' }} />
                <a
                  href="tel:+12063960583"
                  className="text-sm text-stone/50 hover:text-stone transition-colors duration-200"
                >
                  +1 (206) 396-0583
                </a>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <SiInstagram size={22} style={{ color: '#C4A882' }} />
                <a
                  href="https://www.instagram.com/casakaroo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone/50 hover:text-stone transition-colors duration-200"
                >
                  @casakaroo
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <select
                name="projectType"
                required
                value={form.projectType}
                onChange={handleChange}
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>Service of interest</option>
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your space"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="mt-2 text-xs tracking-widest uppercase text-terra border border-terra/60 px-8 py-3 rounded-full hover:bg-terra hover:border-terra hover:text-offwhite transition-all duration-200"
              >
                Send Message →
              </button>
            </form>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  )
}
