"use client"

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface FeatureGridProps {
    locale?: Locale;
}

export default function FeatureGrid({ locale = 'vi' }: FeatureGridProps) {
    const { t, isLoading } = useTranslation(locale);

    const featureKeys = [
        { key: 'free', image: '/images/featuregrid1.png' },
        { key: 'aiSupport', image: '/images/featuregrid2.png' },
        { key: 'translation', image: '/images/featuregrid3.png' },
        { key: 'search', image: '/images/featuregrid4.png' },
        { key: 'direct', image: '/images/featuregrid5.png' },
        { key: 'handsOn', image: '/images/featuregrid6.png' },
    ];
    return (
        <section
            className="w-full bg-gray-50"
            style={{ backgroundColor: "#f5f6f7" }}
        >
            <div className="max-w-7xl mx-auto px-2 md:px-8 py-4 sm:py-8 md:py-12 lg:py-16">
                {/* Header */}
                {/* Header */}
                <div className="mb-4 md:mb-8">
                    <div className="flex items-stretch justify-center gap-4 text-center">
                        <span
                            aria-hidden="true"
                            className="block w-1.5 md:w-2 bg-orange-500 rounded self-stretch"
                        />
                        <div className="py-1">
                            <p className="font-serif text-3xl md:text-5xl whitespace-pre-line">
                                {t('featureGrid.heading')}
                            </p>
                            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-indigo-800 uppercase whitespace-pre-line">
                                {t('featureGrid.subheading')}
                            </h2>
                        </div>
                    </div>
                </div>


                {/* Cards */}
                <div className="flex flex-wrap -mx-3">
                    {isLoading ? (
                        [...Array(6)].map((_, idx) => (
                            <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-4 sm:mb-6">
                                <div className="h-40 sm:h-48 bg-gray-200 animate-pulse rounded-xl" />
                            </div>
                        ))
                    ) : (
                        featureKeys.map((feature, idx) => (
                            <div key={`${feature.key}-${idx}`} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-4 sm:mb-6">
                                <article
                                    className="
    group relative overflow-hidden rounded-xl border border-gray-200
    bg-white p-4 md:p-7 shadow-[0_2px_14px_rgba(0,0,0,0.06)] h-full
    transition-colors duration-300
    hover:bg-blue-900 hover:border-blue-900
  "
                                >
                                    {/* Top image row */}
                                    <div className="relative h-12 md:h-20 mb-8 md:mb-19 flex justify-center gap-10 md:justify-between md:gap-0 items-center">
                                        {/* feature image */}
                                        <img
                                            src={feature.image}
                                            alt={t(`featureGrid.features.${feature.key}.imageAlt`)}
                                            className="h-16 w-16 md:h-24 md:w-24 rounded-lg object-contain relative z-10"
                                        />

                                        {/* default decorative image */}
                                        <img
                                            src="/images/decored.png"
                                            alt=""
                                            aria-hidden="true"
                                            className="
                                            pointer-events-none select-none
                                            w-16 md:w-20 opacity-90
                                            transition-opacity duration-300
                                            group-hover:opacity-0
                                        "
                                        />
                                        {/* white decorative image on hover */}
                                        <img
                                            src="/images/decored-white.png"
                                            alt=""
                                            aria-hidden="true"
                                            className="
                                            pointer-events-none select-none absolute right-0
                                            w-16 md:w-20 opacity-0
                                            transition-opacity duration-300
                                            group-hover:opacity-90
                                        "
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="text-center md:text-left">
                                        <h3 className="text-[18px] md:text-[20px] font-extrabold uppercase text-blue-900 transition-colors duration-300 group-hover:text-white whitespace-pre-line">
                                            {t(`featureGrid.features.${feature.key}.title`)}
                                        </h3>
                                        <p className="mt-1 md:mt-2 leading-relaxed text-sm md:text-[16px] max-w-[440px] text-gray-700 transition-colors duration-300 group-hover:text-white/90 whitespace-pre-line">
                                            {t(`featureGrid.features.${feature.key}.description`)}
                                        </p>
                                    </div>
                                </article>

                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}
