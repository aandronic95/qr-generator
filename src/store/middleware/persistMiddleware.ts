import { Middleware } from '@reduxjs/toolkit'
import { getTheme, setTheme } from '../../utils/storage'
import { setLanguage } from '../../utils/storage'

interface ThemeState {
  currentTheme: 'light' | 'dark'
}

interface RootState {
  theme: ThemeState
}

export const persistMiddleware: Middleware<{}, RootState> = () => (next) => (action: unknown) => {
  const result = next(action)
  
  // Persist theme changes
  if (action && typeof action === 'object' && 'type' in action && action.type === 'theme/setTheme') {
    setTheme((action as any).payload)
  }
  
  return result
}

// Initialize store with saved values
export const initializeStore = () => {
  const savedTheme = getTheme()
  
  return {
    theme: {
      currentTheme: savedTheme || 'light'
    }
  }
}

// Listen for i18n language changes
export const setupLanguagePersistence = () => {
  // Set up language persistence after i18n is initialized
  setTimeout(() => {
    if (window.i18n) {
      const originalChangeLanguage = window.i18n.changeLanguage
      window.i18n.changeLanguage = function(lng: string, ...args: any[]) {
        const result = originalChangeLanguage.call(this, lng, ...args)
        setLanguage(lng)
        return result
      }
    }
  }, 100)
}
