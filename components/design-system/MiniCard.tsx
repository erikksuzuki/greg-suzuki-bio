const MiniCardIcon = ({ icon }: any) => {
  return <div className="text-biography-gray-400">{icon}</div>
}

const MiniCardAction = ({ handleClick, action }: any) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-[15px] py-[9px] rounded-lg border border-biography-gray-300 text-biography-sm text-biography-gray-700 bg-white group-hover:bg-biography-gray-50 group-hover:text-biography-gray-800 font-semibold shadow-sm"
      >
        {action}
      </button>
    </div>
  )
}

const MiniCardContent = ({ text, supportingText }: any) => {
  return (
    <div className="text-biography-sm flex-grow">
      <p className="text-biography-gray-700 font-semibold">{text}</p>
      <p className="text-biography-gray-600">{supportingText}</p>
    </div>
  )
}

const MiniCardWrapper = ({ children }: any) => {
  return (
    <div className="p-[15px] rounded-lg border border-biography-gray-200 w-full flex flex-row gap-x-4 justify-between items-center group hover:shadow-md">
      {children}
    </div>
  )
}

export { MiniCardAction, MiniCardIcon, MiniCardContent, MiniCardWrapper }
