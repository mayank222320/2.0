import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Legal - Terms of Use & Privacy Policy | EyeQlytics</title>
        <meta
          name="description"
          content="Terms of Use and Privacy Policy for EyeQlytics Tech Pvt. Ltd. Learn about our data protection practices and user rights."
        />
        <meta
          name="keywords"
          content="EyeQlytics privacy policy, terms of use, data protection, user rights, cookies policy"
        />
        <link rel="canonical" href="https://eyeqlytics.com/legal" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-600">
                Legal Information
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Use & Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your privacy and data protection are important to us. Learn about
              our policies and your rights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Privacy Policy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Privacy Policy
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">Last updated: January 2025</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Information We Collect
                </h3>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as
                  when you create an account, contact us, or use our services.
                  This may include your name, email address, organization, and
                  any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h3>
                <p className="text-gray-600 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>
                    Communicate with you about products, services, and events
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-600 mb-6">
                  We use cookies and similar tracking technologies to collect
                  and use personal information about you. You can control
                  cookies through your browser settings and our cookie
                  preference center.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Information Sharing
                </h3>
                <p className="text-gray-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except as
                  described in this policy or as required by law.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Data Security
                </h3>
                <p className="text-gray-600 mb-6">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  6. Your Rights
                </h3>
                <p className="text-gray-600 mb-6">
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications
                  from us. To exercise these rights, please contact us at
                  contact@eyeqlytics.com.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  7. Contact Us
                </h3>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                  <br />
                  Email: contact@eyeqlytics.com
                  <br />
                  Phone: +91-9970283329
                  <br />
                  Address: 10/81, Near SJP Petrol Pump, Bidkin, Chhatrapati
                  Sambhaji Nagar 431015
                </p>
              </div>
            </motion.div>

            {/* Terms of Use */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Terms of Use
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">Last updated: January 2025</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-600 mb-6">
                  By accessing and using EyeQlytics Tech Pvt. Ltd. services, you
                  accept and agree to be bound by the terms and provision of
                  this agreement.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Use License
                </h3>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of the
                  materials on EyeQlytics' website for personal, non-commercial
                  transitory viewing only. This is the grant of a license, not a
                  transfer of title.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Disclaimer
                </h3>
                <p className="text-gray-600 mb-6">
                  The materials on EyeQlytics' website are provided on an 'as
                  is' basis. EyeQlytics makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties
                  including without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Limitations
                </h3>
                <p className="text-gray-600 mb-6">
                  In no event shall EyeQlytics or its suppliers be liable for
                  any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising
                  out of the use or inability to use the materials on
                  EyeQlytics' website.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Accuracy of Materials
                </h3>
                <p className="text-gray-600 mb-6">
                  The materials appearing on EyeQlytics' website could include
                  technical, typographical, or photographic errors. EyeQlytics
                  does not warrant that any of the materials on its website are
                  accurate, complete, or current.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  6. Governing Law
                </h3>
                <p className="text-gray-600 mb-6">
                  These terms and conditions are governed by and construed in
                  accordance with the laws of India and you irrevocably submit
                  to the exclusive jurisdiction of the courts in Maharashtra,
                  India.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  7. Changes to Terms
                </h3>
                <p className="text-gray-600 mb-6">
                  EyeQlytics may revise these terms of service for its website
                  at any time without notice. By using this website, you are
                  agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
