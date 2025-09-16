import React from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <i className="fas fa-qrcode"></i>
          {t('header.title')}
        </h1>
        <p>{t('header.subtitle')}</p>
        <div className="header-controls">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
