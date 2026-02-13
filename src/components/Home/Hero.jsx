import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Zap, Play, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Advanced Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sophisticated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950"></div>
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[130px]"></div>

        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' /%3E%3C/svg%3E")'
        }}></div>
      </div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">Trusted by 20+ Government Agencies</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
              >
                <span className="text-white">Engineering</span>
                <br />
                <span className="text-gradient-blue inline-block mt-1">
                  Operational Excellence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-xl text-slate-300 leading-relaxed max-w-xl"
              >
                We build intelligent, scalable systems that transform how government agencies and enterprises manage critical operations.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products/copmap"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-strong hover-lift transition-smooth"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 glass-dark text-white font-semibold rounded-xl hover:bg-white/10 transition-smooth"
              >
                Schedule Demo
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex items-center gap-8 pt-6"
            >
              {[
                { icon: Shield, label: "Enterprise Security" },
                { icon: Award, label: "99.9% Uptime" },
                { icon: Users, label: "24/7 Support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative glass-dark rounded-3xl border border-white/10 shadow-intense overflow-hidden"
              style={{ transform: 'perspective(2000px) rotateY(-5deg)' }}>

              {/* Browser Chrome */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-slate-300 font-mono">dashboard.eyeqlytics.com</span>
                  </div>
                </div>
                <div className="badge-success text-xs">Live System</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-5">

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: TrendingUp, value: "2.4K", label: "Active Users", color: "blue-400" },
                    { icon: CheckCircle, value: "98.5%", label: "Efficiency", color: "emerald-400" },
                    { icon: Zap, value: "45ms", label: "Response Time", color: "amber-400" }
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                    >
                      <metric.icon className={`w-5 h-5 text-${metric.color} mb-2`} />
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-xs text-slate-400 font-medium">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Visualization */}
                <div className="relative h-48 bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-20"></div>

                  {/* Animated Dots */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        top: `${25 + Math.random() * 50}%`,
                        left: `${15 + Math.random() * 70}%`,
                        boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                      }}
                    ></motion.div>
                  ))}

                  {/* Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 mb-1 font-medium">Real-time Operations</div>
                        <div className="text-base font-bold text-white">127 Active Units</div>
                      </div>
                      <div className="badge-success text-xs">Operational</div>
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="space-y-2">
                  {[
                    "Unit Alpha-7 status updated",
                    "New deployment scheduled",
                    "System health check complete"
                  ].map((activity, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-700/30"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-xs text-slate-300 font-medium">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-strong border border-white/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Enterprise Grade</div>
                  <div className="text-xs text-slate-600 font-medium">Secure & Compliant</div>
                </div>
              </div>
            </motion.div>

            {/* Subtle Glow Effect */}
            <div className="absolute -inset-8 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-slate-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
