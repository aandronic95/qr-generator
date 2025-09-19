import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { store } from './store'
import Header from './components/Header'
import QRForm from './components/QRForm'
import QRPreview from './components/QRPreview'
import SEO from './components/SEO'
import SEOContent from './components/SEOContent'
import StorageStatus from './components/StorageStatus'
import { useTheme } from './hooks/useTheme'
import { setupLanguagePersistence } from './store/middleware/persistMiddleware'
import './i18n'
import './App.css'

const AppContent: React.FC = () => {
  useTheme()
  
  useEffect(() => {
    setupLanguagePersistence()
  }, [])
  
  return (
    <div className="app">
      <SEO />
      <SEOContent />
      <Header />
      <StorageStatus />
      <main className="main-content">
        <QRForm />
        <QRPreview />
      </main>
      <Footer />
    </div>
  )
}

const Footer: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="footer">
      <p>&copy; 2025 {t('app.title')} | {t('app.developedWith')}</p>
    </footer>
  )
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </HelmetProvider>
  )
}

export default App
