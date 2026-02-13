import React from "react";
import { motion } from "framer-motion";
import { aboutValues } from "../../constants/data";
import SectionHeader from "../shared/SectionHeader";

const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 lg:px-8">
        <SectionHeader
          title="Our Core Values"
          subtitle="These fundamental principles guide everything we do, from product development to client relationships."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;