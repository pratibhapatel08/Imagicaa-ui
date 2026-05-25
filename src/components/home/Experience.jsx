import { motion } from 'framer-motion'
import ExperienceCard from '../common/ExperienceCard.jsx'
import { EXPERIENCE_SECTION, EXPERIENCES } from '../../data/experienceData.js'

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Experience() {
  const { id, eyebrow, title, description } = EXPERIENCE_SECTION

  return (
    <section
      id={id}
      aria-labelledby="experience-heading"
      className="bg-gradient-to-b from-white via-brand-50/30 to-white py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div
          variants={headerVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 sm:text-sm">
            {eyebrow}
          </span>
          <h2
            id="experience-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
