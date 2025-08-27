"use client"

import { useEffect, useState } from "react"

export default function FeaturesCarousel() {
  const features = [
    { id: 1, title: "Kết nối trực tiếp với doanh nghiệp toàn cầu", image: "/images/casorel1.png", alt: "Business collaboration puzzle pieces" },
    { id: 2, title: "Hệ thống tự động phiên dịch đa ngôn ngữ", image: "/images/casorel2.png", alt: "Translate key on keyboard" },
    { id: 3, title: "Kết nối để tiến tới đàm phán thực sự", image: "/images/casorel3.png", alt: "Business meeting and negotiation" },
    { id: 4, title: "Miễn phí đăng bài sản phẩm/dịch vụ", image: "/images/casorel4.png", alt: "Free tag on label" },
    { id: 5, title: "Mô tả sản phẩm tối ưu với AI", image: "/images/casorel5.png", alt: "AI concept with digital elements" },
    { id: 6, title: "Miễn phí tính năng cơ bản – Gói nâng cấp chi phí hợp lý", image: "/images/casorel6.png", alt: "Finger pressing upgrade key" },
  ]

  // Responsive: 1 (mobile), 2 (tablet), 3 (desktop)
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth
      setVisible(w < 640 ? 1 : w < 1024 ? 2 : 3)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const MAX_INDEX = Math.max(0, features.length - visible)
  const STEP_PCT = 100 / visible

  const [index, setIndex] = useState(0)
  // Keep index in range when `visible` changes
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, features.length - visible)))
  }, [visible])

  const next = () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1))
  const prev = () => setIndex((i) => (i <= 0 ? MAX_INDEX : i - 1))

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full" />
              <div className="w-4 h-4 border-8 border-blue-800 rounded-full" />
              <div className="w-3 h-3 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl font-serif text-blue-900 mb-4">GMAJOR</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-6" />

          <div className="space-y-2 text-xl text-gray-700">
            <p>Nền tảng kết nối doanh nghiệp B2B</p>
            <p>Mang đến giải pháp mở rộng thị trường quốc tế cho doanh nghiệp Việt Nam</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          {features.length > visible && (
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
          )}

          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track (no fixed width) */}
            <div
              className="flex transition-transform duration-500 ease-in-out will-change-transform w-full"
              style={{ transform: `translateX(-${index * STEP_PCT}%)` }}
              aria-roledescription="carousel"
              aria-live="polite"
            >
              {features.map((f) => (
                <div
                  key={f.id}
                  className="flex-none px-3"
                  style={{ width: `${100 / visible}%` }} // each slide is a fixed fraction of the viewport
                >
                  <div className="h-full bg-[#fff5ed] border-8 border-blue-800 shadow-lg rounded-sm flex flex-col">
                    <div className="bg-[#fff5ed] p-4">
                      {/* consistent image box height */}
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                        <img src={f.image} alt={f.alt} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="px-2 pb-5 text-center w-[280px] mx-auto">
                      <h3 className="text-xl font-bold text-blue-900">{f.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          {features.length > visible && (
            <button
              onClick={next}
              aria-label="Next"
              className="absolute -right-14 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
