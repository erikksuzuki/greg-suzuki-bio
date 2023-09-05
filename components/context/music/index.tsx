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
  setAutoplay: any
  setSongTitle: any
  togglePlayPause: any
  stopCurrentPlayback: any
  formatTimeDigits: any
}

export const MusicContext =
  createContext<MusicProviderTypes>(defaultMusicValues)
export default function MusicProvider(props: any) {
  const [autoplay, setAutoplay] = useState(false)
  const [songTitle, setSongTitle] = useState('Sunrise')

  const SunsetAudio = require('../../../public/aftersunsetmusic/sunset.mp3')
  const KimonoAudio = require('../../../public/aftersunsetmusic/kimono.mp3')
  const NightTownAudio = require('../../../public/aftersunsetmusic/nighttown.mp3')
  const ShiningEyesAudio = require('../../../public/aftersunsetmusic/shiningeyes.mp3')
  const ThunderRainAudio = require('../../../public/aftersunsetmusic/thunderrain.mp3')
  const DesertAudio = require('../../../public/aftersunsetmusic/desert.mp3')
  const RainyMoonAudio = require('../../../public/aftersunsetmusic/rainymoon.mp3')
  const SunriseAudio = require('../../../public/aftersunsetmusic/sunrise.mp3')

  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const [
    playSunset,
    {
      pause: pauseSunset,
      stop: stopSunset,
      duration: durationSunset,
      sound: soundSunset,
    },
  ] = useSound(SunsetAudio)
  const [
    playKimono,
    {
      pause: pauseKimono,
      stop: stopKimono,
      duration: durationKimono,
      sound: soundKimono,
    },
  ] = useSound(KimonoAudio)
  const [
    playNightTown,
    {
      pause: pauseNightTown,
      stop: stopNightTown,
      duration: durationNightTown,
      sound: soundNightTown,
    },
  ] = useSound(NightTownAudio)
  const [
    playShiningEyes,
    {
      pause: pauseShiningEyes,
      stop: stopShiningEyes,
      duration: durationShiningEyes,
      sound: soundShiningEyes,
    },
  ] = useSound(ShiningEyesAudio)
  const [
    playThunderRain,
    {
      pause: pauseThunderRain,
      stop: stopThunderRain,
      duration: durationThunderRain,
      sound: soundThunderRain,
    },
  ] = useSound(ThunderRainAudio)
  const [
    playDesert,
    {
      pause: pauseDesert,
      stop: stopDesert,
      duration: durationDesert,
      sound: soundDesert,
    },
  ] = useSound(DesertAudio)
  const [
    playRainyMoon,
    {
      pause: pauseRainyMoon,
      stop: stopRainyMoon,
      duration: durationRainyMoon,
      sound: soundRainyMoon,
    },
  ] = useSound(RainyMoonAudio)
  const [
    playSunrise,
    {
      pause: pauseSunrise,
      stop: stopSunrise,
      duration: durationSunrise,
      sound: soundSunrise,
    },
  ] = useSound(SunriseAudio)

  const musicArray: any = [
    {
      title: 'Sunset',
      play: playSunset,
      pause: pauseSunset,
      stop: stopSunset,
      duration: durationSunset,
      sound: soundSunset,
    },
    {
      title: 'Kimono',
      play: playKimono,
      pause: pauseKimono,
      stop: stopKimono,
      duration: durationKimono,
      sound: soundKimono,
    },
    {
      title: 'Night Town',
      play: playNightTown,
      pause: pauseNightTown,
      stop: stopNightTown,
      duration: durationNightTown,
      sound: soundNightTown,
    },
    {
      title: 'Shining Eyes',
      play: playShiningEyes,
      pause: pauseShiningEyes,
      stop: stopShiningEyes,
      duration: durationShiningEyes,
      sound: soundShiningEyes,
    },
    {
      title: 'Thunder Rain',
      play: playThunderRain,
      pause: pauseThunderRain,
      stop: stopThunderRain,
      duration: durationThunderRain,
      sound: soundThunderRain,
    },
    {
      title: 'Desert',
      play: playDesert,
      pause: pauseDesert,
      stop: stopDesert,
      duration: durationDesert,
      sound: soundDesert,
    },
    {
      title: 'Rainy Moon',
      play: playRainyMoon,
      pause: pauseRainyMoon,
      stop: stopRainyMoon,
      duration: durationRainyMoon,
      sound: soundRainyMoon,
    },
    {
      title: 'Sunrise',
      play: playSunrise,
      pause: pauseSunrise,
      stop: stopSunrise,
      duration: durationSunrise,
      sound: soundSunrise,
    },
  ]

  const [currentTime, setCurrentTime] = useState({
    min: '',
    sec: '',
  }) // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState() // current position of the audio in seconds

  const playCurrentSongTitle = () =>
    musicArray.filter((song: any) => song.title === songTitle)[0].play()

  const pauseCurrentSongTitle = () =>
    musicArray.filter((song: any) => song.title === songTitle)[0].pause()

  const stopCurrentSongTitle = () =>
    musicArray.filter((song: any) => song.title === songTitle)[0].stop()

  const getCurrentSongDuration = musicArray.filter(
    (song: any) => song.title === songTitle
  )[0].duration

  const getCurrentSongSound = musicArray.filter(
    (song: any) => song.title === songTitle
  )[0].sound

  const sec = Math.floor(Number(getCurrentSongDuration) / 1000).toString()
  const min = Math.floor(Number(sec) / 60).toString()
  const secRemain = Math.floor(Number(sec) % 60)
  const time = {
    min: min,
    sec: secRemain,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (getCurrentSongSound) {
        setSeconds(getCurrentSongSound.seek([]))
        const min = Math.floor(getCurrentSongSound.seek([]) / 60).toString()
        const sec = Math.floor(getCurrentSongSound.seek([]) % 60).toString()
        setCurrentTime({
          min,
          sec,
        })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [songTitle, musicArray])

  function togglePlayPause() {
    if (isPlaying) {
      pauseCurrentSongTitle() // this will pause the audio
      setIsPlaying(false)
    } else {
      playCurrentSongTitle()
      setIsPlaying(true)
    }
  }

  function stopCurrentPlayback() {
    stopCurrentSongTitle() // this will pause the audio
    setIsPlaying(false)
  }

  function changeSong() {
    musicArray
      .filter((song: any) => song.title !== songTitle)
      .forEach((song: any) => {
        song.stop()
      })
    if (autoplay && !isLoading) {
      playCurrentSongTitle()
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }

  useEffect(() => {
    if (!isLoading) changeSong()
    setSongTitle(songTitle)
  }, [songTitle, isLoading])

  useEffect(() => {
    if (currentTime.sec === '' || currentTime.min === '') {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [currentTime])

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
    setAutoplay,
    setSongTitle,
    togglePlayPause,
    stopCurrentPlayback,
    formatTimeDigits,
  }
  return (
    <MusicContext.Provider value={providerValues}>
      {props.children}
    </MusicContext.Provider>
  )
}
