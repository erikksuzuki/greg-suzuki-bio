import { RightArrow } from '../../components/icons/RightArrow'
import Link from 'next/link'
import { LeftArrow } from '../icons/LeftArrow'

interface PaginationNumber {
  selected?: boolean
  number: number
  urlPrefix: string
}
const NumberButton = ({ number, selected, urlPrefix }: PaginationNumber) => {
  const numberBaseClass =
    'w-10 h-10 cursor-pointer flex items-center justify-center text-lazarus-sm rounded-full font-medium'
  const selectedConditionalClass = selected
    ? 'bg-lazarus-gray-50 hover:bg-lazarus-gray-100 font-semibold'
    : 'hover:bg-lazarus-gray-100'
  return (
    <Link href={urlPrefix + number} className={`${selected && 'disabled'}`}>
      <div className={`${numberBaseClass} ${selectedConditionalClass}`}>
        {number}
      </div>
    </Link>
  )
}

interface PaginationArrow {
  disabled: boolean
  linkUrl: string
}
const previousNextBaseClass =
  'border rounded-lg sm:border-0 w-9 sm:w-auto h-9 sm:h-10 flex items-center justify-center font-semibold items-center justify-center text-lazarus-sm'

const BackButton = ({ disabled = false, linkUrl }: PaginationArrow) => {
  const disabledConditionalClass = disabled
    ? 'text-lazarus-gray-400 border-lazarus-gray-300'
    : 'cursor-pointer text-lazarus-gray-900 sm:text-lazarus-gray-600 hover:text-lazarus-primary-600 border-lazarus-gray-400 hover:border-lazarus-primary-600'
  return (
    <Link href={linkUrl} className={`${disabled && 'disabled'}`}>
      <div className={`${previousNextBaseClass} ${disabledConditionalClass}`}>
        <LeftArrow className="mt-[2px] w-4 h-4 mr-0 sm:mr-2" />
        <span className="hidden sm:inline-block">Previous</span>
      </div>
    </Link>
  )
}
const ForwardButton = ({ disabled = false, linkUrl }: PaginationArrow) => {
  const disabledConditionalClass = disabled
    ? 'text-lazarus-gray-400 border-lazarus-gray-300'
    : 'cursor-pointer text-lazarus-gray-900 sm:text-lazarus-gray-600 hover:text-lazarus-primary-600 border-lazarus-gray-400 hover:border-lazarus-primary-600'
  return (
    <Link href={linkUrl} className={`${disabled && 'disabled'}`}>
      <div className={`${previousNextBaseClass} ${disabledConditionalClass}`}>
        <span className="hidden sm:inline-block">Forward</span>
        <RightArrow className="mt-[2px] w-4 h-4 ml-0 sm:ml-2" />
      </div>
    </Link>
  )
}

const PaginationSection = ({
  pageCount,
  currentPage = 1,
  urlPrefix,
}: {
  pageCount: number
  currentPage?: number
  urlPrefix: string
}) => {
  const fullPageArray = Array.from({ length: pageCount }, (i, o) => o + 1)
  const NumberRow = () => {
    return (
      <div className="flex w-full gap-1 justify-center">
        {fullPageArray.map((index) => {
          return (
            <NumberButton
              key={'page' + index}
              selected={currentPage === index}
              number={index}
              urlPrefix={urlPrefix}
            />
          )
        })}
      </div>
    )
  }
  const NumberRowElipsis = () => {
    return (
      <div className="flex w-full gap-1 justify-center">
        {fullPageArray.slice(0, 3).map((index) => {
          return (
            <NumberButton
              key={'page' + index}
              selected={currentPage === index}
              number={index}
              urlPrefix={urlPrefix}
            />
          )
        })}
        <div className="w-10 h-10 flex items-center justify-center text-lazarus-sm rounded-full font-medium">
          ...
        </div>
        {fullPageArray.slice(-3).map((index) => {
          return (
            <NumberButton
              key={'page' + index}
              selected={currentPage === index}
              number={index}
              urlPrefix={urlPrefix}
            />
          )
        })}
      </div>
    )
  }
  const PageLocationText = () => {
    return (
      <div className="text-lazarus-sm text-lazarus-gray-700">
        Page <span className="font-bold">{currentPage}</span> of{' '}
        <span className="font-bold">{pageCount}</span>
      </div>
    )
  }
  return (
    <section className="flex flex-row justify-between w-full border-t border-gray-200 py-4 mb-8">
      <BackButton
        disabled={currentPage === 1}
        linkUrl={urlPrefix + (currentPage - 1)}
      />

      {/* Desktop view shows all pages, truncated after a certain length */}
      <div className="hidden sm:block">
        {fullPageArray.length <= 7 ? <NumberRow /> : <NumberRowElipsis />}
      </div>
      {/* Mobile view only shows current page */}
      <div className="block sm:hidden flex flex-col justify-center">
        <PageLocationText />
      </div>

      <ForwardButton
        disabled={currentPage === pageCount}
        linkUrl={urlPrefix + (currentPage + 1)}
      />
    </section>
  )
}

export { PaginationSection }
