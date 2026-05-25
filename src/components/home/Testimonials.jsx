import { motion } from 'framer-motion'
import TestimonialCard from '../common/TestimonialCard.jsx'
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '../../data/testimonialData.js'

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Testimonials() {
  const { id, eyebrow, title, description } = TESTIMONIALS_SECTION

  return (
    <section
      id={id}
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-500/15 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div
          variants={headerVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-sm">
            {eyebrow}
          </span>
          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
