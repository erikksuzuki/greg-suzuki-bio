import Link from 'next/link'

const MusicPageHeader = () => (
  <p className="tracking-[0.375em]">
    <span className="font-bold text-[#ffcc00]">Music</span> » Albums
  </p>
)

const MusicPageContent = () => {
  return (
    <div className="block p-[1em] md:px-[2em]">
      <Link href="/?page=aftersunset">
        <section className="flex flex-col md:flex-row cursor-pointer shadow-xl bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(100,100,100,0.2)] p-[1em] mb-[1em]">
          <img
            src="/musicpics/albumsunset.jpg"
            className="w-full md:w-[10em] mb-[1em] md:mb-0 md:mr-[1em] self-center"
          />
          <div className="leading-relaxed">
            <h1 className="font-bold block mb-[1.5em] leading-relaxed">
              2005 - After Sunset
            </h1>
            <p className="block mb-[1em] leading-relaxed">
              After Sunset is the result of a collaborative effort of various
              musicians, produced by Dr. Osamu Kitajima and composed and
              directed by Greg Suzuki.
            </p>
          </div>
        </section>
      </Link>

      <Link href="/?page=journeys">
        <section className="flex flex-col md:flex-row cursor-pointer shadow-xl bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(100,100,100,0.2)] p-[1em] mb-[1em]">
          <img
            src="/musicpics/albumjourneys.png"
            className="w-full md:w-[10em] mb-[1em] md:mb-0 md:mr-[1em] self-center"
          />
          <div className="leading-relaxed">
            <h1 className="font-bold block mb-[1.5em] leading-relaxed">
              2013 - Journeys (Tentative Title)
            </h1>
            <p className="block mb-[1em] leading-relaxed">
              Originally drafted using only simple iPhone applications, Greg's
              second musical project saw the introduction of virtual instruments
              and a continuation of blending digital and organic sounds.
            </p>
          </div>
        </section>
      </Link>
      <section></section>
    </div>
  )
}

export default MusicPageContent
export { MusicPageHeader }
