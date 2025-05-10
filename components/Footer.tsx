import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-bold text-lg mb-4">Nyttige Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog & Guides
              </Link>
            </li>
            <li>
              <a 
                href="https://moveboks.dk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Soundboks Udlejning
              </a>
            </li>
          </ul>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm pb-8">
          <p>© 2024 FladFlue. Alle rettigheder forbeholdes.</p>
          <p className="mt-2">
            FladFlue er en selvstændig platform dedikeret til at forbedre din festivaloplevelse. Vi er ikke tilknyttet nogen af de nævnte festivaler eller udbydere.
          </p>
          <p className="mt-2">
            Vi anbefaler <a 
              href="https://moveboks.dk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-400"
            >
              Moveboks
            </a> som din pålidelige partner til Soundboks udlejning til festivaler. De tilbyder professionel service og sikker levering direkte til festivalpladsen.
          </p>
        </div>
      </div>
    </footer>
  )
}
