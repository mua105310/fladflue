'use client'

import { useState } from 'react'
import { CheckCircle2, MapPin, Calendar, Clock, Users, Timer, User, AppleIcon, SmartphoneIcon as AndroidIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
import roskilde from '@/assets/roskilde.jpeg'
import moveboksapp from '@/assets/moveboksapp.png'
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

export default function RoskildeFestivalGuide() {
  const initialPackingList: PackingCategory[] = [
    {
      title: "Camping Basis",
      items: [
        { id: "tent", name: "Telt (gerne med ekstra pløkker)", checked: false },
        { id: "sleepingBag", name: "Sovepose (varm nok til danske nætter)", checked: false },
        { id: "airMattress", name: "Luftmadras eller liggeunderlag", checked: false },
        { id: "campingChair", name: "Campingstol og evt. bord", checked: false },
        { id: "tarp", name: "Presenning (til under teltet)", checked: false },
        { id: "headlamp", name: "Pandelampe eller lommelygte", checked: false },
        { id: "ropeAndTape", name: "Reb og tape", checked: false },
        { id: "powerbank", name: "Powerbank", checked: false },
        { id: "sunShade", name: "Pavillon eller solsejl", checked: false },
        { id: "hammer", name: "Hammer til pløkker", checked: false }
      ]
    },
    {
      title: "Tøj & Accessories",
      items: [
        { id: "rainGear", name: "Regntøj og gummistøvler", checked: false },
        { id: "shorts", name: "Shorts og t-shirts", checked: false },
        { id: "warmClothes", name: "Varm trøje til aftenen", checked: false },
        { id: "swimwear", name: "Badetøj", checked: false },
        { id: "hat", name: "Solhat eller kasket", checked: false },
        { id: "sunglasses", name: "Solbriller", checked: false },
        { id: "comfyShoes", name: "Comfortable sko", checked: false },
        { id: "socks", name: "Sokker (tag ekstra med!)", checked: false },
        { id: "underwear", name: "Undertøj", checked: false },
        { id: "festivalBag", name: "Festivaltaske/rygsæk", checked: false }
      ]
    },
    {
      title: "Personlig Pleje",
      items: [
        { id: "sunscreen", name: "Solcreme (høj faktor)", checked: false },
        { id: "sanitizer", name: "Håndsprit og vådservietter", checked: false },
        { id: "toiletPaper", name: "Toiletpapir", checked: false },
        { id: "toothbrush", name: "Tandbørste og tandpasta", checked: false },
        { id: "deodorant", name: "Deodorant", checked: false },
        { id: "towels", name: "Håndklæder", checked: false },
        { id: "medication", name: "Medicin hvis nødvendigt", checked: false },
        { id: "bugSpray", name: "Myggespray", checked: false },
        { id: "shampoo", name: "Shampoo/sæbe", checked: false },
        { id: "hairbrush", name: "Hårbørste", checked: false }
      ]
    },
    {
      title: "Mad & Drikke",
      items: [
        { id: "waterBottles", name: "Vandflasker", checked: false },
        { id: "cooler", name: "Køletaske", checked: false },
        { id: "disposableGrill", name: "Engangsgrill hvis tilladt", checked: false },
        { id: "snacks", name: "Snacks og energibarer", checked: false },
        { id: "cutlery", name: "Bestik og tallerkener", checked: false },
        { id: "canOpener", name: "Dåseåbner", checked: false },
        { id: "coffeeGear", name: "Kaffeudstyr", checked: false },
        { id: "trashBags", name: "Poser til affald", checked: false },
        { id: "spices", name: "Krydderier", checked: false },
        { id: "cups", name: "Krus og glas", checked: false }
      ]
    },
    {
      title: "Elektronik",
      items: [
        { id: "phone", name: "Mobiltelefon + oplader", checked: false },
        { id: "powerbank", name: "Powerbank (gerne flere)", checked: false },
        { id: "extensionCord", name: "Forlængerledning", checked: false },
        { id: "headphones", name: "Høretelefoner", checked: false },
        { id: "bluetoothSpeaker", name: "Bluetooth højttaler", checked: false },
        { id: "camera", name: "Kamera", checked: false },
        { id: "adapters", name: "Adaptere hvis nødvendigt", checked: false },
        { id: "extraBatteries", name: "Ekstra batterier", checked: false },
        { id: "splitter", name: "Splitter til oplader", checked: false },
        { id: "usbCables", name: "USB-kabler", checked: false }
      ]
    },
    {
      title: "Festival Essentials",
      items: [
        { id: "soundboks", name: "SOUNDBOKS højttaler", checked: false },
        { id: "wristband", name: "Festival armbånd", checked: false },
        { id: "idAndMoney", name: "ID og penge", checked: false },
        { id: "insuranceCard", name: "Forsikringskort", checked: false },
        { id: "programAndMap", name: "Program og kort", checked: false },
        { id: "lighter", name: "Lighter", checked: false },
        { id: "earplugs", name: "Ørepropper", checked: false },
        { id: "firstAidKit", name: "Førstehjælpskit", checked: false },
        { id: "rainPoncho", name: "Regnponcho", checked: false },
        { id: "festivalWallet", name: "Festivalpung", checked: false }
      ]
    }
  ];

  const [packingList, setPackingList] = useState<PackingCategory[]>(initialPackingList);

  const handleCheckboxChange = (categoryIndex: number, itemIndex: number) => {
    const newPackingList = [...packingList];
    newPackingList[categoryIndex].items[itemIndex].checked = !newPackingList[categoryIndex].items[itemIndex].checked;
    setPackingList(newPackingList);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero */}
      <div className="relative h-[60vh]">
      <Image
            src={roskilde}
            alt="Roskilde Festival"
            layout="fill"
            objectFit="cover"
          />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-bold mb-4">Roskilde Festival Pakkeliste 2025</h1>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Festivalsguiden</span>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4" />
                <span>5 minutters læsetid</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Festival Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: "Lokation", value: "Roskilde" },
            { icon: <Calendar className="w-6 h-6" />, label: "Dato", value: "28. juni - 5. juli 2025" },
            { icon: <Clock className="w-6 h-6" />, label: "Varighed", value: "8 dage" },
            { icon: <Users className="w-6 h-6" />, label: "Deltagere", value: "130.000+" }
          ].map((item) => (
            <div key={item.label} className="bg-white/5 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange-500">{item.icon}</div>
                <h3 className="text-gray-400 uppercase text-sm">{item.label}</h3>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* App Download Section */}
            <AppFeature />

        {/* Pakkeliste */}
        <div className="space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-bold">Den Ultimative Pakkeliste</h2>
            {/* <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8"
            >
              Download PDF
            </Button> */}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packingList.map((category, categoryIndex) => (
              <div key={category.title} className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <Checkbox
                        id={item.id}
                        checked={item.checked}
                        onCheckedChange={() => handleCheckboxChange(categoryIndex, itemIndex)}
                        className="mt-1 bg-white"
                      />
                      <label
                        htmlFor={item.id}
                        className={`flex-grow ${item.checked ? 'line-through text-gray-500' : 'text-white'}`}
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
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 p-8 rounded-lg mt-12">
            <h3 className="text-2xl font-bold mb-6">Pro Tips til Roskilde</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-400">Før Festivalen</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Test dit telt før festivalen - tjek for huller og manglende dele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Pak i vandtætte poser inden i din taske/rygsæk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Lav en detaljeret plan med dine venner om mødested og tidspunkt</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-400">Under Festivalen</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Gem vigtige ting som penge og telefon i en sikker pung tæt på kroppen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Husk at drikke masser af vand, især på varme dage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Tag pauser i skyggen og pas på hinanden i gruppen</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold">En SOUNBOKS er vigtig</h2>
            <p className="text-gray-400 max-w-2xl mx-auto pb-2">
              Vi anbefaler at du lejer gennem Moveboks, som har gode andmeldelser på trustpilot.
            </p>
            <a href='https://moveboks.dk/'>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg"
            >
              Læs mere
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

