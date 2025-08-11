import clsx from 'clsx'
import { Dela_Gothic_One } from 'next/font/google'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const delaGothicOne = Dela_Gothic_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

export default function PageTitle({ children }: Props) {
  return (
    <h1
      className={clsx(
        'text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100',
        delaGothicOne.className
      )}
    >
      {children}
    </h1>
  )
}
