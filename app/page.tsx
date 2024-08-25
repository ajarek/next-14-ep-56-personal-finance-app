import Image from 'next/image'
import Link from 'next/link'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
export default async function Home() {
  const session = await auth()
  if(session){
  redirect('/dashboard')
  }
  return (
    <main className='w-full min-h-screen  relative   '>
      <Image
        src='/images/head.png'
        alt='Vercel Logo'
        fill
        className='object-cover max-sm:object-left'
      />
      <Link
        href='/register'
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xl hover:bg-gray-700 px-12 max-sm:px-4 py-4 rounded-lg '
      >
        Get Started 🚀
      </Link>
    </main>
  )
}
