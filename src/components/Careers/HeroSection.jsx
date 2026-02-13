import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="w-full px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-wide mb-4">
            <span className="text-sm font-semibold text-blue-600">
              Join Our Mission
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Something That{" "}
            <span
              className="block text-4xl md:text-5xl text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0039a6, #04327b, #33daf0)",
              }}
            >
              Matters
            </span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;