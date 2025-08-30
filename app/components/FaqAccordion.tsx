// components/FaqAccordion.tsx
"use client";

import { useState } from "react";

type Faq = { id: number; q: string; a: JSX.Element };

const faqs: Faq[] = [
  {
    id: 1,
    q: "Có cần phải trả phí để đăng ký tài khoản không ?",
    a: (
      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700">
        Không. Người dùng không cần phải trả phí cho việc tạo tài khoản cũng như là đăng bài cho sản phẩm/dịch vụ.
      </p>
    ),
  },
  {
    id: 2,
    q: "Có bất kỳ khó khăn nào nếu không thể giao tiếp bằng tiếng Nhật hay tiếng Anh không?",
    a: (
      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700">
        Không. Hệ thống dịch tự động giúp giao tiếp trôi chảy bằng tiếng Nhật, tiếng Anh và tiếng Việt.
      </p>
    ),
  },
  {
    id: 3,
    q: "Những loại công ty nào được đăng ký?",
    a: (
      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700">
        Chủ yếu là các nhà sản xuất, công ty thực phẩm và công ty thương mại của Nhật Bản, cũng như các nhà mua hàng từ Mỹ và Trung Quốc.
      </p>
    ),
  },
  {
    id: 4,
    q: "Các yêu cầu từ nước ngoài có đến ngay lập tức không?  ",
    a: (
      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700">
        Điều đó phụ thuộc vào ngành nghề và sản phẩm của bạn, nhưng các yêu cầu phù hợp có thể đến rất nhanh.
      </p>
    ),
  },
  {
    id: 5,
    q: "Các bạn có hỗ trợ đàm phán không?",
    a: (
      <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700">
        Có, dịch vụ hỗ trợ tùy chọn bởi các chuyên gia địa phương luôn sẵn sàng.
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
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-14 lg:py-16">
        <h2 className="mb-6 sm:mb-8 md:mb-10 text-center font-extrabold tracking-tight text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Những thắc mắc thường gặp
        </h2>

        <div className="mx-auto w-full max-w-[1200px]">
          {faqs.map(({ id, q, a }) => {
            const isOpen = openId === id;
            return (
              <div key={id} className="mb-3 sm:mb-4 rounded-2xl overflow-hidden">
                {/* header */}
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${id}`}
                  className={[
                    "flex w-full items-center justify-between text-left text-gray-700 border rounded-2xl transition-all duration-300 ease-in-out",
                    "px-4 sm:px-5 md:px-8 py-4 sm:py-5 md:py-7",
                    isOpen
                      ? "bg-blue-50 border-blue-200 text-blue-900 shadow-md"
                      : "bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900",
                  ].join(" ")}
                >
                  <span className="text-base sm:text-lg md:text-xl font-semibold">{q}</span>
                  <svg
                    className={[
                      "shrink-0 transition-transform duration-300 ease-in-out",
                      "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
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
                    <div className="px-4 sm:px-5 md:px-8 py-4 sm:py-6 md:py-8 bg-gray-50 border-x border-b border-gray-200">
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
