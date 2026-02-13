import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { industries } from '../../constants/data.js';

export default function IndustriesSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-white/80 tracking-wide">Industry Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Sector-Specific
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Deep domain expertise across critical sectors requiring specialized technology solutions.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {/* Gradient Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300 mb-4">
                  <Icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="relative text-base font-bold text-white mb-2 leading-tight">
                  {industry.name}
                </h3>

                <p className="relative text-sm text-slate-400 leading-relaxed">
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
