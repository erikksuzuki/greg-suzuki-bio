import { Fragment } from 'react'
import { SmallCheckIcon } from './icons/app/Check'

const WizardProgressStep = ({
  active = false,
  complete = false,
  onClick,
}: any) => {
  if (active) return <ActiveStep onClick={onClick} />
  if (complete) return <CompleteStep onClick={onClick} />
  return <IncompleteStep onClick={onClick} />
}

const CompleteStep = ({ onClick }: any) => {
  return (
    <button
      className="rounded-full p-1 border-2 border-biography-primary-100 bg-biography-primary-50 text-biography-primary-600"
      onClick={onClick}
    >
      <SmallCheckIcon className="w-5 h-5" />
    </button>
  )
}

const IncompleteStep = ({ onClick }: any) => {
  return (
    <button
      className="rounded-full p-2.5 border-2 border-biography-gray-100 bg-biography-gray-50"
      onClick={onClick}
    >
      <i className="block rounded-full w-2 h-2 bg-biography-gray-400" />
    </button>
  )
}

const ActiveStep = ({ onClick }: any) => {
  return (
    <button
      className="inline-block p-3 rounded-full border-4 border-biography-primary-50 bg-biography-primary-100 text-biography-primary-600"
      onClick={onClick}
    >
      <i className="block rounded-full w-2 h-2 bg-biography-primary-600" />
    </button>
  )
}

const ProgressBar = ({
  steps,
}: {
  steps: { label: string; active?: boolean }[]
}) => {
  const numSteps = steps.length

  return (
    <div className="mx-auto my-4 pb-4">
      <div className="flex justify-center pt-3">
        {steps.map((step, index) => (
          <Fragment key={index}>
            <ProgressCircle label={step.label} active={step.active} />
            {index !== numSteps - 1 && (
              <ProgressLine active={steps[index + 1].active} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

const ProgressCircle = ({
  active = false,
  label,
}: {
  active?: boolean
  label: string
}) => (
  <div className="ml-[-1px] mr-[-1px] flex items-center flex-col z-10">
    <div className="text-lg text-biography-gray-600">{label}</div>
    <div
      className={`w-6 h-6 ${
        active ? 'bg-biography-primary-600' : 'bg-biography-gray-200'
      } mx-auto rounded-full flex items-center`}
    />
  </div>
)

const ProgressLine = ({ active }: { active?: boolean }) => (
  <div className="w-1/3 flex items-end mb-2">
    <div className="w-full bg-grey-light items-center align-middle align-center flex-1">
      <div
        className={`w-full ${
          active ? 'bg-biography-primary-600' : 'bg-biography-gray-200'
        } text-xs leading-none py-1 text-center text-grey-darkest`}
      />
    </div>
  </div>
)

export { WizardProgressStep, ProgressBar }
