import { Metadata } from 'next'
import { FestivalsGuiden } from '@/components/festivalsguiden'

export const metadata: Metadata = {
  title: 'Festivalsguiden 2025 | Din ultimative guide til festivaler',
  description: 'Find den perfekte pakkeliste og få eksperttips til de bedste musikfestivaler i Danmark. Gør dig klar til en uforglemmelig festivaloplevelse i 2025!',
}

export default function HomePage() {
  return (
    <>
      <FestivalsGuiden />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Festivalsguiden 2025",
            "url": "https://www.festivalsguiden.dk",
            "description": "Din ultimative guide til festivalpakkelister og tips for de bedste musikfestivaler i Danmark",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.festivalsguiden.dk/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  )
}
