import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function OfferCard({ offer, index = 0 }) {
  const {
    title,
    description,
    discount,
    date,
    time,
    image,
    imageAlt,
    href,
  } = offer

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-white shadow-[0_4px_24px_rgba(8,6,13,0.06)] transition-[box-shadow,border-color] duration-300 hover:border-brand-200 hover:shadow-[0_24px_56px_rgba(170,59,255,0.16)]"
    >
      <motion.div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />

        <span className="absolute right-4 top-4 rounded-xl bg-brand-500 px-3.5 py-2 text-sm font-bold tracking-wide text-white shadow-[0_6px_20px_rgba(170,59,255,0.45)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1">
          {discount}
        </span>

        <motion.div className="absolute bottom-4 left-4 right-4 hidden flex-wrap gap-2 transition-transform duration-300 group-hover:-translate-y-0.5 sm:flex">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/15 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="sr-only">{date.label}</span>
            {date.value}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/15 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <span className="sr-only">{time.label}</span>
            {time.value}
          </span>
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        <motion.div className="mt-4 flex flex-wrap gap-2 sm:hidden">
          <DateTimeBadge icon={Calendar} label={date.label} value={date.value} />
          <DateTimeBadge icon={Clock} label={time.label} value={time.value} />
        </motion.div>

        <motion.a
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(170,59,255,0.28)] transition-colors duration-300 hover:bg-brand-600 sm:mt-6"
        >
          Claim Offer
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden
          />
        </motion.a>
      </motion.div>
    </motion.article>
  )
}

function DateTimeBadge({ icon: Icon, label, value }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-brand-50/60 px-2.5 py-1.5 text-xs font-medium text-brand-600">
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span className="sr-only">{label}</span>
      {value}
    </span>
  )
}

export default OfferCard
