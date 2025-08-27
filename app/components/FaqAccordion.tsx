// components/FaqAccordion.tsx
"use client";

import { useState } from "react";

type Faq = { id: number; q: string; a: JSX.Element };

const faqs: Faq[] = [
  {
    id: 1,
    q: "GMAJOR là gì và dành cho ai?",
    a: (
      <p className="text-lg md:text-xl leading-12 text-gray-700">
        GMAJOR là một nền tảng B2B thông minh giúp các doanh nghiệp kết nối và giao
        thương xuyên quốc gia — đặc biệt là giữa Việt Nam, Nhật Bản, Hoa Kỳ và ASEAN.
        Dù bạn là nhà sản xuất, nhà nhập khẩu, công ty thương mại hay startup, GMAJOR
        đều giúp bạn mở rộng mạng lưới mà không gặp rào cản về ngôn ngữ hay chi phí cao.
      </p>
    ),
  },
  {
    id: 2,
    q: "Sử dụng GMAJOR có tốn phí không?",
    a: (
      <p className="text-lg md:text-xl leading-12 text-gray-700">
        Hoàn toàn không. GMAJOR cung cấp gói miễn phí hoàn toàn, bao gồm đăng ký tài khoản,
        đăng sản phẩm, gửi yêu cầu báo giá (RFQ), nhắn tin và trò chuyện đa ngôn ngữ.
        Các nâng cấp trả phí như banner quảng cáo hoặc huy hiệu xác thực là tùy chọn.
      </p>
    ),
  },
  {
    id: 3,
    q: "Tôi không thông thạo tiếng Anh, tiếng Nhật hay tiếng Việt — làm sao để giao tiếp?",
    a: (
      <p className="text-lg md:text-xl leading-12 text-gray-700">
        Đừng lo! GMAJOR có tính năng trò chuyện đa ngôn ngữ tích hợp, cho phép bạn gõ bằng
        ngôn ngữ của mình và hệ thống sẽ tự động dịch sang ngôn ngữ của đối tác. Không cần
        phiên dịch viên hay email dài dòng — chỉ cần gõ và gửi.
      </p>
    ),
  },
  {
    id: 4,
    q: "Tôi đang tìm nhà cung cấp hoặc người mua. GMAJOR giúp được gì?",
    a: (
      <div className="space-y-4">
        <p className="text-lg md:text-xl leading-12 text-gray-700">Bạn có thể:</p>
        <ul className="pl-6 list-disc space-y-3 text-lg md:text-xl leading-12 text-gray-700">
          <li>
            <strong className="text-main hover:text-blue-700">
              Đăng sản phẩm hoặc dịch vụ để tăng khả năng hiển thị
            </strong>
          </li>
          <li>
            <strong className="text-main hover:text-blue-700">
              Gửi Yêu cầu báo giá (RFQ) đến nhiều đối tác đã xác thực cùng lúc
            </strong>
          </li>
          <li>
            <strong className="text-main hover:text-blue-700">
              Sử dụng công cụ Gửi đề xuất hàng loạt để tiết kiệm thời gian
            </strong>
          </li>
          <li>
            <strong className="text-main hover:text-blue-700">
              Tận dụng công cụ kết nối thông minh để tìm các đối tác kinh doanh phù hợp nhất
            </strong>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    q: "Người dùng trên GMAJOR có được xác thực không? Tôi có thể tin tưởng họ không?",
    a: (
      <p className="text-lg md:text-xl leading-12 text-gray-700">
        Có. GMAJOR xem xét và xác thực thủ công tất cả các tài khoản doanh nghiệp trước khi
        cho phép đăng bài và nhắn tin. Bạn cũng có thể đăng ký Huy hiệu Xác thực để tăng uy tín
        và khả năng hiển thị. Đây là một môi trường an toàn cho người dùng B2B nghiêm túc.
      </p>
    ),
  },
  {
    id: 6,
    q: "GMAJOR khác gì so với Alibaba hay các nhóm Facebook?",
    a: (
      <p className="text-lg md:text-xl leading-12 text-gray-700">
        So với Alibaba: GMAJOR hoàn toàn miễn phí, không phụ thuộc vào quảng cáo và dễ sử dụng hơn
        cho các doanh nghiệp vừa và nhỏ (SMEs).
        <br />
        So với các nhóm Facebook: GMAJOR cung cấp người dùng đã xác thực, các tính năng có cấu trúc
        và không có spam — với các công cụ B2B thực sự như trò chuyện đa ngôn ngữ, RFQ và kết nối.
      </p>
    ),
  },
  {
    id: 7,
    q: "Tôi mới bắt đầu kinh doanh và chưa có khách hàng. Tôi có nên dùng GMAJOR không?",
    a: (
      <p className="text-lg md:text-xl leading-12 text-gray-700">
        Chắc chắn rồi! GMAJOR rất lý tưởng cho các doanh nghiệp mới, startup và nhà cung cấp nhỏ.
        Bạn không cần có mạng lưới hay ngân sách marketing lớn — chỉ cần tạo hồ sơ, đăng sản phẩm
        và để GMAJOR giúp bạn tiếp cận người mua quốc tế một cách nhanh chóng.
      </p>
    ),
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <section className="bg-gray-50 lg:bg-white transition-all duration-500 ease-in-out">
      {/* match the top section width */}
      <div className="mx-auto w-full max-w-[1280px] px-6 py-12 lg:py-24">
        <h2 className="mb-10 text-center font-extrabold tracking-tight text-gray-900 text-4xl lg:text-5xl">
          Bạn còn thắc mắc về GMAJOR?
        </h2>

        <div className="mx-auto w-full max-w-[1200px]">
          {faqs.map(({ id, q, a }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className="mb-4 rounded-2xl overflow-hidden">
                {/* header */}
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  className={[
                    "flex w-full items-center justify-between px-6 md:px-8 py-6 md:py-7 text-left text-gray-700 border",
                    "rounded-2xl transition-all duration-300 ease-in-out",
                    isOpen
                      ? "bg-blue-50 border-blue-200 text-blue-900 shadow-md"
                      : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900",
                  ].join(" ")}
                >
                  <span className="text-lg md:text-xl font-semibold">{q}</span>
                  <svg
                    className={[
                      "shrink-0 transition-transform duration-300 ease-in-out",
                      "w-7 h-7 md:w-8 md:h-8",
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
                    <div className="px-6 md:px-8 py-6 md:py-8 bg-gray-50 border-x border-b border-gray-200">
                      {a}
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
