// components/FaqAccordion.tsx
"use client";

import { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface FaqAccordionProps {
  locale?: Locale;
}

export default function FaqAccordion({ locale = 'vi' }: FaqAccordionProps) {
  const { t } = useTranslation(locale);
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId((cur) => (cur === id ? null : id));

  const faqKeys = ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7', 'faq8', 'faq9'];

  return (
    <section className="bg-gray-50 lg:bg-white transition-all duration-500 ease-in-out">
      {/* match the top section width */}
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-14 lg:py-16">
        <h2 className="mb-6 sm:mb-8 md:mb-10 text-center font-extrabold tracking-tight text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-pre-line">
          {t('faqAccordion.title')}
        </h2>

        <div className="mx-auto w-full max-w-[1200px]">
          {faqKeys.map((faqKey, index) => {
            const id = index + 1;
            const isOpen = openId === id;
            return (
              <div key={id} className="mb-3 sm:mb-4 rounded-2xl overflow-hidden">
                {/* header */}
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  className={[
                    "flex w-full items-center justify-between text-left text-gray-700 border rounded-2xl transition-all duration-300 ease-in-out",
                    "px-4 sm:px-5 md:px-8 py-4 sm:py-5 md:py-7",
                    isOpen
                      ? "bg-blue-50 border-blue-200 text-blue-900 shadow-md"
                      : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900",
                  ].join(" ")}
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold whitespace-pre-line">
                    {t(`faqAccordion.${faqKey}.question`)}
                  </span>
                  <svg
                    className={[
                      "shrink-0 transition-transform duration-300 ease-in-out",
                      "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
                      isOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* panel */}
                <div
                  id={`faq-panel-${id}`}
                  role="region"
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 md:px-8 py-4 sm:py-6 md:py-8 bg-gray-50 border-x border-b border-gray-200">
                                      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700 whitespace-pre-line">
                  {t(`faqAccordion.${faqKey}.answer`)}
                </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
