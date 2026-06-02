import { AiChatAssessment } from '@/components/ai-chat-assessment'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { HeroSection } from '@/components/hero-section'
import { PositioningSection } from '@/components/positioning-section'
import { PricingSection } from '@/components/pricing-section'
import { ProcessSection } from '@/components/process-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TeamSection } from '@/components/team-section'
import { UseCasesSection } from '@/components/use-cases-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PositioningSection />
        <AiChatAssessment />
        <ServicesSection />
        <ProcessSection />
        <UseCasesSection />
        <TeamSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
