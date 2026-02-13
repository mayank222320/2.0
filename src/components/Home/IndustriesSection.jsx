import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../../constants/data.js';

export default function IndustriesSection() {
  return (
    <section className="relative py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-600"></div>
              Industry Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Sector-Specific<br />
              <span className="text-slate-600">Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Deep domain expertise across critical sectors requiring specialized technology solutions.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-brand-600 transition-colors duration-300 mb-4">
                  <Icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  {industry.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}