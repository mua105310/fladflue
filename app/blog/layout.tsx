import Footer from "@/components/Footer"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#1a1a3a]">
    {children}
    </div>
}

