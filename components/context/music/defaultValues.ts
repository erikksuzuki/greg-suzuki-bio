import { MusicProviderTypes } from '.'

export const defaultMusicValues: MusicProviderTypes = {
  state: {
    isPlaying: false,
    songTitle: 'Desert',
    currentTime: {
      min: '',
      sec: '',
    },
    time: {
      min: '00',
      sec: '00',
    },
  },
  setSongTitle: () => void 0,
  togglePlayPause: () => void 0,
  stopCurrentPlayback: () => 0,
  formatTimeDigits: () => void 0,
}
