// components/CommentShowcase.tsx
"use client"

export default function CommentShowcase() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      {/* Match top component width */}
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 md:px-6 space-y-4 sm:space-y-5 md:space-y-6">
        {/* ================= BLOCK 1 ================= */}
        <div className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-md">
          <img
            src="/images/comment1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* labels */}
          <div className="absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-wide">
            mượt mà hơn
          </div>
          <div className="absolute right-3 sm:right-4 md:right-5 top-3 sm:top-4 md:top-5 text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            01
          </div>

          {/* chip + quote (right/bottom) */}
          <div className="absolute right-3 sm:right-4 md:right-5 bottom-3 sm:bottom-4 md:bottom-5 w-[90%] sm:w-[520px] md:w-[560px]">
            {/* chip */}
            <div className="mb-2 sm:mb-3 flex items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                <img src="/images/user1.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="ml-2 sm:ml-3 rounded bg-white/90 px-2 sm:px-3 py-1.5 sm:py-2 shadow">
                <div className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-semibold leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#0b1b2b]">
                  NGUYỄN DƯƠNG NGA
                </div>
                <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#0b1b2b]/70">
                  QUẢN LÝ CUNG ỨNG THỰC PHẨM · TP.HCM
                </div>
              </div>
            </div>

            {/* quote */}
            <div className="rounded bg-white/90 p-3 sm:p-4 shadow">
              <p className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[26px] text-[#0b1b2b]">
                “Chúng tôi nhận được liên hệ trực tiếp từ một doanh nghiệp thực phẩm Nhật Bản. Nhờ
                khả năng thống kê dữ liệu, việc trao đổi trở nên trôi chảy và hoàn toàn yên tâm.”
              </p>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6">
          {/* left image */}
          <div className="relative col-span-12 md:col-span-7 h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-md">
            <img
              src="/images/comment2.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute right-3 sm:right-4 top-3 sm:top-4 flex flex-col">
              <div className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-wide">
                sớm hơn
              </div>
              <div className="self-end text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
                02
              </div>
            </div>
          </div>

          {/* right quote card */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] rounded-md border-[4px] sm:border-[6px] md:border-[8px] border-[#0E4E7F] bg-[#dfeafe] px-4 sm:px-5 md:px-6 lg:px-6 py-4 sm:py-5 md:py-8">
              <p className="pr-1 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-[24px] sm:leading-[30px] md:leading-[36px] lg:leading-[40px] text-[#0b1b2b]">
                “Trên Alibaba, chúng tôi gần như không nhận được phản hồi trong nửa năm. Nhưng chỉ
                sau hai tháng trên GMAJOR, một công ty thương mại Nhật đã chủ động liên hệ.”
              </p>

              <div className="absolute left-4 sm:left-5 md:left-6 bottom-4 sm:bottom-5 md:bottom-6 flex items-center gap-2.5 sm:gap-3">
                <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                  <img src="/images/user2.png" alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-semibold leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#0b1b2b]">
                    TRẦN MẠNH HÙNG
                  </div>
                  <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#0b1b2b]/70">
                    CHỦ XƯỞNG DỆT MAY · HÀ NỘI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 3 ================= */}
        <div className="relative h-[260px] sm:h-[340px] md:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-md">
          <img
            src="/images/comment3.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute left-3 sm:left-4 md:left-5 top-3 sm:top-4 md:top-5 text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold tracking-wide">
            đơn giản hơn
          </div>
          <div className="absolute right-3 sm:right-4 md:right-5 top-3 sm:top-4 md:top-5 text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            03
          </div>

          {/* bottom-left group */}
          <div className="absolute left-3 sm:left-4 md:left-5 bottom-3 sm:bottom-4 md:bottom-5 w-[90%] sm:w-[480px] md:w-[540px]">
            {/* chip */}
            <div className="mb-2 sm:mb-3 flex items-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                <img src="/images/user3.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="ml-2 sm:ml-3 rounded bg-white/90 px-2 sm:px-3 py-1.5 sm:py-2 shadow">
                <div className="text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-semibold leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#0b1b2b]">
                  NGUYỄN TUẤN VŨ
                </div>
                <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[14px] sm:leading-[16px] md:leading-[18px] text-[#0b1b2b]/70">
                  NÔNG DÂN CÀ PHÊ · ĐẮK LẮK
                </div>
              </div>
            </div>

            {/* points */}
            <div className="rounded bg-white/90 p-3 sm:p-4 shadow">
              <ul className="space-y-1.5 sm:space-y-2 text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[26px] text-[#0b1b2b]">
                <li>
                  “Chúng tôi sẵn sàng đưa cà phê đặc sản ra thị trường quốc tế nhưng ít hiểu biết về
                  thương mại quốc tế.”
                </li>
                <li>
                  “Nhờ GMAJOR, những khâu đối ngoại được đồng bộ rõ ràng và khớp với thị trường
                  Nhật Bản.”
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
