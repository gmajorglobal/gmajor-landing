// components/CommentShowcase.tsx
"use client"

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface CommentShowcaseProps {
  locale?: Locale;
}

export default function CommentShowcase({ locale = 'vi' }: CommentShowcaseProps) {
  const { t } = useTranslation(locale);

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      {/* Match top component width */}
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 md:px-6 space-y-4 sm:space-y-5 md:space-y-6">
        {/* ================= BLOCK 1 ================= */}
        <div
          className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-md
                     transform-gpu transition-transform duration-300 ease-out
                     hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg hover:z-10 cursor-pointer"
        >
          <img
            src="/images/comment1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* labels */}
          <div className="absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-wide">
            {t('commentShowcase.comment1.label')}
          </div>
          <div className="absolute right-3 sm:right-4 md:right-5 top-3 sm:top-4 md:top-5 text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            {t('commentShowcase.comment1.number')}
          </div>

          {/* chip + quote (right/bottom) */}
          <div className="absolute right-3 sm:right-4 md:right-5 bottom-3 sm:bottom-4 md:bottom-5 w-[94%] sm:w-[340px] md:w-[420px] lg:w-[560px]">
            {/* chip */}
            <div className="mb-3 sm:mb-4 flex items-center">
              <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden rounded-full ring-2 ring-white/90">
                <img src="/images/user1.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="ml-3 sm:ml-4 rounded bg-white/90 px-3 sm:px-4 py-2 sm:py-2.5 shadow">
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#0b1b2b] whitespace-pre-line">
              {t('commentShowcase.comment1.user.name')}
            </div>
                <div className="mt-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#0b1b2b]/70">
                  {t('commentShowcase.comment1.user.title')}
                </div>
              </div>
            </div>

            {/* quote */}
            <div className="rounded-lg bg-white/90 p-4 sm:p-5 md:p-6 shadow min-h-[120px] sm:min-h-[160px] md:min-h-[200px]">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[26px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] text-[#0b1b2b] whitespace-pre-line">
                "{t('commentShowcase.comment1.quote')}"
              </p>
            </div>
          </div>

        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6">
          {/* left image */}
          <div
            className="relative col-span-12 md:col-span-7 h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-md
                       transform-gpu transition-transform duration-300 ease-out
                       hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg hover:z-10 cursor-pointer"
          >
            <img
              src="/images/comment2.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex flex-col">
              <div className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-wide">
                {t('commentShowcase.comment2.label')}
              </div>
              <div className="self-end text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
                {t('commentShowcase.comment2.number')}
              </div>
            </div>
          </div>

          {/* right quote card */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] rounded-md border-[4px] sm:border-[6px] md:border-[8px] border-[#0E4E7F] bg-[#dfeafe] px-4 sm:px-5 md:px-6 lg:px-6 py-4 sm:py-5 md:py-8
                         transform-gpu transition-transform duration-300 ease-out
                         hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg hover:z-10 cursor-pointer"
            >
              <div className="h-full pr-1 flex items-center pb-16 sm:pb-20 md:pb-24 lg:pb-28">
    <p className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[26px]
                  leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[50px]
                  text-[#0b1b2b] whitespace-pre-line">
      "{t('commentShowcase.comment2.quote')}"
    </p>
  </div>

              <div className="absolute left-4 sm:left-5 md:left-6 bottom-4 sm:bottom-5 md:bottom-6 flex items-center gap-2.5 sm:gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                  <img src="/images/user2.png" alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#0b1b2b]">
                    {t('commentShowcase.comment2.user.name')}
                  </div>
                  <div className="mt-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#0b1b2b]/70">
                    {t('commentShowcase.comment2.user.title')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 3 ================= */}
        <div
          className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-md
                     transform-gpu transition-transform duration-300 ease-out
                     hover:scale-[1.04] hover:-translate-y-1 hover:shadow-lg hover:z-10 cursor-pointer"
        >
          <img
            src="/images/comment3.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-wide">
            {t('commentShowcase.comment3.label')}
          </div>
          <div className="absolute right-3 sm:right-4 md:right-5 top-3 sm:top-4 md:top-5 text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            {t('commentShowcase.comment3.number')}
          </div>

          {/* bottom-left group */}
          <div className="absolute left-3 sm:left-4 md:left-5 bottom-3 sm:bottom-4 md:bottom-5 w-[90%] sm:w-[480px] md:w-[540px]">
            {/* points */}
            <div className="absolute left-3 sm:left-4 md:left-5 bottom-3 sm:bottom-4 md:bottom-5 w-[94%] sm:w-[340px] md:w-[420px] lg:w-[560px]">
              {/* chip */}
              <div className="mb-3 sm:mb-4 flex items-center">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden rounded-full ring-2 ring-white/90">
                  <img src="/images/user3.png" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3 sm:ml-4 rounded bg-white/90 px-3 sm:px-4 py-2 sm:py-2.5 shadow">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#0b1b2b]">
                    {t('commentShowcase.comment3.user.name')}
                  </div>
                  <div className="mt-1 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[22px] text-[#0b1b2b]/70">
                    {t('commentShowcase.comment3.user.title')}
                  </div>
                </div>
              </div>

              {/* points */}
              <div className="rounded-lg bg-white/90 p-4 sm:p-5 md:p-6 shadow min-h-[120px] sm:min-h-[160px] md:min-h-[200px]">
                <ul className="space-y-2 sm:space-y-2.5 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] text-[#0b1b2b] whitespace-pre-line">
                  <li>
                    "{t('commentShowcase.comment3.quote')}"
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
