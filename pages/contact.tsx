import { NextSeo } from 'next-seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import EmailForm from '../components/contact-page/EmailForm'
import Link from 'next/link'

import LaunchIcon from '@mui/icons-material/Launch'

export default function FloorPlansPage() {
  return (
    <>
      <NextSeo />
      <Header />
      <div className="flex flex-col min-h-[calc(100vh-48px)]">
        <div className="flex-grow w-full">
          <section className="flex justify-center items-center mt-12 px-2 md:px-10 grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="font-title text-lazarus-display-sm uppercase tracking-[0.2rem] text-center">
              CONTACT US
            </div>
            <div className="px-6 md:px-8 mt-4">
              For direct bookings and enquiries, send us an email or text
              message. Guided tours are also available upon request.
            </div>
          </section>

          <section className="py-4 md:px-8 grid grid-cols-1 md:grid-cols-2 w-full">
            <div>
              <div className="p-2">
                <div className="rounded-lg border p-6 shadow-lg">
                  <h1 className="font-title uppercase tracking-[0.1rem]">
                    Enquiries
                  </h1>
                  <EmailForm />
                </div>
              </div>
            </div>
            <div>
              <div className="p-2">
                <div className="rounded-lg border p-6 shadow-lg">
                  <h1 className="font-title uppercase tracking-[0.1rem]">
                    Address
                  </h1>
                  Building 59H, Preah Ang Eng St (13), Phsar Kandal 1, Daun
                  Penh, Phnom Penh City, 120205 -{' '}
                  <Link
                    href="https://goo.gl/maps/pkdCefEtqM4gyL319"
                    target="_blank"
                    className="inline-block text-lazarus-primary-500"
                  >
                    Google Maps
                    <LaunchIcon className="ml-1 w-[18px] h-[18px]" />
                  </Link>
                </div>
              </div>
              <div className="p-2">
                <div className="rounded-lg border p-6 shadow-lg">
                  <h1 className="font-title uppercase tracking-[0.1rem]">
                    Phone Numbers
                  </h1>
                  +855963465412
                  <br />
                  +85512990331 <br />
                  +17026701752
                  <h1 className="mt-6 font-title uppercase tracking-[0.1rem]">
                    Telegram
                  </h1>
                  <Link
                    href="https://t.me/lazarusrooms"
                    target="_blank"
                    className="text-lazarus-primary-500"
                  >
                    https://t.me/lazarusrooms
                    <LaunchIcon className="ml-1 w-[18px] h-[18px]" />
                  </Link>
                  <h1 className="mt-6 font-title uppercase tracking-[0.1rem]">
                    WhatsApp
                  </h1>
                  <Link
                    href="https://wa.me/+85512990331"
                    target="_blank"
                    className="text-lazarus-primary-500"
                  >
                    https://wa.me/+85512990331
                    <LaunchIcon className="ml-1 w-[18px] h-[18px]" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
