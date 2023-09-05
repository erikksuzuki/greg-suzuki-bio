import { useContext, useEffect, useState } from 'react'
import { MusicContext, MusicProviderTypes } from '../context/music'
import Link from 'next/link'

const MusicPlayer = ({ autoplay }: { autoplay: boolean }) => {
  const musicContext = useContext<MusicProviderTypes>(MusicContext)
  const { isPlaying, songTitle, currentTime, time } = musicContext.state
  const {
    setAutoplay,
    togglePlayPause,
    stopCurrentPlayback,
    formatTimeDigits,
  } = musicContext

  useEffect(() => {
    autoplay && setAutoplay(true)
  })

  return (
    <div className="pl-5 flex flex-row gap-6 text-[0.8em] text-[rgba(255,255,255,0.7)]">
      <div className="relative">
        {!isPlaying ? 'Track Selected' : 'Now Playing'}: Greg Suzuki -{' '}
        {songTitle}{' '}
        <img
          className={`${
            !isPlaying ? 'hidden' : 'inline-block'
          } ml-2 relative top-[-2px]`}
          src="/audiobars.gif"
        />
      </div>

      <div className="">
        {formatTimeDigits(currentTime.min)}:{formatTimeDigits(currentTime.sec)}{' '}
        / {formatTimeDigits(time.min)}:{formatTimeDigits(time.sec)}
      </div>
      {!isPlaying ? (
        <div className="cursor-pointer" onClick={togglePlayPause}>
          [PLAY]
        </div>
      ) : (
        <div className="cursor-pointer" onClick={togglePlayPause}>
          [PAUSE]
        </div>
      )}
      <div className="cursor-pointer" onClick={stopCurrentPlayback}>
        [STOP]
      </div>
    </div>
  )
}

export default MusicPlayer
