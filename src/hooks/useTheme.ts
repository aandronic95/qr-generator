import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setTheme as setThemeAction } from '../store/slices/themeSlice'

export const useTheme = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
    dispatch(setThemeAction(currentTheme === 'light' ? 'dark' : 'light'))
  }

  return { currentTheme, toggleTheme }
}
