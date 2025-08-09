import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

import {
  faClipboardUser,
  faCompass,
  faDice,
  faFishFins,
  faLaptopCode,
  faMartiniGlassCitrus,
  faMusic,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dela_Gothic_One, League_Spartan } from 'next/font/google'
import clsx from 'clsx'
import { orderedTags, tags } from '@/data/tags'

const delaGothicOne = Dela_Gothic_One({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

const leagueSpartan = League_Spartan({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
})

const MAX_DISPLAY = 100

export default function Home({ posts }) {
  return (
    <div className="relative">
      <div className="relative z-0 grid grid-cols-4">
        <div className="col-span-3">
          <>
            <ul className="divide-gray-200 px-10 dark:divide-gray-700">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, subtitle, summary, tags, authors } = post

                return (
                  <li key={slug} className="p-10">
                    <article>
                      <div className="">
                        <div className="space-y-5 xl:col-span-3">
                          <div className="space-y-6">
                            <div>
                              <Link
                                href={`/blog/${slug}`}
                                className="grid-rows hover:bg- grid space-y-2 font-bold tracking-tight text-gray-900 dark:text-gray-100"
                              >
                                <div className={clsx('text-[40px]', delaGothicOne.className)}>
                                  {title}
                                </div>
                                {subtitle ? (
                                  <div className={clsx('text-[32px]', leagueSpartan.className)}>
                                    {subtitle}
                                  </div>
                                ) : null}
                                {summary ? (
                                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                    {summary}
                                  </div>
                                ) : null}

                                <dl className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                                  {authors ? (
                                    <>
                                      <dt className="sr-only inline">Author</dt>
                                      <dd className="inline pr-2">{authors.join(' & ')}</dd>
                                      <div className="inline pr-2">•</div>
                                    </>
                                  ) : null}

                                  <dt className="sr-only inline">Published on</dt>
                                  <dd className="inline pr-2">
                                    <time dateTime={date}>
                                      {formatDate(date, siteMetadata.locale)}
                                    </time>
                                  </dd>
                                </dl>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base leading-6 font-medium">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                All Posts &rarr;
              </Link>
            </div>
          )}
        </div>
        <div />
      </div>
      <div className="fixed right-0 z-50 grid w-[25vw] overflow-y-scroll border-l-1 border-white p-10 text-black lg:top-[124px] lg:min-h-[calc(100vh-124px)]">
        <div className={clsx('grid h-full space-y-4', `grid-rows-${orderedTags.length}`)}>
          {orderedTags.map((t) => {
            return (
              <Link
                href={`/tags/${t.name}`}
                className={clsx(
                  'flex w-full items-center justify-center rounded-[20px] p-5',
                  `bg-[${t.color}]`
                )}
                key={t.name}
              >
                <FontAwesomeIcon icon={t.icon} className="h-12 overflow-visible" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
