import Link from 'next/link'

const HomePageHeader = () => (
  <p className="tracking-[0.375em]">
    <span className="font-bold text-[#eeaaff]">Home</span> » News & Contact
  </p>
)

const HomePageContent = () => {
  return (
    <div className="block p-[1em] md:px-[2em] font-[16px]">
      <p className="block mb-[2em] leading-relaxed">
        Welcome to Greg Suzuki's personal website. This is a home for his love
        of music and expression, dedication to art and entertainment and his
        vision for new projects.
      </p>
      <p className="block mb-[2em] leading-relaxed">
        Greg has recently published a book titled "The Show Must Go On." It is
        currently only available in Japanese, but an English translation may be
        possible in the future.
      </p>
      <p className="block mb-[2em] leading-relaxed">
        Nine years since his first official album, After Sunset, Greg's untitled
        second album is nearing release. All tracks are currently available for
        listening on the Music page. Stay tuned for more info and thank you for
        stopping by.
      </p>
      <p className="block mb-[2em] leading-relaxed">Find Greg Suzuki at: </p>
      <div className="w-full block relative left-[-6px]">
        <Link href="https://www.facebook.com/masayuki.g.suzuki" target="_blank">
          <img
            className="inline-block w-[6em] mr-1"
            src="/layoutpics/facebook.png"
          />
        </Link>
        <img
          className="inline-block h-[50px] mr-2"
          src="/layoutpics/socialmdivider.png"
        />
        <Link
          href="https://www.linkedin.com/in/greg-suzuki-[2em]8092813/"
          target="_blank"
        >
          <img
            className="inline-block w-[6em]"
            src="/layoutpics/linkedin.png"
          />
        </Link>
      </div>
    </div>
  )
}

export default HomePageContent
export { HomePageHeader }
