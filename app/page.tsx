import Image from 'next/image'
import image1 from '@/public/images/Axin.png'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
 const session = await getServerSession(authOptions)

  return (
    <>
      <h1>Hey {session && <span>{ session.user!.name}</span> }</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image
        src="https://bit.ly/react-cover" alt="reaact_images"
        fill
        className="object-cover"
        sizes="(max-width : 480px) 100vw , (max-width : 768px) 50vw ,33vw "
        quality={100}
      />
    </>
  )
}
