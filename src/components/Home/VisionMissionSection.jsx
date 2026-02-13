import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building, Globe, Zap, Database, Cpu } from 'lucide-react';

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
    <section className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-6">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-white/80 tracking-wide">Core Capabilities</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Intelligent Systems for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Critical Operations
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Purpose-built technology solutions designed for government agencies and enterprises managing complex, mission-critical operations.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 leading-tight">
                  {feature.title}
                </h3>

                <p className="relative text-slate-400 leading-relaxed text-[15px]">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            {[
              { value: "20+", label: "Government Partners" },
              { value: "99.9%", label: "System Uptime" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
