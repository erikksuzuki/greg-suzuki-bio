import classnames from 'classnames'

const FeaturedIcon = ({ children, color = 'primary' }: any) => {
  const classNames = classnames(
    'inline-block group-hover:animate-pulse p-2 -ml-2 rounded-full border-8',
    {
      'border-lazarus-primary-50 bg-lazarus-primary-100 text-lazarus-primary-600':
        color === 'primary',
      'border-lazarus-gray-50 bg-lazarus-gray-100 text-lazarus-gray-600':
        color === 'gray',
    }
  )

  return <div className={classNames}>{children}</div>
}

export { FeaturedIcon }