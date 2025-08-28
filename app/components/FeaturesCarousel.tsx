"use client"

import { SetStateAction, useEffect, useState } from "react"

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

  // --- Mobile swipe (adds responsiveness without changing desktop behavior)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => setTouchStart(e.changedTouches[0].clientX)
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.changedTouches[0].clientX)
  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return
    const delta = touchEnd - touchStart
    if (Math.abs(delta) > 40) {
      if (delta < 0) next()
      else prev()
    }
    setTouchStart(null)
    setTouchEnd(null)
  }
  // ---

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-400 rounded-full" />
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-8 border-blue-800 rounded-full" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-xs font-bold">+</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-blue-900 mb-3 lg:mb-4">GMAJOR</h1>
          <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-black mx-auto mb-4 sm:mb-6" />

          <div className="space-y-1.5 sm:space-y-2 text-base sm:text-lg md:text-xl text-gray-700 px-2">
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
              className="absolute left-2 md:-left-8 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
          )}

          {/* Viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
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
                  className="flex-none px-1.5 sm:px-2 md:px-3"
                  style={{ width: `${100 / visible}%` }} // each slide is a fixed fraction of the viewport
                >
                  <div className="h-full bg-[#fff5ed] border-8 border-blue-800 shadow-lg rounded-sm flex flex-col">
                    <div className="bg-[#fff5ed] p-3 sm:p-4">
                      {/* consistent image box height */}
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                        <img src={f.image} alt={f.alt} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="px-2 pb-4 sm:pb-5 text-center w-full max-w-[280px] mx-auto">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900">{f.title}</h3>
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
              className="absolute right-2 md:-right-8 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
