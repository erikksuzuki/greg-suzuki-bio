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
  text = 'biographyrooms',
  supportingText = 'Author',
}: AvatarLabelGroupProps) => {
  const Avatar = () => {
    return avatarUrl ? (
      <Image src={avatarUrl} alt={text} width="40" height="40" />
    ) : (
      <div className="h-10 w-10 relative " />
    )
  }

  return (
    <div className="group no-underline h-12">
      <div className="flex flex-row gap-3 justify-start items-center">
        <div className="border rounded-full overflow-hidden border-4 border-transparent">
          <Avatar />
        </div>
        <div className="flex flex-col">
          <p className="text-biography-sm font-semibold text-biography-gray-900">
            {text}
          </p>
          <p className="text-biography-sm text-biography-gray-600">
            {supportingText}
          </p>
        </div>
      </div>
    </div>
  )
}

export { AvatarLabelGroup }
