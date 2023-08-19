import { NextSeo } from 'next-seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Expedia from '../components/icons/social/Expedia'
import AirBnB from '../components/icons/social/AirBnB'
import BookingComIcon from '../components/icons/social/Booking'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

function ExpediaButton({
  className = 'inline-block',
  link = 'https://www.google.com',
}: any) {
  return (
    <div className={className}>
      <Link target="_blank" href={link}>
        <button className="w-full text-lazarus-md bg-[#ffca06] border-[#996600] border flex flex-row justify-center font-subtitle rounded-md items-center gap-2 px-2 py-1 shadow-lg">
          <span className="text-[#003557]">
            <Expedia className="w-5 h-5" />
          </span>{' '}
          <span className="text-black">Expedia</span>
        </button>
      </Link>
    </div>
  )
}

function AirBnBButton({
  className = 'inline-block',
  link = 'https://www.google.com',
}: any) {
  return (
    <div className={`${className} shadow-lg`}>
      <Link target="_blank" href={link}>
        <button className="w-full text-lazarus-md bg-[#F2555B] border-[rgba(160,40,40,1)] border flex flex-row justify-center font-subtitle rounded-md items-center gap-2 px-2 py-1">
          <span className="text-white">
            <AirBnB className="w-5 h-5" />
          </span>{' '}
          <span className="text-white">AirBnB</span>
        </button>
      </Link>
    </div>
  )
}

function BookingDotComButton({
  className = 'inline-block',
  link = 'https://www.google.com',
}: any) {
  return (
    <div className={`${className} shadow-lg`}>
      <Link target="_blank" href={link}>
        <button className="w-full text-lazarus-md bg-[#093774] border-[rgba(0,0,100,1)] border flex flex-row justify-center font-subtitle rounded-md items-center gap-2 px-2 py-1">
          <span className="text-white">
            <BookingComIcon className="w-5 h-5" />
          </span>{' '}
          <span className="text-white">Booking</span>
        </button>
      </Link>
    </div>
  )
}

function AgodaButton({
  className = 'inline-block',
  link = 'https://www.google.com',
}: any) {
  return (
    <div className={`${className} shadow-lg`}>
      <Link target="_blank" href={link}>
        <button className="w-full text-lazarus-md bg-[#f4f4f4] border-[rgba(0,0,0,0.4)] border flex flex-row justify-center font-subtitle rounded-md items-center gap-2 px-2 py-1">
          <span className="text-black">
            <img src="/agoda.png" className="w-10" />
          </span>
          <span className="text-black">agoda</span>
        </button>
      </Link>
    </div>
  )
}

function DirectBookingButton({
  className = 'inline-block',
  link = '/contact',
}: any) {
  return (
    <div className={`${className} shadow-lg`}>
      <Link href={link}>
        <button className="w-full text-lazarus-md bg-lazarus-light-teal border-[rgba(0,0,0,0.1)] border flex flex-row justify-center font-subtitle rounded-md items-center gap-2 px-2 py-1">
          <span className="text-white">
            <DriveFileRenameOutlineIcon className="w-5 h-5" />
          </span>{' '}
          <span className="text-white">Direct Booking*</span>
        </button>
      </Link>
    </div>
  )
}

function RoomHeader({ className, roomNumber, name }: any) {
  return (
    <div className={`${className} text-center w-full`}>
      <p className="font-subtitle text-lazarus-lg uppercase tracking-[0.2rem]">
        ROOM {roomNumber}
      </p>
      <h1 className="font-title text-lazarus-display-sm uppercase tracking-[0.2rem] mb-4">
        {name}
      </h1>
    </div>
  )
}

function RoomListing({
  imageUrl,
  roomNumber,
  info,
  name,
  featureList = [
    'Free Wifi',
    'Smart TV',
    'Refrigerator',
    'In-unit washer & dryer',
    'Workstation x 1.5',
  ],
  priceList = {
    oneNight: 45,
    oneWeek: 252,
    oneMonth: 468,
  },
  hyperlinks = {},
  noDivider = false,
}: any) {
  const linkArray = Object.keys(hyperlinks)
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-6 md:px-8 py-10 flex flex-col justify-center items-center">
          <RoomHeader
            className="block md:hidden"
            roomNumber={roomNumber}
            name={name}
          />
          <img className="w-full" src={imageUrl} />
        </div>
        <div className="px-6 md:px-8 py-4 flex flex-col items-center justify-center">
          <RoomHeader
            className="hidden md:block"
            roomNumber={roomNumber}
            name={name}
          />
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="flex flex-col">
              <div className="rounded-lg border shadow-lg flex-grow mb-2 overflow-hidden flex-grow">
                <div className="px-3 py-1 bg-lazarus-teal text-white font-subtitle uppercase tracking-[1px]">
                  Info
                </div>
                <div className="p-3">{info}</div>
              </div>
              <div className="rounded-lg border shadow-lg flex-grow mb-2 overflow-hidden flex-grow">
                <div className="px-3 py-1 bg-lazarus-teal text-white font-subtitle uppercase tracking-[1px]">
                  Features
                </div>
                <ul className="mb-4 p-3">
                  {featureList.map((feature: any) => {
                    return <li>{feature}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-lg border shadow-lg mb-2 overflow-hidden">
                <div className="px-3 py-1 bg-lazarus-teal text-white font-subtitle uppercase tracking-[1px]">
                  1 Night
                </div>
                <div className="p-3">
                  {priceList.oneNight ? (
                    <span>
                      From ${priceList.oneNight}{' '}
                      <span className="text-lazarus-xs uppercase">USD</span>
                    </span>
                  ) : (
                    'Unavailable'
                  )}
                </div>
              </div>
              <div className="rounded-lg border shadow-lg mb-2 overflow-hidden">
                <div className="px-3 py-1 bg-lazarus-teal text-white font-subtitle uppercase tracking-[1px]">
                  1 Week
                </div>
                <div className="p-3">
                  {priceList.oneWeek ? (
                    <span>
                      From ${priceList.oneWeek}{' '}
                      <span className="text-lazarus-xs uppercase">USD</span>
                    </span>
                  ) : (
                    'Unavailable'
                  )}
                </div>
              </div>
              <div className="rounded-lg border shadow-lg flex-grow mb-2 overflow-hidden flex-grow">
                <div className="px-3 py-1 bg-lazarus-teal text-white font-subtitle uppercase tracking-[1px]">
                  1 Month
                </div>
                <div className="p-3">
                  {priceList.oneMonth ? (
                    <>
                      <span>
                        From ${priceList.oneMonth}{' '}
                        <span className="text-lazarus-xs uppercase">USD</span>
                      </span>
                      <span className="block italic text-lazarus-sm">
                        (Utilities not included)
                      </span>
                    </>
                  ) : (
                    'Unavailable'
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full gap-2">
            {linkArray.map((link, n) => {
              const isOdd = (number: number) => number % 2 === 0
              const longbutton = isOdd(n)
                ? n + 1 === linkArray.length
                  ? true
                  : false
                : false
              if (link === 'airbnb')
                return (
                  <div className={longbutton ? 'col-span-2' : ''}>
                    <AirBnBButton className="w-full" link={hyperlinks[link]} />
                  </div>
                )
              if (link === 'agoda')
                return (
                  <div className={longbutton ? 'col-span-2' : ''}>
                    <AgodaButton className="w-full" link={hyperlinks[link]} />
                  </div>
                )
              if (link === 'booking')
                return (
                  <div className={longbutton ? 'col-span-2' : ''}>
                    <BookingDotComButton
                      className="w-full"
                      link={hyperlinks[link]}
                    />
                  </div>
                )
              if (link === 'expedia')
                return (
                  <div className={longbutton ? 'col-span-2' : ''}>
                    <ExpediaButton className="w-full" link={hyperlinks[link]} />
                  </div>
                )
            })}

            <div className="col-span-2 w-full">
              <DirectBookingButton className="w-full mb-1" link="/contact" />
            </div>
            <div className="col-span-2 text-lazarus-sm pb-4">
              * Direct booking incurs no surcharge, no hidden fees, no admin
              fees, no deposit, and no platform fees. Book with us directly
              today and enjoy special rates.
            </div>
          </div>
        </div>
      </div>
      {!noDivider && <hr className="border-black mx-8" />}
    </>
  )
}

function SectionLinkButton({ anchorLink, label }: any) {
  return (
    <ScrollLink
      to={anchorLink}
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
    >
      <button className="border border-[#ccc] bg-lazarus-light-teal text-white rounded-lg py-1 px-3 text-lazarus-sm shadow-lg">
        {label}
      </button>
    </ScrollLink>
  )
}

function SectionHeader({ children, id }: any) {
  return (
    <ScrollLink
      to={'pagetop'}
      spy={true}
      smooth={true}
      duration={500}
      offset={-50}
    >
      <div
        className="cursor-pointer bg-lazarus-teal text-white md:mx-8 px-8 md:px-4 py-4 flex flex-row items-center justify-between"
        id={id}
      >
        <span className="uppercase font-title">{children}</span>

        <button className="hidden md:block uppercase text-lazarus-xs">
          Back to Top ▲
        </button>
        <button className="block md:hidden uppercase text-lazarus-xs text-right w-[50px]">
          ▲
        </button>
      </div>
    </ScrollLink>
  )
}

export default function FloorPlansPage() {
  return (
    <>
      <NextSeo />
      <Header />

      <section
        className="bg-white justify-center items-center py-4 md:px-8"
        id="pagetop"
      >
        <div className="flex flex-row justify-start items-start gap-1 md:gap-2 px-1 md:px-8 mb-4">
          <SectionLinkButton anchorLink="studiosection" label="Studio Lofts" />
          <SectionLinkButton anchorLink="onebrsection" label="1 Bedroom" />
          <SectionLinkButton anchorLink="twobrsection" label="2 Bedrooms" />
        </div>
        <SectionHeader id="studiosection">STUDIO LOFTS</SectionHeader>
        <RoomListing
          imageUrl="/201.jpg"
          roomNumber="201"
          name="Kyvos"
          info="1 bathroom studio loft, 21 sqm + 10.27 sqm"
          featureList={[
            'Free Wifi',
            'Smart TV and Sofa',
            'Refrigerator',
            'Work Station',
            'Bar-style counter',
          ]}
          priceList={{
            oneNight: 38,
            oneWeek: 213,
            oneMonth: 468,
          }}
          hyperlinks={{
            booking: 'https://www.booking.com/Share-lXw6Vg',
            agoda: 'http://www.agoda.com/sl/8aee522aec1',
            airbnb: 'https://www.airbnb.com/h/lazarusrooms-201',
          }}
        />
        <RoomListing
          imageUrl="/301.jpg"
          roomNumber="301"
          name="Imperial"
          info="1 bathroom studio loft, 21 sqm + 10.27 sqm"
          featureList={[
            'Free Wifi',
            'Smart TV',
            'Refrigerator',
            'Large Window & Sky View',
          ]}
          priceList={{
            oneNight: 38,
            oneWeek: 213,
            oneMonth: 468,
          }}
          hyperlinks={{
            booking: 'https://www.booking.com/Share-lXw6Vg',
            airbnb: 'https://www.airbnb.com/h/lazarusrooms-301',
          }}
        />
        <RoomListing
          imageUrl="/401.jpg"
          roomNumber="401"
          name="Epoque"
          info="1 bathroom studio loft, 21 sqm + 10.27 sqm"
          featureList={[
            'Free Wifi',
            'Smart TV',
            'Refrigerator',
            'Living Room Tabletset',
            'Large Window & Sky View',
          ]}
          priceList={{
            oneNight: 38,
            oneWeek: 213,
            oneMonth: 468,
          }}
          hyperlinks={{
            booking: 'https://www.booking.com/Share-lXw6Vg',
            airbnb: 'https://www.airbnb.com/h/lazarusrooms-401',
          }}
        />
        <RoomListing
          imageUrl="/403.jpg"
          roomNumber="403"
          name="Reign"
          info="1 bathroom studio loft, 31 sqm + 11.85 sqm"
          featureList={[
            'Free Wifi',
            'Smart TV',
            'Refrigerator',
            'Large Living Room',
            'Work Station',
            'Floor to ceiling window',
            'In-unit washer',
            'Large Balcony & Drying Rack',
            'Street View',
          ]}
          priceList={{
            oneNight: 46,
            oneWeek: 258,
            oneMonth: 588,
          }}
          hyperlinks={{
            booking: 'https://www.booking.com/Share-lXw6Vg',
            airbnb: 'https://www.airbnb.com/h/lazarusrooms-403',
          }}
          noDivider
        />
      </section>

      <section className="bg-white justify-center items-center py-4 md:px-8">
        <SectionHeader id="onebrsection">ONE-BEDROOM LOFTS</SectionHeader>
        <RoomListing
          imageUrl="/402.jpg"
          roomNumber="402"
          name="Sovereign"
          info="Coming soon"
          featureList={[
            'Free Wifi',
            'Smart TV',
            'Refrigerator',
            'In-unit washer',
          ]}
          priceList={{
            oneMonth: 488,
          }}
          noDivider
        />
      </section>

      <section className="bg-white justify-center items-center py-4 md:px-8">
        <SectionHeader id="twobrsection">TWO BEDROOM SUITES</SectionHeader>
        <RoomListing
          imageUrl="/202.jpg"
          roomNumber="202"
          name="Royale"
          info="Coming soon"
          featureList={[
            'Free Wifi',
            'Smart TV',
            'Refrigerator',
            'Floor to ceiling window',
            'In-unit washer',
            'Large Balcony & Drying Rack',
            'Street View',
          ]}
          priceList={{
            oneMonth: 688,
          }}
        />
        <RoomListing
          imageUrl="/302.jpg"
          roomNumber="302"
          name="Dominium"
          info="Coming soon"
          featureList={[
            'Free Wifi',
            'Smart TV',
            'Refrigerator',
            'Private, sound-proof room',
            'Floor to ceiling window',
            'In-unit washer',
            'Large Balcony & Drying Rack',
            'Street View',
          ]}
          priceList={{
            oneMonth: 688,
          }}
          noDivider
        />
      </section>
      <Footer />
    </>
  )
}
