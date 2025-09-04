"use client"

import { useState, useRef, useEffect } from 'react';
import { locales, type Locale } from '../../i18n';
import { useTranslation } from '../hooks/useTranslation';

interface LanguageDropdownProps {
  currentLocale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

// names come from i18n: lang.{code}
const languageConfig = {
  en: {
    nameKey: 'en',
    flag: '🇺🇸'
  },
  vi: {
    nameKey: 'vi', 
    flag: '🇻🇳'
  },
  ja: {
    nameKey: 'ja',
    flag: '🇯🇵'
  }
};

export default function LanguageDropdown({ currentLocale, onLocaleChange }: LanguageDropdownProps) {
  const { t } = useTranslation(currentLocale);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (locale: Locale) => {
    onLocaleChange(locale);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200 min-w-[135px]"
      >
        <span className="text-lg">{languageConfig[currentLocale].flag}</span>
        <span className="text-sm font-medium text-gray-700">
          {t(`lang.${languageConfig[currentLocale].nameKey}`)}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button> */}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 min-w-[135px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageSelect(locale)}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                currentLocale === locale ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{languageConfig[locale].flag}</span>
              <span className="text-sm font-medium">
                {t(`lang.${languageConfig[locale].nameKey}`)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 