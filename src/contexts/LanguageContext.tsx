/**
 * Language Context - Bilingual Support (EN/BM)
 * English is default, Malay is secondary
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'bm';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en'); // Default: English
  const [translations, setTranslations] = useState<any>(null);

  // Load translations on mount and language change
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../translations/${language}.ts`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        // Fallback to English if translation fails
        if (language !== 'en') {
          const fallbackModule = await import('../translations/en.ts');
          setTranslations(fallbackModule.default);
        }
      }
    };

    loadTranslations();
  }, [language]);

  // Load saved language preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('wastewise-language') as Language;
    if (saved && (saved === 'en' || saved === 'bm')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('wastewise-language', lang);
  };

  // Translation function with nested key support
  const t = (key: string): string => {
    if (!translations) return key;

    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

