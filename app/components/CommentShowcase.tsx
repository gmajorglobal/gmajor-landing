// components/CommentShowcase.tsx
"use client"

export default function CommentShowcase() {
  return (
    <section className="w-full bg-white py-16">
      {/* Match top component width */}
      <div className="mx-auto w-full max-w-[1280px] px-6 space-y-6">
        {/* ================= BLOCK 1 ================= */}
        <div className="relative h-[520px] w-full overflow-hidden rounded-md">
          <img
            src="/images/comment1.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* labels */}
          <div className="absolute left-5 top-5 text-white text-[32px] font-semibold tracking-wide">
            mượt mà hơn
          </div>
          <div className="absolute right-5 top-5 text-white text-[40px] font-semibold">
            01
          </div>

          {/* chip + quote (right/bottom) */}
          <div className="absolute right-5 bottom-5 w-[560px]">
            {/* chip */}
            <div className="mb-3 flex items-center">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                <img src="/images/user1.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="ml-3 rounded bg-white/90 px-3 py-2 shadow">
                <div className="text-[16px] font-semibold leading-[18px] text-[#0b1b2b]">
                  NGUYỄN DƯƠNG NGA
                </div>
                <div className="mt-1 text-[16px] leading-[18px] text-[#0b1b2b]/70">
                  QUẢN LÝ CUNG ỨNG THỰC PHẨM · TP.HCM
                </div>
              </div>
            </div>

            {/* quote */}
            <div className="rounded bg-white/90 p-4 shadow">
              <p className="text-[18px] leading-[26px] text-[#0b1b2b]">
                “Chúng tôi nhận được liên hệ trực tiếp từ một doanh nghiệp thực phẩm Nhật Bản. Nhờ
                khả năng thống kê dữ liệu, việc trao đổi trở nên trôi chảy và hoàn toàn yên tâm.”
              </p>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid grid-cols-12 gap-6">
          {/* left image */}
          <div className="relative col-span-12 md:col-span-7 h-[520px] overflow-hidden rounded-md">
            <img
              src="/images/comment2.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute right-4 top-4 flex flex-col">
              <div className="text-white text-[32px] font-semibold tracking-wide">sớm hơn</div>
              <div className="self-end text-white text-[40px] font-semibold">02</div>
            </div>
          </div>

          {/* right quote card */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative h-[520px] rounded-md border-[8px] border-[#0E4E7F] bg-[#dfeafe] px-6 py-8">
              <p className="pr-1 text-[28px] leading-[40px] text-[#0b1b2b]">
                “Trên Alibaba, chúng tôi gần như không nhận được phản hồi trong nửa năm. Nhưng chỉ
                sau hai tháng trên GMAJOR, một công ty thương mại Nhật đã chủ động liên hệ.”
              </p>

              <div className="absolute left-6 bottom-6 flex items-center gap-3">
                <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                  <img src="/images/user2.png" alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold leading-[18px] text-[#0b1b2b]">
                    TRẦN MẠNH HÙNG
                  </div>
                  <div className="mt-1 text-[16px] leading-[18px] text-[#0b1b2b]/70">
                    CHỦ XƯỞNG DỆT MAY · HÀ NỘI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BLOCK 3 ================= */}
        <div className="relative h-[520px] w-full overflow-hidden rounded-md">
          <img
            src="/images/comment3.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute left-5 top-5 text-white text-[32px] font-semibold tracking-wide">
            đơn giản hơn
          </div>
          <div className="absolute right-5 top-5 text-white text-[40px] font-semibold">03</div>

          {/* bottom-left group */}
          <div className="absolute left-5 bottom-5 w-[540px]">
            {/* chip */}
            <div className="mb-3 flex items-center">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/90">
                <img src="/images/user3.png" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="ml-3 rounded bg-white/90 px-3 py-2 shadow">
                <div className="text-[16px] font-semibold leading-[18px] text-[#0b1b2b]">
                  NGUYỄN TUẤN VŨ
                </div>
                <div className="mt-1 text-[16px] leading-[18px] text-[#0b1b2b]/70">
                  NÔNG DÂN CÀ PHÊ · ĐẮK LẮK
                </div>
              </div>
            </div>

            {/* points */}
            <div className="rounded bg-white/90 p-4 shadow">
              <ul className="space-y-2 text-[18px] leading-[26px] text-[#0b1b2b]">
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
