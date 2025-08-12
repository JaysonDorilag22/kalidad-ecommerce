import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Shop', to: '/shop' },
    { label: 'Support', to: '/help' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated!</h3>
          <p className="mb-6 text-white/90">Get the latest deals and product updates</p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                {isSubscribed ? '✅' : 'Subscribe'}
              </button>
            </div>
          </form>
          
          {isSubscribed && (
            <div className="mt-4 text-white font-medium">
              🎉 Thank you for subscribing!
            </div>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <img src='/logo.png' alt="KALIDAD" className="h-10 mb-4" />
            <p className="text-gray-300 mb-4">
              Premium quality products with exceptional service
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-xl hover:scale-110 transition-transform duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>support@kalidad.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>123 Commerce St, City</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 KALIDAD. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}