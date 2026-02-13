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
    <section className="relative space-section bg-white overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[150px]"></div>
      </div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="badge-primary mb-6">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide">Core Capabilities</span>
            </div>
            <h2 className="text-headline text-slate-900 mb-6">
              Intelligent Systems for
              <br />
              <span className="text-gradient-blue">
                Critical Operations
              </span>
            </h2>
            <p className="text-body text-slate-600">
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-strong transition-smooth hover-lift border border-slate-100"
              >
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-medium`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="relative text-slate-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-wrap items-center gap-x-12 gap-y-6 px-10 py-8 bg-slate-50 rounded-3xl border border-slate-200">
            {[
              { value: "20+", label: "Government Partners" },
              { value: "99.9%", label: "System Uptime" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
