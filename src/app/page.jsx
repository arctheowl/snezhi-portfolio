import { ContactSection } from '@/components/ContactSection'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import CaseStudies from '@/components/CaseStudies'

export const metadata = {
  title: {
    template: 'Snezhi Veskova',
    default: 'Snezhi Veskova\'s Portfolio',
  },
}


export default async function Home() {
  let caseStudies = await loadMDXMetadata('work')
  return (
    <>
      <CaseStudies caseStudies={caseStudies} />
      
    </>
  )
}
