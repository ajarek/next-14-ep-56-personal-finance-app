import transactions from '@/data/data.json'
import { cn } from '@/lib/utils'

const Transitions = () => {
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0)
  const expense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0)
  return (
    <div className='flex flex-col gap-4 p-4'>
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
        {transactions.map((t, i) => (
          <div
            key={t.description}
            className={cn(
              'flex justify-between items-center border-2  rounded-lg p-2 ',
              t.type === 'income' ? 'border-green-500' : 'border-red-500'
            )}
          >
            <h2 className='text-sm'>{t.description}</h2>
            <div className='flex flex-col gap-2'>
              <span className=''>${t.amount.toFixed(2)}</span>
              <span className=''>${t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transitions
