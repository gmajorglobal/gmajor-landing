"use client"

import { useState } from 'react'
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
import { useTranslation } from '../hooks/useTranslation'

export default function JapanesePage() {
  const [locale, setLocale] = useState<Locale>('ja')
  const { isLoading } = useTranslation(locale)

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
    window.location.href = `/${newLocale}`
  }

  return (
    <>
      <Header locale={locale} onLocaleChange={handleLocaleChange} />
      <main className="min-h-screen bg-white dotted-bg w-full overflow-x-hidden pt-16 md:pt-20">
        {isLoading ? (
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8 space-y-6 animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-full" />
            <div className="h-6 bg-gray-200 rounded w-5/6" />
            <div className="h-64 bg-gray-200 rounded" />
            <div className="h-32 bg-gray-200 rounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-40 bg-gray-200 rounded" />
              <div className="h-40 bg-gray-200 rounded" />
            </div>
            <div className="h-72 bg-gray-200 rounded" />
          </div>
        ) : (
          <>
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
          </>
        )}
      </main>
    </>
  )
} 