import { configureStore } from '@reduxjs/toolkit'
import qrReducer from './slices/qrSlice'
import themeReducer from './slices/themeSlice'
import { persistMiddleware, initializeStore } from './middleware/persistMiddleware'

export const store = configureStore({
  reducer: {
    qr: qrReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddleware),
  preloadedState: initializeStore(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
