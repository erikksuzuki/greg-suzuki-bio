import Link from 'next/link'
import { useContext } from 'react'
import { MusicContext, MusicProviderTypes } from '../context/music'

const JourneysPageHeader = () => (
  <p className="tracking-[0.375em]">
    <span className="font-bold text-[#ffcc00]">Music</span> » Albums » After
    Sunset
  </p>
)

const JourneysPageContent = () => {
  const musicContext = useContext<MusicProviderTypes>(MusicContext)
  const { isPlaying, songTitle, currentTime, time } = musicContext.state
  const { setSongTitle, togglePlayPause, formatTimeDigits } = musicContext
  return (
    <div className="block p-[1em] md:px-[2em]">
      <section className="block mb-[1em] md:mb-10">
        <p className="block leading-relaxed">
          Journeys is Greg's tentatively-titled second album will soon be
          available on Spotify.
        </p>
      </section>
      <section className="w-full md:flex md:flex-row mb-2">
        <img
          src="/musicpics/blankcdhalf.png"
          className="w-full md:w-[30%] mb-[1em] md:mb-0 mr-[1em] self-center"
        />
        <p className="md:w-[70%] mb-[1em] leading-relaxed">
          Originally drafted using only simple iPhone applications, Greg's
          second musical project saw the introduction of new virtual instruments
          and his continuation of blending digital and organic sounds. Produced
          by Dr. Osamu Kitajima. Album art and official title coming soon.
        </p>
      </section>
      <section className="hidden w-full md:flex md:flex-row justify-between mt-12 mb-[2em]">
        <div className="">
          <div className="mb-2">Track list:</div>
          <ul>
            <li className="mb-1">
              1. <span className="text-[#fff]">Rock Heaven</span>
            </li>
            <li className="mb-1">
              2. <span className="text-[#fff]">Benzaiten</span>
            </li>{' '}
            <li className="mb-1">
              3. <span className="text-[#fff]">Little Dragon</span>
            </li>{' '}
            <li className="mb-1">
              4.{' '}
              <span className="text-[#fff]">
                The Greatest
                <br />
                Show On Earth
              </span>
            </li>{' '}
            <li className="mb-1">
              5. <span className="text-[#fff]">Fifth Element</span>
            </li>{' '}
            <li className="mb-1">
              6. <span className="text-[#fff]">Two Faces</span>
            </li>{' '}
          </ul>
        </div>
        <div>
          <img
            src="/musicpics/discthumb2.png"
            className="h-full max-h-[13.8em]"
          />
        </div>
        <div className="flex flex-col w-full bg-[rgba(0,0,0,0.33)] max-w-[23em] overflow-hidden rounded-lg shadow-lg">
          <div className="flex flex-col flex-grow w-full justify-center items-center rounded-lg">
            <p className="mb-2 text-[0.8em]">Track Selected:</p>
            <h1 className="mb-2 text-[1.8em]">{songTitle}</h1>
            <div className="mb-2 text-[0.8em]">
              {formatTimeDigits(currentTime.min)}:
              {formatTimeDigits(currentTime.sec)} / {formatTimeDigits(time.min)}
              :{formatTimeDigits(time.sec)}
            </div>
            <p className="mb-2 text-[0.8em]">
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

export default JourneysPageContent
export { JourneysPageHeader }
