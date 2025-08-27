// components/HeroGlobalMarket.tsx
"use client";

export default function HeroGlobalMarket() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-16">
        <div className="relative h-[520px] w-full overflow-hidden rounded-md">
          {/* Background image */}
          <img
            src="/images/global-market.png"
            alt="Global market"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* very light tint to help white text pop */}
          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          {/* Headline + subhead */}
          <div className="absolute left-12 top-12">
            <h1 className="text-white text-[46px] leading-[52px] font-extrabold tracking-[0.02em] uppercase">
              TỪ VIỆT NAM VƯƠN RA THẾ GIỚI
            </h1>
            <p className="mt-1 text-white/90 text-[20px] leading-[20px] font-semibold tracking-[0.16em] italic uppercase">
              GMAJOR SẼ LÀ NGƯỜI ĐỒNG HÀNH CÙNG BẠN
            </p>
          </div>

          {/* Frosted content card */}
          <div className="absolute left-12 top-[140px] w-[700px]">
            <div className="rounded-md bg-white/80 backdrop-blur-[1px] shadow-[0_8px_24px_rgba(0,0,0,0.18)] ring-1 ring-white/40">
              <div className="px-8 py-12">
                <p className="text-[24px] leading-[30px] text-[#0b1b2b]">
                  Kết nối với các doanh nghiệp toàn cầu mà không cần tham dự hội
                  chợ quốc tế.
                </p>
                <p className="mt-3 text-[24px] leading-[30px] text-[#0b1b2b]">
                  Vượt qua rào cản ngôn ngữ và giới thiệu sản phẩm/dịch vụ của bạn.
                </p>
                <p className="mt-3 text-[24px] leading-[30px] text-[#0b1b2b]">
                  Bắt đầu ngay hôm nay, hoàn toàn miễn phí &amp; không rủi ro.
                </p>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="#signup"
            className="absolute left-12 bottom-6 inline-flex items-center gap-5 rounded-full bg-[#eaf2ff] px-8 py-4 text-[20px] font-semibold text-[#0b1b2b] shadow-md"
          >
            Đăng ký ngay
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-inner">
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                {/* arrow-right */}
                <path d="M9.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
