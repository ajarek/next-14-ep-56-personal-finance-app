import { auth } from '@/app/api/auth/auth'
import transactions from '@/data/data.json'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { ChartPie } from '@/components/ChartPie'

const Dashboard = async () => {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0)
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0)
  const saved = transactions
    .filter((t) => t.saved > 0)
    .reduce((acc, t) => acc + t.saved, 0)

  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 max-sm:px-4 py-8 gap-8'>
      <div className='w-full grid grid-cols-3 gap-6'>
        <div className='border-2 border-blue-500 rounded-lg p-4'>
          <h2 className='text-xl'>Current Balance</h2>
          <span className='text-2xl font-semibold'>
            ${(income - expense).toFixed(2)}
          </span>
        </div>
        <div className='border-2 border-green-500 rounded-lg p-4'>
          <h2 className='text-xl'>Income</h2>
          <span className='text-2xl font-semibold'>${income.toFixed(2)}</span>
        </div>
        <div className='border-2 border-red-500 rounded-lg p-4'>
          <h2 className='text-xl'>Expense</h2>
          <span className='text-2xl font-semibold'>${expense.toFixed(2)}</span>
        </div>
      </div>

      <div className='w-full grid grid-cols-[2fr_1fr] gap-6'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between py-2'>
            <h1 className='text-xl font-semibold'>Pots</h1>
            <Link
              href={'/dashboard/pots'}
              className='flex gap-1 hover:border-b border-blue-500 transition-all duration-300'
            >
              See Details <ChevronRight />
            </Link>
          </div>
          <div className='flex'>
            <div className='border-2  rounded-lg p-4 mr-2'>
              <h2 className=''>Total Saved</h2>
              <span className='text-xl font-semibold'>${saved.toFixed(2)}</span>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              {transactions
                .filter((t) => t.saved > 0)
                .map((t, i) => (
                  <div
                    key={t.description}
                    className={cn(
                      'border-2 border-l-blue-500 rounded-lg p-2',
                      i % 2 !== 0 ? 'border-l-yellow-500' : ''
                    )}
                  >
                    <h2 className='text-sm'>{t.description}</h2>
                    <span className=''>${t.saved.toFixed(2)}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between py-2'>
            <h1 className='text-xl font-semibold'>Budgets</h1>
            <Link
              href={'/dashboard/budgets'}
              className='flex gap-1 hover:border-b border-blue-500 transition-all duration-300'
            >
              See Details <ChevronRight />
            </Link>
          </div>
          </div>
          <ChartPie />
        </div>
      </div>
    </main>
  )
}

export default Dashboard
