const NavigationDesktop = ({ setPage }: any) => {
  return (
    <div className="flex flex-row md:flex-col items-start md:items-end p-4 pr-4">
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]"
        onClick={() => setPage('home')}
      >
        home
      </button>
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]"
        onClick={() => setPage('bio')}
      >
        biography
      </button>
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]"
        onClick={() => setPage('music')}
      >
        music
      </button>
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]"
        onClick={() => setPage('writing')}
      >
        writing
      </button>
    </div>
  )
}

export default NavigationDesktop
