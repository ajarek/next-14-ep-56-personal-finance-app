import { ChartPie } from '@/components/ChartPie'
import transactions from '@/data/data.json'
const income = transactions
  .filter((t) => t.type === 'income')
  .reduce((acc, t) => acc + t.amount, 0)

const entertainment = transactions
  .filter((e) => e.category === 'entertainment')
  .reduce((acc, t) => acc + t.amount, 0)
const diningOut = transactions
  .filter((e) => e.category === 'dining out')
  .reduce((acc, t) => acc + t.amount, 0)
const groceries = transactions
  .filter((e) => e.category === 'groceries')
  .reduce((acc, t) => acc + t.amount, 0)

const Budgets = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between py-2'>
        <h1 className='text-xl font-semibold'>Budgets</h1>
      </div>
      
      <div className='grid grid-cols-2 gap-4'>
      <ChartPie/>
        <div className='flex flex-col justify-center gap-2'>
          <div className='text-[#2662d9]'>Income ${income.toFixed(2)}</div>
          <div className='text-[#2eb88a]'>Entertainment ${entertainment.toFixed(2)}</div>
          <div className='text-[#e88c30]'>Dining Out ${diningOut.toFixed(2)}</div>
          <div className='text-[#af57db]'>Groceries ${groceries.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default Budgets
