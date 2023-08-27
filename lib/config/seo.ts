import { DefaultSeoProps } from 'next-seo'

// const featureFlagEnabled = true;

const DEFAULT_SEO: DefaultSeoProps = {
  title:
    'Curated Studio Rentals and Workspace Solutions for Remote Workers in Cambodia',
  description:
    'Exclusive workspace solutions and studio apartments with flexible rentals. Live and work with other remote workers in Phnom Penh, Cambodia.',
  // dangerouslySetAllPagesToNoFollow: !featureFlagEnabled,
  // dangerouslySetAllPagesToNoIndex: !featureFlagEnabled,
  openGraph: {
    type: 'website',
    url: 'https://biographyrooms.com',
    title: 'gregsuzuki.bio',
    description:
      'Curated Studio Rentals and Workspace Solutions for Remote Workers in Cambodia',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'gregsuzuki.bio',
      },
    ],
  },
}

export { DEFAULT_SEO }
