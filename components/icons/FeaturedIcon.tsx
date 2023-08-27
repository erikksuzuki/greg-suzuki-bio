const FeaturedIcon = ({ children }: any) => {
  return (
    <div className="inline-block group-hover:animate-pulse p-2 -ml-2 rounded-full border-8 border-biography-primary-50 bg-biography-primary-100 text-biography-primary-600">
      {children}
    </div>
  )
}

export { FeaturedIcon }
