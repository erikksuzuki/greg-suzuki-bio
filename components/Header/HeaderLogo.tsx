// import { FreeportLogo } from 'components/icons/lazarus/logo'
import Link from 'next/link'
import Logo from '../icons/Logo'

const HeaderLogo = () => {
  return (
    <div className="py-1 flex items-center justify-between text-lazarus-teal">
      <Link href="/" title="lazarus" rel="home">
        <Logo className="h-[24px]" />
      </Link>
    </div>
  )
}

export { HeaderLogo }
