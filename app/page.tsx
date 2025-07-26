"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (mobileMenuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-button")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto flex items-center justify-between py-6 px-4">
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
        <Button variant="default" className="hidden md:inline-flex rounded-md" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden menu-button p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile menu */}
        <div
          className={`mobile-menu fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`bg-white h-full w-64 max-w-[80%] shadow-xl p-6 transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
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
              <button
                className="p-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="py-2 text-gray-900 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/strategy"
                className="py-2 text-gray-900 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Strategy
              </Link>
              <Link
                href="/team"
                className="py-2 text-gray-900 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="py-2 text-gray-900 hover:text-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-amber-500 text-black px-4 py-2 text-sm font-medium shadow hover:bg-amber-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-black text-white py-24 md:py-32">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Invest in the Future
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Real estate that powers AI — we turn strategic land into energy-ready grid sites.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-amber-500 hover:bg-amber-600 text-black rounded-md flex items-center gap-2"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded-lg w-full max-w-md aspect-square flex items-center justify-center p-8">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Arrow */}
                  <path d="M200 80 L200 320" stroke="#666" strokeWidth="4" strokeDasharray="8,4" />
                  <polygon points="190,310 200,330 210,310" fill="#666" />

                  {/* Small building (before) */}
                  <g transform="translate(120, 40)">
                    <rect x="0" y="0" width="60" height="60" fill="#aaa" />
                    <rect x="10" y="20" width="15" height="20" fill="#666" />
                    <rect x="35" y="20" width="15" height="20" fill="#666" />
                    <polygon points="0,0 60,0 30,-20" fill="#888" />
                    <text x="30" y="90" textAnchor="middle" fill="#666" fontSize="14">
                      Before
                    </text>
                  </g>

                  {/* Large building (after) */}
                  <g transform="translate(80, 240)">
                    <rect x="0" y="0" width="100" height="120" fill="#4a86e8" />
                    <rect x="15" y="20" width="20" height="25" fill="#fff" />
                    <rect x="65" y="20" width="20" height="25" fill="#fff" />
                    <rect x="15" y="60" width="20" height="25" fill="#fff" />
                    <rect x="65" y="60" width="20" height="25" fill="#fff" />
                    <rect x="40" y="80" width="20" height="40" fill="#333" />
                    <polygon points="0,0 100,0 50,-30" fill="#3a76d8" />
                    <text x="50" y="140" textAnchor="middle" fill="#333" fontSize="14">
                      After UpZoning
                    </text>
                  </g>

                  {/* Dollar signs to indicate increased value */}
                  <text x="240" y="280" fill="#2d9d5a" fontSize="24" fontWeight="bold">
                    $$$
                  </text>
                  <text x="220" y="100" fill="#777" fontSize="16">
                    $
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
