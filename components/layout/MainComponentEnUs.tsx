'use client'
import { useQueryParam } from 'use-query-params'
import React, { useEffect, useState } from 'react'
import { Media } from 'react-breakpoints'
import { withBreakpoints } from 'react-breakpoints'

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

var ReactFitText = require('react-fittext')

export const ResizableWrapper = (props: any) => {
  return (
    <Media>
      {({ currentBreakpoint }: any) => {
        if (currentBreakpoint === 'sm') {
          return <div>{props.children}</div>
        } else {
          return (
            <ReactFitText compressor={props.compressor}>
              {props.children}
            </ReactFitText>
          )
        }
      }}
    </Media>
  )
}

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
      <div className="my-8 mx-6 fixed top-0 left-0 w-[100vw] h-[100vh]">
        <div className="relative h-[100vh]">
          <BackgroundImage
            backgroundImage={page ? backgroundImage : '/backgrounds/home.jpg'}
          />
        </div>
      </div>
      <div className="absolute block md:flex md:flex-col md:justify-center md:items-center top-0 bg-[rgba(0,0,0,0.3)] w-full min-h-[100vh] text-white px-4">
        <section>
          <header className="block w-full max-w-screen-xl mx-auto">
            <ResizableWrapper>
              <div className="p-4 md:p-0 mt-4 md:mt-0 w-full md:w-[42%] relative">
                <img src="/title.png" className="w-full relative" />
              </div>
            </ResizableWrapper>
          </header>

          <div className="max-w-screen-xl mx-auto">
            <div className="w-full md:flex md:flex-row">
              <nav className="w-full md:w-[11.5%]">
                <ResizableWrapper compressor={0.85}>
                  <NavigationDesktop
                    setPage={setUrlQuery}
                    setBackgroundImage={setBackgroundImage}
                  />
                </ResizableWrapper>
              </nav>

              <main className="w-full md:w-[75.5%]">
                <ResizableWrapper compressor={6.0}>
                  <aside className="p-[1em] md:px-[2em]">
                    {page === null && <HomePageHeader />}
                    {page === 'home' && <HomePageHeader />}
                    {page === 'bio' && <BiographyPageHeader />}
                    {page === 'music' && <MusicPageHeader />}
                    {page === 'aftersunset' && <AfterSunsetPageHeader />}
                    {page === 'journeys' && <JourneysPageHeader />}
                    {page === 'writing' && <WritingPageHeader />}
                  </aside>
                </ResizableWrapper>
                <ResizableWrapper compressor={5.9}>
                  <div
                    className='flex-grow md:overflow-scroll md:h-[30em] shadow-["2px -1px 19px 0px rgba(0,0,0,0.75) inset"]'
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
                </ResizableWrapper>
              </main>

              <aside className="w-full md:w-[14%] overflow-y-hidden">
                <ResizableWrapper compressor={0.7}>
                  <div className="overflow-y-hidden h-auto md:h-[21em] p-[0.7em]">
                    <Media>
                      {({ currentBreakpoint }: any) => {
                        if (currentBreakpoint === 'sm') {
                          return <PhotosliderHorizontal />
                        } else {
                          return <PhotosliderVertical />
                        }
                      }}
                    </Media>
                  </div>
                </ResizableWrapper>
              </aside>
            </div>
          </div>

          <footer className="pt-8 flex flex-row justify-between">
            <Media>
              {({ currentBreakpoint }: any) => {
                if (currentBreakpoint === 'sm') {
                  return <span />
                } else {
                  return (
                    <div className="flex flex-row gap-6">
                      <MusicPlayer autoplay={false} />
                      <div className="cursor-pointer text-[0.8em] text-[rgba(255,255,255,0.7)]">
                        <Link href="/?page=music">[ALL TRACKS]</Link>
                      </div>
                    </div>
                  )
                }
              }}
            </Media>
            <div className="text-[0.8em] text-[rgba(255,255,255,0.4)] pr-4">
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
