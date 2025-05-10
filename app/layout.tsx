import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import "./globals.css";
import React from 'react'
import { Metadata } from 'next/types'
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'FladFlue | Din guide til festival og soundboks',
    template: '%s | FladFlue'
  },
  description: 'FladFlue er din komplette ressource for festivaloplevelser og soundboks setup. Find inspiration og praktiske råd til din næste festivaloplevelse med den perfekte lyd.',
  keywords: ['festival', 'soundboks', 'musik', 'Roskilde', 'Smukfest', 'Danmark', 'festivalguide', 'festivaltips', 'lyd'],
  authors: [{ name: 'FladFlue Team' }],
  creator: 'FladFlue',
  publisher: 'FladFlue',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  viewport: 'width=device-width, initial-scale=1',
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
    <html lang="da">
      <body>
        {/* Navigation */}
        <header className="fixed w-full z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                  FLADFLUE
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link 
                  href="/blog" 
                  className="hover:text-orange-500 transition-colors text-sm uppercase tracking-wide text-white"
                >
                  Blog
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

