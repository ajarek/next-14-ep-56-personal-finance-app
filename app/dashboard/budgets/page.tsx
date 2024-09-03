import { ChartPie } from '@/components/ChartPie'
import { getTransactions } from '@/lib/action'
import { auth } from '@/app/api/auth/auth'
const Budgets = async () => {
  const session = await auth()
  const transactionsAll = await getTransactions()
  const transactions = transactionsAll?.filter(
    (t) => t.userId === session?.user?.email
  )

  const income = transactions
    ?.filter((t: any) => t.type === 'income')
    .reduce((acc: any, t: any) => acc + t.amount, 0)
  const entertainment = transactions
    ?.filter((e: any) => e.category === 'entertainment')
    .reduce((acc: any, t: any) => acc + t.amount, 0)
  const diningOut = transactions
    ?.filter((e: any) => e.category === 'dining out')
    .reduce((acc: any, t: any) => acc + t.amount, 0)
  const groceries = transactions
    ?.filter((e: any) => e.category === 'groceries')
    .reduce((acc: any, t: any) => acc + t.amount, 0)
  const other = transactions
    ?.filter((e: any) => e.category === 'other')
    .reduce((acc: any, t: any) => acc + t.amount, 0)

  return (
    <div className='min-h-[calc(100vh-150px)] flex flex-col'>
      <div className='flex items-center justify-between py-2 px-4'>
        <h1 className='text-xl font-semibold'>Budgets</h1>
      </div>

      <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
        <ChartPie
          income={income}
          entertainment={entertainment}
          diningOut={diningOut}
          groceries={groceries}
          other={other}
        />
        <div className='flex flex-col justify-center gap-2 px-4'>
          <div className='text-[#2662d9]'>Income ${income.toFixed(2)}</div>
          <div className='text-[#2eb88a]'>
            Entertainment ${entertainment.toFixed(2)}
          </div>
          <div className='text-[#e88c30]'>
            Dining Out ${diningOut.toFixed(2)}
          </div>
          <div className='text-[#af57db]'>
            Groceries ${groceries.toFixed(2)}
          </div>
          <div className='text-[#e23670]'>Other ${other.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default Budgets
