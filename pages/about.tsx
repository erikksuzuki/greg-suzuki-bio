import { NextSeo } from 'next-seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <NextSeo />
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-48px)]">
        <div className="flex-grow">
          <div className="mt-10 font-title text-lazarus-display-sm uppercase tracking-[0.2rem] text-center">
            OUR TEAM
          </div>
          <section className="py-4 md:px-8 grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="p-6 flex">
              <div className="rounded-lg border p-6 shadow-lg flex-grow">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <img
                      src="./tyr_2.jpg"
                      alt="Tyr Ding"
                      className="rounded-lg w-20 mb-4 mx-auto"
                    />
                    <h1 className="text-center font-title uppercase tracking-[0.1rem] mb-2 mb-2">
                      Tyr Ding
                    </h1>
                    <p className="mb-2">
                      Tyr (he/him) is the managing director of multiple medical
                      and healthcare facilities and has a background in
                      operational strategy. He is also a medical doctor and
                      lawyer (MD JD) in training.
                    </p>
                    <p className="mb-2">
                      Having lived as a long term resident in both Amsterdam and
                      London, he has experienced the pains and inconveniences of
                      relocation and believes that more can be done to make the
                      world border-less. His personal interests includes the
                      refurbishment of dilapidated shophouses and buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*

            <div className="p-6 flex">
              <div className="rounded-lg border p-6 shadow-lg flex-grow">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <img
                      src="./erikk_2.jpg"
                      alt="Eric Suzuki"
                      className="rounded-lg w-20 mb-4 mx-auto"
                    />
                    <h1 className="text-center font-title uppercase tracking-[0.1rem] mb-2">
                      Eric Suzuki
                    </h1>
                    <p className="mb-2">
                      Eric is a software engineer from Las Vegas, Nevada. In the
                      past decade, he's worked with trailblazing crypto-related
                      companies such as Gemini and Freeport, lived in more than
                      five countries and traveled to over 10 cities spanning Los
                      Angeles to Tokyo.
                    </p>
                    <p className="mb-2">
                      Phnom Penh was the natural choice for his venture into
                      real estate due to the city's diversity and development
                      opportunities. He's a major geek, sci-fi fan and film
                      aficionado, and his other hobbies and interests include
                      metaphysics, religion and classic rock.
                    </p>
                  </div>
                </div>
              </div>
            </div>

*/}
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
