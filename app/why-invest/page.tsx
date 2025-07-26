import Link from "next/link"

export default function WhyInvestPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Why Invest With Us</h1>
      <p className="text-lg mb-4">
        This is a placeholder for the Why Invest page content. In a complete implementation, this would contain
        information about the benefits of investing with UpZone Ventures.
      </p>
      <Link href="/" className="text-amber-600 hover:underline">
        Return to Home
      </Link>
    </div>
  )
}
