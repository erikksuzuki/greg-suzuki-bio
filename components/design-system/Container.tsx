import classNames from 'classnames'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  contained?: boolean
  className?: string
}

const Container = ({
  children,
  contained = true,
  className,
}: ContainerProps) => {
  return (
    <div
      className={classNames(
        'mx-auto w-full p-8 sm:px-16 md:py-16 flex flex-col justify-end md:justify-center',
        {
          'max-w-screen-xl': contained,
          'max-w-full': !contained,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export { Container }
