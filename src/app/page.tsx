import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hello NextJS</h1>
      <Link href="/login">login page</Link>
    </main>
  )
}
