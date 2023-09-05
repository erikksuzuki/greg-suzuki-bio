const WritingPageHeader = () => (
  <p className="tracking-[6px]">
    <span className="font-bold text-[#00ffaa]">Writing</span> » Books » The Show
    Must Go On
  </p>
)

const WritingPageContent = () => {
  return (
    <div className="block p-4 md:px-8 leading-relaxed">
      <img
        src="/theshowmustgoonbig.png"
        className="block mb-8 md:mb-0 w-full md:inline-block md:float-left md:pr-4 md:max-w-[45%] lg:max-w-[26.5%]"
      />
      <p className="block mb-4">
        <span className="font-bold">The Show Must Go On</span>
        <br />
        <span className="font-bold">Published:</span> 2009 — ISBN:
        978-4-02-250611-5
        <br />
        <span className="font-bold">Written by:</span> Greg Suzuki & Fumio
        Suzuki
      </p>
      <p className="block mb-4">
        The Show Must Go On, (known in Japan as 7 Secret Elements of a Producer)
        is a book written by Greg Suzuki and Fumio Suzuki about various topics
        of media production and show business. It was published in Japan in
        2009.
      </p>
      <p className="block mb-4">
        The book takes the form of letters exchanged between Greg and Fumio
        towards the end of the 20th century and aims to give readers a window
        into the workings of the world of entertainment and what goes on behind
        the scenes.
      </p>
      <p className="block mb-4">
        Hidemi Okawa, a writer on Japan's Asahi Weekly magazine, calls the book
        "touching." The following is an excerpt of his review: "This book tells
        the success story of father and son, who together were able to bridge
        the business of circus, ice show, and other live entertainment between
        the U.S. and Japan."
      </p>
      <p className="block mb-4">
        Synopsis: "Fumio Suzuki, born to a merchant trader in Yokohama, was
        educated to speak and write English due to his locality of the Yokohama
        port. He used this ability, which few Japanese at the time had, to sell
        the licensing rights of the TV series and franchise, "Astro Boy," to
        America. Working with Hitchcock, it was the beginning of a fabulous
        career.
      </p>
      <p className="block mb-4">
        His son, Greg Suzuki, looked to fill these shoes after quitting a career
        in music. Thus, he began on a path that would take him further into the
        world of show business. The book details the events that take place
        between that time and today, in the form of letters exchanged between
        the two. In this poignant and inspiring book, hints of love and support
        between father and son are subtlety woven into the narrative.
      </p>
      <p className="block mb-4">
        Fumio's decisiveness and experience-based confidence and Greg's
        abounding effort to learn from him teach us that passion is important
        and the key to reaching success."{' '}
      </p>
    </div>
  )
}

export default WritingPageContent
export { WritingPageHeader }
