'use client'
import { useQueryParam } from 'use-query-params'
import { useEffect, useState } from 'react'
import { Media } from 'react-breakpoints'
import { withBreakpoints } from 'react-breakpoints'
import { NextSeo } from 'next-seo'

import Link from 'next/link'
import HomePageContent, {
  HomePageHeader,
} from '../pageComponents/HomePageContent'
import BiographyPageContent, {
  BiographyPageHeader,
} from '../pageComponents/BiographyPageContent'
import MusicPageContent, {
  MusicPageHeader,
} from '../pageComponents/MusicPageContent'
import AfterSunsetPageContent, {
  AfterSunsetPageHeader,
} from '../pageComponents/AfterSunsetPageContent'
import JourneysPageContent, {
  JourneysPageHeader,
} from '../pageComponents/JourneysPageContent'
import WritingPageContent, {
  WritingPageHeader,
} from '../pageComponents/WritingPageContent'

import NavigationDesktop from '../navigationComponents/NavigationDesktop'
import { PhotosliderHorizontal, PhotosliderVertical } from './PhotoSlider'
import MusicPlayer from '../musicComponents/MusicPlayer'
import PhotoModal from './PhotoModal'
import BackgroundImage from './BackgroundImage'
import { Hidden } from '@mui/material'

var ReactFitText = require('react-fittext')

const MainComponentEnUs = (props: any) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)
  const [page, setPage] = useState<string | null>(null)
  const [urlQuery, setUrlQuery] = useQueryParam('page')

  useEffect(() => {
    if (urlQuery === 'home') setPage('home')
    if (urlQuery === 'bio') setPage('bio')
    if (urlQuery === 'music') setPage('music')
    if (urlQuery === 'aftersunset') setPage('aftersunset')
    if (urlQuery === 'journeys') setPage('journeys')
    if (urlQuery === 'writing') setPage('writing')
  }, [urlQuery])

  useEffect(() => {
    if (page === 'home') setBackgroundImage('/backgrounds/home.jpg')
    if (page === 'bio') setBackgroundImage('/backgrounds/biography.jpg')
    if (page === 'music') setBackgroundImage('/backgrounds/music.jpg')
    if (page === 'aftersunset') setBackgroundImage('/backgrounds/music.jpg')
    if (page === 'journeys') setBackgroundImage('/backgrounds/music.jpg')
    if (page === 'writing') setBackgroundImage('/backgrounds/books.jpg')
  }, [page])

  return (
    <>
      <NextSeo />
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh]">
        <div className="relative h-[100vh]">
          <BackgroundImage
            backgroundImage={page ? backgroundImage : '/backgrounds/home.jpg'}
          />
        </div>
      </div>
      <div className="absolute block md:flex md:flex-col md:justify-center md:items-center top-0 bg-[rgba(0,0,0,0.3)] w-full min-h-[100vh] text-white px-4">
        <section className="">
          <header className="block w-full max-w-screen-xl mx-auto">
            <div className="w-full max-w-[540px] relative">
              <img src="/title.png" className="w-full relative" />
            </div>
          </header>

          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row w-full ">
              <nav className="flex-grow max-h-[495px]">
                <NavigationDesktop
                  setPage={setUrlQuery}
                  setBackgroundImage={setBackgroundImage}
                />
              </nav>
              <main className="flex flex-col flex-grow md:max-h-[495px]">
                <aside className="p-4 md:max-h-[495px]">
                  {page === null && <HomePageHeader />}
                  {page === 'home' && <HomePageHeader />}
                  {page === 'bio' && <BiographyPageHeader />}
                  {page === 'music' && <MusicPageHeader />}
                  {page === 'aftersunset' && <AfterSunsetPageHeader />}
                  {page === 'journeys' && <JourneysPageHeader />}
                  {page === 'writing' && <WritingPageHeader />}
                </aside>
                <div
                  className='flex-grow md:overflow-scroll md:max-h-[441px] shadow-["2px -1px 19px 0px rgba(0,0,0,0.75) inset"]'
                  style={{
                    boxShadow: '2px -1px 19px 0px rgba(0,0,0,0.75) inset',
                  }}
                >
                  {page === null && <HomePageContent />}
                  {page === 'home' && <HomePageContent />}
                  {page === 'bio' && <BiographyPageContent />}
                  {page === 'music' && <MusicPageContent />}
                  {page === 'aftersunset' && <AfterSunsetPageContent />}
                  {page === 'journeys' && <JourneysPageContent />}
                  {page === 'writing' && <WritingPageContent />}
                </div>
              </main>
              <aside className="p-4 min-w-[172px] max-h-[495px] overflow-y-hidden">
                <Media>
                  {({ currentBreakpoint }: any) => {
                    if (currentBreakpoint === 'sm') {
                      return <PhotosliderHorizontal />
                    } else {
                      return <PhotosliderVertical />
                    }
                  }}
                </Media>
              </aside>
            </div>
          </div>
          <footer className="pt-8 flex flex-row justify-between">
            <div className="flex flex-row gap-6">
              <MusicPlayer autoplay={false} />
              <div className="cursor-pointer text-biography-sm text-[rgba(255,255,255,0.7)]">
                <Link href="/?page=music">[ALL TRACKS]</Link>
              </div>
            </div>

            <div className="text-biography-sm text-[rgba(255,255,255,0.4)] pr-4">
              2004 - 2023 © Masayuki Greg Suzuki. All rights reserved
            </div>
          </footer>
        </section>
        <div className="overflow-hidden w-[1px] h-[1px]">
          <PhotoModal page={page} />
        </div>
      </div>
    </>
  )
}

export default withBreakpoints(MainComponentEnUs)
