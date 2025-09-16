import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import { getLanguage } from '../utils/storage'

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  },
  fr: {
    translation: fr
  }
}

// Custom language detector that uses our storage utility
const customLanguageDetector = {
  name: 'customStorage',
  lookup: () => {
    return getLanguage()
  },
  cacheUserLanguage: () => {
    // Language will be saved by the middleware
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['customStorage', 'navigator', 'htmlTag'],
      caches: ['customStorage']
    }
  })

// Add custom detector
i18n.services.languageDetector.addDetector(customLanguageDetector)

// Expose i18n on window for middleware access
if (typeof window !== 'undefined') {
  window.i18n = i18n
}

export default i18n
