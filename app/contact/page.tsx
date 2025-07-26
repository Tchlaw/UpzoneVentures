"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft, Menu, X } from "lucide-react"

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scriptLoaded = useRef(false)
  const formInitialized = useRef(false)

  // Function to initialize the HubSpot form
  const initializeForm = () => {
    if (formInitialized.current) return

    // Check if the HubSpot object exists
    if (typeof window !== "undefined" && window.hbspt) {
      try {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "242206420",
          formId: "eaf79fdf-5a70-4424-b9e7-502300c3c1e7",
          target: "#hubspot-form-container",
        })
        formInitialized.current = true
        console.log("HubSpot form initialized")
      } catch (error) {
        console.error("Error initializing HubSpot form:", error)
      }
    }
  }

  // Initialize form when component mounts or when script loads
  useEffect(() => {
    // If the script has already loaded (e.g., from a previous visit)
    if (typeof window !== "undefined" && window.hbspt) {
      scriptLoaded.current = true
      initializeForm()
    }

    // Fallback: If the script doesn't load via the Script component
    const timer = setTimeout(() => {
      if (!scriptLoaded.current && typeof window !== "undefined") {
        const script = document.createElement("script")
        script.src = "https://js-na2.hsforms.net/forms/embed/242206420.js"
        script.async = true
        script.onload = () => {
          scriptLoaded.current = true
          initializeForm()
        }
        document.body.appendChild(script)
      }
    }, 2000) // Wait 2 seconds before trying the fallback

    return () => clearTimeout(timer)
  }, [])

  // Handle script load event from Next.js Script component
  const handleScriptLoad = () => {
    scriptLoaded.current = true
    initializeForm()
  }

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
        <section className="bg-white text-gray-900 py-24 md:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Contact Us</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6 text-gray-700">
                  Interested in learning more about our investment opportunities? Fill out the form and our team will
                  get back to you shortly.
                </p>

                {/* HubSpot Form Container - No loading indicator */}
                <div id="hubspot-form-container" className="min-h-[400px]"></div>

                {/* Custom styling for HubSpot form */}
                <style jsx global>{`
                  /* Custom styles for HubSpot form to match your site's design */
                  .hs-form .hs-form-field label {
                    color: #333 !important;
                    font-size: 0.875rem !important;
                    margin-bottom: 0.25rem !important;
                  }
                  
                  .hs-form .hs-input {
                    background-color: white !important;
                    border: 1px solid #d1d5db !important;
                    color: #333 !important;
                    padding: 0.5rem !important;
                    border-radius: 0.375rem !important;
                    width: 100% !important;
                  }
                  
                  .hs-form .hs-button {
                    background-color: rgb(245, 158, 11) !important;
                    color: black !important;
                    border: none !important;
                    padding: 0.5rem 1rem !important;
                    border-radius: 0.375rem !important;
                    font-weight: 500 !important;
                    cursor: pointer !important;
                    width: 100% !important;
                    margin-top: 1rem !important;
                  }
                  
                  .hs-form .hs-button:hover {
                    background-color: rgb(217, 119, 6) !important;
                  }
                  
                  .hs-form .hs-error-msg {
                    color: #ef4444 !important;
                    font-size: 0.75rem !important;
                  }
                `}</style>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h2>
                <div className="space-y-6">
                  <p className="flex flex-col">
                    <strong className="text-amber-600 mb-1">Email</strong>
                    <a
                      href="mailto:contact@upzoneventures.com"
                      className="text-gray-700 hover:text-amber-600 transition-colors"
                    >
                      contact@upzoneventures.com
                    </a>
                  </p>
                  <p className="flex flex-col">
                    <strong className="text-amber-600 mb-1">Phone</strong>
                    <a href="tel:+13109804902" className="text-gray-700 hover:text-amber-600 transition-colors">
                      (310) 980-4902
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Link href="/" className="text-amber-600 hover:text-amber-700 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* HubSpot Script */}
      <Script src="https://js-na2.hsforms.net/forms/v2.js" strategy="afterInteractive" onLoad={handleScriptLoad} />
    </div>
  )
}
