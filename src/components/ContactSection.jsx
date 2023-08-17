import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell me about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Say Hei
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="text-base font-semibold text-white">
                I&apos;d love to hear how I can help you to achieve the perfect space for you.
              </h3>
              
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
