import { useState, useEffect } from 'react';
import { type Locale, messages } from '../../i18n';

type TranslationKey = {
  [key: string]: any;
};

export function useTranslation(locale: Locale = 'vi') {
  const [translations, setTranslations] = useState<TranslationKey>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const messageLoader = messages[locale];
        if (messageLoader) {
          const loadedMessages = await messageLoader();
          setTranslations(loadedMessages);
        } else {
          console.warn(`No message loader found for locale: ${locale}`);
        }
      } catch (error) {
        console.error(`Failed to load translations for locale: ${locale}`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string): any => {
    if (isLoading) return key;
    
    const keys = key.split('.');
    let result: any = translations;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key} for locale: ${locale}`);
        return key;
      }
    }
    
    return result;
  };

  return {
    t,
    locale,
    isLoading,
  };
} 