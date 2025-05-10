import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-bold text-lg mb-4">Hurtige Links</h3>
          <ul className="text-gray-400">
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm pb-8">
          <p>© 2025 Festival Guide. Alle rettigheder forbeholdes.</p>
          <p className="mt-2">
            Dette er en uafhængig guide og anbefalingstjeneste. Vi er ikke associeret med Smukfest, Roskilde Festival eller Moveboks.
          </p>
        </div>
      </div>
    </footer>
  )
}
