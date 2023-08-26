import classnames from 'classnames'
import { CheckCircleSolidIcon } from './icons/app/CheckCircleSolid'
import { EmptyCircleIcon } from './icons/app/EmptyCircle'
import { Spinner } from './icons/app/Spinner'

type CheckboxGroupIconProps = {
  icon: React.ReactNode
  active: boolean
  text: string
  supportingText: string
  isLoading: boolean
  onClick?: () => void
  onClickRemove?: () => void
  onClickEdit?: () => void
}

const Icon = ({ loading, active }: { active: boolean; loading: boolean }) => {
  if (loading) {
    return <Spinner color="gray" className="inline w-4 h-4" />
  }

  if (active) {
    return <CheckCircleSolidIcon className="w-4 h-4 text-lazarus-primary-600" />
  }

  return <EmptyCircleIcon className="w-4 h-4 text-lazarus-gray-300" />
}

const CheckboxGroupIcon = ({
  icon,
  active,
  text,
  supportingText,
  isLoading,
  onClick,
  onClickRemove,
  onClickEdit,
}: CheckboxGroupIconProps) => {
  const borderClass = classnames({
    'p-[15px] bg-white border border-gray-200': !active,
    'p-[14px] bg-lazarus-primary-50 border-2 border-lazarus-primary-500':
      active,
  })
  return (
    <section
      className={`flex flex-row gap-x-1 items-start justify-between rounded-xl shadow-sm ${borderClass}`}
    >
      <div className="flex-grow flex flex-row justify-start items-start gap-x-3">
        <i className="block ">{icon}</i>

        <div className="text-lazarus-sm">
          <p
            className={`font-medium ${
              active ? 'text-lazarus-primary-800' : 'text-lazarus-gray-700'
            }`}
          >
            {text}
          </p>
          <p
            className={`font-normal ${
              active ? 'text-lazarus-primary-600' : 'text-lazarus-gray-600'
            }`}
          >
            {supportingText}
          </p>
          <div className="flex flex-row gap-x-3  mt-2">
            {onClick && (
              <button
                className={`font-semibold ${
                  active ? 'text-lazarus-primary-500' : 'text-lazarus-gray-600'
                }`}
                onClick={onClick}
              >
                Set As Default
              </button>
            )}
            {onClickEdit && (
              <button
                className="font-semibold text-lazarus-primary-700"
                onClick={onClickEdit}
              >
                Edit
              </button>
            )}
            {onClickRemove && (
              <button
                className="font-semibold text-lazarus-primary-700"
                onClick={onClickRemove}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
      <Icon active={active} loading={isLoading} />
    </section>
  )
}

export { CheckboxGroupIcon }