import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { HERO_CONTENT, HERO_VIDEO } from '../../data/hero.js'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

function Hero() {
  const { badge, title, description, ctas } = HERO_CONTENT

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-svh w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-gradient-to-br from-[#0a0612] via-[#1f0d3d] to-[#08060d]"
          aria-hidden
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_VIDEO.poster ?? undefined}
          aria-label="Background video"
          className="absolute inset-0 h-full w-full object-cover"
        >
          {HERO_VIDEO.src && <source src={HERO_VIDEO.src} type="video/mp4" />}
        </video>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-ink/60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={itemVariants}
            className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm sm:text-sm"
          >
            {badge}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg md:text-xl"
          >
            {description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          >
            <motion.a
              href={ctas.primary.href}
              whileHover={{ scale: 1.03, boxShadow: '0 16px 40px rgba(170, 59, 255, 0.45)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_32px_rgba(170,59,255,0.35)] transition-colors duration-300 hover:bg-brand-600 sm:text-base"
            >
              {ctas.primary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </motion.a>

            <motion.a
              href={ctas.secondary.href}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.14)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/50 sm:text-base"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden />
              {ctas.secondary.label}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
