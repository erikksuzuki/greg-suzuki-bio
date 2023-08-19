const Divider = ({ children, ...props }: any) => {
  if (children) {
    return (
      <div className="flex flex-row items-center gap-2" {...props}>
        <div className="border-b border-gray-200 w-full" />
        <div className="flex-shrink-0">{children}</div>
        <div className="border-b border-gray-200 w-full" />
      </div>
    )
  }

  return <div className="border-b border-gray-200 w-full" {...props} />
}

export { Divider }
