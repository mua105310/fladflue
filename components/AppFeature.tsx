import { Button } from "@/components/ui/button"
import { Apple, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'
import moveboksapp from '@/assets/moveboksapp.png'

export function AppFeature() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 mb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 mb-4">
            <Apple className="w-4 h-4 mr-2" />
            Eksklusiv App
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mangler din camp lyd?
          </h2>
          <p className="text-gray-400 mb-6">
              Download Moveboks appen, her kan du leje en SOUNDBOKS og få den leveret direkte til festivalen. De tilbyder også tyveriforsikring. og så har de fået <span className="text-green-500 font-bold">4.5/5 stjerner</span> på <span className="text-green-500 font-bold">Trustpilot</span> .
          </p>
          {/* Trustpilot Rating */}
          <div className="mb-6">
            <div className="flex space-x-1">
              <Star className="w-5 h-5 fill-green-500 text-green-500" />
              <Star className="w-5 h-5 fill-green-500 text-green-500" />
              <Star className="w-5 h-5 fill-green-500 text-green-500" />
              <Star className="w-5 h-5 fill-green-500 text-green-500" />
              <div className="relative w-5 h-5">
                {/* Full star as the base */}
                <Star className="absolute w-5 h-5 text-green-500" />
                {/* Half-filled overlay */}
                <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
                  <Star className="w-5 h-5 fill-green-500 text-green-500" />
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Trustpilot vurdering: <span className="text-green-500 font-bold">4.5/5</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Se flere anmeldelser på <a href="https://dk.trustpilot.com/review/moveboks.dk" target="_blank" rel="noopener noreferrer" className="text-green-500 underline">Trustpilot</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              asChild
            >
              <a 
                href="https://apps.apple.com/dk/app/moveboks/id6478084822" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Apple className="w-5 h-5 mr-2" />
                Download App
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="https://moveboks.dk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-blue-500 border-0"
              >
                Læs mere
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={moveboksapp}
            alt="Moveboks App Screenshot"
            width={300}
            height={600}
            className="rounded-2xl shadow-2xl mx-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
