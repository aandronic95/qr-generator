import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
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
  QRState,
} from '../store/slices/qrSlice'
import { generateQRCode } from '../utils/qrGenerator'

const QRForm: React.FC = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const qrState = useSelector((state: RootState) => state.qr) as QRState

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
      dispatch(setError(t('alerts.enterText')))
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

      const imageData = await generateQRCode(qrState.data, config, qrState.logo || undefined)
      dispatch(setGeneratedImage(imageData))
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Failed to generate QR code'))
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handlePreview = async () => {
    if (!qrState.data.trim()) {
      dispatch(setError(t('alerts.enterText')))
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

      const imageData = await generateQRCode(qrState.data, config, qrState.logo || undefined)
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
        {t('form.title')}
      </h2>

      {qrState.error && (
        <div className="alert alert-error">
          {qrState.error}
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); handleGenerate() }}>
        <div className="form-group">
          <label htmlFor="data">{t('form.dataLabel')}</label>
          <textarea
            id="data"
            value={qrState.data}
            onChange={handleDataChange}
            placeholder={t('form.dataPlaceholder')}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="logo">{t('form.logoLabel')}</label>
          <div className="file-upload">
            <input
              type="file"
              id="logo"
              accept="image/*"
              onChange={handleLogoChange}
            />
            <label htmlFor="logo" className="file-upload-label">
              <i className="fas fa-upload"></i>
              <span>{qrState.logo ? qrState.logo.name : t('form.logoPlaceholder')}</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="output_format">{t('form.outputFormatLabel')}</label>
          <select
            id="output_format"
            value={qrState.outputFormat}
            onChange={handleOutputFormatChange}
          >
            <option value="PNG">{t('form.outputFormat.PNG')}</option>
            <option value="JPEG">{t('form.outputFormat.JPEG')}</option>
            <option value="BMP">{t('form.outputFormat.BMP')}</option>
          </select>
        </div>

        <h3>
          <i className="fas fa-sliders-h"></i>
          {t('form.advancedOptions')}
        </h3>

        <div className="controls-row">
          <div className="form-group">
            <label htmlFor="error_correction">{t('form.errorCorrectionLabel')}</label>
            <select
              id="error_correction"
              value={qrState.errorCorrection}
              onChange={handleErrorCorrectionChange}
            >
              <option value="L">{t('form.errorCorrection.L')}</option>
              <option value="M">{t('form.errorCorrection.M')}</option>
              <option value="Q">{t('form.errorCorrection.Q')}</option>
              <option value="H">{t('form.errorCorrection.H')}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="box_size">{t('form.boxSizeLabel')}</label>
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
            <label htmlFor="border">{t('form.borderLabel')}</label>
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
            <label htmlFor="output_format_2">{t('form.outputFormatLabel')}</label>
            <select
              id="output_format_2"
              value={qrState.outputFormat}
              onChange={handleOutputFormatChange}
            >
              <option value="PNG">{t('form.outputFormat.PNG')}</option>
              <option value="JPEG">{t('form.outputFormat.JPEG')}</option>
              <option value="BMP">{t('form.outputFormat.BMP')}</option>
            </select>
          </div>
        </div>

        <h3>
          <i className="fas fa-image"></i>
          {t('form.logoSettings')}
        </h3>

        <div className="controls-row">
          <div className="range-group">
            <label>{t('form.logoSizeLabel')}</label>
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
            <small>{t('form.logoSizeHint')}</small>
          </div>

          <div className="range-group">
            <label>{t('form.logoPaddingLabel')}</label>
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
            <small>{t('form.logoPaddingHint')}</small>
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
            {t('form.previewButton')}
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={qrState.isLoading}
          >
            <i className="fas fa-magic"></i>
            {t('form.generateButton')}
          </button>
        </div>
      </form>
    </div>
  )
}

export default QRForm
