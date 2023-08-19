type InputField = {
  reactHookFormProps?: any
  type?: string
  label?: string
  placeholder?: string
  error?: string
  hint?: any
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

// Medium Variant
const InputWithLabel = ({
  reactHookFormProps,
  hint,
  error,
  label,
  className,
  ...rest
}: InputField) => {
  return (
    <div className={className}>
      {label && (
        <label className="text-lazarus-sm font-medium text-lazarus-gray-700 pb-1.5">
          {label}
        </label>
      )}
      <input
        className="px-[13px] py-[9px] bg-white text-lazarus-md text-lazarus-gray-900 placeholder-lazarus-gray-500 border border-1 border-lazarus-gray-300 rounded w-full shadow-sm focus:shadow-md focus:border-lazarus-primary-300 disabled:text-lazarus-gray-500 disabled:bg-lazarus-gray-50"
        {...reactHookFormProps}
        {...rest}
      />
      {!error && hint && (
        <p className="pt-1.5 text-lazarus-sm text-lazarus-gray-600">{hint}</p>
      )}
      {error && (
        <p className="pt-1.5 text-lazarus-sm text-lazarus-error-500">{error}</p>
      )}
    </div>
    // <div className={className}>
    //   {label && (
    //     <label className="text-lazarus-sm font-medium text-lazarus-gray-700 pb-1.5">
    //       {label}
    //     </label>
    //   )}
    // <input
    //   className="px-3 py-2 bg-white text-lazarus-md text-lazarus-gray-900 placeholder-lazarus-gray-500 border border-1 border-lazarus-gray-300 rounded w-full shadow-sm focus:shadow-md"
    //   {...register(name)}
    //   {...rest}
    // />
    // {hint && (
    //   <p className="px-1 pt-1.5 text-lazarus-xs text-lazarus-gray-600">
    //     {hint}
    //   </p>
    // )}
    // </div>
  )
}

export { InputWithLabel }
