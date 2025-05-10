'use client'

import Link from 'next/link'
import { CheckCircle2, ListChecks, Music, Tent, Package, Utensils, AmbulanceIcon as FirstAid, Sun } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from 'next/image'
import roskilde from '@/assets/roskilde.jpeg'
import { AppFeature } from './AppFeature'

export function FladFlue() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <main>
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src={roskilde}
              alt="Festival Scene"
              layout="fill"
              objectFit="cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1))',
                zIndex: 5,
              }}
            />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10">
            <div className="space-y-8">
              <h1 className="text-7xl font-bold leading-none tracking-tight max-w-4xl">
                <span className="text-orange-500">Din Guide Til</span>
                <span className="block mt-4">Festival & Soundbox</span>
              </h1>
              <a href='/blog'>
                <button className="bg-orange-500 hover:bg-orange-600 text-white mt-2 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105">
                  SE GUIDEN
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="space-y-16">
              {/* About Section */}
              <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
                <h2 className="text-2xl font-bold text-orange-500 uppercase tracking-wide mb-4">Hvad er FladFlue?</h2>
                <div className="hidden md:block text-gray-300 text-sm mt-10">
                  <p>
                    FladFlue er din guide til de bedste festivaloplevelser og soundbox setup. Vi hjælper dig med at skabe den perfekte festivalstemning, 
                    uanset om du er på Roskilde Festival, Smukfest, Northside eller en anden festival. Vores ekspertise dækker både festivalpakkelister 
                    og optimale soundbox opsætninger, så du kan nyde den bedste lydoplevelse. Fra campingudstyr og personlig pleje til professionelle 
                    lydsystemer og festival must-haves - vi har dig dækket. Gør din festival til en uforglemmelig oplevelse med FladFlue!
                  </p>
                </div>
              </div>

              {/* Category Buttons */}
              <div className="flex flex-wrap gap-4">
                {['Festival Guide', 'Soundbox Setup', 'Mad & Drikke', 'Personlig pleje'].map((category, index) => (
                  <button 
                    key={category}
                    className={cn(
                      "px-6 py-3 rounded-none transition-all duration-300 text-sm uppercase tracking-wide",
                      "hover:scale-105",
                      index === 0 ? "bg-orange-500 text-white hover:bg-orange-600" : 
                      "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Checklist Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Tent className="w-8 h-8" />,
                    title: "Festival Setup",
                    items: ["Telt med pløkker og barduner", "Sovepose og liggeunderlag", "Campingstol og bord"]
                  },
                  {
                    icon: <Music className="w-8 h-8" />,
                    title: "Soundbox Guide",
                    items: ["SOUNDBOKS højttaler", "Powerbank og opladere", "Festival armbånd"]
                  },
                  {
                    icon: <Utensils className="w-8 h-8" />,
                    title: "Mad & Drikke",
                    items: ["Vandflasker", "Snacks og energibarer", "Køletaske"]
                  },
                  {
                    icon: <FirstAid className="w-8 h-8" />,
                    title: "Personlig Pleje",
                    items: ["Solcreme", "Håndsprit", "Vådservietter"]
                  }
                ].map((category) => (
                  <div 
                    key={category.title}
                    className={cn(
                      "space-y-6 p-6 transition-all duration-300",
                      "hover:scale-105",
                      "bg-white/5 hover:bg-white/10"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-none bg-orange-500/10 text-orange-500">
                        {category.icon}
                      </div>
                      <h2 className="text-xl font-semibold uppercase tracking-wide">{category.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 group">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <AppFeature />

              {/* Interactive Guide Button */}
              <div className="flex justify-center">
                <a href='/blog'>
                <button 
                  className={cn(
                    "flex items-center gap-3 transition-all duration-300",
                    "bg-orange-500 hover:bg-orange-600 text-white",
                    "px-8 py-4 text-lg font-medium uppercase tracking-wide",
                    "hover:scale-105"
                  )}
                >
                  <ListChecks className="w-6 h-6" />
                  <span>Åbn interaktiv guide</span>
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 