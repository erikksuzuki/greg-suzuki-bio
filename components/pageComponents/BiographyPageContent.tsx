const BiographyPageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#00ccff]">Biography</span> » 1959 » -
    Present
  </p>
)

const BiographyPageContent = () => {
  return (
    <div className="block p-4 md:px-8 leading-relaxed">
      <div className="inline-block float-left max-w-[45%] md:max-w-[30%] lg:max-w-[19.6%] mt-[6px] mr-[18px] mb-[6px]">
        <img src="/biopicthumb.jpg" className="float-left h-auto" />
      </div>
      <p className="block mb-6">
        <span className="font-bold">Masayuki Gregory Suzuki</span> was born in
        1959 in Tokyo. In 1979, at the age of 19, he moved to Los Angeles,
        California, and attended The Los Angeles Mission College. During these
        years, he met up with his old friend, Osamu Kitajima, regarded by many
        as the original pioneer of blending eastern and western music, who soon
        became his mentor. After graduating as a music major, Greg became one of
        the first Japanese musicians to register in the Los Angeles Music Union.
        Based in Los Angeles, he began his musical career.
      </p>
      <p className="block mb-6">
        Together with Osamu, Greg recorded hundreds of TV commercials, and
        performed at numerous concerts and shows including the 1981 Montreal
        Jazz Festival, the Santa Barbara Jazz Festival in 1983, the 1984 Olympic
        Games Opening, and countless other gigs. In a Japan Tour in 1982, He and
        Osamu performed in Budokan at the Technics Jazz Festival at the Osaka
        Festival Hall.
      </p>
      <p className="block mb-6">
        In 1986, Greg switched gears and put his musical career on hold for the
        broader and more eminent career of show business; he joined Feld
        Entertainment Inc., the world’s largest live entertainment company.
        Since then, he has worked for the interests of prominent names in show
        business like Ringling Bros.- Barnum & Bailey Circus, The Greatest Show
        on Earth, Disney on Ice, and Disney Live.
      </p>
      <p className="block mb-6">
        His years of experience as Managing Director of Tours for Asia gave him
        the opportunity to explore his passions from a management perspective
        and he is responsible for establishing the company's annual presence of
        Disney on Ice and Disney Live in the Asia Pacific region.
      </p>
      <p className="block mb-6">
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

export default BiographyPageContent
export { BiographyPageHeader }
