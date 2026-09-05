import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, El_Messiri } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const elMessiri = El_Messiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-el-messiri',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ziyara — Premium Journeys from the USA to Saudi Arabia',
  description:
    'Ziyara crafts bespoke Umrah, holy site, and luxury leisure journeys from the United States to Saudi Arabia. Fully guided, visa to return, with white-glove care.',
  generator: 'v0.app',
  keywords: [
    'Ziyara',
    'Umrah packages USA',
    'Saudi Arabia luxury travel',
    'Makkah',
    'Madinah',
    'AlUla',
    'Hajj travel agency',
  ],
  openGraph: {
    title: 'Ziyara — Premium Journeys to Saudi Arabia',
    description:
      'Bespoke Umrah and luxury travel from the USA to Saudi Arabia. White-glove, fully guided journeys.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f3d33',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`bg-background ${inter.variable} ${cormorant.variable} ${elMessiri.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
