'use client'

import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import 'tiny-slider/dist/tiny-slider.css'

import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import ImageCrossFade from '../components/ImageCrossFade'
import wait from 'waait'
import WritingPageContent from '../components/pageComponents/WritingPageContent'
import MusicPageContent from '../components/pageComponents/MusicPageContent'
import HomePageContent from '../components/pageComponents/HomePageContent'
import BiographyPageContent from '../components/pageComponents/BiogrpahyPageContent'
import NavigationDesktop from '../components/navigationComponents/NavigationDesktop'
import { useState } from 'react'

const TinySlider: any = dynamic(() => import('tiny-slider-react'), {
  ssr: false,
})

const sideImages: ImagesListType = [
  {
    src: '/sidepics/budokan.jpg',
    loading: 'lazy',
    alt: 'Live in Budokan at Technics, Japan Jazz Festival (1982)',
  },
  {
    src: '/sidepics/business.jpg',
    loading: 'lazy',
    alt: 'Feld Entertainment directors meeting in France (2007)',
  },
  {
    src: '/sidepics/77078_4971773214605_1009990067_n.jpg',
    loading: 'lazy',
    alt: 'Star Trek The Exhibition',
  },
  {
    src: '/sidepics/dadinegypt.jpg',
    loading: 'lazy',
    alt: 'Greg Suzuki in Egypt',
  },
  {
    src: '/sidepics/fatherandson.jpg',
    loading: 'lazy',
    alt: 'Greg and Fumio Suzuki (2009)',
  },
  {
    src: '/sidepics/jamsession.jpg',
    loading: 'lazy',
    alt: 'Greg with friends Kato Hisanori and Bobby Masuyama',
  },
  {
    src: '/sidepics/liveinlosangeles.jpg',
    loading: 'lazy',
    alt: 'Live in Los Angeles',
  },
  {
    src: '/sidepics/liveinsingapore.jpg',
    loading: 'lazy',
    alt: 'Live in Singapore',
  },
  {
    src: '/sidepics/younggreg1.jpg',
    loading: 'lazy',
    alt: 'Junior year birthday party with Fumitaka John Torio, Koichi Nagai and Yoshio Nagai',
  },
  {
    src: '/sidepics/younggreg2.jpg',
    loading: 'lazy',
    alt: 'After concert with Takehisa Hirayama, Youn Ho Park and Papillong Lee',
  },
]

export const PhotoSliderVerticle = ({
  setLightboxOpen,
  setCurrentIndex,
}: any) => {
  const settings = {
    nav: false,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    axis: 'vertical',
    items: 5,
    gutter: 10,
    autoplay: true,
    rewind: false,
    autoplayHoverPause: true,
    loop: true,
    autoplayTimeout: 3000,
    speed: 3000,
  }

  return (
    <div>
      <TinySlider settings={settings}>
        {sideImages.map((image: any, index: number) => {
          return (
            <div className="relative w-[140px]" key={`sideimage-${index}`}>
              <img
                src={image.src}
                className="cursor-pointer w-full opacity-50 hover:opacity-100 transition-all"
                onClick={() => {
                  setCurrentIndex(index)
                  setLightboxOpen(true)
                }}
                style={{
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '400ms',
                }}
              />
            </div>
          )
        })}
      </TinySlider>
    </div>
  )
}

export const PhotoModal = ({
  lightboxOpen,
  setLightboxOpen,
  currentImageIndex,
  setCurrentIndex,
}: any) => {
  const handleClose = () => setLightboxOpen(false)
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)
  const gotoNext = () =>
    currentImageIndex + 1 < sideImages.length &&
    setCurrentIndex(currentImageIndex + 1)

  const CaptionComponent = () => {
    return (
      <div className="bg-black text-center text-white py-6">
        {sideImages[currentImageIndex].alt}
      </div>
    )
  }
  return (
    <Lightbox
      isOpen={lightboxOpen}
      onClose={handleClose}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={sideImages}
      currentIndex={currentImageIndex}
      singleClickToZoom
      style={{ background: 'rgba(0,0,0,0.5)' }}
      className=""
      renderFooter={() => <CaptionComponent />}
      pageTransitionConfig={{
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { mass: 1, tension: 320, friction: 32 },
      }}

      /* Add your own UI */
      // renderHeader={() => (<CustomHeader />)}
      // renderPrevButton={() => (<CustomLeftArrowButton />)}
      // renderNextButton={() => (<CustomRightArrowButton />)}
      // renderImageOverlay={() => (<ImageOverlayComponent >)}

      /* react-spring config for open/close animation */
    />
  )
}

export function BackgroundImage({
  backgroundImage,
}: {
  backgroundImage: string
}) {
  return <ImageCrossFade imgUrl={backgroundImage} width={1728} height={864} />
}

export default function Home() {
  const [currentImageIndex, setCurrentIndex] = useState(0)
  const [backgroundImage, setBackgroundImage] = useState<string>(
    '/backgrounds/home.jpg'
  )
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [page, setPage] = useQueryParam('page', withDefault(StringParam, 'bio'))

  return (
    <>
      <NextSeo />
      <div className="fixed top-0 left-0 w-[100vw] h-[100vh]">
        <div className="relative h-[100vh]">
          <BackgroundImage backgroundImage={backgroundImage} />
        </div>
      </div>
      <div className="absolute block md:flex md:flex-col md:justify-center md:items-center top-0 bg-[rgba(0,0,0,0.3)] w-full h-[100vh] text-white px-4">
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
                  setPage={setPage}
                  setBackgroundImage={setBackgroundImage}
                />
              </nav>
              <main
                className="flex-grow md:max-h-[495px] md:overflow-scroll"
                style={{
                  boxShadow: '2px -1px 19px 0px rgba(0,0,0,0.75) inset',
                }}
              >
                {page === 'home' && <HomePageContent />}
                {page === 'bio' && <BiographyPageContent />}
                {page === 'music' && <MusicPageContent />}
                {page === 'writing' && <WritingPageContent />}
              </main>
              <aside className="p-4 min-w-[172px] max-h-[495px] overflow-y-hidden">
                <PhotoSliderVerticle
                  setLightboxOpen={setLightboxOpen}
                  setCurrentIndex={setCurrentIndex}
                />
              </aside>
            </div>
          </div>
        </section>
        <PhotoModal
          lightboxOpen={lightboxOpen}
          setLightboxOpen={setLightboxOpen}
          currentImageIndex={currentImageIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </>
  )
}
