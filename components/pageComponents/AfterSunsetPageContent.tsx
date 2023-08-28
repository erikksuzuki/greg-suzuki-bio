import Link from 'next/link'

const AfterSunsetPageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#ffcc00]">Music</span> » Albums
  </p>
)

const AfterSunsetPageContent = () => {
  return (
    <div className="block p-4 md:px-8">
      <Link href="/?page=aftersunset">
        <section className="cursor-pointer shadow-xl bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(100,100,100,0.2)] p-4 mb-4">
          <img
            src="/musicpics/albumsunset.jpg"
            className="float-left w-full md:w-[135px] mb-4 md:mb-0 mr-4"
          />
          <h1 className="font-bold block mb-6 leading-relaxed">
            2005 - After Sunset
          </h1>
          <p className="block mb-4 leading-relaxed">
            After Sunset is the result of a collaborative effort of various
            musicians, produced by Dr. Osamu Kitajima and composed and directed
            by Greg Suzuki.
          </p>
        </section>
      </Link>

      <Link href="/?page=journeys">
        <section className="cursor-pointer shadow-xl bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(100,100,100,0.2)] p-4 mb-4">
          <img
            src="/musicpics/albumjourneys.png"
            className="float-left w-full md:w-[135px] mb-4 md:mb-0 mr-4"
          />
          <div className="leading-relaxed">
            <h1 className="font-bold block mb-6 leading-relaxed">
              2013 - Journeys (Tentative Title)
            </h1>
            <p className="block mb-4 leading-relaxed">
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

export default AfterSunsetPageContent
export { AfterSunsetPageHeader }
