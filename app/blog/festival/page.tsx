import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FestivalBlogPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold mb-12">Festival Guides</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Roskilde Card */}
          <Link 
            href="/roskilde-festival-guide" 
            className="group relative aspect-[16/9] overflow-hidden"
          >
            <img 
              src="/placeholder.svg?height=720&width=1280" 
              alt="Roskilde Festival" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-bold mb-2">Roskilde Festival</h2>
              <p className="text-gray-300 mb-4">Den komplette guide til Nordeuropas største festival</p>
              <div className="flex items-center text-orange-500 group-hover:text-orange-400">
                <span>Læs mere</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Smukfest Card */}
          <Link 
            href="/smukfest-guide" 
            className="group relative aspect-[16/9] overflow-hidden"
          >
            <img 
              src="/placeholder.svg?height=720&width=1280" 
              alt="Smukfest" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-3xl font-bold mb-2">Smukfest</h2>
              <p className="text-gray-300 mb-4">Alt du skal vide om Danmarks smukkeste festival</p>
              <div className="flex items-center text-orange-500 group-hover:text-orange-400">
                <span>Læs mere</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

