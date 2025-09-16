import { configureStore } from '@reduxjs/toolkit'
import qrReducer from './slices/qrSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    qr: qrReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
