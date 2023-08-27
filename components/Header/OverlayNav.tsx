import { motion } from 'framer-motion'
// import { useCurrentUser } from 'lib/hooks/useCurrentUser'
import { useLockBodyScroll } from '../../lib/hooks/useLockBodyScroll'
import Link from 'next/link'
import {
  navItem,
  navWrapper,
  overlayNavVariant,
  overlayVariant,
} from './framer'
import { AuthenticatedNav } from './AuthenticatedNav'
import { UnAuthenticatedNav } from './UnAuthenticatedNav'

interface OverlayNavProps {
  isOpen: boolean
  closeOverlay: () => void
}

const OverlayNav = ({ isOpen = false, closeOverlay }: OverlayNavProps) => {
  useLockBodyScroll()

  // const { user } = useCurrentUser()

  const SIDE_LINKS = [
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
    {
      href: '/terms',
      text: 'Terms',
    },
    {
      href: '/privacy',
      text: 'Privacy',
    },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      className="backdrop fixed inset-0 z-10 bg-white"
      variants={overlayVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div
        key="wrapper"
        className="fixed inset-0 z-10"
        variants={overlayNavVariant}
      >
        <section
          className="relative inset-y-0 lg:min-h-[540px] h-full w-full max-w-full flex flex-col overflow-x-auto"
          aria-hidden={isOpen ? 'false' : 'true'}
        >
          <div className="w-full md:h-full flex flex-col lg:flex-row pt-12 px-10 md:px-20 text-biography-blue-dark">
            <div className="mx-auto w-full pl-4 pt-16 mt-8 flex flex-col">
              {2 + 2 === 5 ? (
                <AuthenticatedNav
                  wrapperVariant={navWrapper}
                  itemVariant={navItem}
                  closeOverlay={closeOverlay}
                />
              ) : (
                <UnAuthenticatedNav
                  wrapperVariant={navWrapper}
                  itemVariant={navItem}
                  closeOverlay={closeOverlay}
                />
              )}
            </div>

            <div className="mx-auto w-full pl-4 lg:pt-16 mt-4 lg:mt-8 flex flex-col">
              <motion.ul variants={navWrapper} initial="hidden" animate="show">
                {SIDE_LINKS.map((link) => (
                  <motion.li
                    variants={navItem}
                    key={link.text}
                    className="mt-2 tracking-biography-subtitle uppercase text-biography-lg md:text-biography-display-xs font-subtitle"
                  >
                    <Link
                      href={link.href}
                      className="hover:text-biography-blue-base"
                      onClick={closeOverlay}
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-7 py-4 mt-auto lg:absolute lg:bottom-8 lg:right-10 text-biography-blue-dark"
          >
            &copy; {currentYear}
          </motion.p>
        </section>
      </motion.div>
    </motion.div>
  )
}

export { OverlayNav }
