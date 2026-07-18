import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Gallery } from '@/components/Gallery'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { ExtraFeatures } from '@/components/ExtraFeatures'
import { LanguageToggle } from '@/components/LanguageToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
      <LanguageToggle />
      <ExtraFeatures />
    </main>
  )
}

