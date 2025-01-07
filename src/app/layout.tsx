import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from './config/seo'
import { Providers } from './components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://viralsweep.com'),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'viral marketing',
    'sweepstakes',
    'contests',
    'giveaways',
    'social media growth',
    'email list building',
    'marketing automation',
    'user engagement',
    'brand awareness',
    'lead generation',
  ],
  authors: [
    {
      name: 'ViralSweep',
      url: 'https://viralsweep.com',
    },
  ],
  creator: 'ViralSweep',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viralsweep.com',
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@viralsweep',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
