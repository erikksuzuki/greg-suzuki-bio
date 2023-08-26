import { useEffect, useState } from 'react'

interface InputDateFieldProps {
  reactHookFormProps?: {
    fieldName: string
    setValue: any
    clearErrors: any
  }
  error?: string
  label?: string
  className?: string
}

const InputDateWithLabel = ({
  reactHookFormProps,
  error,
  label,
  className,
}: InputDateFieldProps) => {
  const [dateValue, setDateValue] = useState('')

  const validDateCharacters = new RegExp('^[0-9-]*$')
  const fieldName = reactHookFormProps?.fieldName
  const setFormValue = reactHookFormProps?.setValue
  const clearErrors = reactHookFormProps?.clearErrors

  const rearrangeDateComponents = (date: string) => {
    const dateComponentArray = date.split('-')
    return `${dateComponentArray[2]}-${dateComponentArray[0]}-${dateComponentArray[1]}`
  }

  const handleDateChange = (event: any) => {
    if (!validDateCharacters.test(event.target.value)) return
    if (dateValue.charAt(dateValue.length - 1) === '-') {
      setDateValue(event.target.value)
      reactHookFormProps && setFormValue(fieldName, event.target.value)
    } else if (
      event.target.value.length === 2 ||
      event.target.value.length === 5
    ) {
      setDateValue(event.target.value + '-')
      reactHookFormProps && setFormValue(fieldName, event.target.value + '-')
    } else {
      setDateValue(event.target.value)
      reactHookFormProps && setFormValue(fieldName, event.target.value)
    }
  }

  useEffect(() => {
    if (reactHookFormProps && dateValue.length === 10) {
      clearErrors(fieldName)
      setFormValue(fieldName, rearrangeDateComponents(dateValue))
    }
  }, [dateValue])

  return (
    <div className={className}>
      {label && (
        <label className="text-lazarus-sm font-medium text-lazarus-gray-700 pb-1.5">
          {label}
        </label>
      )}
      <input
        className="px-[13px] py-[9px] bg-white text-lazarus-md text-lazarus-gray-900 placeholder-lazarus-gray-500 border border-1 border-lazarus-gray-300 rounded w-full shadow-sm focus:shadow-md focus:border-lazarus-primary-300 disabled:text-lazarus-gray-500 disabled:bg-lazarus-gray-50"
        onChange={handleDateChange}
        value={dateValue}
        maxLength={10}
        placeholder="mm-dd-yyyy"
      />
      {error && (
        <p className="pt-1.5 text-lazarus-sm text-lazarus-error-500">{error}</p>
      )}
    </div>
  )
}

export { InputDateWithLabel }