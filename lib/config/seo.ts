import { DefaultSeoProps } from 'next-seo'

// const featureFlagEnabled = true;

const DEFAULT_SEO: DefaultSeoProps = {
  title: 'Home Page',
  description:
    "Greg Suzuki's personal website. This is a home for his love of music and expression, dedication to art and entertainment and his vision for new projects.",
  // dangerouslySetAllPagesToNoFollow: !featureFlagEnabled,
  // dangerouslySetAllPagesToNoIndex: !featureFlagEnabled,
  openGraph: {
    type: 'website',
    url: 'https://Gregsuzuki.bio',
    title: 'Gregsuzuki.bio',
    description: "Greg Suzuki's personal website.",
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
