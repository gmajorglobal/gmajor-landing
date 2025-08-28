export default function Header() {
  return (
    <header className="w-full bg-blue-800 py-3 md:py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-end space-x-3 sm:space-x-6 md:space-x-12">
          <a href="https://www.gmajor.biz/?lang=vi" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
            TRANG CHỦ
          </a>
          <a href="https://www.gmajor.biz/about-us?lang=vi" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
            VỀ CHÚNG TÔI
          </a>
          <a href="#contact-form" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
            LIÊN HỆ
          </a>
          <a href="https://www.gmajor.biz/blog?lang=vi" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
            BÀI VIẾT
          </a>
        </div>
      </nav>
    </header>
  )
}
