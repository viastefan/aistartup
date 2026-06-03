import { LeqraExperience } from '@/components/leqra-experience'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LeqraExperience />
      </main>
      <SiteFooter />
    </>
  )
}
