import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, Globe, Zap } from 'lucide-react';

const features = [
  {
    title: 'Government Infrastructure',
    description: 'Digital backbones for public sector efficiency and transparency.',
    icon: Building,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Law Enforcement',
    description: 'Command centers and strategic deployment systems.',
    icon: Shield,
    gradient: 'from-indigo-500 to-indigo-600',
  },
  {
    title: 'Data Analytics',
    description: 'Actionable intelligence from complex operational datasets.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Secure Cloud',
    description: 'Mission-critical systems built for scale and reliability.',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export default function VisionMissionSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-600"></div>
              Core Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Intelligent Systems for<br />
              <span className="text-slate-600">Critical Operations</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Purpose-built technology solutions designed for government agencies and enterprises managing complex, mission-critical operations.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-sm`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>

                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}