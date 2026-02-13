import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story: From Idea to Impact
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Founded by engineers and entrepreneurs passionate about public
              innovation, EyeQlytics began with CopMap to digitize India's
              police deployment workflows. What started as a solution for
              police deployment tracking has grown into a comprehensive
              platform for public sector digital transformation.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
              Our founders, driven by a passion for public service and
              technology innovation, recognized the gap between cutting-edge
              technology and its application in government operations. Today,
              we bridge that gap with solutions that are both technologically
              advanced and practically applicable.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              Since then, our mission has expanded to solving overlooked
              challenges across sectors through scalable, secure, and
              user-focused software systems. We believe that technology should
              serve people, not the other way around.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="impact1.png"
              alt="Team working on innovative government technology solutions"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;