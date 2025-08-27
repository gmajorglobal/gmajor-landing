import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import FeaturesCarousel from './components/FeaturesCarousel'
import ComparisonSection from './components/ComparisonSection'
import FeatureGrid from './components/FeatureGrid'
import ComparisonTable from './components/ComparisonTable'
import CommentShowcase from './components/CommentShowcase'
import FaqAccordion from './components/FaqAccordion'
import HeroGlobalMarket from './components/HeroGlobalMarket'
import ContactFormHero from './components/ContactFormHero'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dotted-bg">
      <Header />
      <Hero />
      <InfoSection />
      <FeaturesCarousel />  
      <FeatureGrid />
      <ComparisonTable 
        logos={[
            "/images/logo-gmajor.png",
            "/images/logo-alibaba.png",
            "/images/logo-yellow.png",
            "/images/logo-globy.png",
            "/images/logo-shopify.png",
        ]}/>
      <ComparisonSection />
      <CommentShowcase />
      <FaqAccordion />
      <HeroGlobalMarket />
      <ContactFormHero />
      <Footer />
    </main>
  )
} 