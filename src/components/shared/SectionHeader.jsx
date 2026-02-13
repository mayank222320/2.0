import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = "text-center mb-16",
  titleClassName = "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
  subtitleClassName = "text-xl text-gray-600 max-w-3xl mx-auto"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <h2 className={titleClassName}>
        {title}
      </h2>
      {subtitle && (
        <p className={subtitleClassName}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;