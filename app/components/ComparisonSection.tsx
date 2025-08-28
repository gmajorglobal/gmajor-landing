// components/ComparisonSection.tsx
"use client"

export default function ComparisonSection() {
  const rows: {
    id: number
    logo?: string
    text: string
    bg: string
    rightIcon?: string
    highlight?: boolean
  }[] = [
    {
      id: 1,
      logo: "/images/logo-alibaba.png",
      text:
        "Một trong những nền tảng B2B lớn nhất thế giới, nhưng mức độ cạnh tranh quá cao khiến doanh nghiệp vừa và nhỏ khó tạo được lợi thế. Thêm vào đó, chi phí lớn làm cho việc đánh giá tỷ lệ hoàn vốn (ROI) trở nên khó khăn.",
      bg: "bg-[#f5f6f7]",
    },
    {
      id: 2,
      text:
        "Dễ sử dụng, nhưng hạn chế về tối ưu ngôn ngữ và khả năng hỗ trợ thương lượng. Do đặc thù nền tảng, tình trạng nhận nhiều email rác cũng là điều khó tránh.",
      bg: "bg-[#eceff1]",
      rightIcon: "/images/logo-yellow.png",
    },
    {
      id: 3,
      logo: "/images/logo-globy.png",
      text:
        "Dễ sử dụng, nhưng hạn chế về tối ưu ngôn ngữ và khả năng hỗ trợ thương lượng. Do đặc thù nền tảng, tình trạng nhận nhiều email rác cũng là điều khó tránh.",
      bg: "bg-[#eceff1]",
    },
    {
      id: 4,
      text:
        "Giải pháp tốt nhất để xây dựng cửa hàng trực tuyến, nhưng lại thiếu về bản lề và chưa hỗ trợ đầy đủ cho các hoạt động B2B.",
      bg: "bg-[#f5f6f7]",
      rightIcon: "/images/logo-shopify.png",
    },
    {
      id: 5,
      logo: "/images/logo-gmajor.png",
      text:
        "Khác biệt ở chỗ mang đến hệ thống kết nối nhanh chóng và hiệu quả giữa doanh nghiệp Việt Nam với đối tác quốc tế, đặc biệt tập trung vào các thị trường trọng điểm: Nhật Bản, Hoa Kỳ và Trung Quốc.",
      bg: "bg-[#dfeafe]",
      highlight: true,
    },
  ]

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1280px] px-2 sm:px-4 md:px-6">
        <div className="space-y-2 sm:space-y-3 md:space-y-3.5">
          {rows.map(({ id, logo, text, bg, rightIcon }) => (
            <div
              key={id}
              className={[
                "relative rounded-lg sm:rounded-md",
                "flex items-center",
                "gap-3 sm:gap-4 md:gap-6",
                "px-3 sm:px-4 md:px-6",
                "py-3 sm:py-4 md:py-5",
                bg,
              ].join(" ")}
            >
              {/* LEFT: logo (optional) */}
              {logo && (
                <div className="shrink-0">
                  <div className="flex h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 lg:h-28 lg:w-[124px] items-center justify-center rounded-md">
                    <img
                      src={logo}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              )}

              {/* TEXT */}
              <p className="flex-1 min-w-0 break-words text-xs sm:text-sm md:text-base lg:text-[22px] leading-5 sm:leading-6 md:leading-7 text-[#1f2937]">
                {text}
              </p>

              {/* RIGHT: icon (optional) */}
              {rightIcon && (
                <div className="shrink-0">
                  <div className="flex h-12 w-14 sm:h-16 sm:w-20 md:h-20 md:w-24 lg:h-28 lg:w-[124px] items-center justify-center rounded-md">
                    <img
                      src={rightIcon}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
