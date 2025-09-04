// components/HeroGlobalMarket.tsx
"use client";

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface HeroGlobalMarketProps {
  locale?: Locale;
}

export default function HeroGlobalMarket({ locale = 'vi' }: HeroGlobalMarketProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-14 lg:py-16">
        {/* More height on mobile, unchanged at lg */}
        <div
          className="group relative h-[420px] sm:h-[460px] md:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-md
                     transform-gpu will-change-[transform] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out
                     hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Background */}
          <img
            src="/images/global-market.png"
            alt={t('heroGlobalMarket.imageAlt')}
            className="absolute inset-0 h-full w-full object-cover
                       transform-gpu motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out
                       group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          {/* Headline + subhead */}
          <div className="absolute left-4 sm:left-6 md:left-10 lg:left-12 top-5 sm:top-6 md:top-10 lg:top-12">
            <h1 className="text-white text-[24px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[32px] sm:leading-[38px] md:leading-[46px] lg:leading-[52px] font-extrabold tracking-[0.02em] uppercase whitespace-pre-line">
              {t('heroGlobalMarket.headline')}
            </h1>
            <p className="mt-1 text-white/90 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] font-semibold tracking-[0.16em] italic uppercase whitespace-pre-line">
              {t('heroGlobalMarket.subheadline')}
            </p>
          </div>

          {/* Frosted content card */}
          <div className="absolute left-4 sm:left-6 md:left-10 lg:left-12 top-28 sm:top-[120px] md:top-[120px] lg:top-[140px] w-[94%] sm:w-[540px] md:w-[620px] lg:w-[700px]">
            <div
              className="rounded-md bg-white/80 backdrop-blur-[1px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-white/40
                         transform-gpu motion-safe:transition-transform motion-safe:duration-300
                         group-hover:translate-y-[-4px] group-hover:scale-[1.01]"
            >
              <div className="px-4 py-5 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-8 lg:py-12">
                            <p className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[18px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] text-[#0b1b2b] whitespace-pre-line">
              {t('heroGlobalMarket.content.line1')}
            </p>
                            <p className="mt-2 sm:mt-3 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[18px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] text-[#0b1b2b] whitespace-pre-line">
              {t('heroGlobalMarket.content.line2')}
            </p>
                            <p className="mt-2 sm:mt-3 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[18px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] text-[#0b1b2b] whitespace-pre-line">
              {t('heroGlobalMarket.content.line3')}
            </p>
              </div>
            </div>
          </div>

          {/* CTA button (now pops a bit on hover) */}
          <a
            href={`https://market.gmajor.biz/register?lang=${locale}`}
            className="absolute left-4 sm:left-6 md:left-10 lg:left-12 bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-6 inline-flex items-center gap-3 sm:gap-4 md:gap-5 rounded-full bg-[#eaf2ff] px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#0b1b2b] shadow-md
                       transform-gpu motion-safe:transition-transform motion-safe:duration-300
                       hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
          >
            {t('heroGlobalMarket.ctaButton')}
            <span className="grid h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 place-items-center rounded-full bg-white shadow-inner">
              <svg viewBox="0 0 20 20" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" aria-hidden="true">
                <path d="M9.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
