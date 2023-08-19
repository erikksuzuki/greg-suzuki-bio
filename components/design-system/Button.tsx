import { Spinner } from './icons/app/Spinner'

const PrimaryButton = ({ children, isLoading = false, ...props }: any) => {
  return (
    <button
      {...props}
      className={`${props.className} transition-all bg-lazarus-primary-600 border border-lazarus-primary-600 disabled:bg-lazarus-primary-200 disabled:border-lazarus-primary-200 text-lazarus-md text-white font-semibold rounded-lg px-[18px] py-[10px] w-full`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

const SecondaryButton = ({ children, isLoading = false, ...props }: any) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-white border border-lazarus-gray-300 text-lazarus-md text-lazarus-gray-700 font-semibold rounded-lg px-[18px] py-[10px] w-full`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export { PrimaryButton, SecondaryButton }
