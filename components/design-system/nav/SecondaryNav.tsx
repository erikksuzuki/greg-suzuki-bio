import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PROFILE_LINKS = [
  {
    href: '/profile',
    text: 'Profile',
  },
  {
    href: '/profile/transactions',
    text: 'Transactions',
  },
  {
    href: '/profile/payment-methods',
    text: 'Payment Settings',
  },
]

const SecondaryNavLink = ({ href, active, children }: any) => {
  const classNames = classnames({
    'block px-3 py-2 bg-white rounded text-lazarus-gray-600': true,
    'bg-gray-50 text-lazarus-gray-900': active,
  })

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  )
}

const SecondaryNav = () => {
  const router = useRouter()
  const activeHref = router.pathname

  const links = PROFILE_LINKS

  return (
    <>
      <nav className="bg-white border-b border-b-lazarus-gray-200">
        <div className={'w-full px-4 md:mx-auto md:max-w-screen-xl md:px-8'}>
          <div className="flex flex-row justify-between items-center">
            <ul className="flex flex-row justify-start items-center py-3 gap-1 text-lazarus-md font-semibold">
              {links.map(({ href, text }) => (
                <li key={href}>
                  <SecondaryNavLink active={href === activeHref} href={href}>
                    {text}
                  </SecondaryNavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export { SecondaryNav }
