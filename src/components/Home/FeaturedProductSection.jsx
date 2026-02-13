import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, MapPin, Radio, Shield, Lock } from 'lucide-react';

export default function FeaturedProductSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400 tracking-wide">Live in Maharashtra Police</span>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                CopMap
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Command Center
                </span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed">
                Real-time resource tracking and strategic deployment. CopMap transforms how law enforcement agencies visualize and manage operations.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: "Live Unit Tracking" },
                { icon: Radio, text: "Bandobast Planning" },
                { icon: Shield, text: "Incident Reporting" },
                { icon: Lock, text: "Secure Channels" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                  <feature.icon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://copmap.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]"
            >
              Access Dashboard
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          {/* Right Visual - Product Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">CopMap Dashboard</div>
                    <div className="text-xs text-slate-400">Live Operations View</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium">Active</div>
              </div>

              {/* Map Area */}
              <div className="relative h-64 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Animated Points */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.4
                    }}
                    className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                    style={{
                      top: `${25 + Math.random() * 50}%`,
                      left: `${15 + Math.random() * 70}%`
                    }}
                  ></motion.div>
                ))}

                {/* Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-lg p-3 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Active Units</div>
                      <div className="text-lg font-bold text-white">127 Online</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-xs text-green-400 font-medium">All Systems Go</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-white/5">
                {[
                  { value: "50%", label: "Faster Response" },
                  { value: "127", label: "Active Units" },
                  { value: "24/7", label: "Monitoring" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
