import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, Globe, Zap, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: 'Gov Infrastructure',
    description: 'Digital backbones for public sector efficiency.',
    icon: Building,
    bg: 'bg-blue-100',
    text: 'text-brand-600',
  },
  {
    title: 'Law Enforcement',
    description: 'Command centers and strategic deployment.',
    icon: Shield,
    bg: 'bg-indigo-100',
    text: 'text-brand-700',
  },
  {
    title: 'Data Analytics',
    description: 'Actionable intelligence from complex datasets.',
    icon: Zap,
    bg: 'bg-amber-100',
    text: 'text-amber-600',
  },
  {
    title: 'Secure Cloud',
    description: 'Mission-critical systems built for scale.',
    icon: Globe,
    bg: 'bg-cyan-100',
    text: 'text-cyan-600',
  },
];

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-surface-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wider text-xs mb-3">Why EyeQlytics?</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-900 tracking-tight mb-6">
            Empowering Through <span className="text-brand-600">Innovation</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.text}`} />
                </div>

                <h4 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h4>
                
                <p className="text-slate-500 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center text-brand-600 font-semibold text-xs group-hover:gap-2 transition-all cursor-pointer">
                  <span>Explore</span> <ArrowUpRight className="ml-1 w-3 h-3" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}