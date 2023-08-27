import classnames from 'classnames'

const FormHeader = ({ title, subtitle }: any) => {
  return (
    <header className="text-center pb-4">
      <h3 className="text-biography-display-xs text-biography-gray-900 font-semibold">
        {title}
      </h3>
      {subtitle && (
        <p className="text-biography-lg text-biography-gray-600 pt-3">
          {subtitle}
        </p>
      )}
    </header>
  )
}

const CardHeader = ({ title, subtitle }: any) => {
  return (
    <header>
      <h3 className="text-biography-lg text-biography-gray-900 font-semibold">
        {title}
      </h3>
      {subtitle && (
        <p className="text-biography-sm text-biography-gray-600 pt-1">
          {subtitle}
        </p>
      )}
    </header>
  )
}

const CardWrapper = ({ children, className, border, ...props }: any) => {
  const classNames = classnames(
    'w-full flex flex-col gap-y-6',
    {
      'bg-white border border-biography-gray-200 rounded-xl shadow-sm px-4 pt-5 pb-4':
        border,
    },
    className
  )

  return (
    <article className={classNames} {...props}>
      {children}
    </article>
  )
}

export { CardHeader, CardWrapper, FormHeader }
