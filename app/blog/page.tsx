import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import roskilde from '@/assets/roskilde.jpeg'
import smukfest from '@/assets/smukfest.jpg'

interface BlogPost {
  title: string
  description: string
  image: any
  date: string
  readTime: string
  slug: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Roskilde Festival Pakkeliste 2025",
    description: "Alt hvad du skal huske at pakke til Nordens største festival. Fra telt til tandbørste - vi har dig dækket!",
    image: roskilde,
    date: "December 15, 2024",
    readTime: "5 min",
    slug: "festival/roskilde-festival-guide",
    category: "Festival Guide"
  },
  {
    title: "Smukfest Guide 2025",
    description: "Din komplette guide til Danmarks Smukkeste Festival. Få styr på alt det praktiske før du tager i bøgeskoven.",
    image: smukfest,
    date: "December 10, 2024",
    readTime: "4 min",
    slug: "festival/smukfest-guide",
    category: "Festival Guide"
  },
  {
    title: "Roskilde Festival og Leje af Soundboks",
    description: "Læs om, hvordan du lejer en soundboks til Roskilde Festival 2025, og få tips til den bedste festivaloplevelse.",
    image: roskilde,
    date: "December 20, 2024",
    readTime: "3 min",
    slug: "festival/roskilde-festival-soundboks",
    category: "Festival Guide"
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a3a]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden h-full w-full">
          <Image
            src={roskilde}
            alt="Roskilde Festival"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-transparent" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold text-white mb-6">Festival Blog</h1>
          <p className="text-xl text-gray-300">
            Guides, tips og tricks til den perfekte festivaloplevelse
          </p>
        </div>
      </div>


      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={450}
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center text-orange-500 group-hover:text-orange-400">
                  <span>Læs mere</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <article className="border-b pb-4">
        <h2 className="text-xl font-semibold">
          <Link href="/blog/festival/roskilde-festival-soundboks" className="hover:text-orange-500">
            Roskilde Festival og Leje af Soundboks
          </Link>
        </h2>
        <p className="text-gray-600 mt-2">
          Læs om, hvordan du lejer en soundboks til Roskilde Festival 2025, og få tips til den bedste festivaloplevelse.
        </p>
      </article>
    </div>
  )
}

