import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <i className="fas fa-qrcode"></i>
          QR Code Generator
        </h1>
        <p>Generate QR codes with custom logos in the center</p>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
