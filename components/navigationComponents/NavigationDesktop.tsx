const NavigationDesktop = ({ setPage, setBackgroundImage }: any) => {
  return (
    <div className="flex flex-row md:flex-col items-start md:items-end p-4 pr-4">
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]"
        onClick={() => {
          setPage('home')
          setBackgroundImage('/backgrounds/home.jpg')
        }}
      >
        home
      </button>
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]
          "
        onClick={() => {
          setPage('bio')
          setBackgroundImage('/backgrounds/biography.jpg')
        }}
      >
        biography
      </button>
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]
          "
        onClick={() => {
          setPage('music')
          setBackgroundImage('/backgrounds/music.jpg')
        }}
      >
        music
      </button>
      <button
        className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]
          "
        onClick={() => {
          setPage('writing')
          setBackgroundImage('/backgrounds/books.jpg')
        }}
      >
        writing
      </button>
    </div>
  )
}

export default NavigationDesktop
