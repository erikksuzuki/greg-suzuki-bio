import classnames from 'classnames'

const FeaturedIcon = ({ children, color = 'primary' }: any) => {
  const classNames = classnames(
    'inline-block group-hover:animate-pulse p-2 -ml-2 rounded-full border-8',
    {
      'border-biography-primary-50 bg-biography-primary-100 text-biography-primary-600':
        color === 'primary',
      'border-biography-gray-50 bg-biography-gray-100 text-biography-gray-600':
        color === 'gray',
    }
  )

  return <div className={classNames}>{children}</div>
}

export { FeaturedIcon }
