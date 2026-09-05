import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { DestinationsSection } from '@/components/destinations-section'
import { PackagesSection } from '@/components/packages-section'
import { ServicesSection } from '@/components/services-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <DestinationsSection />
        <PackagesSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
