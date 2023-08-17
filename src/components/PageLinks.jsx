import Link from 'next/link'
import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import Image from 'next/image'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function PageLink({ page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="group relative h-64 pl-8 md:h-80"
      >
        <div
          className={`-z-10 aspect-auto w-full opacity-50 group-hover:opacity-100`}
        >
          <Image src={page.logo} fill alt={page.title} />
        </div>
        <div className='flex justify-between px-2'>
          <h3 className="left-60 top-2 mt-6 text-lg font-bold text-neutral-950 z-10 ">
            {page.title}
          </h3>

          <Link
            href={page.href}
            className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700 z-10"
            aria-label={`Read more: ${page.title}`}
          >
            Read more
            <ArrowIcon className="w-6 flex-none fill-current" />
            <span className="absolute inset-0" />
          </Link>
        </div>
      </Border>
    </article>
  )
}

export function PageLinks({ title, intro, pages, className }) {
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro title={title} smaller>
        {intro && <p>{intro}</p>}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}
