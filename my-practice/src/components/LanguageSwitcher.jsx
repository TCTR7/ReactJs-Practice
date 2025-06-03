import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const current = languages.find((lang) => lang.code === currentLang);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white hover:bg-gray-100 transition-all"
      >
        <span className="text-lg">{current.flag}</span>
        <span className="font-medium">{current.label}</span>
        <ChevronDown className={`w-4 h-4 transform transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center w-full px-4 py-2 hover:bg-gray-100 transition-all ${
                lang.code === currentLang ? 'bg-gray-100 font-semibold' : ''
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="ml-3">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
