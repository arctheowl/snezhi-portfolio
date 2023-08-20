import Image from 'next/image'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { Container } from '@/components/Container'
import clsx from 'clsx'


export const metadata = {
  title: 'About Me',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About(centered = false) {
  let blogArticles = (await loadMDXMetadata('work')).slice(0, 2)

  return (
    <>
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-8 justify-center">
        <div className="relative -left-14 xl:h-[45rem] xl:w-[45rem] h-[30rem] w-[30rem]">
          <Image
            src={'https://storage.googleapis.com/snezhi_portfolio/IMG_20211128_114850%20-%20Copy.jpg'}
            fill
            alt={'foto'}
            className={'object-contain'}
          />
        </div>
        <div className="max-w-none space-y-6 text-left">
          <div className="block font-semibold text-xl text-neutral-900">
            <p>Hi, I&apos;m Snezhi</p>
          </div>
          <div className="block font-semibold text-lg text-neutral-900">
            <p>
              Interior Designer
            </p>
          </div>
          <div className="text-base space-y-6">
            <p>
              My career started with designing Commercial Interiors, working on a wide spectrum of pitches and international projects. 
              Year 2020 brought a lot of challenges for the Commercial sector, so I chose to turn a difficult situation into an opportunity for growth and self-development, and focus on Residential Interiors.
            </p>
            <p>
              What I love the most about my job is connecting with people and delivering captivating designs that make the client feel heard. Whether the brief comes from a family, or a small/large organisation – listening and understanding are always the first steps I take, to deliver a space true to the client’s needs. I understand the importance of going that extra mile to ensure the customer experience is second to none.
            </p>
            <p>
              While my early background in Mathematics may sound dry at first, it inspired me to be open to novel solutions and made for an excellent foundation. I manage large projects systematically, while Technical drawings, Cost scheduling and Software learning are far from daunting.
            </p>
            <p>
              Idea exchange and collaboration are essential to every creative team – I am eager to bring a well-rounded point of view and a passion for thoughtful designs, full of individuality, to yours.
            </p>
          </div>
          <div className="italic text-slate-400">
            <p>
              “Snezhi is an exceptionally talented designer who exudes design flair, a meticulous attention to detail and a thirst to constantly be better whilst being grounded, clam and witty.”
            </p>
            <p className="font-bold">
              Tom Prendergast – Director at Enigma Creative Solutions
            </p>
          </div>
        
        </div>

      </div>
    </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="My Work"
        pages={blogArticles}
      />
    </>
  )
}
