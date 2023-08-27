import { motion, Variants } from 'framer-motion'
// import { useCurrentUser } from 'lib/hooks/useCurrentUser'
import Link from 'next/link'

// TODO: get design for authed state nav

interface NavProps {
  wrapperVariant: Variants
  itemVariant: Variants
  closeOverlay: () => void
}

const AuthenticatedNav = ({
  wrapperVariant,
  itemVariant,
  closeOverlay,
}: NavProps) => {
  const handleLogout = () => {
    // const { logOut } = useCurrentUser()
    // logOut()
    console.log('Logging out...')
  }

  const AUTHENTICATED_LINKS = [
    {
      href: '/gallery',
      text: 'Gallery',
    },
    {
      href: '/discover',
      text: 'Discover',
    },
    {
      href: '/faq',
      text: 'FAQ',
    },
    {
      href: '/profile/transactions',
      text: 'Profile',
    },
  ]

  return (
    <motion.ul variants={wrapperVariant}>
      {AUTHENTICATED_LINKS.map(({ href, text }) => (
        <motion.li
          variants={itemVariant}
          key={text}
          className="mt-2 font-bold  text-biography-display-lg font-['Poppins']"
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
      <motion.li
        variants={itemVariant}
        className="mt-2 font-bold text-biography-display-md md:text-biography-display-lg font-['Poppins']"
      >
        asdf
      </motion.li>
    </motion.ul>
  )
}

export { AuthenticatedNav }
