import AddedTransactionForm from '@/components/AddedTransactionForm'
import React from 'react'

const AddTransaction = () => {
  return (
    <div className='flex flex-col gap-4 px-4'>
      <h1 className='text-xl font-semibold'>Add Transaction</h1>
      <AddedTransactionForm/>
    </div>
  )
}

export default AddTransaction