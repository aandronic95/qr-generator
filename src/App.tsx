import React from 'react'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { store } from './store'
import Header from './components/Header'
import QRForm from './components/QRForm'
import QRPreview from './components/QRPreview'
import SEO from './components/SEO'
import SEOContent from './components/SEOContent'
import { useTheme } from './hooks/useTheme'
import './App.css'

const AppContent: React.FC = () => {
  useTheme()
  
  return (
    <div className="app">
      <SEO />
      <SEOContent />
      <Header />
      <main className="main-content">
        <QRForm />
        <QRPreview />
      </main>
      <footer className="footer">
        <p>&copy; 2024 QR Code Generator | Developed with ❤️</p>
      </footer>
    </div>
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
