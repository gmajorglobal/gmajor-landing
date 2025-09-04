'use client'

import { useTranslation } from '../hooks/useTranslation'
import { type Locale } from '../../i18n'

interface HeroProps {
  locale?: Locale
}

export default function Hero({ locale = 'vi' }: HeroProps) {
  const { t } = useTranslation(locale)

  const handleRegisterClick = () => {
    window.location.href = `https://market.gmajor.biz/register?lang=${locale}`
  }

  return (
    <section className="w-full">
      {/* Mobile: Full image layout */}
      <div className="lg:hidden">
        {/* Full width image on mobile */}
        <div className="w-full h-screen relative">
          <img
            src="/images/gmajor-toppage.png"
            alt="GMAJOR Business Professionals"
            className="w-full h-full object-cover"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="w-full p-6 pb-8 text-white">
              <h1 className="text-3xl md:text-4xl font-black !leading-relaxed mb-4 whitespace-pre-line">
                {t('hero.title')}
              </h1>
              
              <div className="space-y-3 text-sm md:text-base leading-relaxed mb-6">
                <p dangerouslySetInnerHTML={{ __html: t('hero.description1') }}>
                </p>
                <p className="whitespace-pre-line">
                  {t('hero.description2')}
                </p>
              </div>

              <button onClick={handleRegisterClick} className="w-full bg-blue-800 hover:bg-blue-700 transition-colors duration-300 text-white px-6 py-4 rounded-lg font-black text-lg flex items-center justify-center space-x-3 group shadow-lg">
                <span>{t('hero.registerButton')}</span>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Original side-by-side layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-14 lg:py-16">
        <div className="grid gap-8 sm:gap-2 items-center lg:grid-cols-2">
          {/* Left Section - Text and CTA */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] font-black text-black !leading-tight whitespace-pre-line">
              {t('hero.title')}
            </h1>

            <div className="space-y-4 text-lg sm:text-xl text-black !leading-loose whitespace-pre-line">
              <p dangerouslySetInnerHTML={{ __html: t('hero.description1') }}>
              </p>
              <p>
                {t('hero.description2')}
              </p>
            </div>

            <button onClick={handleRegisterClick} className="w-full sm:w-auto justify-center sm:justify-start bg-blue-800 hover:bg-blue-700 transition-colors duration-300 text-white px-8 py-4 rounded-lg font-black text-lg flex items-center space-x-3 group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
              <span>{t('hero.registerButton')}</span>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden h-56 sm:h-80 md:h-96 lg:h-full">
              {/* Real GMAJOR top page image */}
              <img
                src="/images/gmajor-toppage.png"
                alt="GMAJOR Business Professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
