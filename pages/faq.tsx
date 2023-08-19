import { PageHeader } from '../components/layout/PageHeader'
import { getAllFaqItems } from '../lib/clients/contentful/faqItems'
import { NextSeo } from 'next-seo'

import {
  ContentfulFontSize,
  renderContentfulDocument,
} from '../lib/clients/contentful/document'

// type BlogPaginatedPage = {
//   posts: PostProps[]
//   pageCount: number
//   pageNumber: number
// }

export const getStaticProps = async (context: any) => {
  const allFaqItems = await getAllFaqItems()
  return {
    props: {
      faqItems: allFaqItems,
    },
  }
}

const Index = ({ faqItems }: any) => {
  return (
    <>
      <NextSeo title="FAQ" />
      <PageHeader
        topText="Reading"
        title="Our FAQ"
        supportingText="Articles to feed your head"
      />
      <section className="px-4 sm:px-8 mx-auto max-w-screen-xl">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqItems.map((faqItem: any) => (
            <div>
              <div className="text-[20px]">{faqItem.fields.question}</div>
              <div className="text-[15px]">
                {renderContentfulDocument(
                  faqItem.fields.answer,
                  ContentfulFontSize.Blog,
                  { src: 'string', alt: 'Thingy', width: 30, height: 30 }
                )}
              </div>
            </div>
          ))}
        </ul>
      </section>
      <section className="px-4 sm:px-8 mx-auto w-full max-w-screen-xl pt-16"></section>
    </>
  )
}

export default Index
