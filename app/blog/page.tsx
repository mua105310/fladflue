'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Timer, User } from 'lucide-react'
import roskilde from '@/assets/roskilde.jpeg'

const blogPosts = [
  {
    title: "Roskilde Festival Guide 2024",
    description: "Din komplette guide til Roskilde Festival - fra pakkeliste til camping tips",
    image: roskilde,
    date: "1. marts 2024",
    readTime: "8 min",
    author: "FladFlue Team",
    slug: "/blog/festival/roskilde-festival-guide"
  },
  {
    title: "Soundboks til Roskilde Festival",
    description: "Alt hvad du skal vide om at leje en Soundboks til Roskilde Festival",
    image: roskilde,
    date: "1. marts 2024",
    readTime: "5 min",
    author: "FladFlue Team",
    slug: "/blog/festival/roskilde-festival-soundboks"
  },
  {
    title: "Smukfest Guide 2024",
    description: "Din komplette guide til Danmarks smukkeste festival i bøgeskoven",
    image: roskilde,
    date: "1. marts 2024",
    readTime: "6 min",
    author: "FladFlue Team",
    slug: "/blog/festival/smukfest-guide"
  },
  {
    title: "Moveboks - Din Soundboks Partner",
    description: "Alt om Danmarks førende udlejningspartner af SOUNDBOKS højttalere",
    image: roskilde,
    date: "1. marts 2024",
    readTime: "5 min",
    author: "FladFlue Team",
    slug: "/blog/moveboks-guide"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Festival & Soundboks Guides
            </h1>
            <p className="text-gray-400">
              Udforsk vores guides til de bedste festivaler i Danmark og få tips til din soundboks oplevelse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={post.slug} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="brightness-75 group-hover:brightness-90 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4" />
                        <span>{post.readTime} læsetid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

