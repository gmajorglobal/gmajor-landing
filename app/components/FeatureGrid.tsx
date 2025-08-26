type Feature = {
    title: string
    description: string
    image?: string // leave empty; provide your path later
    imageAlt?: string
}

interface FeatureGridProps {
    heading?: string
    subheading?: string
    features?: Feature[]
}

export default function FeatureGrid({
    heading = "Các tính năng và tiện ích vượt trội",
    subheading = "TRÊN NỀN TẢNG",
    features = [
        {
            title: "MIỄN PHÍ",
            description: "Tạo tài khoản & đăng bài sản phẩm/dịch vụ",
            image: "/images/featuregrid1.png",
            imageAlt: "Miễn phí",
        },
        {
            title: "AI HỖ TRỢ",
            description: "AI tự động mô tả sản phẩm dựa trên từ khóa",
            image: "/images/featuregrid2.png",
            imageAlt: "AI hỗ trợ",
        },
        {
            title: "DỊCH THUẬT",
            description:
                "Hệ thống dịch tin nhắn tự động (Tiếng Anh/Tiếng Việt/Tiếng Nhật)",
            image: "/images/featuregrid3.png",
            imageAlt: "Dịch thuật",
        },
        {
            title: "TÌM KIẾM",
            description:
                "Thuật toán tìm kiếm thông minh, gợi ý theo ngành nghề & mục tiêu kinh doanh",
            image: "/images/featuregrid4.png",
            imageAlt: "Tìm kiếm",
        },
        {
            title: "TRỰC TIẾP",
            description:
                "Nhắn tin và đàm phán trực tiếp, quản lý tập trung trên một bảng điều khiển duy nhất",
            image: "/images/featuregrid5.png",
            imageAlt: "Trực tiếp",
        },
        {
            title: "HANDS-ON",
            description:
                "Hỗ trợ tuỳ chọn từ chuyên gia địa phương (Hands-On Service)",
            image: "/images/featuregrid6.png",
            imageAlt: "Hands-on",
        },
    ],
}: FeatureGridProps) {
    return (
        <section
            className="w-full bg-gray-50"
            style={{
                backgroundColor: "#f5f6f7",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
                {/* Header */}
                <div className="mb-6 md:mb-8">
                    <div className="flex items-start justify-center gap-3 text-center">
                        <span className="block h-8 w-1 bg-orange-500 rounded" />
                        <div>
                            <p className="text-indigo-700 font-semibold tracking-wide">
                                {heading}
                            </p>
                            <h2 className="mt-1 text-3xl md:text-5xl font-extrabold text-indigo-800 uppercase leading-tight">
                                {subheading}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap -mx-3">
                    {features.map((f, idx) => (
                        <div key={`${f.title}-${idx}`} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
                            <article className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 md:p-7 shadow-[0_2px_14px_rgba(0,0,0,0.06)] h-full">
                                {/* Top image row */}
                                <div className="relative h-12 mb-8">
                                    <img
                                        src="/images/decored.png"
                                        alt=""
                                        aria-hidden="true"
                                        className="pointer-events-none select-none absolute right-4 top-0 w-16 md:w-20 opacity-90"
                                    />
                                    {f.image ? (
                                        <img
                                            src={f.image}
                                            alt={f.imageAlt || f.title}
                                            className="h-10 w-10 md:h-20 md:w-20 rounded-lg object-contain relative z-10"
                                        />
                                    ) : (
                                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-indigo-50 text-indigo-400 flex items-center justify-center text-sm border border-dashed border-indigo-200 relative z-10">
                                            img
                                        </div>
                                    )}
                                </div>

                                {/* Text below the images */}
                                <h3 className="text-[18px] md:text-[28px] font-extrabold text-blue-900 uppercase">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-gray-700 leading-relaxed text-sm md:text-[16px] max-w-[440px]">
                                    {f.description}
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
