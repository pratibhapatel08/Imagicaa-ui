import { motion } from 'framer-motion'
import OfferCard from '../common/OfferCard.jsx'
import { OFFERS, OFFERS_SECTION } from '../../data/offerData.js'

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Offers() {
  const { id, eyebrow, title, description } = OFFERS_SECTION

  return (
    <section
      id={id}
      aria-labelledby="offers-heading"
      className="relative overflow-hidden bg-ink py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            id="offers-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7 lg:gap-8"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {OFFERS.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Offers
