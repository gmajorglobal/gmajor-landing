// components/ContactFormHero.tsx
"use client";

import { useState } from "react";

export default function ContactFormHero() {
  const [status, setStatus] =
    useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      setStatus("submitting");
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-[520px_1fr] gap-16 py-16 min-h-[620px]">
          <div className="relative flex h-full items-center justify-center">
            <div className="relative">
              <img
                src="/images/contact-form.png"
                alt="Tư vấn GMAJOR"
                className="relative z-10 h-[300px] w-[460px] rounded-md object-cover"
              />
              <div className="mt-7 text-center leading-7 text-[#0c2083] italic">
                <p className="text-[18px] md:text-[20px]">Bạn cần tư vấn thêm ?</p>
                <p className="text-[18px] md:text-[20px]">Hãy để lại thông tin,</p>
                <p className="text-[18px] md:text-[20px]">
                  <span className="font-semibold not-italic">GMAJOR</span> sẽ đồng hành cùng bạn
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — form panel */}
          <div className="rounded-md bg-[#eeeeee] p-8">
            <form
              action="https://formspree.io/f/mvgqkowy"
              method="POST"
              id="consultation-form"
              onSubmit={handleFormSubmit}
              className="space-y-5"
            >
              <input
                name="name"
                type="text"
                required
                placeholder="Họ và tên *"
                className="h-[56px] w-full rounded-full bg-white px-6 text-[16px] text-gray-800 placeholder-gray-400 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="company"
                type="text"
                placeholder="Tên công ty"
                className="h-[56px] w-full rounded-full bg-white px-6 text-[16px] text-gray-800 placeholder-gray-400 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Số điện thoại *"
                className="h-[56px] w-full rounded-full bg-white px-6 text-[16px] text-gray-800 placeholder-gray-400 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email *"
                className="h-[56px] w-full rounded-full bg-white px-6 text-[16px] text-gray-800 placeholder-gray-400 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                required
                placeholder="Nội dung *"
                className="h-[200px] w-full resize-none rounded-[18px] bg-white px-6 py-4 text-[16px] text-gray-800 placeholder-gray-400 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-[13px] leading-5 text-gray-600">
                Khi nhấn vào nút <strong>"GỬI THÔNG TIN"</strong>, bạn đồng nghĩa với việc chấp
                nhận <span className="italic font-semibold">Chính Sách Quyền Riêng Tư</span> của
                GMAJOR.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center rounded-full bg-[#F1B24B] px-6 py-4 text-[18px] font-extrabold tracking-wide text-[#1a1a1a] shadow-md transition hover:brightness-105 disabled:opacity-60"
              >
                {status === "submitting" ? "ĐANG GỬI..." : "GỬI THÔNG TIN"}
              </button>

              {status === "success" && (
                <div className="rounded-md bg-green-50 px-4 py-3 text-green-800">
                  Cảm ơn bạn! Thông tin đã được gửi thành công. Chúng tôi sẽ liên hệ sớm nhất.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-md bg-red-50 px-4 py-3 text-red-700">
                  Rất tiếc, có lỗi xảy ra. Vui lòng thử lại sau.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
