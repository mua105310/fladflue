import { Metadata } from 'next'
import { FladFlue } from '@/components/fladflue'

export const metadata: Metadata = {
  title: 'FladFlue | Din guide til festival og soundbox',
  description: 'Find den perfekte guide til festivaler og soundbox oplevelser. Få eksperttips til de bedste festivaler og lydoplevelser i Danmark!',
}

export default function HomePage() {
  return (
    <>
      <FladFlue />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FladFlue",
            "url": "https://www.fladflue.dk",
            "description": "Din guide til festivaler og soundbox oplevelser i Danmark",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.fladflue.dk/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  )
}
