interface StorageItem<T> {
  value: T
  timestamp: number
  expiresIn: number
}

const STORAGE_KEYS = {
  THEME: 'qr-generator-theme',
  LANGUAGE: 'qr-generator-language'
} as const

const EXPIRY_TIME = 72 * 60 * 60 * 1000 // 72 hours in milliseconds

export const setStorageItem = <T>(key: string, value: T, expiresIn: number = EXPIRY_TIME): void => {
  const item: StorageItem<T> = {
    value,
    timestamp: Date.now(),
    expiresIn
  }
  
  try {
    localStorage.setItem(key, JSON.stringify(item))
  } catch (error) {
    console.warn('Failed to save to localStorage:', error)
  }
}

export const getStorageItem = <T>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key)
    if (!stored) return defaultValue
    
    const item: StorageItem<T> = JSON.parse(stored)
    const now = Date.now()
    
    // Check if item has expired
    if (now - item.timestamp > item.expiresIn) {
      localStorage.removeItem(key)
      return defaultValue
    }
    
    return item.value
  } catch (error) {
    console.warn('Failed to read from localStorage:', error)
    return defaultValue
  }
}

export const clearExpiredItems = (): void => {
  const keys = Object.values(STORAGE_KEYS)
  
  keys.forEach(key => {
    try {
      const stored = localStorage.getItem(key)
      if (stored) {
        const item = JSON.parse(stored)
        const now = Date.now()
        
        if (now - item.timestamp > item.expiresIn) {
          localStorage.removeItem(key)
        }
      }
    } catch (error) {
      console.warn(`Failed to check expiry for ${key}:`, error)
    }
  })
}

export const setTheme = (theme: 'light' | 'dark'): void => {
  setStorageItem(STORAGE_KEYS.THEME, theme)
}

export const getTheme = (): 'light' | 'dark' => {
  return getStorageItem(STORAGE_KEYS.THEME, 'light')
}

export const setLanguage = (language: string): void => {
  setStorageItem(STORAGE_KEYS.LANGUAGE, language)
}

export const getLanguage = (): string => {
  return getStorageItem(STORAGE_KEYS.LANGUAGE, 'en')
}

// Clear expired items on module load
clearExpiredItems()
