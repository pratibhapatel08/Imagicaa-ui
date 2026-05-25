import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NavLink from '../common/NavLink.jsx'
import { NAV_ACTIONS, NAV_LINKS } from '../../data/navigation.js'

const SCROLL_OFFSET = 16

const menuVariants = {
  closed: { opacity: 0, y: -12 },
  open: { opacity: 1, y: 0 },
}

const panelVariants = {
  closed: { x: '100%' },
  open: { x: 0 },
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_OFFSET)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const closeMobileMenu = () => setIsMobileOpen(false)

  const isOverHero = !isScrolled

  const headerClassName = [
    'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out',
    isScrolled
      ? 'border-b border-line/70 bg-white/75 shadow-[0_8px_30px_rgba(8,6,13,0.06)] backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent',
  ].join(' ')

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={headerClassName}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-2.5 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-500/40"
        >
          <img
            src="/favicon.svg"
            alt=""
            className="h-9 w-9 transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`text-lg font-semibold tracking-tight sm:text-xl ${isOverHero ? 'text-white' : 'text-ink'}`}
          >
            Imagicaa
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} inverted={isOverHero} />
            </li>
          ))}
        </ul>

        <motion.div
          className="hidden items-center gap-3 lg:flex"
          initial={false}
          animate={{ opacity: 1 }}
        >
          <motion.a
            href={NAV_ACTIONS.signIn.href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isOverHero
                ? 'text-white/80 hover:bg-white/10 hover:text-white'
                : 'text-muted hover:bg-brand-50 hover:text-ink'
            }`}
          >
            {NAV_ACTIONS.signIn.label}
          </motion.a>
          <motion.a
            href={NAV_ACTIONS.cta.href}
            whileHover={{ scale: 1.03, boxShadow: '0 12px 28px rgba(170, 59, 255, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(170,59,255,0.28)] transition-colors duration-300 hover:bg-brand-600"
          >
            {NAV_ACTIONS.cta.label}
          </motion.a>
        </motion.div>

        <motion.button
          type="button"
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsMobileOpen((open) => !open)}
          className={`relative z-60 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-colors lg:hidden ${
            isOverHero
              ? 'border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20'
              : 'border-line/80 bg-white/60 text-ink hover:border-brand-200 hover:bg-brand-50'
          }`}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: 'spring', stiffness: 320, damping: 36 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-line/80 bg-white/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ staggerChildren: 0.05 }}
                className="mt-14 flex flex-1 flex-col gap-2"
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      href={link.href}
                      label={link.label}
                      variant="mobile"
                      onClick={closeMobileMenu}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-3 border-t border-line/80 pt-6"
              >
                <a
                  href={NAV_ACTIONS.signIn.href}
                  onClick={closeMobileMenu}
                  className="rounded-full border border-line px-4 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  {NAV_ACTIONS.signIn.label}
                </a>
                <a
                  href={NAV_ACTIONS.cta.href}
                  onClick={closeMobileMenu}
                  className="rounded-full bg-brand-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_24px_rgba(170,59,255,0.28)] transition-colors hover:bg-brand-600"
                >
                  {NAV_ACTIONS.cta.label}
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
