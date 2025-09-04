"use client";

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface InfoSectionProps {
  locale?: Locale;
}

export default function InfoSection({ locale = 'vi' }: InfoSectionProps) {
  const { t } = useTranslation(locale);
  const cards = [
    { title: t('infoSection.language.title'), description: t('infoSection.language.description') },
    { title: t('infoSection.information.title'), description: t('infoSection.information.description') },
    { title: t('infoSection.access.title'), description: t('infoSection.access.description') },
    { title: t('infoSection.manpower.title'), description: t('infoSection.manpower.description') },
    { title: t('infoSection.budget.title'), description: t('infoSection.budget.description') },
    { title: t('infoSection.start.title'), description: t('infoSection.start.description') }
  ];

  return (
    <section className="w-full bg-gray-100 py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full md:w-[600px] lg:w-[400px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-black text-blue-900 lg:leading-[1.2] uppercase whitespace-pre-line min-w-[500px]">
              {t('infoSection.sectionTitle')}
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left text-blue-800 leading-relaxed whitespace-pre-line ">
              <p className="italic">
                {t('infoSection.intro1')}
              </p>
              <p className="italic">{t('infoSection.intro2')}</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:w-[700px] ml-0 lg:ml-8 mt-6 sm:mt-8 lg:mt-0">

            {/* Row 1 */}
            <div className="md:flex gap-4">

              {/* Card 1 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[440px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl  font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white whitespace-pre-line ">
                  {cards[0].title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[13px] lg:text-[14px] leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95 whitespace-pre-line">
                  {cards[0].description}
                </p>
              </div>

              {/* Card 2 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[440px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center mt-4 md:mt-0
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl  font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white whitespace-pre-line">
                  {cards[1].title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-[14px]leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95 whitespace-pre-line">
                  {cards[1].description}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="md:flex gap-4">

              {/* Card 3 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[300px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl  font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white whitespace-pre-line">
                  {cards[2].title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-[14px]leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95 whitespace-pre-line">
                  {cards[2].description}
                </p>
              </div>

              {/* Card 4 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[440px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center mt-4 md:mt-0
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl  font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white whitespace-pre-line">
                  {cards[3].title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-[14px]leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95 whitespace-pre-line">
                  {cards[3].description}
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="md:flex gap-4">

              {/* Card 5 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[540px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none whitespace-pre-line"
              >
                <h3 className="text-lg sm:text-xl  font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white whitespace-pre-line">
                  {cards[4].title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-[14px]leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95 whitespace-pre-line">
                  {cards[4].description}
                </p>
              </div>

              {/* Card 6 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[340px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center mt-4 md:mt-0
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl  font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white whitespace-pre-line">
                  {cards[5].title}
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-[14px]leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95 whitespace-pre-line">
                  {cards[5].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
