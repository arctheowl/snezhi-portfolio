'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CaseStudies({ caseStudies }) {
  const tags = ['All', 'Residential', 'Commercial', 'Museums']
  const [filter, setFilter] = useState('All')

  function onChange(tag) {
    setFilter(tag)
    console.log(filter)
  }
  useEffect(() => console.log('mounted'), [])
  return (
    <>
      <SectionIntro
        title="Snezhi is the Best"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className=" font-Mulish">Have a look at my previous work</p>
      </SectionIntro>

      <FadeIn>
        <div className="flex w-full justify-center gap-5">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onChange(tag)}
              className={`${
                filter === tag ? 'text-lg font-bold' : 'text-black'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>
      <FadeInStagger>
        <FadeIn>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-2 gap-y-5 px-2 md:grid-cols-3 md:px-24"
          >
            {caseStudies.map(({ title, href, logo, client, category }) => {
              if (category.includes(filter)) {
                return (
                  <motion.div
                    key={title}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      stiffness: 260,
                      damping: 20,
                      duration: 0.75,
                    }}
                  >
                    <Link href={href}>
                      <div className="group relative flex h-96 w-full flex-col rounded-xl bg-blue-900 ring-1 ring-neutral-950/5 transition">
                        <h1 className="invisible absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 place-self-center text-center text-4xl font-bold text-white group-hover:visible">
                          {title}
                        </h1>
                        <Image
                          src={logo}
                          alt={client}
                          className="rounded-xl group-hover:opacity-50"
                          fill={true}
                        />
                      </div>
                    </Link>
                  </motion.div>
                )
              }
            })}
          </ul>
        </FadeIn>
      </FadeInStagger>
    </>
  )
}
