'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CaseStudies({ caseStudies }) {
  const tags = ['All', 'Residential', 'Commercial', 'Museums']
  const [filter, setFilter] = useState('All')

  function onChange(tag) {
    setFilter(tag)
  }
  return (
    <>
      <SectionIntro title="Snezhi Veskova" className="mt-24 sm:mt-32 lg:mt-40">
        <p>Portfolio of work</p>
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
            className="mt-10 grid grid-cols-1 gap-x-2 gap-y-5 px-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-24"
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
                      <div className="group relative flex h-96 flex-col rounded-xl bg-blue-900 ring-1 ring-neutral-950/5 transition">
                        <h1 className="invisible absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 place-self-center text-center text-4xl font-bold text-white group-hover:visible">
                          {title}
                        </h1>
                        <Image
                          src={logo}
                          alt={client}
                          className="rounded-xl group-hover:opacity-50 object-cover"
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
