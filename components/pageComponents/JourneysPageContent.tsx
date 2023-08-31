import Link from 'next/link'

import MusicPlayer from '../musicComponents/MusicPlayer'

const JourneysPageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#ffcc00]">Music</span> » Albums » Journeys
  </p>
)

const JourneysPageContent = () => {
  return (
    <div className="block p-4 md:px-8">
      <section className="block">
        <p className="block mb-4 leading-relaxed">
          Music player goes here Music player goes hereMusic player goes
          hereMusic player goes hereMusic player goes hereMusic player goes
          hereMusic player goes hereMusic player goes hereMusic player goes
          hereMusic player goes hereMusic player goes hereMusic player goes
          hereMusic player goes hereMusic player goes hereMusic player goes
          hereMusic player goes hereMusic player goes hereMusic player goes
          hereMusic player goes hereMusic player goes here
        </p>
      </section>
    </div>
  )
}

export default JourneysPageContent
export { JourneysPageHeader }
