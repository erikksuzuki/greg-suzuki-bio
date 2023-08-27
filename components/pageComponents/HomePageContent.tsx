const HomePageContent = () => {
  return (
    <div className="block p-4 md:px-8">
      <p className="mb-4 tracking-[6px]">
        <span className="font-bold text-[#eeaaff]">Home</span> » News & Contact
      </p>
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
        <img
          className="inline-block w-[100px] mr-1"
          src="/layoutpics/facebook.png"
        />
        <img
          className="inline-block h-[50px] mr-2"
          src="/layoutpics/socialmdivider.png"
        />
        <img
          className="inline-block w-[100px]"
          src="/layoutpics/linkedin.png"
        />
      </div>
    </div>
  )
}

export default HomePageContent
