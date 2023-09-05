const NavigationDesktop = ({ setPage }: any) => {
  return (
    <div className="flex flex-col items-start md:items-end p-[1em] pr-[1em]">
      <button
        className="block mb-8 text-[1em] mb-[1.5em] tracking-[0.25em]"
        onClick={() => setPage('home')}
      >
        home
      </button>
      <button
        className="block mb-8 text-[1em] mb-[1.5em] tracking-[0.25em]"
        onClick={() => setPage('bio')}
      >
        biography
      </button>
      <button
        className="block mb-8 text-[1em] mb-[1.5em] tracking-[0.25em]"
        onClick={() => setPage('music')}
      >
        music
      </button>
      <button
        className="block mb-8 text-[1em] mb-[1.5em] tracking-[0.25em]"
        onClick={() => setPage('writing')}
      >
        writing
      </button>
    </div>
  )
}

export default NavigationDesktop
