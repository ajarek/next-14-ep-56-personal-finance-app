import Image from 'next/image'
import Link from 'next/link'

const menuItems = [
  {
    title: 'finance',
    items: [
      {
        icon: '/images/house.svg',
        label: 'Overview',
        href: '/dashboard',
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
      {
        icon: '/images/plus.svg',
        label: 'Add Transaction',
        href: '/dashboard/add-transaction',
      },
    ],
  },
]

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
      {menuItems.map((i) => (
        <div
          className='flex flex-col gap-2 '
          key={i.title}
        >
          <span className='hidden lg:block   my-4 px-4 font-semibold text-xl'>
            {i.title}
          </span>
          {i.items.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.label}
                className={`flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2  hover:text-blue-500 transition-all delay-200 focus:text-blue-500 `}
              >
                <Image
                  src={item.icon}
                  alt=''
                  width={20}
                  height={20}
                />
                <span className='hidden lg:block'>{item.label}</span>
              </Link>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu
