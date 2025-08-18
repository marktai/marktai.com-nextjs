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
import Header from '@/components/Header'
import Bleed from 'pliny/ui/Bleed'
import Image from 'next/image'

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
    <div>
      <Header headerClass="">
        <div className="hidden h-full w-[25vw] overflow-y-hidden border-l-1 border-white p-10 text-black md:block">
          <div className={clsx('grid h-full space-y-4', `grid-rows-${orderedTags.length}`)}>
            {orderedTags.map((t) => {
              return (
                <Link
                  href={`/tags/${t.name}`}
                  className={clsx(
                    'flex w-full items-center justify-center rounded-[20px] p-5',
                    `${t.color}`
                  )}
                  key={t.name}
                >
                  <FontAwesomeIcon icon={t.icon} className="h-6 overflow-visible md:h-8 lg:h-12" />
                </Link>
              )
            })}
          </div>
        </div>
      </Header>
      <main className="relative overflow-x-hidden">
        <div className="relative z-0 grid w-[100vw] grid-cols-4">
          <div className="col-span-4 md:col-span-3">
            <>
              <ul className="divide-gray-200 px-10 dark:divide-gray-700">
                {!posts.length && 'No posts found.'}
                {posts.slice(0, MAX_DISPLAY).map((post) => {
                  const { slug, date, title, subtitle, summary, tags, authors, images } = post

                  const tagMatch = orderedTags.find((t1) => tags.find((t2) => t1.name === t2))
                  const displayImage = images && images.length > 0 ? images[0] : null

                  return (
                    <li key={slug} className="p-2 sm:p-4 lg:p-10">
                      <article className="w-full flex justify-center">
                        <div className="w-full max-w-[1000px]">
                          <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                              <div>
                                <Link
                                  href={`/blog/${slug}`}
                                  className={clsx(
                                    'grid-rows grid space-y-2 rounded-[20px] sm:rounded-[40px] font-bold tracking-tight text-gray-900 hover:text-gray-900 dark:text-gray-100 p-2 sm:p-4 lg:p-10',
                                    tagMatch
                                      ? `${tagMatch.hoverColor}`
                                      : 'dark:hover:text-gray-000 hover:text-gray-900'
                                  )}
                                >
                                  {displayImage ? (
                                    <div className="w-full">
                                      <Bleed>
                                        <div className="relative aspect-2/1 w-full">
                                          <Image
                                            src={displayImage}
                                            alt={title}
                                            fill
                                            className="rounded-[20px] object-contain"
                                          />
                                        </div>
                                      </Bleed>
                                    </div>
                                  ) : null}
                                  <div className={clsx('text-[20px] md:text-[40px]', delaGothicOne.className)}>
                                    {title}
                                  </div>
                                  {subtitle ? (
                                    <div className={clsx('text-[16px] md:text-[32px]', leagueSpartan.className)}>
                                      {subtitle}
                                    </div>
                                  ) : null}
                                  {summary ? (
                                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                      {summary}
                                    </div>
                                  ) : null}

                                  <dl className="flex flex-row items-center text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                                    {
                                      tagMatch ? (
                                        <>
                                          <div className="block md:hidden inline">
                                            <div
                                              className={clsx(
                                                'flex items-center justify-center rounded-[20px] p-2 w-fit',
                                                `${tagMatch.color}`
                                              )}
                                            >
                                              <FontAwesomeIcon icon={tagMatch.icon} className="h-4 text-black overflow-visible" />
                                            </div>
                                          </div>
                                          <div className="block md:hidden inline px-2">•</div>
                                        </>
                                      ) : null
                                    }
                                   
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
      </main>
    </div>
  )
}
