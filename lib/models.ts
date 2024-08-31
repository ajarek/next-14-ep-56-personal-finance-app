import mongoose from 'mongoose'

export type User = {
  _id: string
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}

export type UserWithoutId = Omit<User, '_id'>

export type Transactions = {
  type: string
  category: string
  amount: number
  date: Date
  description: string
  saved: number
  userId:string

}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const transactionsSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    userId:{type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    saved: { type: Number, required: true },
  },
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Transactions = mongoose.models?.Transactions || mongoose.model('Transactions', transactionsSchema)
