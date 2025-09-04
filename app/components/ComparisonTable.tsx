"use client"

import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

type Logo = { src: string; alt?: string } | string

interface ComparisonTableProps {
  logos?: Logo[]
  locale?: Locale
}

export default function ComparisonTable({
  locale = 'vi',
  logos = [
    "/images/logo-gmajor.png",
    "/images/logo-alibaba.png",
    "/images/logo-yellow.png",
    "/images/logo-globy.png",
    "/images/logo-shopify.png",
  ],
}: ComparisonTableProps) {
  const { t } = useTranslation(locale);
  
  const logoItems = logos.map((l, i) =>
    typeof l === "string" ? { src: l, alt: `Logo ${i + 1}` } : l
  )

  const rows: { labelKey: string; valuesKey: string }[] = [
    { labelKey: "comparisonTable.rows.freePosting.label", valuesKey: "comparisonTable.rows.freePosting.values" },
    { labelKey: "comparisonTable.rows.companyCount.label", valuesKey: "comparisonTable.rows.companyCount.values" },
    { labelKey: "comparisonTable.rows.multiLanguage.label", valuesKey: "comparisonTable.rows.multiLanguage.values" },
    { labelKey: "comparisonTable.rows.visibility.label", valuesKey: "comparisonTable.rows.visibility.values" },
    { labelKey: "comparisonTable.rows.aiOptimization.label", valuesKey: "comparisonTable.rows.aiOptimization.values" },
    { labelKey: "comparisonTable.rows.connectionSupport.label", valuesKey: "comparisonTable.rows.connectionSupport.values" },
    { labelKey: "comparisonTable.rows.cost.label", valuesKey: "comparisonTable.rows.cost.values" },
  ]

  const colCount = logoItems.length
  const pad = (arr: string[]) => Array.from({ length: colCount }, (_, i) => arr[i] ?? "—")

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-2 py-8 sm:py-12 md:py-14 lg:py-16">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-extrabold text-indigo-800 uppercase leading-tight whitespace-pre-line">
            {t('comparisonTable.heading')}
          </h2>

          <hr className="mx-auto my-4 h-[2px] w-28 sm:w-40 md:w-48 lg:w-40 xl:w-60 border-0 rounded bg-indigo-800" />

          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xl text-indigo-700 italic leading-snug whitespace-pre-line">
            {t('comparisonTable.subtext')}
          </p>
        </div>

        {/* Table (unchanged layout; just scales down on mobile + lg) */}
        <div className="overflow-x-auto">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm xl:min-w-[1080px]">
            <table className="w-full table-auto md:table-fixed border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-[18%] bg-gray-100 text-gray-700 text-[11px] sm:text-sm md:text-base lg:text-sm xl:text-sm font-semibold p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 text-left rounded-tl-xl border-b border-gray-200">
                    {/* empty label header */}
                  </th>
                  {logoItems.map((l, i) => (
                    <th
                      key={i}
                      className={`p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 border-b border-gray-200 ${
                        i === logoItems.length - 1 ? "rounded-tr-xl" : ""
                      }`}
                    >
                      <img
                        src={l.src}
                        alt={l.alt || `Logo ${i + 1}`}
                        className="mx-auto h-10 sm:h-12 md:h-16 lg:h-14 xl:h-16 object-contain"
                      />
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((r, ri) => {
                  const vals = pad(t(r.valuesKey))
                  const lastRow = ri === rows.length - 1
                  return (
                    <tr key={ri} className="group align-middle text-center">
                      {/* left label */}
                      <th
                        scope="row"
                        className={`bg-gray-100 text-gray-800 text-[11px] sm:text-sm md:text-base lg:text-sm xl:text-lg font-semibold p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 text-left border-t border-gray-200 leading-snug transition-colors duration-150 group-hover:bg-indigo-50 whitespace-pre-line ${
                          lastRow ? "rounded-bl-xl" : ""
                        }`}
                      >
                        {t(r.labelKey)}
                      </th>

                      {vals.map((v, ci) => {
                        const isLastCol = ci === colCount - 1
                        return (
                          <td
                            key={ci}
                            className={`p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 text-[11px] sm:text-sm md:text-base lg:text-sm xl:text-lg text-gray-700 border-t border-gray-200 leading-snug break-words transition-colors duration-150 group-hover:bg-indigo-50 whitespace-pre-line ${
                              lastRow && isLastCol ? "rounded-br-xl" : ""
                            }`}
                          >
                            {v}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
