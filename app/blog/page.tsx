import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'
import roskilde from '@/assets/roskilde.jpeg'

export default function BlogPage() {
  const posts = [
    {
      title: "Roskilde Festival Guide 2024",
      description: "Din komplette guide til Roskilde Festival - fra camping til musikoplevelser",
      image: roskilde,
      date: "15. marts 2024",
      readTime: "8 min",
      author: "FladFlue Team",
      slug: "/blog/festival/roskilde-festival-guide"
    },
    {
      title: "Soundboks til Roskilde Festival",
      description: "Sådan får du den bedste lydoplevelse på din festivalcamping",
      image: roskilde,
      date: "10. marts 2024",
      readTime: "5 min",
      author: "FladFlue Team",
      slug: "/blog/festival/roskilde-festival-soundboks"
    },
    {
      title: "Smukfest Guide 2024",
      description: "Alt hvad du skal vide om Danmarks smukkeste festival",
      image: roskilde,
      date: "5. marts 2024",
      readTime: "6 min",
      author: "FladFlue Team",
      slug: "/blog/festival/smukfest-guide"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Festival & Soundboks Guides</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Udforsk vores guides til de bedste festivaler i Danmark og få tips til den perfekte lydoplevelse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={post.slug}
              className="group"
            >
              <article className="bg-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/10">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} læsetid</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

