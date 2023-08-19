import classnames from 'classnames'
import { InstagramIcon } from './icons/social/Instagram'
import { MediumIcon } from './icons/social/Medium'
import { TwitterIcon } from './icons/social/Twitter'
import Link from 'next/link'
import { ReactNode } from 'react'
// import AirBnB from '../icons/social/AirBnB'
import WhatsApp from '../icons/social/WhatsApp'
import Telegram from '../icons/social/Telegram'
import { MailIcon } from '../icons/Mail'

interface SocialMediaLinksProps {
  classNames?: string
  innerLinksClassNames?: string
}

interface InnerLinksProps {
  href: string
  text?: string
  glyph?: ReactNode
}

const SocialMediaLinks = ({
  classNames,
  innerLinksClassNames = 'hover:text-lazarus-blue-base',
}: SocialMediaLinksProps) => {
  const SOCIAL_LINKS = [
    {
      text: 'Contact us on Whatsapp',
      href: 'https://wa.me/+85512990331',
      glyph: <WhatsApp />,
    },
    {
      text: 'Contact us on Telegram',
      href: 'https://t.me/lazarusrooms',
      glyph: <Telegram className="w-[26px] h-[26px]" />,
    },
    {
      text: 'Contact us via e-mail',
      href: 'mailto: info@lazarusrooms.com',
      glyph: <MailIcon className="w-[26px] h-[26px]" />,
    },
  ]

  const containerClassNames = classnames(
    'flex flex-column items-center gap-6',
    classNames
  )

  return (
    <ul className={containerClassNames}>
      {SOCIAL_LINKS.map(({ href, text, glyph }: InnerLinksProps) => (
        <li key={href}>
          <Link href={href} title={text} className={innerLinksClassNames}>
            {glyph}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { SocialMediaLinks }
