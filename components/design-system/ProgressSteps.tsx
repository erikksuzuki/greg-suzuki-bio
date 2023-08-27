import { CheckIcon } from '@heroicons/react/20/solid'
import classnames from 'classnames'
import { PopoverContent } from '../utilities/PopoverContent'
import { useState } from 'react'
import { Popover } from 'react-tiny-popover'

const Step = ({ active, complete, handleClick, children }: any) => {
  const [showPopover, setShowPopover] = useState(false)

  const classNames = classnames('rounded-full w-6 h-6 border-2', {
    'bg-biography-primary-50 border-biography-primary-600 text-biography-primary-600':
      active || complete,
    'shadow-focus-ring-primary': active,
    'bg-white border-biography-gray-200 text-biography-primary-600':
      !active && !complete,
  })
  return (
    <>
      <Popover
        isOpen={showPopover}
        positions={['bottom']}
        containerClassName="z-20"
        content={<PopoverContent>{children}</PopoverContent>}
      >
        <button
          className={classNames}
          onClick={handleClick}
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
        >
          {complete && !active && <CheckIcon className="w-5 h-5 p-0.5" />}
          {active && (
            <i className="block bg-biography-primary-600 rounded-full w-5 h-5 border-[6px] border-biography-primary-50" />
          )}
          {!complete && !active && (
            <i className="block bg-biography-gray-200 rounded-full w-5 h-5 border-[6px] border-biography-gray-50" />
          )}
        </button>
      </Popover>
    </>
  )
}

const StepBridge = ({ complete }: any) => {
  const classNames = classnames('h-0.5 w-12', {
    'bg-biography-gray-200': !complete,
    'bg-biography-primary-600': complete,
  })

  return <div className={classNames} />
}

export { Step, StepBridge }
