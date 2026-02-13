import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide mb-4">
            <span className="text-sm font-semibold text-blue-600">
              Who We Are
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Team Behind India's Most{" "}
            <span
              className="block text-4xl md:text-5xl text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
              }}
            >
              Scalable Public Sector Tech Tools
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;