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
          className="text-biography-sm font-medium text-biography-gray-700"
        >
          {label}
        </label>
      )}

      <input
        className={classNames(
          'py-2.5 px-4 block w-full bg-white bg-clip-padding border disabled:text-biography-gray-500 disabled:bg-biography-gray-50 duration-300 transition-shadow transition-colors transition-opacity appearance-none rounded-md text-sm text-biography-gray-800 placeholder-biography-blue-navy-light shadow-sm focus:shadow-md',
          {
            'border-biography-blue-lighter focus:border-biography-blue-base focus-visible:border-biography-blue-base':
              !error?.length,
            'border-biography-error-500 focus:border-biography-error-700':
              error?.length,
          },
          className
        )}
        {...reactHookFormProps}
        {...rest}
      />

      {!error && hint && (
        <p className="text-biography-sm text-biography-gray-600">{hint}</p>
      )}

      {error && (
        <p className="text-biography-sm text-biography-error-500">{error}</p>
      )}
    </div>
  )
}

export { FormControlInput }
