import { cn } from '@/lib/utils'
import { getTransactions } from '@/lib/action'
import Link from 'next/link'
import DeleteTransaction from '@/components/DeleteTransaction'
import { Pen } from 'lucide-react'
const Transitions = async () => {
  const transactions = await getTransactions()
  const income = transactions
    ?.filter((t: any) => t.type === 'income')
    .reduce((acc: any, t: any) => acc + t.amount, 0)
  const expense = transactions
    ?.filter((t: any) => t.type === 'expense')
    .reduce((acc: any, t: any) => acc + t.amount, 0)
  return (
    <div className='min-h-[calc(100vh-150px)] flex flex-col gap-4 p-4'>
      <div className='flex flex-col items-center justify-between py-2'>
        <h1 className='text-xl font-semibold'>Transactions</h1>
        <div className='flex gap-8'>
          <h2 className='flex gap-4 text-green-500'>
            <span>Income</span>
            <span>{income.toFixed(2)}</span>
          </h2>
          <h2 className='flex gap-4 text-red-500'>
            <span>Expense</span>
            <span>{expense.toFixed(2)}</span>
          </h2>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {transactions
          ?.sort((a, b) => {
            let dateA = new Date(a.date) as Date
            let dateB = new Date(b.date) as Date
            return dateB.getTime() - dateA.getTime()
          })
          .map((t: any, i: number) => (
            <div
              key={t.description}
              className={cn(
                'flex justify-between items-center border-2  rounded-lg p-2 ',
                t.type === 'income' ? 'border-green-500' : 'border-red-500'
              )}
            >
              <h2 className='text-sm'>{t.description}</h2>
              <div className='flex items-center gap-8'>
                <div className='flex flex-col gap-2'>
                  <span className=''>${t.amount.toFixed(2)}</span>
                  <span className=''>{t.date.toLocaleDateString('sv-SE')}</span>
                </div>
                <DeleteTransaction id={t._id.toString()} />
                <Link
                  href={`/dashboard/transactions/edit?id=${t.userId}&description=${t.description}&amount=${t.amount}&type=${t.type}&category=${t.category}&saved=${t.saved}&date=${t.date}&id=${t._id} `}
                >
                  <Pen
                    size={32}
                    className='text-green-600 hover:text-green-400 transition-colors delay-100 ease-in-out'
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Transitions
