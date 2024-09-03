import AddedTransactionForm from '@/components/AddedTransactionForm'
import { auth } from '@/app/api/auth/auth'

const AddTransaction = async () => {
  const session = await auth()
  return (
    <div className='flex flex-col gap-4 py-4 px-8 max-lg:px-4'>
      <h1 className='text-xl font-semibold'>Add Transaction</h1>
      <AddedTransactionForm userId={session?.user?.email}/>
    </div>
  )
}

export default AddTransaction