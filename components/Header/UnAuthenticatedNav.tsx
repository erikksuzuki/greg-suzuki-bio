import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

interface NavProps {
  wrapperVariant: Variants
  itemVariant: Variants
  closeOverlay: () => void
}

const UnAuthenticatedNav = ({
  wrapperVariant,
  itemVariant,
  closeOverlay,
}: NavProps) => {
  const PRIMARY_LINKS = [
    {
      href: '/apartments',
      text: 'Apartments',
    },
    {
      href: '/about',
      text: 'Virtual Offices',
    },
  ]

  return (
    <motion.ul variants={wrapperVariant}>
      {PRIMARY_LINKS.map(({ href, text }) => (
        <motion.li
          variants={itemVariant}
          key={text}
          className="mt-2 font-bold uppercase tracking-biography-title text-biography-display-xs md:text-biography-display-sm font-title"
        >
          <Link
            className="hover:text-biography-blue-base"
            href={href}
            onClick={closeOverlay}
          >
            {text}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export { UnAuthenticatedNav }
