import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '../store'
import { downloadQRCode, copyToClipboard } from '../utils/qrGenerator'

const QRPreview: React.FC = () => {
  const { t } = useTranslation()
  const { generatedImage, isLoading, outputFormat } = useSelector((state: RootState) => state.qr)

  const handleDownload = () => {
    if (generatedImage) {
      const filename = `qr_code.${outputFormat.toLowerCase()}`
      downloadQRCode(generatedImage, filename)
    }
  }

  const handleCopy = async () => {
    if (generatedImage) {
      try {
        await copyToClipboard(generatedImage)
        alert(t('alerts.imageCopied'))
      } catch (error) {
        alert(t('alerts.failedToCopy'))
      }
    }
  }

  return (
    <div className="preview-section">
      <h2>
        <i className="fas fa-image"></i>
        {t('preview.title')}
      </h2>

      <div className="preview-container">
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
            <div>{t('preview.generating')}</div>
          </div>
        ) : generatedImage ? (
          <img
            src={generatedImage}
            alt="QR Code Preview"
            className="preview-image"
          />
        ) : (
          <div className="preview-placeholder">
            <i className="fas fa-qrcode"></i>
            <div>{t('preview.placeholder')}</div>
          </div>
        )}
      </div>

      {generatedImage && (
        <div className="download-section">
          <h3>
            <i className="fas fa-download"></i>
            {t('preview.download')}
          </h3>
          <div className="download-buttons">
            <button className="btn-download" onClick={handleDownload}>
              <i className="fas fa-download"></i>
              {t('preview.downloadQR')}
            </button>
            <button className="btn-download" onClick={handleCopy}>
              <i className="fas fa-copy"></i>
              {t('preview.copyImage')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QRPreview
