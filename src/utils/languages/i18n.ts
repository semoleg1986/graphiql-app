import browserLanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import translationEn from '../../locales/en.json';
import translationRu from '../../locales/ru.json';

i18next.use(browserLanguageDetector).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
  },
  fallbackLng: 'en',
});
