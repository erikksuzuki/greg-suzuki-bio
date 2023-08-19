// import { XMarkSmIcon } from '../../components/icons/app/XMarkIconSm'
import { motion } from 'framer-motion'
import { useLockBodyScroll } from '../../lib/hooks/useLockBodyScroll'
import Image from 'next/image'
import { backdropVariant, drawerVariant } from './framer'

interface InviteDrawerProps {
  toggleDrawer: () => void
  isOpen: boolean
}

const InviteDrawer = ({ toggleDrawer, isOpen }: InviteDrawerProps) => {
  useLockBodyScroll()

  return (
    <>
      <motion.div
        animate="open"
        initial="closed"
        exit="exit"
        variants={backdropVariant}
        className="z-40 fixed inset-0 bg-lazarus-blue-new"
        onClick={toggleDrawer}
      />

      <motion.aside
        aria-hidden={isOpen ? 'false' : 'true'}
        animate="open"
        initial="closed"
        exit="exit"
        variants={drawerVariant}
        className={`font-['Poppins'] w-[85vw] md:w-[32rem] top-0 bg-white fixed h-full ease-in-out transition-all duration-700 z-50 transform translate-x-0`}
      >
        <button className="absolute -left-8 top-2" onClick={toggleDrawer}>
          {/* <XMarkSmIcon /> */}
        </button>

        <div className="p-[0.9375rem] overflow-auto h-full">
          <div>
            <Image
              src="/images/invite-drawer-header.jpg"
              height="652"
              width="1096"
              alt="Freeport Invite"
            />
          </div>

          <div className="mt-8 text-lazarus-blue-new text-2xl font-bold tracking-tighter">
            Request an invite
          </div>
          <div className="mt-4 text-lazarus-blue-navy tracking-tighte">
            Reserve your place on the waitlist and stay up to date with the
            latest news, announcements, and articles.
          </div>
        </div>
      </motion.aside>
    </>
  )
}

export { InviteDrawer }
