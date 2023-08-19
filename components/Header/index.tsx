// import { FreeportLogo } from 'components/icons/lazarus/logo'
// import { ProfileIcon } from 'components/profile/ProfileIcon'
import { AnimatePresence } from 'framer-motion'
// import { useCurrentUser } from '../../lib/hooks/useCurrentUser'
// import { useInvestorDetails } from '../../lib/hooks/useInvestorDetails'
import Link from 'next/link'
import { useState } from 'react'
import { HeaderLogo } from './HeaderLogo'
import { OverlayNav } from './OverlayNav'

const Header = () => {
  const [open, setOpen] = useState(false)

  const onToggleMenu = () => setOpen(!open)

  return (
    <>
      <header
        className="bg-white z-40 sticky top-0 w-full shadow-lg"
        id="hero-form"
      >
        <div className="mx-auto px-8 sm:px-16 flex flex-col justify-end md:justify-center">
          <div className="flex justify-between relative z-20 py-2">
            <div className="flex flex-row gap-6 items-center relative">
              <div className="md:pr-8">
                <HeaderLogo />
              </div>
              <Link href="/apartments">
                <button className="pt-1 hidden md:block uppercase text-lazarus-sm font-subtitle text-lazarus-light-teal">
                  Apartments
                </button>
              </Link>
              <Link href="/contact">
                <button className="pt-1 hidden md:block uppercase text-lazarus-sm font-subtitle text-lazarus-light-teal">
                  Contact
                </button>
              </Link>
              <Link href="/about">
                <button className="pt-1 hidden md:block uppercase text-lazarus-sm font-subtitle text-lazarus-light-teal">
                  About
                </button>
              </Link>
            </div>

            <button
              className="text-lazarus-blue-dark w-10 h-6 relative focus:outline-none bg-transparent flex self-center"
              onClick={onToggleMenu}
              aria-label={open ? 'Close' : 'Open'}
            >
              <span className="sr-only">Open main navigation</span>

              <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`${
                    open
                      ? '-rotate-45 w-8 rounded-sm h-1.5'
                      : '-translate-y-2 w-10 rounded-md h-[3px]'
                  } block absolute right-0 bg-lazarus-teal transform transition-all duration-500 ease-in-out`}
                />

                <span
                  aria-hidden="true"
                  className={`absolute flex justify-end w-full`}
                >
                  <span
                    className={`${
                      open
                        ? 'rotate-45 w-8 rounded-sm h-1.5'
                        : 'translate-y-2 w-5 rounded-md left-0 right-0 h-[3px]'
                    } flex bg-lazarus-teal transform transition-all duration-500 ease-in-out`}
                  ></span>
                </span>

                <span
                  aria-hidden="true"
                  className={`${
                    open ? 'opacity-0' : ''
                  } block rounded-md absolute h-[3px] w-10 bg-lazarus-teal transform transition-all duration-300 ease-in-out`}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <OverlayNav
              key="overlay"
              isOpen={open}
              closeOverlay={onToggleMenu}
            />
          )}
        </AnimatePresence>
      </header>
    </>
  )
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
]

const UserHeader = () => {
  const [open, setOpen] = useState(false)
  const onToggleMenu = () => setOpen(!open)

  return (
    <>
      <header className="border-b border-b-lazarus-gray-200 bg-transparent lg:bg-white z-40 sticky top-0">
        <div
          className={`w-full px-4 md:mx-auto md:max-w-screen-xl md:px-8 h-[81px] bg-white lg:bg-transparent lg:py-2 lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-x-10`}
        >
          <div
            className={`h-[81px] z-20 py-4 flex items-center justify-between text-lazarus-gray-900`}
          >
            <Link href="/" className="z-20">
              Lazarus Rooms
            </Link>
            <button
              className="lg:hidden z-20 text-lazarus-blue-dark w-10 h-6 relative focus:outline-none bg-white flex self-center"
              onClick={onToggleMenu}
              aria-label={open ? 'Close' : 'Open'}
            >
              <span className="sr-only">Open main navigation</span>

              <div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`${
                    open
                      ? '-rotate-45 w-8 rounded-sm h-1.5'
                      : '-translate-y-2 w-10 rounded-md h-[3px]'
                  } block absolute right-0 bg-current transform transition-all duration-500 ease-in-out`}
                />

                <span
                  aria-hidden="true"
                  className={`absolute flex justify-end w-full`}
                >
                  <span
                    className={`${
                      open
                        ? 'rotate-45 w-8 rounded-sm h-1.5'
                        : 'translate-y-2 w-5 rounded-md left-0 right-0 h-[3px]'
                    } flex bg-current transform transition-all duration-500 ease-in-out`}
                  ></span>
                </span>

                <span
                  aria-hidden="true"
                  className={`${
                    open ? 'opacity-0' : ''
                  } block rounded-md absolute h-[3px] w-10 bg-current transform transition-all duration-300 ease-in-out`}
                />
              </div>
            </button>
          </div>
          <nav className="hidden lg:block h-[81px] bg-white lg:bg-transparent shadow-xl lg:shadow-none absolute left-0 w-full lg:w-auto lg:static lg:flex lg:flex-row lg:flex-grow lg:justify-between lg:items-center">
            <ul className="flex flex-col lg:flex-row py-4 lg:py-0 gap-2">
              {AUTHENTICATED_LINKS.map(({ href, text }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-4 lg:px-2 py-3 lg:py-1 text-lazarus-gray-900 lg:hover:text-lazarus-gray-600 hover:bg-lazarus-gray-50 lg:hover:bg-inherit text-lazarus-md font-semibold whitespace-nowrap"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="gap-x-10 flex flex-row justify-between items-center px-4 py-6 lg:py-0">
              <li className="pt-2 lg:p-0">Profile Icon</li>
            </ul>
          </nav>
        </div>
        <AnimatePresence mode="wait">
          {open && (
            <OverlayNav
              key="overlay"
              isOpen={open}
              closeOverlay={onToggleMenu}
            />
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export { Header, UserHeader }
