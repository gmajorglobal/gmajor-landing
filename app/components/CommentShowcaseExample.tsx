"use client"

import { useState } from 'react';
import CommentShowcase from './CommentShowcase';
import LanguageSwitcher from './LanguageSwitcher';

export default function CommentShowcaseExample() {
  const [locale, setLocale] = useState<'vi' | 'ja'>('vi');

  return (
    <div>
      <LanguageSwitcher 
        currentLocale={locale}
        onLocaleChange={setLocale}
      />
      <CommentShowcase locale={locale} />
    </div>
  );
} 