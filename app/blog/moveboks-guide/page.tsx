'use client'

import { useState } from 'react'
import { CheckCircle2, MapPin, Calendar, Clock, Users, Music, Star, Package } from 'lucide-react'
import Image from 'next/image'
import roskilde from '@/assets/roskilde.jpeg'
import { AppFeature } from '@/components/AppFeature'

export default function MoveboksGuide() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <div className="relative h-[70vh]">
        <Image
          src={roskilde}
          alt="Moveboks Guide"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Moveboks - Din Soundboks Partner
            </h1>
            <p className="text-2xl text-gray-300">Den officielle udlejningspartner til festivaler og events</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Company Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Star className="w-6 h-6" />, label: "Trustpilot", value: "4.5/5" },
            { icon: <Package className="w-6 h-6" />, label: "Udlejninger", value: "1000+" },
            { icon: <Music className="w-6 h-6" />, label: "Soundboks", value: "100+" },
            { icon: <Users className="w-6 h-6" />, label: "Kunder", value: "1000+" }
          ].map((item) => (
            <div key={item.label} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange-500 bg-orange-500/10 p-2 rounded-lg">{item.icon}</div>
                <h3 className="text-gray-400 uppercase text-sm font-medium">{item.label}</h3>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Hvem er Moveboks?
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Moveboks er Danmarks førende udlejningspartner af SOUNDBOKS højttalere, specialiseret i festivaler og events. 
                Med årelang erfaring og et stort netværk af tilfredse kunder, er vi blevet det foretrukne valg for festivalgæster 
                der ønsker den bedste lydoplevelse.
              </p>
              <p>
                Vi tilbyder professionel service, hurtig levering og samling, samt fuld support under hele din festival. 
                Vores SOUNDBOKS højttalere er altid i top stand og klar til at give dig den ultimative lydoplevelse.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Vores Fordele</h3>
              <ul className="space-y-4">
                {[
                  "Professionel service og support",
                  "Hurtig levering og samling",
                  "Top kvalitets SOUNDBOKS højttalere",
                  "Fleksible lejeperioder",
                  "Konkurrencedygtige priser",
                  "Forsikring inkluderet"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 group">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-orange-300 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Perfekt til Festivaler</h3>
              <ul className="space-y-4">
                {[
                  "Optimeret til festivalmiljø",
                  "Lang batterilevetid",
                  "Vandtæt og støvfast design",
                  "Kraftfuld lyd til enhver situation",
                  "Nem at transportere",
                  "Kompatibel med alle festivaler"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 group">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-orange-300 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Klar til at forbedre din festivaloplevelse?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto pb-2">
              Besøg Moveboks og book din SOUNDBOKS i dag
            </p>
            <a href='https://moveboks.dk/' className="inline-block">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
                Besøg Moveboks
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 