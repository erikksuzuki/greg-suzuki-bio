export type BadgeColor =
  | 'gray'
  | 'primary'
  | 'error'
  | 'pink'
  | 'orange'
  | 'green'
  | 'indigo'
interface Badge {
  label: string
  color?: BadgeColor
  // size?: 'sm' | 'md' | 'lg'
  // icon?: 'dot' | 'country' | 'avatar' | 'close' | 'arrow-back' | 'arrow-forward'
}
const badgeColors: any = {
  gray: 'bg-biography-gray-50 text-biography-gray-700',
  primary: 'bg-biography-primary-50 text-biography-primary-700',
  error: 'bg-biography-error-50 text-biography-error-700',
  pink: 'bg-biography-pink-50 text-biography-pink-700',
  orange: 'bg-biography-orange-50 text-biography-orange-700',
  green: 'bg-biography-success-50 text-biography-success-700',
  indigo: 'bg-biography-indigo-50 text-biography-indigo-700',
}

const Badge = ({ label, color = 'gray' }: Badge) => {
  return (
    <div
      className={`inline-block rounded-full ${badgeColors[color]} py-[2px] px-[10px] text-biography-sm font-semibold capitalize`}
    >
      {label}
    </div>
  )
}

export { Badge, badgeColors }
