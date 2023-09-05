'use client'

import { NextSeo } from 'next-seo'
import MainComponentEnUs from '../components/layout/MainComponentEnUs'
import { theme as tailwindTheme } from '../tailwind.config'
import ReactBreakpoints from 'react-breakpoints'
import resolveConfig from 'tailwindcss/resolveConfig'

export default function Home() {
  const tailwindBreakpoints = resolveConfig(tailwindTheme as any).screens
  function formatBreakpoints() {
    const sizeNames = Object.keys(tailwindBreakpoints)
    const sizeValues: string[] = Object.values(tailwindBreakpoints)
    const newObject: any = {}
    for (let i = 0; i < sizeNames.length; i++) {
      newObject[sizeNames[i]] = Number(sizeValues[i].slice(0, -2))
    }
    return newObject
  }
  return (
    <ReactBreakpoints breakpoints={formatBreakpoints()} debounceResize={true}>
      <NextSeo />
      <MainComponentEnUs />
    </ReactBreakpoints>
  )
}
