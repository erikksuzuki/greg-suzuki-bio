// import { FreeportLogo } from 'components/logo/FreeportLogo'
import Image from 'next/image'

interface AvatarLabelGroupProps {
  avatarUrl?: string
  // link?: string
  text?: string
  supportingText?: string
}

const AvatarLabelGroup = ({
  avatarUrl = undefined,
  // link = undefined,
  text = 'Freeport',
  supportingText = 'Author',
}: AvatarLabelGroupProps) => {
  const Avatar: any = () => {
    return avatarUrl ? (
      <Image src={avatarUrl} alt={text} width="40" height="40" />
    ) : (
      <div />
    )
  }

  return (
    <div className="group no-underline h-12">
      <div className="flex flex-row gap-3 justify-start items-center">
        <div className="border rounded-full overflow-hidden border-4 border-transparent">
          <Avatar />
        </div>
        <div className="flex flex-col">
          <p className="text-lazarus-sm font-semibold text-lazarus-gray-900">
            {text}
          </p>
          <p className="text-lazarus-sm text-lazarus-gray-600">
            {supportingText}
          </p>
        </div>
      </div>
    </div>
  )
}

export { AvatarLabelGroup }
