import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Clock,
  Twitter,
  Youtube,
} from 'lucide-react'
import {
  FOOTER_BRAND,
  FOOTER_COLUMNS,
  FOOTER_CONTACT,
  FOOTER_LEGAL,
  FOOTER_SOCIAL,
} from '../../data/footerData.js'

const SOCIAL_ICONS = {
  Facebook,
  Instagram,
  'X (Twitter)': Twitter,
  YouTube: Youtube,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
    >
      {label}
    </a>
  )
}

function FooterColumn({ title, links }) {
  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-ink" aria-labelledby="footer-heading">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-4">
            <a
              href="#home"
              className="group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50"
            >
              <img
                src="/favicon.svg"
                alt=""
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-semibold tracking-tight text-white">
                Imagicaa
              </span>
            </a>
            <p className="mt-3 text-sm font-medium text-brand-200">{FOOTER_BRAND.tagline}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {FOOTER_BRAND.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {FOOTER_SOCIAL.map((social) => {
                const Icon = SOCIAL_ICONS[social.label]
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-500/20 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <FooterColumn title={column.title} links={column.links} />
            </div>
          ))}

          <motion.div
            id="contact"
            variants={itemVariants}
            className="scroll-mt-24 sm:col-span-2 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-sm text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                <span>{FOOTER_CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-3 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                  {FOOTER_CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className="inline-flex items-center gap-3 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                  {FOOTER_CONTACT.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm text-white/65">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                <span>{FOOTER_CONTACT.hours}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-6"
        >
          <p className="text-center text-xs text-white/50 sm:text-left sm:text-sm">
            &copy; {currentYear} Imagicaa. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.href}>
                <FooterLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
