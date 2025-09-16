import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface QRState {
  data: string
  logo: File | null
  errorCorrection: 'L' | 'M' | 'Q' | 'H'
  boxSize: number
  border: number
  logoSizePercent: number
  logoPadding: number
  outputFormat: 'PNG' | 'JPEG' | 'BMP'
  generatedImage: string | null
  isLoading: boolean
  error: string | null
}

const initialState: QRState = {
  data: 'https://www.example.com',
  logo: null,
  errorCorrection: 'H',
  boxSize: 25,
  border: 4,
  logoSizePercent: 20,
  logoPadding: 10,
  outputFormat: 'PNG',
  generatedImage: null,
  isLoading: false,
  error: null,
}

const qrSlice = createSlice({
  name: 'qr',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      state.data = action.payload
    },
    setLogo: (state, action: PayloadAction<File | null>) => {
      state.logo = action.payload
    },
    setErrorCorrection: (state, action: PayloadAction<'L' | 'M' | 'Q' | 'H'>) => {
      state.errorCorrection = action.payload
    },
    setBoxSize: (state, action: PayloadAction<number>) => {
      state.boxSize = action.payload
    },
    setBorder: (state, action: PayloadAction<number>) => {
      state.border = action.payload
    },
    setLogoSizePercent: (state, action: PayloadAction<number>) => {
      state.logoSizePercent = action.payload
    },
    setLogoPadding: (state, action: PayloadAction<number>) => {
      state.logoPadding = action.payload
    },
    setOutputFormat: (state, action: PayloadAction<'PNG' | 'JPEG' | 'BMP'>) => {
      state.outputFormat = action.payload
    },
    setGeneratedImage: (state, action: PayloadAction<string | null>) => {
      state.generatedImage = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    resetQR: () => initialState,
  },
})

export const {
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
  resetQR,
} = qrSlice.actions

export default qrSlice.reducer
