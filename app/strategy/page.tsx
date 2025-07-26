import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function StrategyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-12">Turning Strategic Land Into the Backbone of Tomorrow’s Grid</h1>
            <div className="space-y-8 text-lg">
              <p className="opacity-90">
                The future runs on electricity. AI, autonomous vehicles, robots, and smart homes are driving massive new demand for reliable, clean power. California alone needs tens of gigawatts of new energy and storage in the next decade — but the grid can only grow as fast as the land it sits on.
                
                Upzone Ventures solves this bottleneck. We acquire, entitle, and prepare strategic parcels near substations and transmission corridors, transforming them into energy-ready sites for battery storage, renewable generation, and grid-support infrastructure.
              </p>

              <p className="opacity-90">Our Three-Part Playbook:</p>

              <div className="space-y-8 mt-8">
                <div>
                  <h2 className="text-2xl font-bold text-amber-400 mb-3">1. Target the Right Locations</h2>
                  <p className="opacity-90">
                    We focus on substation-adjacent and transmission-accessible land in high-demand corridors (Imperial Valley, Riverside East, Kern/Tehachapi). Our proprietary siting scorecard evaluates grid hosting capacity, zoning, fire-safety compliance, and interconnection feasibility before we buy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-amber-400 mb-3">2. Create “Papered” Value</h2>
                  <p className="opacity-90">
                    Our expertise in real estate, law, and permitting allows us to move quickly through:
                    
    <li><strong>Zoning &amp; conditional use approvals</strong></li>
    <li><strong>CEQA compliance &amp; environmental studies</strong></li>
    <li><strong>Interconnection applications</strong></li>
    <li><strong>Fire and safety plans (NFPA 855-compliant)</strong></li>
  
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-amber-400 mb-3">3. Exit to Developers & Operators</h2>
                  <p className="opacity-90">Once entitled and “power-ready,” we sell or joint-venture with:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 opacity-90">
                    
    <li>Independent power producers (IPPs)</li>
    <li>Data-center operators</li>
    <li>Battery storage and renewable developers</li>
  </ul>
                </div>
              </div>

              <p className="opacity-90">
                
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
