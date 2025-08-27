export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-2 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text and CTA */}
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-6xl font-black text-black leading-tight">
            GMAJOR cùng bạn vươn ra thế giới
          </h1>
          
          <div className="space-y-4 text-lg text-black leading-relaxed">
            <p>
              Trải nghiệm giao thương trực tiếp với các doanh nghiệp từ Nhật Bản, Mỹ, Trung Quốc và khắp nơi trên thế giới -{' '}
              <span className="font-black text-black">"HOÀN TOÀN MIỄN PHÍ"</span>
            </p>
            <p>
              Tiếp cận với thị trường quốc tế từ hôm nay mà không cần hội chợ thương mại hay tốn kém cho trung gian
            </p>
          </div>
          
          <button className="bg-blue-800 hover:bg-blue-700 transition-colors duration-300 text-white px-8 py-4 rounded-lg font-black text-lg flex items-center space-x-3 group shadow-lg">
            <span>Đăng ký ngay</span>
            <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
        
        {/* Right Section - Image */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="w-full h-full rounded-3xl overflow-hidden">
            {/* Real GMAJOR top page image */}
            <img 
              src="/images/gmajor-toppage.png" 
              alt="GMAJOR Business Professionals" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 