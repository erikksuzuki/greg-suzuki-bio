'use client'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import 'styles/main.css'
import 'styles/chrome-bug.css'
import { DEFAULT_SEO } from '../lib/config/seo'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider } from 'use-query-params'
import MusicProvider from '../components/context/music'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const isBlogPage = useRouter().pathname.slice(0, 5) === '/blog'
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-H1JHVMWXDZ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H1JHVMWXDZ', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <DefaultSeo
          {...DEFAULT_SEO}
          titleTemplate={
            isBlogPage ? '%s | gregsuzuki.bio' : 'gregsuzuki.bio | %s'
          }
        />
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <QueryParamProvider adapter={NextAdapterApp}>
            <MusicProvider>
              <Component {...pageProps} />
            </MusicProvider>
          </QueryParamProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
