import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../../constants/data.js';

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-surface-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">
            Industries We Serve
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Tailored Solutions for <br /><span className="text-slate-500">Complex Challenges</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-surface-100 hover:border-brand-200 cursor-pointer"
              >
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-surface-100 text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h4 className="text-base lg:text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {industry.name}
                  </h4>
                  
                  <p className="text-xs lg:text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 hidden md:block">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}