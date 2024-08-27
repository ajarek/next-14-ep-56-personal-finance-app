import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    icon: '/images/house.svg',
    label: 'Overview',
    href: '/',
  },

  {
    icon: '/images/arrow-down-up.svg',
    label: 'Transactions',
    href: '/dashboard/transactions',
  },
  {
    icon: '/images/chart-pie.svg',
    label: 'Budgets',
    href: '/dashboard/budgets',
  },
  {
    icon: '/images/receipt.svg',
    label: 'Pots',
    href: '/dashboard/pots',
  },
  {
    icon: '/images/repeat-2.svg',
    label: 'Recurring Bills',
    href: '/dashboard/recurring-bills',
  },
]

const Footer = () => {
  return (
    <div className='w-full flex justify-evenly  text-sm py-4'>
      {items.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.label}
            className={`flex flex-col items-center justify-center lg:justify-start gap-2 text-gray-500 py-2 md:px-2  hover:text-blue-500 transition-all delay-200 focus:text-blue-500 `}
          >
            <Image
              src={item.icon}
              alt=''
              width={30}
              height={30}
            />
            <span className='hidden lg:block'>{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default Footer
