import React, { useState, useEffect, createContext } from 'react'
import { defaultMusicValues } from './defaultValues'
import useSound from 'use-sound'

// import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
export interface MusicProviderTypes {
  state: {
    isPlaying: any
    songTitle: any
    currentTime: any
    time: any
  }
  setSongTitle: any
  setSongFile: any
  playingButton: any
  formatTimeDigits: any
}

export const MusicContext =
  createContext<MusicProviderTypes>(defaultMusicValues)
export default function MusicProvider(props: any) {
  const [songTitle, setSongTitle] = useState('Desert')
  const [songFile, setSongFile] = useState('desert.mp3')
  const [fileName, setFileName] = useState('desert.mp3')

  const Song = require(`../../../public/aftersunsetmusic/${fileName}`)

  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause, duration, sound }] = useSound(Song)

  const [currentTime, setCurrentTime] = useState({
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
        setCurrentTime({
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

  useEffect(() => {
    pause()
    setSongTitle(songTitle)
    setIsPlaying(false)
    setFileName(songFile)
  }, [songTitle, songFile])

  function formatTimeDigits(time: string | number) {
    const timeTwoDigits = `0${time}`
    if (time.toString().length < 2) {
      return timeTwoDigits
    } else {
      return time
    }
  }

  const providerValues: MusicProviderTypes = {
    state: {
      isPlaying: isPlaying,
      songTitle: songTitle,
      currentTime: currentTime,
      time: time,
    },
    setSongTitle,
    setSongFile,
    playingButton,
    formatTimeDigits,
  }
  return (
    <MusicContext.Provider value={providerValues}>
      {props.children}
    </MusicContext.Provider>
  )
}
