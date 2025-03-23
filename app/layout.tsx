import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { PostHogProvider } from '@/providers/post-hog-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.tdilly.com'),
  title: 'Tristen Dillon | Developer Portfolio',
  icons: {
    icon: '/logo.svg',
  },
  description:
    'Experienced developer specializing in modern web applications with React, Next.js, and TypeScript. View projects and get in touch for collaboration opportunities.',
  keywords: [
    'developer',
    'portfolio',
    'frontend',
    'web development',
    'fullstack',
    'react',
    'next.js',
    'typescript',
    'UI/UX',
    'software engineer',
  ],
  authors: [{ name: 'Tristen Dillon' }],
  creator: 'Tristen Dillon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.tdilly.com',
    title: 'Tristen Dillon | Developer Portfolio',
    description:
      'Experienced developer specializing in modern web applications with React, Next.js, and TypeScript. View projects and get in touch for collaboration opportunities.',
    siteName: 'Tristen Dillon Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tristen Dillon | Developer Portfolio',
    description:
      'Experienced developer specializing in modern web applications with React, Next.js, and TypeScript.',
    creator: '@tristendillon',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
