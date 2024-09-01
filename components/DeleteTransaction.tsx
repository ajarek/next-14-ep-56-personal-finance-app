'use client'

import { deleteTransaction } from '@/lib/action'
import { Trash2 } from 'lucide-react'

export default function DeleteTransaction({ id }: { id: string  }) {
  return (
    <form action={deleteTransaction}>
      <input
        type='hidden'
        name='id'
        value={id.toString()}
      />

      <button
        type='submit'
        className=' text-xl '
      >
        <Trash2 size={32}  className='text-red-700 hover:text-red-500 transition-colors delay-100 ease-in-out' />
      </button>
    </form>
  )
}