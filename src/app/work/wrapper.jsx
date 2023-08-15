import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import Modal from '@/components/Modal'
import Image from 'next/image'

export default async function CaseStudyLayout({ children, _segments }) {
  let id = _segments.at(-2)
  let allCaseStudies = await loadMDXMetadata('work')
  let caseStudy = allCaseStudies.find((caseStudy) => caseStudy.id === id)
  let moreCaseStudies = allCaseStudies
    .filter((caseStudy) => caseStudy.id !== id)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow=" " title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Employer</dt>
                      <dd>{caseStudy.company}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Year</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Software</dt>
                      <dd>{caseStudy.software}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  src={`${caseStudy.image}`}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                  width={1}
                  height={1}
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
        {caseStudy?.technicalImages ? (
          <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
              <h1 className="text-center text-4xl">Technical Drawings</h1>
              <div className="grid grid-cols-3 gap-x-2">
                {caseStudy.technicalImages.map((image) => (
                  <Modal key={`${image}`} image={image} title={`${image}`} />
                ))}
              </div>
            </FadeIn>
          </Container>
        ) : (
          <></>
        )}
        {caseStudy?.visualImages ? (
          <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
              <h1 className="text-center text-4xl">Visuals</h1>
              <div className="grid grid-cols-3 gap-x-2">
                {caseStudy.visualImages.map((image) => (
                  <Modal key={`${image}`} image={image} title={`${image}`} />
                ))}
              </div>
            </FadeIn>
          </Container>
        ) : (
          <></>
        )}
        {caseStudy?.photoImages ? (
          <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeIn>
              <h1 className="text-center text-4xl">Photos</h1>
              <div className="grid grid-cols-3 gap-x-2">
                {caseStudy.photoImages.map((image) => (
                  <Modal key={`${image}`} image={image} title={`${image}`} />
                ))}
              </div>
            </FadeIn>
          </Container>
        ) : (
          <></>
        )}
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More case studies"
          pages={moreCaseStudies}
        />
      )}

    </>
  )
}
