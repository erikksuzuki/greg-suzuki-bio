import classnames from 'classnames'
import { Badge, BadgeColor } from '../Badge'

type TableRowProps = {
  children: React.ReactNode
}

const TableRow = ({ children }: TableRowProps) => {
  return <tr className="border-t border-lazarus-gray-200">{children}</tr>
}

type TableCellProps = {
  children?: React.ReactNode
  text?: string
  supportingText?: string
  align?: 'left' | 'center' | 'right'
}

const LeadTableCell = ({
  text,
  supportingText,
  align = 'center',
}: TableCellProps) => {
  const classNames = classnames({
    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right',
  })

  return (
    <td className={`px-6 py-4 h-[72px] text-lazarus-gray-900 ${classNames}`}>
      {text && (
        <p className="text-sm font-semibold text-lazarus-gray-900">{text}</p>
      )}
      {supportingText && (
        <p className="text-sm font-normal text-lazarus-gray-600">
          {supportingText}
        </p>
      )}
    </td>
  )
}

const TableCell = ({
  text,
  supportingText,
  align = 'center',
}: TableCellProps) => {
  const classNames = classnames({
    'text-center': align === 'center',
    'text-right': align === 'right',
  })
  return (
    <td className={`px-6 py-4 h-[72px] text-lazarus-gray-900 ${classNames}`}>
      {text && (
        <p className="text-sm font-normal text-lazarus-gray-900">{text}</p>
      )}
      {supportingText && (
        <p className="text-sm font-normal text-lazarus-gray-600">
          {supportingText}
        </p>
      )}
    </td>
  )
}

type TableCellBadgeProps = {
  text: string
  color?: BadgeColor
}

const TableCellBadge = ({ text, color = 'gray' }: TableCellBadgeProps) => {
  return (
    <td className={`px-6 py-4 h-[72px] text-center`}>
      <Badge label={text} color={color} />
    </td>
  )
}

const TableCellWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="px-6 py-4 h-[72px] text-sm font-normal text-lazarus-gray-600">
      {children}
    </td>
  )
}

export { LeadTableCell, TableCell, TableCellBadge, TableCellWrapper, TableRow }
