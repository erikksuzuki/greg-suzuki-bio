import Link from 'next/link'

const AfterSunsetPageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#ffcc00]">Music</span> » Albums » After
    Sunset
  </p>
)

const AfterSunsetPageContent = () => {
  return (
    <div className="block p-4 md:px-8">
      <section className="block">
        <p className="block mb-4 leading-relaxed">
          After Sunset is the result of a collaborative effort of various
          musicians, produced by Dr. Osamu Kitajima and composed and directed by
          Greg Suzuki. After Sunset incorporates sounds from the east and west
          to create an exotic, exciting, and new-age jazz album.
        </p>
      </section>
      <section className="w-full flex flex-row mb-4">
        <img
          src="/musicpics/sunsetthumb1.png"
          className="inline-block w-full md:w-[135px] mb-4 md:mb-0 mr-4"
        />
        <img
          src="/musicpics/sunsetthumb2.png"
          className="inline-block w-full md:w-[135px] mb-4 md:mb-0 mr-4"
        />
        <p className="mb-4 leading-relaxed">
          After Sunset was released in 2005 and was Greg's first re-emergence
          into the music scene since his hiatus in 1986. The project marks a
          reunion between him and his former mentor, Dr. Osamu Kitajima. » View
          all album covers
        </p>
      </section>
      <section className="w-full flex flex-row mb-8">
        <p className="block mb-4 leading-relaxed">
          Among the contributing musicians are Kazu Matsui, friend and prominent
          bamboo flute player in major Hollywood films, internationally renowned
          Erhu player Karen Han whose contributions include 'The Last Emperor'
          and 'Star Trek', Sid Page, a concert violin virtuoso and many others.
        </p>
        <img
          src="/musicpics/artiststhumb.png"
          className="w-full md:w-[245px] mb-4 md:mb-0 ml-0 md:ml-4"
        />
      </section>
      <section>
        <p className="block mb-4 leading-relaxed">
          Recordings were done in different parts of the world, including New
          Jersey, Tokyo, Taipei, Singapore, and Los Angeles, in order to capture
          a blend of true global music.
        </p>
        <p className="block mb-4 leading-relaxed">
          This album is dedicated to his lost friends, Tango, Kitahara and
          Renarto, who are all in heaven.{' '}
        </p>
      </section>
    </div>
  )
}

export default AfterSunsetPageContent
export { AfterSunsetPageHeader }
