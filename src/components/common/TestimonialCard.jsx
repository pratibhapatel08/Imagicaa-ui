import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function StarRating({ rating }) {
  return (
    <motion.div
      className="flex gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-brand-500 text-brand-500'
              : 'fill-line text-line'
          }`}
          aria-hidden
        />
      ))}
    </motion.div>
  )
}

function TestimonialCard({ testimonial, index = 0 }) {
  const { quote, rating, name, role, avatar, avatarAlt } = testimonial

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-white p-6 shadow-[0_4px_24px_rgba(8,6,13,0.06)] transition-[box-shadow,border-color] duration-300 hover:border-brand-200 hover:shadow-[0_20px_48px_rgba(170,59,255,0.14)] sm:p-7"
    >
      <Quote
        className="absolute right-5 top-5 h-10 w-10 text-brand-100 transition-colors duration-300 group-hover:text-brand-200"
        aria-hidden
      />

      <StarRating rating={rating} />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
        <p className="relative z-10">&ldquo;{quote}&rdquo;</p>
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-line/70 pt-5">
        <img
          src={avatar}
          alt={avatarAlt}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="min-w-0">
          <cite className="not-italic">
            <p className="truncate text-sm font-semibold text-ink sm:text-base">
              {name}
            </p>
          </cite>
          <p className="truncate text-xs text-muted sm:text-sm">{role}</p>
        </div>
      </footer>
    </motion.article>
  )
}

export default TestimonialCard
