import { useEffect } from 'react'

const useLockBodyScroll = () => {
  useEffect(() => {
    const body = document.body
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth

    body.style.paddingRight = `${scrollbarWidth}px`
    body.classList.add('overflow-hidden')

    return () => {
      body.style.paddingRight = ''
      body.classList.remove('overflow-hidden')
    }
  }, [])
}

export { useLockBodyScroll }
