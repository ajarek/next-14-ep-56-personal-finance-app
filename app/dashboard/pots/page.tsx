import { cn } from '@/lib/utils'
import { getTransactions } from '@/lib/action'
const Pots = async () => {
  const transactions = await getTransactions()
  return (
    <div className='min-h-[calc(100vh-150px)] flex flex-col gap-4 p-4'>
      <h1 className='text-xl font-semibold'>Pots</h1>

      <div className='flex flex-col gap-2'>
        {transactions
          ?.filter((t: any) => t.saved > 0)
          .map((t: any, i: number) => (
            <div
              key={t.description}
              className={cn(
                'border-2 flex justify-between border-l-blue-500 rounded-lg p-2',
                i % 2 !== 0 ? 'border-l-yellow-500' : ''
              )}
            >
              <h2 className='text-sm'>{t.description}</h2>
              <span className=''>${t.saved.toFixed(2)}</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Pots
