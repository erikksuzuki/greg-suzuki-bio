// import { FreeportLogo } from 'components/icons/biography/logo'
import Link from 'next/link'
import Logo from '../icons/Logo'

const HeaderLogo = () => {
  return (
    <div className="py-1 flex items-center justify-between text-biography-teal">
      <Link href="/" title="biography" rel="home">
        <Logo className="h-[24px]" />
      </Link>
    </div>
  )
}

export { HeaderLogo }
