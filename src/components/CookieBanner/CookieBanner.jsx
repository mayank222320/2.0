import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('eyeqlytics-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('eyeqlytics-cookie-consent', 'accepted');
    localStorage.setItem('eyeqlytics-analytics-consent', 'true');
    localStorage.setItem('eyeqlytics-marketing-consent', 'true');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('eyeqlytics-cookie-consent', 'rejected');
    localStorage.setItem('eyeqlytics-analytics-consent', 'false');
    localStorage.setItem('eyeqlytics-marketing-consent', 'false');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('eyeqlytics-cookie-consent', 'customized');
    // Save individual preferences based on toggles
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            {/* Main Banner */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-start space-x-3 flex-1">
                <div className="flex-shrink-0 mt-1">
                  <Cookie className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We use cookies and similar technologies to enhance your browsing experience, 
                    analyze site traffic, and provide personalized content. By clicking "Accept All", 
                    you consent to our use of cookies.
                  </p>
                  <div className="mt-2 flex items-center space-x-4 text-xs">
                    <Link 
                      to="/legal" 
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Privacy Policy
                    </Link>
                    <Link 
                      to="/legal" 
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Terms of Use
                    </Link>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:flex-shrink-0">
                <button
                  onClick={handleCustomize}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg"
                >
                  Accept All
                </button>
              </div>
            </div>

            {/* Detailed Settings */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Essential Cookies */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">Essential</h4>
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Always Active
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Required for basic site functionality and security.
                      </p>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">Analytics</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-600">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">Marketing</h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                      <p className="text-xs text-gray-600">
                        Used to deliver personalized advertisements and content.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={handleSavePreferences}
                      className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                    >
                      Save Preferences
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close cookie banner"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}