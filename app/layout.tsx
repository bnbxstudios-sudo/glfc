import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: 'Gale Lotheringen Freight Consultants | GLFC',
    template: '%s | GLFC',
  },
  description: 'GLFC provides personalised import and export logistics support, helping companies navigate international trade efficiently across Africa and the world. Expert freight consulting for customs compliance, supply chain management, and Africa trade.',
  generator: 'v0.app',
  keywords: [
    'freight consulting',
    'import export logistics',
    'Africa trade',
    'customs compliance',
    'supply chain management',
    'international trade',
    'freight forwarding',
    'logistics consulting',
    'South Africa logistics',
    'GLFC',
  ],
  authors: [{ name: 'Gale Lotheringen Freight Consultants' }],
  creator: 'GLFC',
  publisher: 'Gale Lotheringen Freight Consultants',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://glfc.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://glfc.co.za',
    siteName: 'Gale Lotheringen Freight Consultants',
    title: 'GLFC | Expert Freight & Logistics Consulting',
    description: 'Personalised import and export logistics support. Navigate international trade efficiently across Africa and the world with GLFC.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GLFC - Gale Lotheringen Freight Consultants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GLFC | Expert Freight & Logistics Consulting',
    description: 'Personalised import and export logistics support across Africa and the world.',
    images: ['/og-image.png'],
  },
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
