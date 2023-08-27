import { Spinner } from './icons/app/Spinner'

const PrimaryButton = ({ children, isLoading = false, ...props }: any) => {
  return (
    <button
      {...props}
      className={`${props.className} transition-all bg-biography-primary-600 border border-biography-primary-600 disabled:bg-biography-primary-200 disabled:border-biography-primary-200 text-biography-md text-white font-semibold rounded-lg px-[18px] py-[10px] w-full`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

const SecondaryButton = ({ children, isLoading = false, ...props }: any) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-white border border-biography-gray-300 text-biography-md text-biography-gray-700 font-semibold rounded-lg px-[18px] py-[10px] w-full`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export { PrimaryButton, SecondaryButton }
