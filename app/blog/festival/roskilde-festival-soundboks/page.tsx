import { MapPin, Calendar, Clock, Users, Timer, User, Music, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import roskilde from '@/assets/roskilde.jpeg'
import { AppFeature } from '@/components/AppFeature'

export const metadata = {
  title: 'Soundboks til Roskilde Festival 2024 | FladFlue',
  description: 'Få den ultimative lydoplevelse på Roskilde Festival med en Soundboks. Vi guider dig gennem processen med at leje og opsætte din Soundboks for den perfekte festivalstemning.',
};

export default function RoskildeSoundboksPage() {
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
            <h1 className="text-6xl font-bold mb-4">Soundboks til Roskilde Festival 2024</h1>
            <p className="text-2xl text-gray-300">Skab den perfekte festivalstemning med professionel lyd</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Festival Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: "Lokation", value: "Roskilde" },
            { icon: <Calendar className="w-6 h-6" />, label: "Dato", value: "29. juni - 6. juli 2024" },
            { icon: <Clock className="w-6 h-6" />, label: "Varighed", value: "8 dage" },
            { icon: <Users className="w-6 h-6" />, label: "Deltagere", value: "130.000+" }
          ].map((item) => (
            <div key={item.label} className="bg-white/5 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-orange-500">{item.icon}</div>
                <h3 className="text-gray-400 uppercase text-sm">{item.label}</h3>
              </div>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* App Feature */}
        <AppFeature />

        {/* Main Content */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Optimer Din Festivaloplevelse med Soundboks</h2>
            <p className="text-lg text-gray-300 mb-8">
              En Soundboks er nøglen til at skabe den perfekte stemning på din festivalcamping. Med Moveboks' professionelle udlejningsservice får du ikke kun en højttaler - du får en komplet lydoplevelse der gør din festival uforglemmelig.
            </p>
          </div>

          {/* Why Soundboks Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hvorfor en Soundboks er et must på Roskilde?</h2>
            <p className="text-lg text-gray-300">
              Roskilde Festival er kendt for sin unikke stemning og fantastiske musikoplevelser. Men festivalen handler ikke kun om musikken på scenerne - det handler også om at skabe den perfekte atmosfære i dit teltområde. En Soundboks er den ultimative løsning til at forbedre din festivaloplevelse:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>Vandtæt design der tåler alt vejr</li>
              <li>Kraftfuld lyd der skaber stemning i hele campingområdet</li>
              <li>Lang batterilevetid der holder hele festivalen</li>
              <li>Nem at transportere med ergonomisk håndtag</li>
              <li>Trådløs forbindelse til alle enheder</li>
            </ul>
          </div>

          {/* Package Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Moveboks' Festivalpakker</h2>
            <p className="text-lg text-gray-300">
              Moveboks tilbyder tre forskellige pakker til Roskilde Festival 2024. Alle pakker inkluderer en Soundboks, et batteri og gratis levering direkte til festivalen. Vælg den pakke der passer bedst til dine behov og sikkerhedskrav.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basis",
                price: "3.099",
                features: ["1x Soundboks", "1x Batteri", "Gratis levering"]
              },
              {
                title: "Plus",
                price: "3.799",
                features: ["1x Soundboks", "1x Batteri", "Gratis levering", "Skadeforsikring"]
              },
              {
                title: "Premium",
                price: "3.999",
                features: ["1x Soundboks", "1x Batteri", "Gratis levering", "Skadeforsikring", "Tyveriforsikring"]
              }
            ].map((pkg) => (
              <div key={pkg.title} className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <p className="text-3xl font-bold text-orange-500 mb-6">DKK {pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-orange-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Festival Tips */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Tips til Den Bedste Lydoplevelse</h2>
            <p className="text-lg text-gray-300">
              For at få den bedste oplevelse med din Soundboks på Roskilde Festival, har vi samlet nogle ekspertips:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-400">Før Festivalen</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Book din Soundboks i god tid for at sikre levering</li>
                  <li>• Download din musik offline, så du ikke er afhængig af internet</li>
                  <li>• Lav en festival-playlist med dine yndlingssange</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-400">Under Festivalen</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Lad batteriet om natten</li>
                  <li>• Hold højttaleren tør og beskyttet mod regn</li>
                  <li>• Del musikoplevelsen med dine venner og nye bekendtskaber</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Moveboks */}
          <div className="bg-orange-500/10 p-8 mt-12">
            <h3 className="text-2xl font-bold mb-6">Hvorfor Vælge Moveboks?</h3>
            
            {/* Location Highlight */}
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-6 rounded-lg mb-8">
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-orange-500" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Super Tæt På Festivalen! 🎵</h4>
                  <p className="text-gray-300">
                    Moveboks er den eneste udbyder der ligger direkte ved festivalspladsen. Det betyder hurtig afhentning, nem aflevering og minimal transporttid - så du kan komme i gang med at nyde musikken med det samme!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Gratis levering direkte til festivalen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Fleksible lejeforhold og nem afhentning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Fuld forsikring på alle pakker</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Professionel support under hele festivalen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Vandtætte og holdbare Soundboks højttalere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    <span>Gode anmeldelser på Trustpilot</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold">Book Din Soundboks Nu</h2>
            <p className="text-gray-400 max-w-2xl mx-auto pb-2">
              Sørg for at booke i god tid for at sikre levering af din Soundboks til Roskilde Festival 2024.
            </p>
            <a href='https://moveboks.dk/lej-soundboks-til-roskilde-festival' className="inline-block">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-lg">
                Book Nu
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 