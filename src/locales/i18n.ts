import i18next from 'i18next';
import browserLanguageDetector from 'i18next-browser-languagedetector';
import translationEn from '../../src/locales/en.json';
import translationRu from '../../src/locales/ru.json';

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
