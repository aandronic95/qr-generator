import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const StorageStatus: React.FC = () => {
  const { t } = useTranslation()
  const [timeRemaining, setTimeRemaining] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateTimeRemaining = () => {
      try {
        const themeData = localStorage.getItem('qr-generator-theme')
        const languageData = localStorage.getItem('qr-generator-language')
        
        if (themeData || languageData) {
          const data = themeData ? JSON.parse(themeData) : JSON.parse(languageData!)
          const now = Date.now()
          const expiresAt = data.timestamp + data.expiresIn
          const remaining = expiresAt - now
            
          if (remaining > 0) {
            const hours = Math.floor(remaining / (1000 * 60 * 60))
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
            
            if (hours > 0) {
              setTimeRemaining(`${hours}h ${minutes}m`)
            } else {
              setTimeRemaining(`${minutes}m`)
            }
            
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        } else {
          setIsVisible(false)
        }
      } catch (error) {
        setIsVisible(false)
      }
    }

    updateTimeRemaining()
    const interval = setInterval(updateTimeRemaining, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="storage-status">
      <i className="fas fa-clock"></i>
      <span>
        {t('storage.settingsExpire')}: {timeRemaining}
      </span>
    </div>
  )
}

export default StorageStatus
