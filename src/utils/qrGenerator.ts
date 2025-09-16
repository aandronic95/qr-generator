import QRCode from 'qrcode'

export interface QRConfig {
  errorCorrection: 'L' | 'M' | 'Q' | 'H'
  boxSize: number
  border: number
  logoSizePercent: number
  logoPadding: number
  outputFormat: 'PNG' | 'JPEG' | 'BMP'
}

export const generateQRCode = async (
  data: string,
  config: QRConfig,
  logo?: File
): Promise<string> => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  if (!ctx) {
    throw new Error('Could not get canvas context')
  }

  const qrOptions = {
    errorCorrectionLevel: config.errorCorrection as 'L' | 'M' | 'Q' | 'H',
    margin: config.border,
    color: {
      dark: '#000000',
      light: '#FFFFFF',
    },
    width: Math.max(1000, config.boxSize * 25),
  }

  try {
    const qrDataURL = await QRCode.toDataURL(data, qrOptions)
    
    return new Promise<string>((resolve, reject) => {
      const img = new Image()
      img.onload = async () => {
        try {
          canvas.width = img.width
          canvas.height = img.height
          ctx.drawImage(img, 0, 0)

          if (logo) {
            await addLogoToQR(canvas, ctx, logo, config)
          }

          const format = config.outputFormat.toLowerCase()
          const mimeType = `image/${format === 'jpeg' ? 'jpeg' : format}`
          
          const finalDataURL = canvas.toDataURL(mimeType, 0.92)
          resolve(finalDataURL)
        } catch (error) {
          reject(error)
        }
      }
      img.onerror = () => reject(new Error('Failed to load QR code image'))
      img.src = qrDataURL
    })
  } catch (error) {
    throw new Error(`Failed to generate QR code: ${error}`)
  }
}

const addLogoToQR = async (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  logo: File,
  config: QRConfig
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const logoImg = new Image()
    logoImg.onload = () => {
      try {
        const qrSize = Math.min(canvas.width, canvas.height)
        const logoSize = Math.min(
          qrSize * (config.logoSizePercent / 100),
          qrSize * 0.3
        )
        
        const padding = Math.min(config.logoPadding, qrSize * 0.1)
        const totalLogoSize = logoSize + (padding * 2)
        
        const x = (canvas.width - totalLogoSize) / 2
        const y = (canvas.height - totalLogoSize) / 2

        ctx.fillStyle = '#FFFFFF'
        ctx.fillRect(x, y, totalLogoSize, totalLogoSize)
        
        const logoX = x + padding
        const logoY = y + padding
        const logoWidth = logoSize
        const logoHeight = logoSize

        ctx.drawImage(logoImg, logoX, logoY, logoWidth, logoHeight)
        resolve()
      } catch (error) {
        reject(error)
      }
    }
    logoImg.onerror = () => reject(new Error('Failed to load logo'))
    logoImg.src = URL.createObjectURL(logo)
  })
}

export const downloadQRCode = (dataURL: string, filename: string): void => {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataURL
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const copyToClipboard = async (dataURL: string): Promise<void> => {
  try {
    const response = await fetch(dataURL)
    const blob = await response.blob()
    await navigator.clipboard.write([
      new ClipboardItem({ [blob.type]: blob })
    ])
  } catch (error) {
    throw new Error('Failed to copy to clipboard')
  }
}
