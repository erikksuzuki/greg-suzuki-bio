import classnames from 'classnames'

type HeaderCellProps = {
  text: string
  align?: 'left' | 'center' | 'right'
  rounded?: 'left' | 'right'
}

const EmptyTableCell = ({ label }: { label: string }) => {
  return (
    <th>
      <span className="hidden">{label}</span>
    </th>
  )
}

const HeaderCell = ({ text, align = 'center' }: HeaderCellProps) => {
  const classNames = classnames({
    'text-left': align === 'left',
    'text-center': align === 'center',
    'text-right': align === 'right',
  })
  return (
    <th
      className={`px-6 py-3 text-xs font-semibold text-lazarus-gray-600 ${classNames}`}
    >
      {text}
    </th>
  )
}

const HeaderRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="rounded-t-xl bg-lazarus-gray-50">
      <tr>{children}</tr>
    </thead>
  )
}

export { HeaderRow, HeaderCell, EmptyTableCell }
