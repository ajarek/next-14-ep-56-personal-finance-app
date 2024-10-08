import { getTransactions } from '@/lib/action'
import { auth } from '@/app/api/auth/auth'
const RecurringBills = async () => {
  const session = await auth()
  const transactionsAll = await getTransactions()
  const transactions = transactionsAll?.filter(
    (t) => t.userId === session?.user?.email
  )
  const arrayCategory = transactions?.map((t: any) => t.category)
  const duplication = arrayCategory?.filter(
    (item: any, index: number) => arrayCategory?.indexOf(item) !== index
  )
  return (
    <div className='min-h-[calc(100vh-150px)] p-4'>
      <div className='flex items-center justify-between py-2'>
        <h1 className='text-xl font-semibold'>Recurring Bills</h1>
      </div>

      <div className='flex flex-col gap-2'>
        {transactions
          ?.filter((t: any) => t.type === 'expense')
          .filter((t: any) =>
            t.category.includes(duplication ? duplication[0] : null)
          )
          .map((t: any, i: number) => (
            <div
              key={t.description}
              className={
                'flex justify-between items-center border-2 border-blue-500 rounded-lg p-2 ' +
                (i % 2 !== 0 ? 'border-yellow-500' : '')
              }
            >
              <h2 className='text-sm'>{t.description}</h2>
              <div className='flex '>
                <span className=''>${t.amount.toFixed(2)}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default RecurringBills
