interface PageHeaderProps {
  topText?: string
  title?: string
  supportingText?: string
}

const PageHeader = ({ topText, title, supportingText }: PageHeaderProps) => {
  return (
    <header className="py-24 px-4 mx-auto max-w-screen-xl">
      <div>
        {topText && (
          <p className="text-center text-biography-sm md:text-biography-md font-semibold text-biography-primary-600 mb-3">
            {topText}
          </p>
        )}
        {title && (
          <h1 className="text-center text-biography-display-md md:text-biography-display-lg font-semibold mx-auto max-w-4xl mb-6">
            {title}
          </h1>
        )}
        {supportingText && (
          <h2 className="text-center text-biography-lg md:text-biography-xl font-normal text-biography-gray-600">
            {supportingText}
          </h2>
        )}
      </div>
    </header>
  )
}

export { PageHeader }
