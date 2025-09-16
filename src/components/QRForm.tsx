import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import {
  setData,
  setLogo,
  setErrorCorrection,
  setBoxSize,
  setBorder,
  setLogoSizePercent,
  setLogoPadding,
  setOutputFormat,
  setGeneratedImage,
  setLoading,
  setError,
} from '../store/slices/qrSlice'
import { generateQRCode } from '../utils/qrGenerator'

const QRForm: React.FC = () => {
  const dispatch = useDispatch()
  const qrState = useSelector((state: RootState) => state.qr)

  const handleDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setData(e.target.value))
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    dispatch(setLogo(file))
  }

  const handleErrorCorrectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setErrorCorrection(e.target.value as 'L' | 'M' | 'Q' | 'H'))
  }

  const handleBoxSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBoxSize(Number(e.target.value)))
  }

  const handleBorderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBorder(Number(e.target.value)))
  }

  const handleLogoSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLogoSizePercent(Number(e.target.value)))
  }

  const handleLogoPaddingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLogoPadding(Number(e.target.value)))
  }

  const handleOutputFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOutputFormat(e.target.value as 'PNG' | 'JPEG' | 'BMP'))
  }

  const handleGenerate = async () => {
    if (!qrState.data.trim()) {
      dispatch(setError('Please enter text for QR code'))
      return
    }

    dispatch(setLoading(true))
    dispatch(setError(null))

    try {
      const config = {
        errorCorrection: qrState.errorCorrection,
        boxSize: qrState.boxSize,
        border: qrState.border,
        logoSizePercent: qrState.logoSizePercent,
        logoPadding: qrState.logoPadding,
        outputFormat: qrState.outputFormat,
      }

      const imageData = await generateQRCode(qrState.data, config, qrState.logo)
      dispatch(setGeneratedImage(imageData))
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Failed to generate QR code'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handlePreview = async () => {
    if (!qrState.data.trim()) {
      dispatch(setError('Please enter text for QR code'))
      return
    }

    dispatch(setLoading(true))
    dispatch(setError(null))

    try {
      const config = {
        errorCorrection: qrState.errorCorrection,
        boxSize: qrState.boxSize,
        border: qrState.border,
        logoSizePercent: qrState.logoSizePercent,
        logoPadding: qrState.logoPadding,
        outputFormat: 'PNG' as const,
      }

      const imageData = await generateQRCode(qrState.data, config, qrState.logo)
      dispatch(setGeneratedImage(imageData))
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Failed to generate preview'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div className="form-section">
      <h2>
        <i className="fas fa-cog"></i>
        QR Configuration
      </h2>

      {qrState.error && (
        <div className="alert alert-error">
          {qrState.error}
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); handleGenerate() }}>
        <div className="form-group">
          <label htmlFor="data">Text/URL for QR:</label>
          <textarea
            id="data"
            value={qrState.data}
            onChange={handleDataChange}
            placeholder="Enter text or URL for QR..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="logo">Logo (optional):</label>
          <div className="file-upload">
            <input
              type="file"
              id="logo"
              accept="image/*"
              onChange={handleLogoChange}
            />
            <label htmlFor="logo" className="file-upload-label">
              <i className="fas fa-upload"></i>
              <span>{qrState.logo ? qrState.logo.name : 'Select logo'}</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="output_format">Output format:</label>
          <select
            id="output_format"
            value={qrState.outputFormat}
            onChange={handleOutputFormatChange}
          >
            <option value="PNG">PNG</option>
            <option value="JPEG">JPEG</option>
            <option value="BMP">BMP</option>
          </select>
        </div>

        <h3>
          <i className="fas fa-sliders-h"></i>
          Advanced Options
        </h3>

        <div className="controls-row">
          <div className="form-group">
            <label htmlFor="error_correction">Error correction:</label>
            <select
              id="error_correction"
              value={qrState.errorCorrection}
              onChange={handleErrorCorrectionChange}
            >
              <option value="L">L (7%)</option>
              <option value="M">M (15%)</option>
              <option value="Q">Q (25%)</option>
              <option value="H">H (30%)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="box_size">Box size:</label>
            <input
              type="number"
              id="box_size"
              value={qrState.boxSize}
              onChange={handleBoxSizeChange}
              min="5"
              max="100"
            />
          </div>
        </div>

        <div className="controls-row">
          <div className="form-group">
            <label htmlFor="border">Border:</label>
            <input
              type="number"
              id="border"
              value={qrState.border}
              onChange={handleBorderChange}
              min="1"
              max="20"
            />
          </div>

          <div className="form-group">
            <label htmlFor="output_format_2">Output format:</label>
            <select
              id="output_format_2"
              value={qrState.outputFormat}
              onChange={handleOutputFormatChange}
            >
              <option value="PNG">PNG</option>
              <option value="JPEG">JPEG</option>
              <option value="BMP">BMP</option>
            </select>
          </div>
        </div>

        <h3>
          <i className="fas fa-image"></i>
          Logo Settings
        </h3>

        <div className="controls-row">
          <div className="range-group">
            <label>Logo size (%):</label>
            <div className="range-input">
              <input
                type="range"
                id="logo_size_percent"
                value={qrState.logoSizePercent}
                onChange={handleLogoSizeChange}
                min="5"
                max="30"
                step="0.5"
              />
              <span className="range-value">{qrState.logoSizePercent}%</span>
            </div>
            <small>Max 30% as per requirements</small>
          </div>

          <div className="range-group">
            <label>White space (px):</label>
            <div className="range-input">
              <input
                type="range"
                id="logo_padding"
                value={qrState.logoPadding}
                onChange={handleLogoPaddingChange}
                min="0"
                max="30"
                step="1"
              />
              <span className="range-value">{qrState.logoPadding}px</span>
            </div>
            <small>For large QR codes (min 1000x1000px)</small>
          </div>
        </div>

        <div className="buttons">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePreview}
            disabled={qrState.isLoading}
          >
            <i className="fas fa-eye"></i>
            Preview
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={qrState.isLoading}
          >
            <i className="fas fa-magic"></i>
            Generate QR
          </button>
        </div>
      </form>
    </div>
  )
}

export default QRForm
