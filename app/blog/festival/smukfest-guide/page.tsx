'use client'

import { useState } from 'react'
import { CheckCircle2, MapPin, Calendar, Clock, Users, Trees } from 'lucide-react'
import Image from 'next/image'
import roskilde from '@/assets/roskilde.jpeg'
import { AppFeature } from '@/components/AppFeature'

interface PackingItem {
  id: string;
  name: string;
  checked: boolean;
}

interface PackingCategory {
  title: string;
  items: PackingItem[];
}

export default function SmukfestGuide() {
  const initialPackingList: PackingCategory[] = [
    {
      title: "Camping Essentials",
      items: [
        { id: "tent", name: "Telt (vandtæt!)", checked: false },
        { id: "sleepingBag", name: "Sovepose til sommertemperatur", checked: false },
        { id: "airMattress", name: "Luftmadras eller liggeunderlag", checked: false },
        { id: "campingChair", name: "Campingstol", checked: false },
        { id: "tarp", name: "Presenning", checked: false },
        { id: "headlamp", name: "Lommelygte/pandelampe", checked: false },
        { id: "rope", name: "Reb og tape", checked: false },
        { id: "powerbank", name: "Powerbank og opladere", checked: false }
      ]
    },
    {
      title: "Personlig Pleje",
      items: [
        { id: "bracelet", name: "Festival armbånd", checked: false },
        { id: "money", name: "Penge og betalingskort", checked: false },
        { id: "sunscreen", name: "Solcreme", checked: false },
        { id: "rainGear", name: "Regntøj og gummistøvler", checked: false },
        { id: "handSanitizer", name: "Håndsprit", checked: false },
        { id: "toiletries", name: "Toiletartikler", checked: false }
      ]
    },
    {
      title: "Festival Necessities",
      items: [
        { id: "id", name: "Festivalkort og ID", checked: false },
        { id: "backpack", name: "Lille rygsæk til dagbrug", checked: false },
        { id: "waterBottle", name: "Vandflaske", checked: false },
        { id: "sunglasses", name: "Solbriller og hat", checked: false },
        { id: "cash", name: "Kontanter til boder", checked: false }
      ]
    }
  ];

  const [packingList, setPackingList] = useState<PackingCategory[]>(initialPackingList);

  const handleCheckboxChange = (categoryIndex: number, itemIndex: number) => {
    const updatedList = [...packingList];
    updatedList[categoryIndex].items[itemIndex].checked = !updatedList[categoryIndex].items[itemIndex].checked;
    setPackingList(updatedList);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <div className="relative h-[70vh]">
        <Image
          src={roskilde}
          alt="Smukfest Guide"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Smukfest Guide 2024
            </h1>
            <p className="text-2xl text-gray-300">Din komplette guide til Danmarks smukkeste festival i bøgeskoven</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Festival Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: "Lokation", value: "Skanderborg" },
            { icon: <Calendar className="w-6 h-6" />, label: "Dato", value: "3. august - 10. august 2024" },
            { icon: <Clock className="w-6 h-6" />, label: "Varighed", value: "7 dage" },
            { icon: <Users className="w-6 h-6" />, label: "Deltagere", value: "60.000+" }
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

        {/* App Feature */}
        <AppFeature />

        {/* Pakkeliste */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
            Din Komplette Smukfest Pakkeliste
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packingList.map((category, categoryIndex) => (
              <div key={category.title} className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-orange-400">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={item.id} className="flex items-start gap-2 group">
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(categoryIndex, itemIndex)}
                        className="mt-1 bg-white/10 border-white/20 text-orange-500 focus:ring-orange-500 group-hover:border-orange-500/50 rounded"
                      />
                      <label
                        htmlFor={item.id}
                        className={`cursor-pointer group-hover:text-orange-300 transition-colors ${
                          item.checked ? 'line-through text-gray-500' : 'text-white'
                        }`}
                      >
                        {item.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pro Tips */}
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-8 rounded-xl backdrop-blur-sm border border-orange-500/20 mt-12">
            <h3 className="text-2xl font-bold mb-6 text-orange-300">Smukfest Eksperttips</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 group">
                <Trees className="w-5 h-5 text-orange-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-orange-300 transition-colors">Bøgeskoven er kendt for sin fugtighed - sørg for ekstra vandtæt udstyr</span>
              </li>
              <li className="flex items-start gap-2 group">
                <Trees className="w-5 h-5 text-orange-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-orange-300 transition-colors">Find det perfekte telt-spot mellem træerne - undgå skråninger og vandpytter</span>
              </li>
              <li className="flex items-start gap-2 group">
                <Trees className="w-5 h-5 text-orange-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-orange-300 transition-colors">Morgendug i skoven er intens - pak alt tøj og udstyr i vandtætte poser</span>
              </li>
              <li className="flex items-start gap-2 group">
                <Trees className="w-5 h-5 text-orange-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-orange-300 transition-colors">Skovegnene er aktive - medbring effektiv myggespray og beskyttelse</span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
              Lydoplevelsen på Smukfest
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto pb-2">
              Forbedr din festivaloplevelse med en professionel Soundboks fra Moveboks
            </p>
            <a href='https://moveboks.dk/' className="inline-block">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20">
                Læs mere
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
