import Link from 'next/link'

const HomePageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#eeaaff]">Home</span> » News & Contact
  </p>
)

const HomePageContent = () => {
  return (
    <div className="block p-4 md:px-8">
      <p className="block mb-8 leading-relaxed">
        Welcome to Greg Suzuki's personal website. This is a home for his love
        of music and expression, dedication to art and entertainment and his
        vision for new projects.
      </p>
      <p className="block mb-8 leading-relaxed">
        Greg has recently published a book titled "The Show Must Go On." It is
        currently only available in Japanese, but an English translation may be
        possible in the future.
      </p>
      <p className="block mb-8 leading-relaxed">
        Nine years since his first official album, After Sunset, Greg's untitled
        second album is nearing release. All tracks are currently available for
        listening on the Music page. Stay tuned for more info and thank you for
        stopping by.
      </p>
      <p className="block mb-8 leading-relaxed">Find Greg Suzuki at: </p>
      <div className="w-full block relative left-[-6px]">
        <Link href="https://www.facebook.com/masayuki.g.suzuki" target="_blank">
          <img
            className="inline-block w-[100px] mr-1"
            src="/layoutpics/facebook.png"
          />
        </Link>
        <img
          className="inline-block h-[50px] mr-2"
          src="/layoutpics/socialmdivider.png"
        />
        <Link
          href="https://www.linkedin.com/in/greg-suzuki-88092813/"
          target="_blank"
        >
          <img
            className="inline-block w-[100px]"
            src="/layoutpics/linkedin.png"
          />
        </Link>
      </div>
    </div>
  )
}

export default HomePageContent
export { HomePageHeader }
