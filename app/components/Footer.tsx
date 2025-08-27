// components/SiteFooter.tsx
export default function SiteFooter() {
    return (
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {/* Left block */}
            <div className="col-span-2">
              <h3 className="mb-6 text-base md:text-lg font-semibold uppercase text-gray-900">
                <a href="https://gmajor.biz" target="_blank" rel="noopener noreferrer">
                  <img src="/images/gmajor-logo.png" className="mr-3 w-[120px]" alt="GMAJOR Logo" />
                </a>
              </h3>
  
              <div className="mb-6 text-gray-700 text-lg md:text-xl leading-7">
                <b>Công ty sở hữu:</b>
                <ul className="mt-2 list-inside space-y-1">
                  <li>
                    <span>
                      <span className="font-semibold">Tên công ty:</span> GMAJOR Co., Ltd.
                    </span>
                  </li>
                  <li>
                    <span>
                      <span className="font-semibold">Địa chỉ:</span> Thành phố Fukuoka, Nhật Bản
                    </span>
                  </li>
                </ul>
              </div>
  
              <div className="text-gray-700 text-lg md:text-xl leading-7">
                <b>Công ty bảo trì:</b>
                <ul className="mt-2 list-inside space-y-1">
                  <li>
                    <span>
                      <span className="font-semibold">Tên công ty:</span> GNF JAPAN Co., Ltd.
                    </span>
                  </li>
                  <li>
                    <span>
                      <span className="font-semibold">Địa chỉ:</span> Thành phố Hồ Chí Minh, Việt Nam
                    </span>
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="mb-6 text-base md:text-lg font-semibold uppercase text-gray-700">
                HƯỚNG DẪN
              </h3>
              <ul className="text-base md:text-lg text-gray-600 leading-7">
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/cookies-policy?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chính sách Cookie
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/privacy-policy?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/terms-and-conditions?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Điều khoản dịch vụ
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/paid-services-policy?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chính sách dịch vụ trả phí
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/payment-policy?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Chính sách thanh toán
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="mb-6 text-base md:text-lg font-semibold uppercase text-gray-700">
                THÔNG TIN KHÁC
              </h3>
              <ul className="text-base md:text-lg text-gray-600 leading-7">
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/about-us?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Về GMAJOR
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/for-ma?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Liên quan đến M&amp;A
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/for-ps?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Liên quan đến Sản phẩm hoặc Dịch vụ
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/faq?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/blog?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h3 className="mb-6 text-base md:text-lg font-semibold uppercase text-gray-700">
                Hỗ trợ khách hàng
              </h3>
              <ul className="text-base md:text-lg text-gray-600 leading-7">
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/logistic-credit-support?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Hỗ trợ Thương mại &amp; Tín dụng
                  </a>
                </li>
                <li className="mb-3 md:mb-4">
                  <a
                    href="https://gmajor.biz/contact-us?lang=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
  
          {/* Bottom area */}
          <div className="text-center">
            <a
              href="https://gmajor.biz?lang=vi"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 flex items-center justify-center text-3xl font-semibold text-gray-900"
            >
              <img src="/images/favicon.ico" className="mr-3 h-7 sm:h-10" alt="GMAJOR Favicon" />
              <img src="/images/gmajor-logo.png" className="w-[120px]" alt="GMAJOR logo" />
            </a>
  
            <span className="block text-center text-base md:text-lg text-gray-600">
              © 2024-2025 GMAJOR. Bảo lưu mọi quyền. Trang web được thiết kế và vận hành bởi{" "}
              <a
                href="https://gmajor.biz?lang=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-main hover:underline"
              >
                GMAJOR
              </a>
            </span>
  
            <ul className="mt-5 flex justify-center space-x-6">
              <li>
                <a
                  href="https://www.facebook.com/gmajorvietnam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/gmajorglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@phieucungsepnhat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@phieucungsepNhat"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  