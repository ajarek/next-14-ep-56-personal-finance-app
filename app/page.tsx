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
        src='/images/startingImage.png'
        alt='Starting image'
        fill
        className='object-cover max-sm:object-left  opacity-25'
      />
      <Link
        href='/register'
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xl hover:bg-green-500 px-12 max-sm:px-4 py-4 rounded-lg '
      >
        Get Started 🚀
      </Link>
    </main>
  )
}
