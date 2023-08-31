import { useContext, useEffect, useState } from 'react'
import { MusicContext, MusicProviderTypes } from '../context/music'

const MusicPlayer = () => {
  const musicContext = useContext<MusicProviderTypes>(MusicContext)
  const { isPlaying, songTitle, currentTime, time } = musicContext.state
  const { togglePlayPause, formatTimeDigits } = musicContext

  return (
    <div className="pt-8 pl-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-10 text-biography-sm text-[rgba(255,255,255,0.7)]">
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
            {formatTimeDigits(currentTime.min)}:
            {formatTimeDigits(currentTime.sec)} / {formatTimeDigits(time.min)}:
            {formatTimeDigits(time.sec)}
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
        </div>
        <div className="text-biography-sm text-[rgba(255,255,255,0.4)] pr-4">
          2004 - 2023 © Masayuki Greg Suzuki. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
