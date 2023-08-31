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
  setSongFile: () => void 0,
  playingButton: () => void 0,
  formatTimeDigits: () => void 0,
}
