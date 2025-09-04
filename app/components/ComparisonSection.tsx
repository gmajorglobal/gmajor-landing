// components/ComparisonSection.tsx
"use client"

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface ComparisonSectionProps {
  locale?: Locale;
}

export default function ComparisonSection({ locale = 'vi' }: ComparisonSectionProps) {
  const { t, isLoading } = useTranslation(locale);
  const rows: {
    id: number
    logo?: string
    textKey: string
    bg: string
    rightIcon?: string
    highlight?: boolean
  }[] = [
    {
      id: 1,
      logo: "/images/logo-alibaba.png",
      textKey: "comparisonSection.alibaba",
      bg: "bg-[#f5f6f7]",
    },
    {
      id: 2,
      textKey: "comparisonSection.yellow",
      bg: "bg-[#eceff1]",
      rightIcon: "/images/logo-yellow.png",
    },
    {
      id: 3,
      logo: "/images/logo-globy.png",
      textKey: "comparisonSection.globy",
      bg: "bg-[#eceff1]",
    },
    {
      id: 4,
      textKey: "comparisonSection.shopify",
      bg: "bg-[#f5f6f7]",
      rightIcon: "/images/logo-shopify.png",
    },
    {
      id: 5,
      logo: "/images/logo-gmajor.png",
      textKey: "comparisonSection.gmajor",
      bg: "bg-[#dfeafe]",
      highlight: true,
    },
  ]

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-4 md:px-6">
        <div className="space-y-2 sm:space-y-3 md:space-y-3.5">
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="rounded-lg h-20 bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : (
            <>
          {rows.map(({ id, logo, textKey, bg, rightIcon, highlight }) => (
            <div
              key={id}
              className={[
                "group relative rounded-lg sm:rounded-md",
                "flex items-center",
                "gap-2 sm:gap-3 md:gap-4",
                "px-3 sm:px-4 md:px-6",
                "py-3 sm:py-4 md:py-5",
                bg,
                // hover animation
                "transform-gpu will-change-[transform]",
                "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out",
                "hover:-translate-y-1 hover:scale-[1.01] md:hover:scale-[1.02] hover:shadow-lg",
                // subtle ring (stronger on highlighted row)
                highlight
                  ? "ring-1 ring-[#0E4E7F]/30 hover:ring-2 hover:ring-[#0E4E7F]/40"
                  : "ring-0 hover:ring-1 hover:ring-black/5",
                "cursor-pointer",
              ].join(" ")}
            >
              {/* LEFT: logo (optional) */}
              {logo && (
                <div className="shrink-0">
                  <div className="flex h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 lg:h-28 lg:w-[124px] items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={logo}
                      alt=""
                      className="max-h-full max-w-full object-contain motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}

              {/* TEXT */}
              <p className="flex-1 min-w-0 break-words text-center text-xs sm:text-sm md:text-base lg:text-[22px] leading-5 sm:leading-6 md:leading-7 text-[#1f2937] whitespace-pre-line">
                {t(textKey)}
              </p>

              {/* RIGHT: icon (optional) */}
              {rightIcon && (
                <div className="shrink-0">
                  <div className="flex h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 lg:h-28 lg:w-[124px] items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={rightIcon}
                      alt=""
                      className="max-h-full max-w-full object-contain motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
