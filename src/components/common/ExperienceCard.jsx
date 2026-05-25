import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
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

function ExperienceCard({ experience, index = 0 }) {
  const { title, category, tag, description, duration, image, imageAlt, href } =
    experience

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-white shadow-[0_4px_24px_rgba(8,6,13,0.06)] transition-[box-shadow,border-color] duration-300 hover:border-brand-200 hover:shadow-[0_20px_48px_rgba(170,59,255,0.14)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent"
          initial={false}
          whileHover={{ opacity: 0.95 }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(170,59,255,0.4)]">
          {tag}
        </span>
        <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        <motion.div
          className="mt-4 flex items-center justify-between gap-3 border-t border-line/70 pt-4"
          initial={false}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted sm:text-sm">
            <Clock className="h-3.5 w-3.5 text-brand-500" aria-hidden />
            {duration}
          </span>

          <motion.a
            href={href}
            whileHover={{ x: 2 }}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-500 transition-colors duration-300 hover:text-brand-600"
          >
            Explore
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default ExperienceCard
