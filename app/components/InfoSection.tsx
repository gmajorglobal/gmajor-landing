export default function InfoSection() {
  const cards = [
    { title: "NGÔN NGỮ", description: "Khi thiếu kỹ năng tiếng Anh hoặc tiếng Nhật, doanh nghiệp dễ bỏ lỡ cơ hội trong trao đổi email hay đàm phán." },
    { title: "THÔNG TIN", description: "Việc tìm kiếm trực tuyến cho kết quả quá nhiều, gây khó khăn trong việc đánh giá uy tín của nhà máy hoặc đối tác." },
    { title: "TIẾP CẬN", description: "Phụ thuộc vào hội chợ thương mại hoặc trung gian khiến chi phí tăng cao và thiếu sự chủ động." },
    { title: "NHÂN LỰC", description: "Từ đội ngũ nhân sự quốc tế, nghiên cứu thị trường nước ngoài, cải thiện kỹ năng giao tiếp, phê duyệt ngân sách,... tất cả đều cần thời gian và chi phí để xây dựng" },
    { title: "NGÂN SÁCH", description: "Ngay cả khi doanh nghiệp có mong muốn mở rộng toàn cầu, hạn chế về ngân sách thường khiến kế hoạch không được thông qua." },
    { title: "BẮT ĐẦU", description: "Các nền tảng lớn như Alibaba vừa tốn kém, vừa khó xác định rõ hiệu quả đầu tư (ROI)." }
  ];

  return (
    <section className="w-full bg-gray-100 py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 w-full md:w-[600px] lg:w-[400px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-black text-blue-900 lg:leading-[1.2] uppercase">
              CHÚNG TÔI <br /> HIỂU RẰNG
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left text-blue-800 leading-relaxed">
              <p className="italic">
                Những năm gần đây, khát vọng vươn mình ra thị trường quốc tế của các doanh nghiệp vừa và nhỏ ngày càng lớn mạnh.
              </p>
              <p className="italic">Song, thực tế lại đặt ra nhiều rào cản không dễ vượt qua</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full lg:w-[700px] ml-0 lg:ml-8 mt-6 sm:mt-8 lg:mt-0">

            {/* Row 1 */}
            <div className="md:flex gap-4">

              {/* Card 1 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[440px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white">
                  NGÔN NGỮ
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95">
                  Khi thiếu kỹ năng tiếng Anh hoặc tiếng Nhật, doanh nghiệp dễ bỏ lỡ cơ hội trong trao đổi email hay đàm phán.
                </p>
              </div>

              {/* Card 2 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[440px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center mt-4 md:mt-0
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white">
                  THÔNG TIN
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95">
                  Việc tìm kiếm trực tuyến cho kết quả quá nhiều, gây khó khăn trong việc đánh giá uy tín của nhà máy hoặc đối tác.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="md:flex gap-4">

              {/* Card 3 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[300px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white">
                  TIẾP CẬN
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95">
                  Phụ thuộc vào hội chợ thương mại hoặc trung gian khiến chi phí tăng cao và thiếu sự chủ động.
                </p>
              </div>

              {/* Card 4 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[440px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center mt-4 md:mt-0
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white">
                  NHÂN LỰC
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95">
                  Từ đội ngũ nhân sự quốc tế, nghiên cứu thị trường nước ngoài, cải thiện kỹ năng giao tiếp, phê duyệt ngân sách,... tất cả đều cần thời gian và chi phí để xây dựng
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="md:flex gap-4">

              {/* Card 5 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[540px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white">
                  NGÂN SÁCH
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95">
                  Ngay cả khi doanh nghiệp có mong muốn mở rộng toàn cầu, hạn chế về ngân sách thường khiến kế hoạch không được thông qua.
                </p>
              </div>

              {/* Card 6 */}
              <div
                tabIndex={0}
                className="group bg-white rounded-lg shadow-lg p-3 sm:p-4 border border-gray-100
                           w-full md:w-[340px] h-auto md:h-[200px]
                           flex flex-col justify-center items-center text-center mt-4 md:mt-0
                           transition-colors duration-300 ease-out
                           hover:bg-blue-900 hover:border-blue-800
                           focus-within:bg-blue-900 focus-within:border-blue-800 outline-none"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-1.5 sm:mb-2
                               text-blue-900 transition-colors duration-300
                               group-hover:text-white group-focus-within:text-white">
                  BẮT ĐẦU
                </h3>
                <p className="text-[13px] sm:text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-6
                              text-gray-700 transition-colors duration-300
                              group-hover:text-white/95 group-focus-within:text-white/95">
                  Các nền tảng lớn như Alibaba vừa tốn kém, vừa khó xác định rõ hiệu quả đầu tư (ROI).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
