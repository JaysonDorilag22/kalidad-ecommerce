import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ]

  const authLinks = [
    { to: '/login', label: 'Login', primary: false },
    { to: '/register', label: 'Register', primary: true }
  ]

  const NavLink = ({ to, label, mobile = false, primary = false }) => {
    const baseClasses = mobile 
      ? "block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ease-in-out transform hover:translate-x-1"
      : "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out"
    
    const colorClasses = primary
      ? mobile 
        ? "bg-primary text-white hover:bg-primary-600 mt-2 shadow-sm"
        : "bg-primary text-white hover:bg-primary-600 px-4 shadow-sm hover:shadow-md"
      : mobile
        ? "text-gray-900 hover:bg-gray-100 hover:text-gray-900"
        : "text-gray-700 hover:text-primary"

    return (
      <Link to={to} className={`${baseClasses} ${colorClasses}`}>
        {label}
      </Link>
    )
  }

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img src='/logo.png' alt="KALIDAD" className="h-8" />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              {navLinks.map(link => (
                <NavLink key={link.to} {...link} />
              ))}
            </div>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden sm:flex items-center space-x-3">
            {authLinks.map(link => (
              <NavLink key={link.to} {...link} />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                {[
                  { isOpen: false, path: "M4 6h16M4 12h16m-7 6h7", rotate: "rotate-0" },
                  { isOpen: true, path: "M6 18L18 6M6 6l12 12", rotate: "rotate-0" }
                ].map((icon, index) => (
                  <svg 
                    key={index}
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ease-in-out ${
                      isOpen === icon.isOpen ? 'opacity-100' : 'opacity-0'
                    } ${icon.rotate}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon.path} />
                  </svg>
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <NavLink key={`mobile-${link.to}`} {...link} mobile />
          ))}
          
          {/* Mobile Auth Section */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            {authLinks.map(link => (
              <NavLink key={`mobile-${link.to}`} {...link} mobile />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}