"use client"

import LanguageDropdown from './LanguageDropdown';
import { type Locale } from '../../i18n';
import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Header({ locale, onLocaleChange }: HeaderProps) {
  const { t } = useTranslation(locale);
  return (
    <header className="w-full bg-blue-800 py-3 md:py-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-3 sm:space-x-6 md:space-x-12">
            <a href={`https://www.gmajor.biz/?lang=${locale}`} className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
              {t('header.home')}
            </a>
            <a href={`https://www.gmajor.biz/about-us?lang=${locale}`} className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
              {t('header.about')}
            </a>
            <a href="#contact-form" className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
              {t('header.contact')}
            </a>
            <a href={`https://www.gmajor.biz/blog?lang=${locale}`} className="text-white font-semibold uppercase tracking-wider hover:text-blue-200 transition-colors duration-200 text-xs sm:text-sm md:text-lg">
              {t('header.blog')}
            </a>
          </div>
          
          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageDropdown 
              currentLocale={locale}
              onLocaleChange={onLocaleChange}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}
