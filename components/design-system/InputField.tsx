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
        <label className="text-biography-sm font-medium text-biography-gray-700 pb-1.5">
          {label}
        </label>
      )}
      <input
        className="px-[13px] py-[9px] bg-white text-biography-md text-biography-gray-900 placeholder-biography-gray-500 border border-1 border-biography-gray-300 rounded w-full shadow-sm focus:shadow-md focus:border-biography-primary-300 disabled:text-biography-gray-500 disabled:bg-biography-gray-50"
        {...reactHookFormProps}
        {...rest}
      />
      {!error && hint && (
        <p className="pt-1.5 text-biography-sm text-biography-gray-600">
          {hint}
        </p>
      )}
      {error && (
        <p className="pt-1.5 text-biography-sm text-biography-error-500">
          {error}
        </p>
      )}
    </div>
    // <div className={className}>
    //   {label && (
    //     <label className="text-biography-sm font-medium text-biography-gray-700 pb-1.5">
    //       {label}
    //     </label>
    //   )}
    // <input
    //   className="px-3 py-2 bg-white text-biography-md text-biography-gray-900 placeholder-biography-gray-500 border border-1 border-biography-gray-300 rounded w-full shadow-sm focus:shadow-md"
    //   {...register(name)}
    //   {...rest}
    // />
    // {hint && (
    //   <p className="px-1 pt-1.5 text-biography-xs text-biography-gray-600">
    //     {hint}
    //   </p>
    // )}
    // </div>
  )
}

export { InputWithLabel }
