import { Poppins } from 'next/font/google'
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
})

export default function Home() {
  return (
    <main className={poppins.className}>
      <h1>Home Page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
