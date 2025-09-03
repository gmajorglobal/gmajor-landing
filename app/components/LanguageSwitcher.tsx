"use client"

interface LanguageSwitcherProps {
  currentLocale: 'vi' | 'ja';
  onLocaleChange: (locale: 'vi' | 'ja') => void;
}

export default function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 p-4">
      <span className="text-sm font-medium text-gray-700">Language:</span>
      <button
        onClick={() => onLocaleChange('vi')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLocale === 'vi'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Tiếng Việt
      </button>
      <button
        onClick={() => onLocaleChange('ja')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          currentLocale === 'ja'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        日本語
      </button>
    </div>
  );
} 