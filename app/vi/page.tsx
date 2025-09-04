"use client"

import { useState, useEffect } from 'react'
import { type Locale } from '../../i18n'
import Header from '../components/Header'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import FeaturesCarousel from '../components/FeaturesCarousel'
import ComparisonSection from '../components/ComparisonSection'
import FeatureGrid from '../components/FeatureGrid'
import ComparisonTable from '../components/ComparisonTable'
import CommentShowcase from '../components/CommentShowcase'
import FaqAccordion from '../components/FaqAccordion'
import HeroGlobalMarket from '../components/HeroGlobalMarket'
import ContactFormHero from '../components/ContactFormHero'
import Footer from '../components/Footer'

export default function VietnamesePage() {
  const [locale, setLocale] = useState<Locale>('vi')

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    // Navigate to the new locale path
    window.location.href = `/${newLocale}`
  }

  return (
    <>
      <Header locale={locale} onLocaleChange={handleLocaleChange} />
      <main className="min-h-screen bg-white dotted-bg w-full overflow-x-hidden pt-16 md:pt-20">
        <Hero locale={locale} />
        <InfoSection locale={locale} />
        <FeaturesCarousel locale={locale} />  
        <FeatureGrid locale={locale} />
        <ComparisonTable 
          locale={locale}
          logos={[
              "/images/logo-gmajor.png",
              "/images/logo-alibaba.png",
              "/images/logo-yellow.png",
              "/images/logo-globy.png",
              "/images/logo-shopify.png",
          ]}/>
        <ComparisonSection locale={locale} />
        <CommentShowcase locale={locale} />
        <FaqAccordion locale={locale} />
        <HeroGlobalMarket locale={locale} />
        <ContactFormHero locale={locale} />
        <Footer locale={locale} />
      </main>
    </>
  )
} 