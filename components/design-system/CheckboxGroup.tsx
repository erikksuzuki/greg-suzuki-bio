import classnames from 'classnames'
import { CheckCircleSolidIcon } from './icons/app/CheckCircleSolid'
import { EmptyCircleIcon } from './icons/app/EmptyCircle'
import { ReactNode } from 'react'

type FauxCheckboxProps = {
  icon?: React.ReactNode
  active: boolean
  label: string
  hint?: string | ReactNode
  onClick?: () => void
}

const FauxCheckbox = ({
  icon,
  active,
  label,
  hint,
  onClick,
}: FauxCheckboxProps) => {
  const borderClass = classnames({
    'p-[15px] bg-white border border-gray-200': !active,
    'p-[14px] bg-lazarus-primary-50 border-2 border-lazarus-primary-500':
      active,
  })

  return (
    <button
      className={`flex flex-row cursor-pointer gap-x-1 items-start justify-between rounded-xl shadow-sm ${borderClass}`}
      onClick={onClick}
      type="button"
    >
      <div className="flex-grow flex flex-row justify-start items-start gap-x-3 text-left">
        {icon && <i className="block ">{icon}</i>}

        <div className="text-lazarus-sm">
          <p
            className={`font-medium ${
              active ? 'text-lazarus-primary-800' : 'text-lazarus-gray-700'
            }`}
          >
            {label}
          </p>
          {hint && (
            <p
              className={`font-normal ${
                active ? 'text-lazarus-primary-600' : 'text-lazarus-gray-600'
              }`}
            >
              {hint}
            </p>
          )}
        </div>
      </div>
      {active ? (
        <CheckCircleSolidIcon className="flex-shrink-0 w-4 h-4 text-lazarus-primary-600" />
      ) : (
        <EmptyCircleIcon className="flex-shrink-0 w-4 h-4 text-lazarus-gray-300" />
      )}
    </button>
  )
}

export { FauxCheckbox }
