import React from "react";
import { motion } from "framer-motion";
import { careersBenefits, careersPerks } from "../../constants/data";
import SectionHeader from "../shared/SectionHeader";

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 lg:px-8">
        <SectionHeader
          title="Why Choose EyeQlytics?"
          subtitle="Be part of a team that's revolutionizing how governments and organizations use technology to serve citizens better."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {careersBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${benefit.color}-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`h-8 w-8 text-${benefit.color}-600`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Perks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careersPerks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors duration-300"
            >
              <perk.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">
                {perk.title}
              </h4>
              <p className="text-sm text-gray-600">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;