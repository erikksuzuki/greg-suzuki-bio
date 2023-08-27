import classnames from 'classnames'
import { motion } from 'framer-motion'
// import Link from 'next/link'
import { inviteReqVariant } from './framer'

interface Props {
  classNames?: string
  toggleDrawer?: () => void
}

const InviteRequestOption = ({ classNames, toggleDrawer }: Props) => {
  const containerClassNames = classnames(
    'flex flex-column items-center gap-6',
    classNames
  )

  return (
    <motion.div
      className={containerClassNames}
      animate="closed"
      initial="open"
      exit="exit"
      variants={inviteReqVariant}
    >
      <div className="flex flex-row items-center gap-2 text-biography-blue-dark justify-between">
        <div className="text-sm text-center font-['Poppins']">
          The Warhol Collection launches May 10th.
        </div>

        <button
          onClick={toggleDrawer}
          className="px-6 py-2 text-sm font-medium bg-biography-blue-base text-white backface-visibility-hidden whitespace-nowrap flex flex-1 justify-center transform items-center rounded-full transition hover:scale-105 focus:outline-none active:bg-opacity-80 w-auto rounded-full shadow-sm"
        >
          Join waitlist
        </button>
      </div>
    </motion.div>
  )
}

export { InviteRequestOption }
