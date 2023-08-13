import { ContactSection } from '@/components/ContactSection'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import CaseStudies from '@/components/CaseStudies'

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = await loadMDXMetadata('work')

  return (
    <>
      <CaseStudies caseStudies={caseStudies} />
      <ContactSection />
    </>
  )
}
