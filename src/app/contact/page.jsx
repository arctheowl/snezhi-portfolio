import { useId } from 'react'
import Link from 'next/link'
import { SocialMedia } from '../../components/SocialMedia'
import { Border } from '../../components/Border'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import { FadeIn } from '../../components/FadeIn'
import { PageIntro } from '../../components/PageIntro'


function ContactDetails() {
  return (
    <FadeIn>
      <Border className="pt-16">

        <dl className="grid grid-cols-1 grid-rows-2 gap-8 text-sm">
          {[
            ['Email', 'mailto:s.n.veskova@gmail.com', 's.n.veskova@gmail.com'],
            ['LinkedIn', 'https://www.linkedin.com/in/snezhana-veskova/', 'Snezhana Veskova']
          ].map(([label, link, disp]) => (
            <div key={link}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={link}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {disp}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Me',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro>
        <h2 className="font-bold">
          Contact
        </h2>
      </PageIntro>
      <Container className="mt-10 sm:mt-10 lg:mt-10">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
