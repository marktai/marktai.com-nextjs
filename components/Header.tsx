import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import clsx from 'clsx'
import { League_Spartan } from 'next/font/google'
import { useState } from 'react'
import Image from 'next/image'

const leagueSpartan = League_Spartan({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

const Header = ({
  headerClass,
  children,
}: {
  headerClass?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="h-[124px]">
      <header
        className={clsx(
          'fixed top-0 z-20 flex h-[124px] w-full items-center justify-between rounded-b-[20px] border-b-1 p-10',
          leagueSpartan.className,
          headerClass || 'bg-white dark:bg-gray-950'
        )}
      >
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/static/images/mark-tai-tie.png"
                alt="Mark Tie"
                height={43}
                width={43}
                className="rounded-[20px] object-contain"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={clsx('m-1 font-medium', {
                  'hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100':
                    !headerClass,
                })}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <SearchButton headerClass={headerClass} />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      {children ? (
        <div className="fixed top-[124px] right-0 z-20 h-[calc(100vh-124px)]">{children}</div>
      ) : null}
    </div>
  )
}

export default Header
