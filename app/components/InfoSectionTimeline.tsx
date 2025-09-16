"use client";

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';
import Image from 'next/image';

interface InfoSectionTimelineProps {
  locale?: Locale;
}

export default function InfoSectionTimeline({ locale = 'vi' }: InfoSectionTimelineProps) {
  const { t } = useTranslation(locale);

  const timelineItems = [
    {
      icon: "/images/info-section/global.png",
      title: t('timelineSection.global.title'),
      description: t('timelineSection.global.description'),
      side: "left"
    },
    {
      icon: "/images/info-section/translate.png",
      title: t('timelineSection.translate.title'),
      description: t('timelineSection.translate.description'),
      side: "right"
    },
    {
      icon: "/images/info-section/riskfree.png",
      title: t('timelineSection.riskfree.title'),
      description: t('timelineSection.riskfree.description'),
      side: "left"
    },
    {
      icon: "/images/info-section/aibot.png",
      title: t('timelineSection.aibot.title'),
      description: t('timelineSection.aibot.description'),
      side: "right"
    },
    {
      icon: "/images/info-section/connection.png",
      title: t('timelineSection.connection.title'),
      description: t('timelineSection.connection.description'),
      side: "left"
    },
    
    {
      icon: "/images/info-section/freepost.png",
      title: t('timelineSection.freepost.title'),
      description: t('timelineSection.freepost.description'),
      side: "right"
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-gray-800 mb-3 lg:mb-4 whitespace-pre-line">GMAJOR</h1>

          <div className="w-16 sm:w-48 lg:w-64 h-0.5 bg-black mx-auto mb-4 sm:mb-6" />

          <p className="text-sm md:text-xl mb-6 italic font-bold">
            {t('timelineSection.subtitle')}
          </p>

          <p className="text-base md:text-xl max-w-2xl mx-auto">
            {t('timelineSection.intro')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - extends through all items - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2.5 bg-[#83a7d4]" style={{height: '1100px'}}></div>

          {/* Timeline items */}
          <div className="space-y-16 md:space-y-4">
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-center md:justify-start ${item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                {/* Content box */}
                <div className={`w-full md:w-1/2 ${item.side === 'left' ? 'md:pr-16' : 'md:pl-2'}`}>
                  <div className="p-4">
                    <div className={`flex items-center gap-4 flex-row md:${item.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className="flex-shrink-0">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={74}
                          height={74}
                          className="rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-3 whitespace-pre-line text-center">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-[15x] text-gray-700 leading-relaxed whitespace-pre-line text-center"
                        dangerouslySetInnerHTML={{ __html: item.description }}></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot - hidden on mobile */}
                <img src="/images/info-section/dot.png" alt="dot" className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white z-10"></img>
              
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}