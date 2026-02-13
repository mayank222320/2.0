import React from "react";
import { motion } from "framer-motion";
import { aboutAchievements } from "../../constants/data";
import SectionHeader from "../shared/SectionHeader";

const RecognitionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="w-full px-4 lg:px-8">
        <SectionHeader
          title="Recognition & Achievements"
          subtitle="Our work has been recognized by industry leaders and government organizations across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 mx-auto">
                <img
                  src={achievement.logo}
                  alt={achievement.name}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                {achievement.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;