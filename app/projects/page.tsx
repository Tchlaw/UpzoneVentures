import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
      <p className="text-lg mb-4">
        This is a placeholder for the Projects page content. In a complete implementation, this would showcase UpZone
        Ventures' current and past development projects.
      </p>
      <Link href="/" className="text-amber-600 hover:underline">
        Return to Home
      </Link>
    </div>
  )
}
