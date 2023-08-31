import { useEffect, useState } from 'react'
import useSound from 'use-sound' // for handling the sound

const MusicPlayer = ({ songTitle = 'Desert', fileName = 'desert.mp3' }) => {
  const Song = require(`../../public/aftersunsetmusic/${fileName}`)
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause, duration, sound }] = useSound(Song)

  const [currTime, setCurrTime] = useState({
    min: '',
    sec: '',
  }) // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState() // current position of the audio in seconds

  const sec = Math.floor(Number(duration) / 1000).toString()
  const min = Math.floor(Number(sec) / 60).toString()
  const secRemain = Math.floor(Number(sec) % 60)
  const time = {
    min: min,
    sec: secRemain,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])) // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60).toString()
        const sec = Math.floor(sound.seek([]) % 60).toString()
        setCurrTime({
          min,
          sec,
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [sound])

  function playingButton() {
    if (isPlaying) {
      pause() // this will pause the audio
      setIsPlaying(false)
    } else {
      play() // this will play the audio
      setIsPlaying(true)
    }
  }

  function formatTimeDigits(time: string | number) {
    const timeTwoDigits = `0${time}`
    if (time.toString().length < 2) {
      return timeTwoDigits
    } else {
      return time
    }
  }

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
            {formatTimeDigits(currTime.min)}:{formatTimeDigits(currTime.sec)} /{' '}
            {formatTimeDigits(time.min)}:{formatTimeDigits(time.sec)}
          </div>
          {!isPlaying ? (
            <div className="cursor-pointer" onClick={playingButton}>
              [PLAY]
            </div>
          ) : (
            <div className="cursor-pointer" onClick={playingButton}>
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
