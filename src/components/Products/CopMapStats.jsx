import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

const CopMapStats = () => {
  const stats = [
    {
      metric: "50%",
      label: "Faster Response Times",
      description: "Reduced emergency response time through real-time coordination",
    },
    {
      metric: "75%",
      label: "Improved Efficiency",
      description: "Enhanced operational efficiency in resource allocation",
    },
    {
      metric: "100%",
      label: "Digital Transformation",
      description: "Complete digitization of deployment workflows",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full px-4 lg:px-8">
        <SectionHeader
          title="Real Impact, Real Results"
          subtitle="See how CopMap is transforming police operations and improving public safety across Maharashtra."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.metric}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopMapStats;