import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setGeneratedImage } from '../store/slices/qrSlice'
import { downloadQRCode, copyToClipboard } from '../utils/qrGenerator'

const QRPreview: React.FC = () => {
  const dispatch = useDispatch()
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
        alert('Image copied to clipboard!')
      } catch (error) {
        alert('Failed to copy image to clipboard')
      }
    }
  }

  return (
    <div className="preview-section">
      <h2>
        <i className="fas fa-image"></i>
        QR Code Preview
      </h2>

      <div className="preview-container">
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
            <div>Generating...</div>
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
            <div>Generate a QR for preview</div>
          </div>
        )}
      </div>

      {generatedImage && (
        <div className="download-section">
          <h3>
            <i className="fas fa-download"></i>
            Download
          </h3>
          <div className="download-buttons">
            <button className="btn-download" onClick={handleDownload}>
              <i className="fas fa-download"></i>
              Download QR
            </button>
            <button className="btn-download" onClick={handleCopy}>
              <i className="fas fa-copy"></i>
              Copy Image
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default QRPreview
