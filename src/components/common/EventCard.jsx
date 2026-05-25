import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react'

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

function EventCard({ event, index = 0 }) {
  const {
    title,
    description,
    category,
    date,
    time,
    location,
    image,
    imageAlt,
    href,
  } = event

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
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />

        <div
          className="absolute left-4 top-4 flex min-w-[3.25rem] flex-col items-center rounded-xl border border-white/20 bg-white/95 px-3 py-2 text-center shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-105"
          aria-label={`Event date ${date.full}`}
        >
          <span className="text-2xl font-bold leading-none text-brand-600">
            {date.day}
          </span>
          <span className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-ink">
            {date.month}
          </span>
        </div>

        <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {category}
        </span>
      </div>

      <motion.div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        <ul className="mt-4 space-y-2 border-t border-line/70 pt-4">
          <li className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden />
            <span>{date.full}</span>
          </li>
          <li className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <Clock className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden />
            <span>{time}</span>
          </li>
          <li className="flex items-center gap-2 text-xs text-muted sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden />
            <span>{location}</span>
          </li>
        </ul>

        <motion.a
          href={href}
          whileHover={{ x: 2 }}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 transition-colors duration-300 hover:text-brand-600"
        >
          View Event
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </motion.a>
      </motion.div>
    </motion.article>
  )
}

export default EventCard
