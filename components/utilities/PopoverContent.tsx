import { ReactNode } from 'react'

const PopoverContent = ({ children }: { children: ReactNode }) => {
  return (
    <aside className="relative max-w-xs md:max-w-sm mt-2">
      <div className="p-3 bg-freeport-gray-900 text-freeport-text-xs text-white rounded-lg">
        {children}
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2">
        <i className="block absolute top-0 -translate-y-2/4 left-1/2 -translate-x-1/2 bg-freeport-gray-900 rotate-45 h-2 w-2" />
      </div>
    </aside>
  )
}

export { PopoverContent }
