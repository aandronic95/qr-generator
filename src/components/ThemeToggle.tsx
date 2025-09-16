import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { toggleTheme } from '../store/slices/themeSlice'

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme)

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="theme-toggle"
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      <i className={`fas fa-${currentTheme === 'light' ? 'moon' : 'sun'}`}></i>
    </button>
  )
}

export default ThemeToggle
