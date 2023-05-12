import Link from "next/link"

async function getPosts() {
  const res = await fetch (`${process.env.BASE_URL}/api/getPosts`)
  if(!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data = await getPosts()
  console.log(data)

  return (
    <main className="px-48 py-8">
      <Link 
        className="px-4 py-2 text-black bg-teal-400 rounded-md"
        href={"/dashboard"}>
        Go to the dashboard
      </Link>
    </main>
  )
}
