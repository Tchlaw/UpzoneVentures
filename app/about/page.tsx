import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto flex items-center justify-between py-6">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          <span className="text-xl font-bold">UpZone Ventures</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="/strategy" className="text-sm font-medium hover:underline">
            Strategy
          </Link>
          <Link href="/team" className="text-sm font-medium hover:underline">
            Team
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium shadow hover:bg-black/90"
        >
          Contact Us
        </Link>
      </header>
      <main className="flex-1">
        <section className="bg-black text-white py-24 md:py-32">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-12">About UpZone Ventures</h1>
            <div className="space-y-8 text-lg opacity-90">
              <p>
                UpZone Ventures acquires and entitles strategic land near substations and transmission lines, creating energy-ready sites for battery storage and renewable projects. Because AI, EVs, and smart homes need a bigger grid — and the right land is the key.
              </p>
            </div>

            <div className="mt-12">
              <Link href="/" className="text-amber-500 hover:text-amber-400 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
