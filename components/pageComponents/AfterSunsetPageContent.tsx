import Link from 'next/link'
import { useContext } from 'react'
import { MusicContext, MusicProviderTypes } from '../context/music'

const AfterSunsetPageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#ffcc00]">Music</span> » Albums » After
    Sunset
  </p>
)

const AfterSunsetPageContent = () => {
  const musicContext = useContext<MusicProviderTypes>(MusicContext)
  const { isPlaying, songTitle, currentTime, time } = musicContext.state
  const { setSongTitle, togglePlayPause, formatTimeDigits } = musicContext
  return (
    <div className="block p-4 md:px-8">
      <section className="block mb-10">
        <p className="block leading-relaxed">
          After Sunset is the result of a collaborative effort of various
          musicians, produced by Dr. Osamu Kitajima and composed and directed by
          Greg Suzuki. After Sunset incorporates sounds from the east and west
          to create an exotic, exciting, and new-age jazz album.
        </p>
      </section>
      <section className="w-full flex flex-row mb-2">
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
      <section className="w-full flex flex-row mb-12">
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
      <section className="w-full flex flex-row justify-between mt-12 mb-8">
        <div className="">
          <div className="mb-2">Select Track</div>
          <ul>
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Sunset')
              }}
            >
              1.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Sunset
              </span>
            </li>
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Kimono')
              }}
            >
              2.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Kimono
              </span>
            </li>{' '}
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Night Town')
              }}
            >
              3.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Night Town
              </span>
            </li>{' '}
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Shining Eyes')
              }}
            >
              4.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Shining Eyes
              </span>
            </li>{' '}
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Thunder Rain')
              }}
            >
              5.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Thunder Rain
              </span>
            </li>{' '}
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Desert')
              }}
            >
              6.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Desert
              </span>
            </li>{' '}
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Rainy Moon')
              }}
            >
              7.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Rainy Moon
              </span>
            </li>{' '}
            <li
              className="cursor-pointer mb-1"
              onClick={() => {
                setSongTitle('Sunrise')
              }}
            >
              8.{' '}
              <span className="hover:underline hover:text-[#fff] text-[#ffccaa]">
                Sunrise
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img
            src="/musicpics/discthumb.png"
            className="h-full max-h-[260px]"
          />
        </div>
        <div
          className="flex flex-col w-full max-w-[360px] overflow-hidden rounded-lg shadow-lg"
          style={{
            backgroundImage: 'url("/musicpics/aftersunsetmusicbox.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col flex-grow w-full justify-center items-center rounded-lg">
            <p className="mb-2 text-biography-sm">Track Selected:</p>
            <h1 className="mb-2 text-biography-display-sm">{songTitle}</h1>
            <div className="mb-2">
              {formatTimeDigits(currentTime.min)}:
              {formatTimeDigits(currentTime.sec)} / {formatTimeDigits(time.min)}
              :{formatTimeDigits(time.sec)}
            </div>
            <p className="mb-2 text-biography-sm">
              {!isPlaying ? (
                <span className="cursor-pointer" onClick={togglePlayPause}>
                  [PLAY]
                </span>
              ) : (
                <span className="cursor-pointer" onClick={togglePlayPause}>
                  [PAUSE]
                </span>
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AfterSunsetPageContent
export { AfterSunsetPageHeader }
