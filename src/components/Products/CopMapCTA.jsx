import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CopMapCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Join the police departments already using CopMap to enhance their
            operational efficiency, improve coordination, and better serve
            their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="https://calendly.com/admin-copmap/30min?month=2025-07"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                background: "linear-gradient(to right, #0039a6, #04327b)",
              }}
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-300 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CopMapCTA;