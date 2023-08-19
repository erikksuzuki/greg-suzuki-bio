import classNames from 'classnames'
import { InputField } from './types'

const FormControlInput = ({
  reactHookFormProps,
  hint,
  error,
  label,
  className,
  disabled = false,
  name,
  inline = false,
  ...rest
}: InputField) => {
  return (
    <div
      className={classNames(
        'flex',
        {
          'mb-2 gap-2 items-center': inline,
          'flex-col gap-2': !inline,
        },
        className
      )}
    >
      {label && (
        <label
          htmlFor={name}
          className="text-lazarus-sm font-medium text-lazarus-gray-700"
        >
          {label}
        </label>
      )}

      <input
        className={classNames(
          'py-2.5 px-4 block w-full bg-white bg-clip-padding border disabled:text-lazarus-gray-500 disabled:bg-lazarus-gray-50 duration-300 transition-shadow transition-colors transition-opacity appearance-none rounded-md text-sm text-lazarus-gray-800 placeholder-lazarus-blue-navy-light shadow-sm focus:shadow-md',
          {
            'border-lazarus-blue-lighter focus:border-lazarus-blue-base focus-visible:border-lazarus-blue-base':
              !error?.length,
            'border-lazarus-error-500 focus:border-lazarus-error-700':
              error?.length,
          },
          className
        )}
        {...reactHookFormProps}
        {...rest}
      />

      {!error && hint && (
        <p className="text-lazarus-sm text-lazarus-gray-600">{hint}</p>
      )}

      {error && (
        <p className="text-lazarus-sm text-lazarus-error-500">{error}</p>
      )}
    </div>
  )
}

export { FormControlInput }
