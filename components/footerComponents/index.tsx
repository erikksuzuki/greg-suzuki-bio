const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-4 md:px-8 text-white bg-[#013640] justify-center items-center">
      <div className="px-6 md:px-8 pb-4 text-biography-sm">asdf</div>
      <div className="px-6 md:px-8">
        <div className="flex flex-row justify-end items-end mb-4">asdf</div>
        <div className="text-biography-sm flex flex-row justify-end items-end">
          &copy; {currentYear}
        </div>
      </div>
    </section>
  )
}

export { Footer }
