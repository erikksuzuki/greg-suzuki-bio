import { Badge, BadgeColor, badgeColors } from '../../components/badge'
import Link from 'next/link'
export interface postTag {
  sys: {
    id: string
    linkType: string
    type: string
  }
}
export const customTagColors: Record<string, BadgeColor> = {
  company: 'primary',
  blockchain: 'pink',
  defi: 'indigo',
  darkArt: 'gray',
}
export const randomTagColor = () => {
  return Object.keys(badgeColors)[
    Math.floor(Math.random() * Object.keys(badgeColors).length)
  ]
}
const TagGroup = ({ postTags }: { postTags: postTag[] }) => {
  return (
    <div className="flex flex-row gap-2">
      {postTags.map((tag: postTag) => {
        const color = customTagColors[tag.sys.id] ?? randomTagColor()
        return (
          <Link key={tag.sys.id} href={`/blog/tags/${tag.sys.id}`}>
            <Badge label={tag.sys.id} color={color} />
          </Link>
        )
      })}
    </div>
  )
}

export { TagGroup }
