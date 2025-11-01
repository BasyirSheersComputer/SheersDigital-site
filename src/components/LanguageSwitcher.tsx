/**
 * Language Switcher Component
 * Toggle between English (EN) and Malay (BM)
 */

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-neutral-600" />
      <div className="flex items-center bg-neutral-100 rounded-lg p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
            language === 'en'
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('bm')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
            language === 'bm'
              ? 'bg-white text-neutral-900 shadow-sm'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
          aria-label="Tukar ke Bahasa Melayu"
        >
          BM
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

