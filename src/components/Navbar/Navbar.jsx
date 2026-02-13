import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    dropdown: [
      { name: 'CopMap', href: '/products/copmap' },
    ],
  },
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img
              src="/EyeQlytics_Technologies1.png"
              alt="EyeQlytics Logo"
              className="h-10 w-auto max-w-[160px]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 relative">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span
                    className={`flex items-center cursor-pointer text-sm font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                      location.pathname.startsWith('/products')
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </span>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[160px] overflow-hidden"
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem, index) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 ${
                                location.pathname === subItem.href
                                  ? 'text-blue-600 bg-blue-50'
                                  : 'text-gray-700 hover:text-gray-900'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" 
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-14 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-40"
          >
            <div className="flex flex-col space-y-2 p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="w-full">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(!mobileDropdownOpen)
                      }
                      className={`flex justify-between items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        location.pathname.startsWith('/products')
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-800 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          location.pathname.startsWith('/products')
                            ? 'bg-blue-600'
                            : 'bg-gray-400'
                        }`}></div>
                        {item.name}
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          mobileDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileDropdownOpen(false);
                                }}
                                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                                  location.pathname === sub.href
                                    ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-600 -ml-4 pl-4'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                                  location.pathname === sub.href
                                    ? 'bg-blue-600'
                                    : 'bg-gray-400'
                                }`}></div>
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-600'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      location.pathname === item.href
                        ? 'bg-blue-600'
                        : 'bg-gray-400'
                    }`}></div>
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}