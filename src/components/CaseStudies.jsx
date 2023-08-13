'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { useState } from 'react'
import { motion } from 'framer-motion'

const tags = ['All', 'Residential', 'Commerical', 'Museums']

export default function CaseStudies({ caseStudies }) {
  const [filter, setFilter] = useState('All')

  function onChange(tag) {
    setFilter(tag)
    console.log(filter)
  }
  return (
    <>
      <SectionIntro
        title="Snezhi is the Best"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Have a look at my previous work
        </p>
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
            className="mt-10 grid grid-cols-1 gap-x-2 gap-y-5 px-24 md:grid-cols-3"
          >
            {caseStudies.map((caseStudy) => {
              if (caseStudy.category?.includes(filter)) {
                return (
                  <li key={caseStudy.title}>
                    <Link href={caseStudy.href}>
                      <div className="group relative flex h-96 w-full flex-col rounded-xl bg-blue-900 ring-1 ring-neutral-950/5 transition">
                        <h1 className="invisible absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 place-self-center text-center text-4xl font-bold text-white group-hover:visible">
                          {caseStudy.title}
                        </h1>
                        <Image
                          src={caseStudy.logo}
                          alt={caseStudy.client}
                          className="rounded-xl group-hover:opacity-50"
                          fill={true}
                        />
                      </div>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </FadeIn>
      </FadeInStagger>
    </>
  )
}
