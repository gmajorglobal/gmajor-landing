// components/ContactFormHero.tsx
"use client";

import { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';
import { type Locale } from '../../i18n';

interface ContactFormHeroProps {
  locale?: Locale;
}

export default function ContactFormHero({ locale = 'vi' }: ContactFormHeroProps) {
  const { t } = useTranslation(locale);
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
    <section id="contact-form" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-4 md:px-6">
        {/* mobile stacks, desktop stays 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-6 sm:gap-10 lg:gap-16 py-8 sm:py-12 md:py-14 lg:py-16 lg:min-h-[620px]">
          {/* LEFT — image + lines */}
          <div className="relative flex h-full items-center justify-center">
            {/* hoverable CARD */}
            <div
              className="relative transform-gpu will-change-[transform]
                         motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out
                         hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg rounded-md"
            >
              <div className="relative overflow-hidden rounded-md">
                <img
                  src="/images/contact-form.png"
                  alt={t('contactForm.imageAlt')}
                  className="relative z-10 h-[180px] w-[300px] sm:h-[220px] sm:w-[360px] md:h-[260px] md:w-[420px] lg:h-[300px] lg:w-[460px] object-cover
                             motion-safe:transition-transform motion-safe:duration-500
                             hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5 sm:mt-6 md:mt-7 text-center leading-6 sm:leading-7 text-[#0c2083] italic">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] whitespace-pre-line">{t('contactForm.consultationText1')}</p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] whitespace-pre-line">{t('contactForm.consultationText2')}</p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] whitespace-pre-line">
                  {t('contactForm.consultationText3')}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — form panel */}
          <div
            className="rounded-md bg-[#eeeeee] p-5 sm:p-6 md:p-8
                       transform-gpu will-change-[transform]
                       motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out
                       hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg"
          >
            <form
              action="https://formspree.io/f/mvgqkowy"
              method="POST"
              id="consultation-form"
              onSubmit={handleFormSubmit}
              className="space-y-4 sm:space-y-5"
            >
              <div className="relative">
                {/* real input */}
                <input
                  id="name"
                  name="name"
                  required
                  placeholder=" "                             // keep a blank placeholder
                  className="peer h-12 w-full rounded-full bg-white px-5 pr-5 text-[15px]
               text-gray-800 placeholder-transparent ring-1 ring-gray-200
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* fake placeholder + red star (disappears on focus or when typed) */}
                <span
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2
               text-gray-400 opacity-0
               peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                >
                  {t('contactForm.form.nameLabel')} <span className="text-red-500">*</span>
                </span>
              </div>

              <div className="relative">
                {/* real input */}
                <input
                  id="company"
                  name="company"
                  placeholder=" "                             // keep a blank placeholder
                  className="peer h-12 w-full rounded-full bg-white px-5 pr-5 text-[15px]
               text-gray-800 placeholder-transparent ring-1 ring-gray-200
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* fake placeholder + red star (disappears on focus or when typed) */}
                <span
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2
               text-gray-400 opacity-0
               peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                >
                  {t('contactForm.form.companyLabel')} <span className="text-red-500">*</span>
                </span>
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="sr-only">
                  {t('contactForm.form.phoneLabel')} *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder=" "
                  className="peer h-12 sm:h-[52px] md:h-[56px] w-full rounded-full bg-white
               px-5 sm:px-6 text-[15px] sm:text-[16px] text-gray-800
               placeholder-transparent ring-1 ring-gray-200
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2
                   text-gray-400 opacity-0
                   peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                  {t('contactForm.form.phoneLabel')} <span className="text-red-500">*</span>
                </span>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  {t('contactForm.form.emailLabel')} *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  className="peer h-12 sm:h-[52px] md:h-[56px] w-full rounded-full bg-white
               px-5 sm:px-6 text-[15px] sm:text-[16px] text-gray-800
               placeholder-transparent ring-1 ring-gray-200
               focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2
                   text-gray-400 opacity-0
                   peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                  {t('contactForm.form.emailLabel')} <span className="text-red-500">*</span>
                </span>
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="sr-only">
                  {t('contactForm.form.messageLabel')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder=" "
                  className="peer h-[140px] sm:h-[180px] md:h-[200px] w-full resize-none
               rounded-[16px] md:rounded-[18px] bg-white px-5 sm:px-6 py-3 sm:py-4
               text-[15px] sm:text-[16px] text-gray-800 placeholder-transparent
               ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="pointer-events-none absolute left-5 top-3 sm:top-4
                   text-gray-400 opacity-0
                   peer-placeholder-shown:opacity-100 peer-focus:opacity-0">
                  {t('contactForm.form.messageLabel')} <span className="text-red-500">*</span>
                </span>
              </div>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-6 sm:leading-7 text-gray-700 whitespace-pre-line">
                {t('contactForm.form.privacyText')}{" "}
                <a
                  href={`https://www.gmajor.biz/privacy-policy?lang=${locale}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 decoration-gray-800 hover:text-gray-900"
                >
                  {t('contactForm.form.privacyLink')}
                </a>
                {t('contactForm.form.privacyText2')}
              </p>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center rounded-full bg-[#F1B24B] px-6 py-3 sm:py-3.5 md:py-4 text-[16px] sm:text-[17px] md:text-[18px] font-extrabold tracking-wide text-[#1a1a1a] shadow-md transition hover:brightness-105 disabled:opacity-60
                           transform-gpu motion-safe:transition-transform motion-safe:duration-200 hover:scale-[1.02] active:scale-95"
              >
                {status === "submitting" ? t('contactForm.form.submittingButton') : t('contactForm.form.submitButton')}
              </button>

              {status === "success" && (
                <div className="rounded-md bg-green-50 px-4 py-3 text-green-800">
                  {t('contactForm.form.successMessage')}
                </div>
              )}
              {status === "error" && (
                <div className="rounded-md bg-red-50 px-4 py-3 text-red-700">
                  {t('contactForm.form.errorMessage')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
