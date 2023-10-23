import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <>
      <div>Hey man Haha</div>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </>
  )
}
