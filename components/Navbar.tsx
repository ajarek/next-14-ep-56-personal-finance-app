import Logout from './Logout'
import Links from '@/components/Links'
import { ModeToggle } from '@/components/ModeToggle'
import { auth } from '@/app/api/auth/auth'
import Link from 'next/link'


const Navbar = async () => {
  const session = await auth()
  return (
    <div className="h-16 w-full  flex justify-between items-center gap-4  px-8 max-sm:px-2 border-b ">
      <div className=" w-full flex items-center justify-between  ">
      <Link
        href="/dashboard"
        className="flex items-center gap-2 max-sm-gap-1"
      >
        
        <h1 className="font-semibold text-xl  capitalize italic max-sm:hidden">
        Overview
        </h1>
      </Link>

      
    </div>
      <div className=" flex justify-between items-center italic gap-6 ">
        <Logout session={session} />
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
