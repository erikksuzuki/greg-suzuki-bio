import { SocialMediaLinks } from '../design-system/SocialMediaLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-4 md:px-8 text-white bg-[#013640] justify-center items-center">
      <div className="px-6 md:px-8 pb-4 text-biography-sm">
        Building 59H, Preah Ang Eng St (13), Phsar Kandal 1, Daun Penh, Phnom
        Penh City, 120205
      </div>
      <div className="px-6 md:px-8">
        <div className="flex flex-row justify-end items-end mb-4">
          <SocialMediaLinks />
        </div>
        <div className="text-biography-sm flex flex-row justify-end items-end">
          &copy; {currentYear}
        </div>
      </div>
    </section>
  )
}

export { Footer }
