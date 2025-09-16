declare global {
  interface Window {
    i18n?: {
      changeLanguage: (lng: string, ...args: any[]) => Promise<any>
    }
  }
}

export {}
