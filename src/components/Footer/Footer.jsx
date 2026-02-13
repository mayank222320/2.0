import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products/copmap' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Clients', href: '/clients' },
  ],
  legal: [
    { name: 'Terms of Use', href: '/legal' },
    { name: 'Privacy Policy', href: '/legal' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

  
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/EyeQlytics Technologies.png"
              alt="EyeQlytics Logo"
              className="h-10 w-auto max-w-[160px] rounded-lg"
            />
          </div>
          <p className="text-blue-400 font-semibold mb-2">From Code to Capital</p>
          <p className="text-gray-400 mb-5 max-w-md leading-normal">
            Empowering government agencies, businesses, and communities with scalable, impact-driven technology solutions.
          </p>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 mt-1 text-gray-400" />
              <div>
                10/81, Near SJP Petrol Pump, Bidkin<br />
                Chhatrapati Sambhaji Nagar, Maharashtra, India - 431105
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <a href="tel:+919970283329" className="hover:text-white transition-colors">
                +91-9970283329
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:contact@eyeqlytics.com" className="hover:text-white transition-colors">
                contact@eyeqlytics.com
              </a>
            </div>
          </div>
        </div>
  
        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-1.5">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Resources + Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
          <ul className="space-y-1.5">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
  
          <h3 className="text-lg font-semibold mt-5 mb-3 text-white">Legal</h3>
          <ul className="space-y-1.5">
            {footerLinks.legal.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 EyeQlytics Tech Pvt. Ltd. – All Rights Reserved
        </p>
        <div className="flex space-x-4">
          <motion.a
            href="https://www.linkedin.com/company/eyeqlytics-technologies-pvt-ltd"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </div>
  </footer>
  
  );
}
