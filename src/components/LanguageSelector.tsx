import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation()

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'de', name: t('language.german'), flag: '🇩🇪' },
    { code: 'fr', name: t('language.french'), flag: '🇫🇷' }
  ]

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
  }

  return (
    <div className="language-selector">
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="language-select"
        aria-label={t('language.select')}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
