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
  gray: 'bg-lazarus-gray-50 text-lazarus-gray-700',
  primary: 'bg-lazarus-primary-50 text-lazarus-primary-700',
  error: 'bg-lazarus-error-50 text-lazarus-error-700',
  pink: 'bg-lazarus-pink-50 text-lazarus-pink-700',
  orange: 'bg-lazarus-orange-50 text-lazarus-orange-700',
  green: 'bg-lazarus-success-50 text-lazarus-success-700',
  indigo: 'bg-lazarus-indigo-50 text-lazarus-indigo-700',
}

const Badge = ({ label, color = 'gray' }: Badge) => {
  return (
    <div
      className={`inline-block rounded-full ${badgeColors[color]} py-[2px] px-[10px] text-lazarus-sm font-semibold capitalize`}
    >
      {label}
    </div>
  )
}

export { Badge, badgeColors }
