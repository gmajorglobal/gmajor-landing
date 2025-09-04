"use client"

import { useEffect, useState } from "react"
import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface FeaturesCarouselProps {
  locale?: Locale;
}

export default function FeaturesCarousel({ locale = 'vi' }: FeaturesCarouselProps) {
  const { t } = useTranslation(locale);

  const featuresData = [
    { key: 'globalConnection', image: '/images/casorel1.png' },
    { key: 'translation', image: '/images/casorel2.png' },
    { key: 'negotiation', image: '/images/casorel3.png' },
    { key: 'freePosting', image: '/images/casorel4.png' },
    { key: 'aiOptimization', image: '/images/casorel5.png' },
    { key: 'pricing', image: '/images/casorel6.png' },
  ]

  const features = featuresData.map((feature, index) => ({
    id: index + 1,
    title: t(`featuresCarousel.features.${feature.key}.title`),
    image: feature.image,
    alt: t(`featuresCarousel.features.${feature.key}.alt`),
    desc: t(`featuresCarousel.features.${feature.key}.desc`),
  }))

  // Responsive: 1 (mobile), 2 (tablet), 3 (desktop)
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth
      setVisible(w < 640 ? 1 : w < 1024 ? 2 : 3)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const MAX_INDEX = Math.max(0, features.length - visible)
  const STEP_PCT = 100 / visible

  const [index, setIndex] = useState(0)
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, features.length - visible)))
  }, [visible])

  const next = () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1))
  const prev = () => setIndex((i) => (i <= 0 ? MAX_INDEX : i - 1))

  // Mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setTouchStart(e.changedTouches[0].clientX)
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.changedTouches[0].clientX)
  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return
    const delta = touchEnd - touchStart
    if (Math.abs(delta) > 40) (delta < 0 ? next() : prev())
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full" />
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-8 border-blue-800 rounded-full" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-xs font-bold">+</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-blue-900 mb-3 lg:mb-4 whitespace-pre-line">GMAJOR</h1>
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-black mx-auto mb-4 sm:mb-6" />

          <div className="space-y-1.5 sm:space-y-2 text-base sm:text-lg md:text-xl text-gray-700 px-2">
            <p className="whitespace-pre-line">{t('featuresCarousel.platform')}</p>
            <p className="whitespace-pre-line">{t('featuresCarousel.solution')}</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          {features.length > visible && (
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute left-2 md:-left-8 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {/* Viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out will-change-transform w-full"
              style={{ transform: `translateX(-${index * STEP_PCT}%)` }}
              aria-roledescription="carousel"
              aria-live="polite"
            >
              {features.map((f) => (
                <div
                  key={f.id}
                  className="flex-none px-1.5 sm:px-2 md:px-3"
                  style={{ width: `${100 / visible}%` }}
                >
                  {/* Flip card */}
                  <div
                    className="h-full group flip-card outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    tabIndex={0}
                    aria-label={`${t('featuresCarousel.infoLabel')}: ${f.title}`}
                  >
                    <div className="flip-inner h-full will-change-transform">
                      {/* Front */}
                      <div className="flip-face flip-front h-full bg-[#fff5ed] border-8 border-blue-800 shadow-lg rounded-sm flex flex-col">
                        <div className="bg-[#fff5ed] p-3 sm:p-4">
                          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                            <img src={f.image} alt={f.alt} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div className="px-2 pb-4 sm:pb-5 text-center w-full max-w-[280px] mx-auto grid place-items-center">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 whitespace-pre-line">{f.title}</h3>
                        </div>
                      </div>

                      {/* Back (only your provided content) */}
                      <div className="flip-face flip-back h-full bg-blue-900 text-white border-8 border-blue-800 shadow-lg rounded-sm p-5 sm:p-6 lg:p-8 flex items-center justify-center text-center">
                        <p className="max-w-[680px] text-[16px] sm:text-[18px] md:text-[20px] leading-6 sm:leading-8 font-semibold text-white/95 whitespace-pre-line">
                          {f.desc}
                        </p>
                      </div>
                    </div>

                    {/* 3D flip styles */}
                    <style jsx>{`
                      .flip-card { perspective: 1000px; }
                      .flip-inner {
                        position: relative;
                        transform-style: preserve-3d;
                        transition: transform 600ms cubic-bezier(.2,.8,.2,1);
                      }
                      /* Right-to-left flip */
                      .group:hover .flip-inner,
                      .group:focus-within .flip-inner { transform: rotateY(-180deg); }
                      .flip-face {
                        backface-visibility: hidden;
                        -webkit-backface-visibility: hidden;
                      }
                      .flip-front { transform: rotateY(0deg); }
                      .flip-back {
                        position: absolute;
                        inset: 0;
                        transform: rotateY(180deg);
                      }
                    `}</style>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          {features.length > visible && (
            <button
              onClick={next}
              aria-label="Next"
              className="absolute right-2 md:-right-8 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
