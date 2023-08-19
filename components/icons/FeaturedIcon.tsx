const FeaturedIcon = ({ children }: any) => {
  return (
    <div className="inline-block group-hover:animate-pulse p-2 -ml-2 rounded-full border-8 border-lazarus-primary-50 bg-lazarus-primary-100 text-lazarus-primary-600">
      {children}
    </div>
  )
}

export { FeaturedIcon }
