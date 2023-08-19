export type InputField = {
  reactHookFormProps?: any
  type?: string
  label?: string
  placeholder?: string
  error?: string
  hint?: any
  className?: string,
  disabled?: boolean,
  name: string,
  inline?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>
