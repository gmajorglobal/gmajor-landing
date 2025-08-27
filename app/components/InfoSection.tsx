export default function InfoSection() {
  const cards = [
    {
      title: "NGÔN NGỮ",
      description: "Khi thiếu kỹ năng tiếng Anh hoặc tiếng Nhật, doanh nghiệp dễ bỏ lỡ cơ hội trong trao đổi email hay đàm phán."
    },
    {
      title: "THÔNG TIN",
      description: "Việc tìm kiếm trực tuyến cho kết quả quá nhiều, gây khó khăn trong việc đánh giá uy tín của nhà máy hoặc đối tác."
    },
    {
      title: "TIẾP CẬN",
      description: "Phụ thuộc vào hội chợ thương mại hoặc trung gian khiến chi phí tăng cao và thiếu sự chủ động."
    },
    {
      title: "NHÂN LỰC",
      description: "Từ đội ngũ nhân sự quốc tế, nghiên cứu thị trường nước ngoài, cải thiện kỹ năng giao tiếp, phê duyệt ngân sách,... tất cả đều cần thời gian và chi phí để xây dựng"
    },
    {
      title: "NGÂN SÁCH",
      description: "Ngay cả khi doanh nghiệp có mong muốn mở rộng toàn cầu, hạn chế về ngân sách thường khiến kế hoạch không được thông qua."
    },
    {
      title: "BẮT ĐẦU",
      description: "Các nền tảng lớn như Alibaba vừa tốn kém, vừa khó xác định rõ hiệu quả đầu tư (ROI)."
    }
  ];

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between items-center">
        {/* Left Section - Heading and Description */}
        <div className="space-y-6 w-[400px]">
          <h2 className="text-3xl lg:text-5xl font-black text-blue-900 leading-[2.5] uppercase">
            CHÚNG TÔI <br />
            HIỂU RẰNG
          </h2>
          
          <div className="space-y-4 text-xl text-blue-800 leading-relaxed">
            <p className="italic">
              Những năm gần đây, khát vọng vươn mình ra thị trường quốc tế của các doanh nghiệp vừa và nhỏ ngày càng lớn mạnh.
            </p>
            <p className="italic">
              Song, thực tế lại đặt ra nhiều rào cản không dễ vượt qua
            </p>
          </div>
        </div>
        
        {/* Right Section - Information Cards Grid */}
        <div className="flex flex-col gap-6 ml-8  w-[700px]">
          {/* Row 1 */}
          <div className="flex gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-[440px] h-[200px] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-black text-blue-900 uppercase mb-2">
                NGÔN NGỮ
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Khi thiếu kỹ năng tiếng Anh hoặc tiếng Nhật, doanh nghiệp dễ bỏ lỡ cơ hội trong trao đổi email hay đàm phán.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-[440px] h-[200px] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-black text-blue-900 uppercase mb-2">
                THÔNG TIN
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Việc tìm kiếm trực tuyến cho kết quả quá nhiều, gây khó khăn trong việc đánh giá uy tín của nhà máy hoặc đối tác.
              </p>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="flex gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-[300px] h-[200px] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-black text-blue-900 uppercase mb-2">
                TIẾP CẬN
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Phụ thuộc vào hội chợ thương mại hoặc trung gian khiến chi phí tăng cao và thiếu sự chủ động.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-[440px] h-[200px] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-black text-blue-900 uppercase mb-2">
                NHÂN LỰC
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Từ đội ngũ nhân sự quốc tế, nghiên cứu thị trường nước ngoài, cải thiện kỹ năng giao tiếp, phê duyệt ngân sách,... tất cả đều cần thời gian và chi phí để xây dựng
              </p>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="flex gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-[540px] h-[200px] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-black text-blue-900 uppercase mb-2">
                NGÂN SÁCH
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ngay cả khi doanh nghiệp có mong muốn mở rộng toàn cầu, hạn chế về ngân sách thường khiến kế hoạch không được thông qua.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-[340px] h-[200px] flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-black text-blue-900 uppercase mb-2">
                BẮT ĐẦU
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Các nền tảng lớn như Alibaba vừa tốn kém, vừa khó xác định rõ hiệu quả đầu tư (ROI).
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
} 