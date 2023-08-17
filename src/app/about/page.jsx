import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'

export const metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadMDXMetadata('work')).slice(0, 2)

  return (
    <>
      <div className="mt-24 md:flex md:flex-row flex-col items-center mx-auto">
        <div className="relative lg:h-[45rem] lg:w-[50rem] h-[20rem] w-[20rem]">
          <Image
            src={
              'https://storage.googleapis.com/snezhi_portfolio/IMG_20211128_114850%20-%20Copy.jpg'
            }
            fill
            alt={'foto'}
            className={'object-contain ml-28 md:ml-0'}
          />
        </div>
        <div className="text-lg p-2 ">
          <p>Hi I'm Snezhi</p>
          <div className="mt-10 max-w-3xl space-y-6 text-base">
            <p>
              Studio was started by three friends who noticed that developer
              studios were charging clients double what an in-house team would
              cost. Since the beginning, we have been committed to doing things
              differently by charging triple instead.
            </p>
            <p>
              At Studio, we’re more than just colleagues — we’re a family. This
              means we pay very little and expect people to work late. We want
              our employees to bring their whole selves to work. In return, we
              just ask that they keep themselves there until at least 6:30pm.
            </p>
          </div>
          {/* eyebrow="About Me" title="Our strength is collaboration"> */}
        </div>
      </div>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the my Work"
        pages={blogArticles}
      />
    </>
  )
}
