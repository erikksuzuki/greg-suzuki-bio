import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const Spinner = ({ className = 'inline w-5 h-5', color = 'white' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill={color}
      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      opacity=".25"
    />
    <path
      fill={color}
      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
    >
      <animateTransform
        attributeName="transform"
        dur="0.75s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </path>
  </svg>
)

const EmailFormSchema = z.object({
  from_name: z.string().nonempty({
    message: 'Please enter your name',
  }),
  from_email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().nonempty({
    message: 'Invalid phone number',
  }),
  subject: z.string().nonempty({
    message: 'What are you enquiring about?',
  }),
  message: z.string().nonempty({
    message: 'Please include a message',
  }),
})

type InputField = {
  reactHookFormProps?: any
  type?: string
  label?: string
  placeholder?: string
  error?: any
  hint?: any
  mask?: string
  className?: string
  textArea?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const InputField = ({
  reactHookFormProps,
  hint,
  error,
  label,
  mask,
  className,
  textArea,
  ...rest
}: InputField) => {
  return (
    <div className={className}>
      {label && (
        <label className="text-lazarus-sm font-medium text-lazarus-gray-700 pb-1.5">
          {label}
        </label>
      )}
      {textArea ? (
        <textarea
          className="px-[13px] py-[9px] bg-white text-lazarus-md text-lazarus-gray-900 placeholder-lazarus-gray-500 border border-1 border-lazarus-gray-300 rounded w-full shadow-sm focus:shadow-md focus:border-lazarus-primary-300 disabled:text-lazarus-gray-500 disabled:bg-lazarus-gray-50"
          {...reactHookFormProps}
          {...rest}
        />
      ) : (
        <input
          className="px-[13px] py-[9px] bg-white text-lazarus-md text-lazarus-gray-900 placeholder-lazarus-gray-500 border border-1 border-lazarus-gray-300 rounded w-full shadow-sm focus:shadow-md focus:border-lazarus-primary-300 disabled:text-lazarus-gray-500 disabled:bg-lazarus-gray-50"
          {...reactHookFormProps}
          {...rest}
        />
      )}
      {error && (
        <p className="pt-1.5 text-lazarus-sm text-lazarus-error-500">{error}</p>
      )}
    </div>
  )
}

export default function EmailForm() {
  const {
    register,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EmailFormSchema),
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef: any = useRef()
  const clearValues: any = () => {
    setValue('from_name', '')
    setValue('from_email', '')
    setValue('phone', '')
    setValue('subject', '')
    setValue('message', '')
  }
  const onSubmit: any = async () => {
    setIsLoading(true)
    emailjs
      .sendForm(
        'service_f18kes5',
        'template_jj6zfhh',
        formRef.current,
        '5HDX4H83mX3FGPfIz'
      )
      .then(
        (result) => {
          setIsLoading(false)
          setIsSubmitted(true)
          clearErrors()
          clearValues()
          console.log(result.text)
        },
        (error) => {
          setIsLoading(false)
          console.log(error.text)
        }
      )
  }

  return (
    <form ref={formRef} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-2 md:col-span-2">
          <InputField
            label="Your name"
            name="from_name"
            reactHookFormProps={register('from_name')}
            error={errors.from_name?.message as string}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <InputField
            label="Your email"
            name="from_email"
            reactHookFormProps={register('from_email')}
            error={errors.from_email?.message as string}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <InputField
            label="Phone number"
            name="phone"
            reactHookFormProps={register('phone')}
            error={errors.phone?.message as string}
          />
        </div>
        <div className="col-span-2 md:col-span-2">
          <InputField
            label="Subject"
            name="subject"
            reactHookFormProps={register('subject')}
            error={errors.subject?.message as string}
          />
        </div>
        <div className="col-span-2">
          <InputField
            textArea
            label="Message"
            name="message"
            reactHookFormProps={register('message')}
            error={errors.message?.message as string}
          />
        </div>
        <div className="col-span-2">
          <button
            className="block w-full rounded-md py-3 font-subtitle uppercase text-lazarus-sm shadow-md bg-lazarus-light-teal text-white"
            type="submit"
          >
            {isLoading ? <Spinner /> : 'Send Email'}
          </button>
        </div>
        {isSubmitted && (
          <div className="col-span-2 text-lazarus-sm text-lazarus-success-800">
            Thank you for submitting your enquiry! Our team will review it as
            soon as possible. If you don't hear back from us within 24 hours,
            feel free to reach out to us using one of our phone numbers.
          </div>
        )}
      </div>
    </form>
  )
}
