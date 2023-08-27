'use client'

import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { getHomeHeroSectionBlurb } from '../lib/clients/contentful/homeHeroSectionBlurb'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  ContentfulFontSize,
  renderContentfulDocument,
} from '../lib/clients/contentful/document'
import { useQueryParam, StringParam, withDefault } from 'use-query-params'

import 'tiny-slider/dist/tiny-slider.css'

import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import ImageCrossFade from '../components/ImageCrossFade'
import wait from 'waait'

const TinySlider: any = dynamic(() => import('tiny-slider-react'), {
  ssr: false,
})

type Home = {
  hero_section_blurb: any[]
}

export const getStaticProps = async () => {
  const hero_section_blurb = (await getHomeHeroSectionBlurb()) || []
  return { props: { hero_section_blurb } }
}

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

export default function Home({ hero_section_blurb }: Home) {
  const [currentImageIndex, setCurrentIndex] = useState(0)
  const [backgroundImage, setBackgroundImage] = useState<string>(
    '/backgrounds/home.jpg'
  )
  const [homeHeroSectionBlurb, setHomeHeroSectionBlurb]: [
    any[],
    Dispatch<SetStateAction<any[]>>
  ] = useState(hero_section_blurb)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [page, setPage] = useQueryParam('page', withDefault(StringParam, 'bio'))

  useEffect(() => {
    setHomeHeroSectionBlurb(hero_section_blurb)
  }, [hero_section_blurb])

  const Blurb = ({ text }: { text: any }) => {
    return <div>{renderContentfulDocument(text, ContentfulFontSize.Base)}</div>
  }
  const HeroSectionBlurbs = ({ values }: { values: any[] }) => {
    return (
      <div>
        {values.map((value) => (
          <Blurb {...value.fields} key={value.fields.title} />
        ))}
      </div>
    )
  }

  const NavigationDesktop = () => {
    return (
      <div className="flex flex-row md:flex-col items-start md:items-end p-4 pr-4">
        <button
          className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]"
          onClick={() => {
            setPage('home')
            setBackgroundImage('/backgrounds/home.jpg')
          }}
        >
          home
        </button>
        <button
          className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]
          "
          onClick={() => {
            setPage('bio')
            setBackgroundImage('/backgrounds/biography.jpg')
          }}
        >
          biography
        </button>
        <button
          className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]
          "
          onClick={() => {
            setPage('music')
            setBackgroundImage('/backgrounds/music.jpg')
          }}
        >
          music
        </button>
        <button
          className="block mb-8 text-biography-md md:text-biography-lg mr-2 tracking-[4px]
          "
          onClick={() => {
            setPage('writing')
            setBackgroundImage('/backgrounds/books.jpg')
          }}
        >
          writing
        </button>
      </div>
    )
  }

  const HomeContentSection = () => {
    return (
      <div className="block p-4">
        <p className="block mb-4">
          Welcome to Greg Suzuki's personal website. This is a home for his love
          of music and expression, dedication to art and entertainment and his
          vision for new projects.
        </p>
        <p className="block mb-4">
          Greg has recently published a book titled "The Show Must Go On." It is
          currently only available in Japanese, but an English translation may
          be possible in the future.
        </p>
        <p className="block mb-4">
          Nine years since his first official album, After Sunset, Greg's
          untitled second album is nearing release. All tracks are currently
          available for listening on the Music page. Stay tuned for more info
          and thank you for stopping by.
        </p>
        <p className="block mb-4">Find Greg Suzuki at: </p>
        <div className="w-full relative flex flex-row">
          <img className="w-[100px] relative left-[-6px]" src="/facebook.png" />
          <img className="w-[100px]" src="/linkedin.png" />
        </div>
      </div>
    )
  }

  const BiographyContentSection = () => {
    return (
      <div className="block p-4">
        <p className="block mb-4">
          Masayuki Gregory Suzuki was born in 1959 in Tokyo. In 1979, at the age
          of 19, he moved to Los Angeles, California, and attended The Los
          Angeles Mission College. During these years, he met up with his old
          friend, Osamu Kitajima, regarded by many as the original pioneer of
          blending eastern and western music, who soon became his mentor. After
          graduating as a music major, Greg became one of the first Japanese
          musicians to register in the Los Angeles Music Union. Based in Los
          Angeles, he began his musical career.
        </p>
        <p className="block mb-4">
          Together with Osamu, Greg recorded hundreds of TV commercials, and
          performed at numerous concerts and shows including the 1981 Montreal
          Jazz Festival, the Santa Barbara Jazz Festival in 1983, the 1984
          Olympic Games Opening, and countless other gigs. In a Japan Tour in
          1982, He and Osamu performed in Budokan at the Technics Jazz Festival
          at the Osaka Festival Hall.
        </p>
        <p className="block mb-4">
          In 1986, Greg switched gears and put his musical career on hold for
          the broader and more eminent career of show business; he joined Feld
          Entertainment Inc., the world’s largest live entertainment company.
          Since then, he has worked for the interests of prominent names in show
          business like Ringling Bros.- Barnum & Bailey Circus, The Greatest
          Show on Earth, Disney on Ice, and Disney Live.
        </p>
        <p className="block mb-4">
          His years of experience as Managing Director of Tours for Asia gave
          him the opportunity to explore his passions from a management
          perspective and he is responsible for establishing the company's
          annual presence of Disney on Ice and Disney Live in the Asia Pacific
          region.
        </p>
        <p className="block mb-4">
          After 26 years at Feld Entertainment Inc, Greg joined EMS Asia Pacific
          Pte Ltd as its Manging Director in 2012. EMS is a market leader in
          traveling exhibitions which include Barbie The Dream House, C.S.I The
          Experience, Star Trek The Exhibition, 1,000 years of INCAgold, Leonard
          Davinci: Man, Inventor, Genius, Leonard Davinci: Man-Artist-Genius,
          Dinosaurs Live, Terracotta Army and Wold of Games. Its traveling stage
          shows include Barbie Live, Cirque Du Noel and Musical Rocks.{' '}
        </p>
      </div>
    )
  }

  const MusicContentSection = () => {
    return (
      <div className="block p-4">
        <section>
          <h1 className="block mb-4">2005 - After Sunset</h1>
          <p className="block mb-4">
            After Sunset is the result of a collaborative effort of various
            musicians, produced by Dr. Osamu Kitajima and composed and directed
            by Greg Suzuki.
          </p>
        </section>

        <section>
          <h1 className="block mb-4">2013 - Journeys (Tentative Title)</h1>
          <p className="block mb-4">
            Originally drafted using only simple iPhone applications, Greg's
            second musical project saw the introduction of virtual instruments
            and a continuation of blending digital and organic sounds.
          </p>
        </section>
        <section></section>
      </div>
    )
  }

  const WritingContentSection = () => {
    return (
      <div className="block p-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full pr-4 min-w-[45%] lg:min-w-[35%] xl:min-w-[25%]">
            <img src="/theshowmustgoonbig.png" className="w-full h-auto" />
          </div>
          <div>
            <p className="block mb-4">
              The Show Must Go On
              <br />
              Published: 2009 — ISBN: 978-4-02-250611-5
              <br />
              Written by: Greg Suzuki & Fumio Suzuki
            </p>
            <p className="block mb-4">
              The Show Must Go On, (known in Japan as 7 Secret Elements of a
              Producer) is a book written by Greg Suzuki and Fumio Suzuki about
              various topics of media production and show business. It was
              published in Japan in 2009.
            </p>
            <p className="block mb-4">
              The book takes the form of letters exchanged between Greg and
              Fumio towards the end of the 20th century and aims to give readers
              a window into the workings of the world of entertainment and what
              goes on behind the scenes.
            </p>
            <p className="block mb-4">
              Hidemi Okawa, a writer on Japan's Asahi Weekly magazine, calls the
              book "touching." The following is an excerpt of his review: "This
              book tells the success story of father and son, who together were
              able to bridge the business of circus, ice show, and other live
              entertainment between the U.S. and Japan."
            </p>
          </div>
        </div>

        <p className="block mb-2">Synopsis:</p>
        <p className="block mb-4">
          "Fumio Suzuki, born to a merchant trader in Yokohama, was educated to
          speak and write English due to his locality of the Yokohama port. He
          used this ability, which few Japanese at the time had, to sell the
          licensing rights of the TV series and franchise, "Astro Boy," to
          America. Working with Hitchcock, it was the beginning of a fabulous
          career.
        </p>
        <p className="block mb-4">
          His son, Greg Suzuki, looked to fill these shoes after quitting a
          career in music. Thus, he began on a path that would take him further
          into the world of show business. The book details the events that take
          place between that time and today, in the form of letters exchanged
          between the two. In this poignant and inspiring book, hints of love
          and support between father and son are subtlety woven into the
          narrative.
        </p>
        <p className="block mb-4">
          Fumio's decisiveness and experience-based confidence and Greg's
          abounding effort to learn from him teach us that passion is important
          and the key to reaching success."{' '}
        </p>
      </div>
    )
  }

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
                <NavigationDesktop />
              </nav>
              <main
                className="flex-grow md:max-h-[495px] md:overflow-scroll"
                style={{
                  boxShadow: '2px -1px 19px 0px rgba(0,0,0,0.75) inset',
                }}
              >
                {page === 'home' && <HomeContentSection />}
                {page === 'bio' && <BiographyContentSection />}
                {page === 'music' && <MusicContentSection />}
                {page === 'writing' && <WritingContentSection />}
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
