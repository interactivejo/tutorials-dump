import Link from "next/link"

export default function Home() {
  return (
    <main className="px-48 py-8">
      <Link 
        className="px-4 py-2 text-black bg-teal-400 rounded-md"
        href={"/dashboard"}>Go to the dashboard</Link>
    </main>
  )
}
