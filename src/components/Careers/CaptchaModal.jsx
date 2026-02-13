import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // For Vite
// or: process.env.REACT_APP_RECAPTCHA_SITE_KEY; // For Create React App

export default function CaptchaModal({ onClose, onSuccess }) {
  const handleVerify = () => {
    onClose();       // Close modal
    onSuccess();     // Execute redirection
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
        <p className="text-lg font-semibold mb-4">Please verify to proceed</p>
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleVerify} />
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
