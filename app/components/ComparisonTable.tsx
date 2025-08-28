type Logo = { src: string; alt?: string } | string

interface ComparisonTableProps {
  logos?: Logo[]
  heading?: string
  subtext?: string
}

export default function ComparisonTable({
  heading = "Sự khác biệt nằm ở tính phù hợp",
  subtext = `GMAJOR không phải là nền tảng duy nhất. Bên cạnh GMAJOR có rất nhiều nền tảng với ưu cũng như là nhược điểm khác nhau.
Dưới đây là bảng so sánh nhanh mà các doanh nghiệp Việt Nam có thể tham khảo:`,
  logos = [
    "/images/logo-gmajor.png",
    "/images/logo-alibaba.png",
    "/images/logo-yellow.png",
    "/images/logo-globy.png",
    "/images/logo-shopify.png",
  ],
}: ComparisonTableProps) {
  const logoItems = logos.map((l, i) =>
    typeof l === "string" ? { src: l, alt: `Logo ${i + 1}` } : l
  )

  const rows: { label: string; values: string[] }[] = [
    { label: "Miễn phí đăng bài sản phẩm/dịch vụ", values: ["Có", "Không, chi phí cao", "Không, chi phí thấp", "Có", "Không"] },
    { label: "Số lượng doanh nghiệp đã đăng ký (quy mô toàn cầu)", values: ["Trung bình", "Lớn", "Trung bình", "Trung bình", "Lớn"] },
    { label: "Hỗ trợ đa ngôn ngữ", values: ["Không giới hạn", "Tập trung vào tiếng Anh", "Không có", "Tuỳ loại ngôn ngữ", "Tập trung vào tiếng Anh"] },
    { label: "Khả năng hiện thị (áp dụng cho doanh nghiệp Việt Nam)", values: ["Cao (tập trung vào doanh nghiệp Nhật Bản/Mỹ/Trung Quốc)", "Thấp (mức độ cạnh tranh cao)", "Thấp", "Trung bình", "Thấp"] },
    { label: "Mô tả sản phẩm tối ưu với AI", values: ["Có", "Không", "Không", "Không", "Không"] },
    { label: "Hỗ trợ kết nối sản phẩm/dịch vụ", values: ["Không bắt buộc", "Không", "Không", "Không", "Không"] },
    { label: "Chi phí", values: ["Thấp", "Cao", "Trung bình", "Trung bình", "Cao (bao gồm chi phí tháng và quảng cáo)"] },
  ]

  const colCount = logoItems.length
  const pad = (arr: string[]) => Array.from({ length: colCount }, (_, i) => arr[i] ?? "—")

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-2 py-8 sm:py-12 md:py-14 lg:py-16">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-extrabold text-indigo-800 uppercase leading-tight">
            {heading}
          </h2>

          <hr className="mx-auto my-4 h-[2px] w-28 sm:w-40 md:w-48 lg:w-40 xl:w-60 border-0 rounded bg-indigo-800" />

          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-xl text-indigo-700 italic leading-snug">
            {subtext}
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
                  const vals = pad(r.values)
                  const lastRow = ri === rows.length - 1
                  return (
                    <tr key={ri} className="align-middle text-center">
                      {/* left label */}
                      <th
                        scope="row"
                        className={`bg-gray-100 text-gray-800 text-[11px] sm:text-sm md:text-base lg:text-sm xl:text-lg font-semibold p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 text-left border-t border-gray-200 leading-snug ${
                          lastRow ? "rounded-bl-xl" : ""
                        }`}
                      >
                        {r.label}
                      </th>

                      {vals.map((v, ci) => {
                        const isLastCol = ci === colCount - 1
                        return (
                          <td
                            key={ci}
                            className={`p-2 sm:p-3 md:p-4 lg:p-3 xl:p-4 text-[11px] sm:text-sm md:text-base lg:text-sm xl:text-lg text-gray-700 border-t border-gray-200 leading-snug ${
                              lastRow && isLastCol ? "rounded-br-xl" : ""
                            } break-words`}
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
