const MiniCardIcon = ({ icon }: any) => {
  return <div className="text-lazarus-gray-400">{icon}</div>
}

const MiniCardAction = ({ handleClick, action }: any) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-[15px] py-[9px] rounded-lg border border-lazarus-gray-300 text-lazarus-sm text-lazarus-gray-700 bg-white group-hover:bg-lazarus-gray-50 group-hover:text-lazarus-gray-800 font-semibold shadow-sm"
      >
        {action}
      </button>
    </div>
  )
}

const MiniCardContent = ({ text, supportingText }: any) => {
  return (
    <div className="text-lazarus-sm flex-grow">
      <p className="text-lazarus-gray-700 font-semibold">{text}</p>
      <p className="text-lazarus-gray-600">{supportingText}</p>
    </div>
  )
}

const MiniCardWrapper = ({ children }: any) => {
  return (
    <div className="p-[15px] rounded-lg border border-lazarus-gray-200 w-full flex flex-row gap-x-4 justify-between items-center group hover:shadow-md">
      {children}
    </div>
  )
}

export { MiniCardAction, MiniCardIcon, MiniCardContent, MiniCardWrapper }
