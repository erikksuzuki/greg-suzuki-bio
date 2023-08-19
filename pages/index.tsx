import { NextSeo } from 'next-seo'
import { getHomeHeroSectionBlurb } from '../lib/clients/contentful/homeHeroSectionBlurb'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  ContentfulFontSize,
  renderContentfulDocument,
} from '../lib/clients/contentful/document'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Apartment } from '../components/icons/Apartment'
import { Desk } from '../components/icons/Desk'
import { HomeIcon } from '../components/icons/Home'
import { SocialMediaLinks } from '../components/design-system/SocialMediaLinks'
import Link from 'next/link'

type Home = {
  hero_section_blurb: any[]
}

export const getStaticProps = async () => {
  const hero_section_blurb = (await getHomeHeroSectionBlurb()) || []
  return { props: { hero_section_blurb } }
}

export default function Home({ hero_section_blurb }: Home) {
  const [homeHeroSectionBlurb, setHomeHeroSectionBlurb]: [
    any[],
    Dispatch<SetStateAction<any[]>>
  ] = useState(hero_section_blurb)

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
  return (
    <>
      <NextSeo />
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-48px)]">
        <section
          className="py-8 bg-[#013640] w-full"
          style={{
            backgroundImage: "url('/lazarusbg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="py-4 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 text-white w-full mx-auto">
            <div className="w-full h-full flex flex-col items-center justify-center  pb-8 px-16 max-w-[480px] mx-auto">
              <img
                src="logo-alpha-bg.png"
                className="mx-auto w-full max-w-[200px]"
              />
            </div>
            <div className="py-4 mx-auto flex flex-col justify-center items-center text-center text-lazarus-sm sm:text-lazarus-md max-w-[480px] text-white">
              <HeroSectionBlurbs values={homeHeroSectionBlurb} />
            </div>
          </div>
        </section>
        <section className="w-full flex-grow">
          <section className="py-4 md:px-8 grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-6 flex">
              <div className="rounded-lg border p-6 shadow-lg flex-grow">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <span className="text-lazarus-teal">
                      <HomeIcon className="w-10 h-10 mb-5" strokeWidth={0.0} />
                    </span>
                    <h1 className="font-title uppercase tracking-[0.1rem]">
                      Accommodation
                    </h1>
                    <p className="mb-4">
                      Stay in the heart of Phnom Penh in fully furnished loft
                      apartments that are soundproofed from the hustle and
                      bustle of the city. With no minimum stay duration and no
                      deposit required, pick from short or long-term stays that
                      are easy on your pocket and eyes. Inclusive of utilities
                      and internet.
                    </p>
                  </div>
                  <div>
                    <Link href="/apartments">
                      <button className="block w-full rounded-md py-3 font-subtitle uppercase text-lazarus-sm shadow-md bg-lazarus-light-teal text-white">
                        View Apartments
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 flex">
              <div className="rounded-lg border p-6 shadow-lg flex-grow">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <span className="text-lazarus-teal">
                      <Desk className="w-12 h-12 mb-2" />
                    </span>
                    <h1 className="font-title uppercase tracking-[0.1rem]">
                      Virtual Office
                    </h1>
                    <p className="mb-4">
                      Make Phnom Penh the home of your business or startup
                      headquarters with our cost friendly virtual office
                      packages. Pick from an address only option or sign up for
                      a PO Box with us. Each virtual office package is budget
                      friendly and made to cater to the needs of your company.
                    </p>
                  </div>
                  <div>
                    <Link href="/apartments">
                      <button
                        disabled
                        className="block border w-full rounded-md py-3 font-subtitle uppercase text-lazarus-sm shadow-md bg-lazarus-light-teal text-white disabled:text-lazarus-gray-900 disabled:bg-lazarus-gray-400"
                      >
                        COMING SOON
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </>
  )
}
