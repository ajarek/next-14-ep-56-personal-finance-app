import { auth } from '@/app/api/auth/auth'

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'



const Dashboard = async () => {
  const session = await auth()
  if(!session){
    redirect('/')
  }
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-24 max-sm:px-4 py-8 gap-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
        
    </div>
  )
}

export default Dashboard
