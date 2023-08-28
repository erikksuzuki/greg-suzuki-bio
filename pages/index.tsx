'use client'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import 'tiny-slider/dist/tiny-slider.css'

// import Lightbox from 'react-spring-lightbox'
import ImageCrossFade from '../components/ImageCrossFade'
import WritingPageContent from '../components/pageComponents/WritingPageContent'
import MusicPageContent from '../components/pageComponents/MusicPageContent'
import HomePageContent from '../components/pageComponents/HomePageContent'
import BiographyPageContent from '../components/pageComponents/BiographyPageContent'
import NavigationDesktop from '../components/navigationComponents/NavigationDesktop'
import { useState } from 'react'

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const TinySlider: any = dynamic(() => import('tiny-slider-react'), {
  ssr: false,
})

const sideImages: any = [
  {
    src: '/sidepics/budokan.jpg',
    loading: 'lazy',
    alt: 'Live in Budokan at Technics, Japan Jazz Festival (1982)',
    index: 0,
  },
  {
    src: '/sidepics/business.jpg',
    loading: 'lazy',
    alt: 'Feld Entertainment directors meeting in France (2007)',
    index: 1,
  },
  {
    src: '/sidepics/77078_4971773214605_1009990067_n.jpg',
    loading: 'lazy',
    alt: 'Star Trek The Exhibition',
    index: 2,
  },
  {
    src: '/sidepics/dadinegypt.jpg',
    loading: 'lazy',
    alt: 'Greg Suzuki in Egypt',
    index: 3,
  },
  {
    src: '/sidepics/fatherandson.jpg',
    loading: 'lazy',
    alt: 'Greg and Fumio Suzuki (2009)',
    index: 4,
  },
  {
    src: '/sidepics/jamsession.jpg',
    loading: 'lazy',
    alt: 'Greg with friends Kato Hisanori and Bobby Masuyama',
    index: 5,
  },
  {
    src: '/sidepics/liveinlosangeles.jpg',
    loading: 'lazy',
    alt: 'Live in Los Angeles',
    index: 6,
  },
  {
    src: '/sidepics/liveinsingapore.jpg',
    loading: 'lazy',
    alt: 'Live in Singapore',
    index: 7,
  },
  {
    src: '/sidepics/younggreg1.jpg',
    loading: 'lazy',
    alt: 'Junior year birthday party with Fumitaka John Torio, Koichi Nagai and Yoshio Nagai',
    index: 8,
  },
  {
    src: '/sidepics/younggreg2.jpg',
    loading: 'lazy',
    alt: 'After concert with Takehisa Hirayama, Youn Ho Park and Papillong Lee',
    index: 9,
  },
]

export const PhotoSliderVerticle = () => {
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
              <a href={`#&gid=sideImages&pid=image-${image.index}`}>
                <img
                  rel="lightbox[roadtrip]"
                  id={`slideid-${image.index}`}
                  src={image.src}
                  className="cursor-pointer w-full opacity-50 hover:opacity-100 transition-all"
                  style={{
                    transitionProperty: 'all',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '400ms',
                  }}
                />
              </a>
            </div>
          )
        })}
      </TinySlider>
    </div>
  )
}

export const PhotoModal = ({ page }: any) => {
  const router = useRouter()
  const onBeforeOpen = (pswpInstance: any) => {
    router.replace(`/?page=${page}`)
    pswpInstance.on('change', () => {
      router.replace(`/?page=${page}`)
    })
  }
  const options = {
    arrowPrev: true,
    arrowNext: true,
    zoom: true,
    close: true,
    counter: true,
  }
  return (
    <Gallery
      withCaption
      id="sideImages"
      onBeforeOpen={onBeforeOpen}
      options={options}
    >
      {sideImages.map((image: any) => {
        return (
          <Item
            caption={image.alt}
            key={`sideImages-image-${image.index}`}
            id={`image-${image.index}`}
            original={image.src}
            thumbnail={image.src}
            width="960"
            height="720"
          >
            {({ ref, open }: any) => (
              <img ref={ref} onClick={open} src={image.src} alt={image.alt} />
            )}
          </Item>
        )
      })}
    </Gallery>
  )
}

export function BackgroundImage({ backgroundImage }: any) {
  return <ImageCrossFade imgUrl={backgroundImage} width={1728} height={864} />
}

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState<string>(
    '/backgrounds/home.jpg'
  )
  const [page, setPage] = useQueryParam(
    'page',
    withDefault(StringParam, 'home')
  )

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
              <nav className="flex-grow max-h-[490px]">
                <NavigationDesktop
                  setPage={setPage}
                  setBackgroundImage={setBackgroundImage}
                />
              </nav>
              <main
                className="flex-grow md:max-h-[490px] md:overflow-scroll"
                style={{
                  boxShadow: '2px -1px 19px 0px rgba(0,0,0,0.75) inset',
                }}
              >
                {page === 'home' && <HomePageContent />}
                {page === 'bio' && <BiographyPageContent />}
                {page === 'music' && <MusicPageContent />}
                {page === 'writing' && <WritingPageContent />}
              </main>
              <aside className="p-4 min-w-[172px] max-h-[490px] overflow-y-hidden">
                <PhotoSliderVerticle />
              </aside>
            </div>
          </div>
        </section>
        <div className="overflow-hidden w-[1px] h-[1px]">
          <PhotoModal page={page} />
        </div>
      </div>
    </>
  )
}
