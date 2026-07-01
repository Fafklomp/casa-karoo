import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ProjectModal from '../components/ProjectModal'

const placeholderProjects = [
  {
    id: 1,
    name: 'Project One',
    subtitle: 'Short-Term Rental',
    category: 'Residential',
    location: 'Cape Town, South Africa',
    year: '2025',
    area: '—',
    role: 'Interior Designer',
    image: '',
    description: 'Coming soon.',
    tags: [],
    software: [],
    myRole: '',
  },
  {
    id: 99,
    name: 'Tented Camp',
    subtitle: '',
    category: 'Hospitality',
    location: 'Puerto Rico',
    year: '2021',
    area: '',
    role: '',
    image: '',
    description: '',
    tags: [],
    software: [],
    myRole: '',
  },
]

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
  exit:  { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.button variants={cardVariants} onClick={onClick} className="group text-left">
      <div className="w-full aspect-[3/2] overflow-hidden rounded-sm mb-4 bg-stone/5 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <span className="text-xs tracking-widest uppercase text-stone/25">Coming Soon</span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className="text-xl md:text-2xl font-light group-hover:text-terra transition-colors duration-200 leading-snug"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.name}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-light text-stone/50 mb-1">{project.subtitle}</p>
          )}
          <p className="text-xs tracking-wide text-stone/40">{project.location}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs tracking-widest uppercase text-stone/35">{project.category}</p>
          <p className="text-xs text-stone/30 mt-0.5">{project.year}</p>
        </div>
      </div>
    </motion.button>
  )
}

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <PageTransition>
      <section className="px-6 md:px-16 pt-32 pb-24 max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-sage font-semibold mb-2">Portfolio</p>
          <h1
            className="text-4xl md:text-6xl font-light leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#3D2B1A' }}
          >
            Our Work
          </h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12"
          >
            {placeholderProjects.map(p => (
              <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
