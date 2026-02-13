import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CopMapFeatures = () => {
  return (
    <section className="py-24 bg-white">
      <div className="w-full px-8 lg:px-20 xl:px-32 2xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Shield className="h-5 w-5 text-blue-700 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                Live in Maharashtra Police
              </span>
            </div>

            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
              CopMap
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A live command-and-control solution for police departments
              featuring officer tracking, bandobast assignment, and real-time
              coordination dashboards.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-blue-600 rounded-full"></span>
                <span className="text-gray-800 text-sm">
                  <strong>Clients:</strong> Police departments and government
                  bodies
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-800 text-sm">
                  <strong>Status:</strong> Live production system across
                  multiple districts
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-orange-500 rounded-full"></span>
                <span className="text-gray-800 text-sm">
                  <strong>Impact:</strong> Enhanced operational efficiency &
                  safety
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://copmap.in"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  background: "linear-gradient(to right, #0039a6, #04327b)",
                }}
              >
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>

              <Link
                to="https://calendly.com/admin-copmap/30min?month=2025-07"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-[480px] flex items-center justify-center"
          >
            <img
              loading="lazy"
              src="/Home-logo.png"
              alt="CopMap police command center dashboard interface"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CopMapFeatures;