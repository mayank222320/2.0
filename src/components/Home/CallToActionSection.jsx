import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CallToActionSection() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-semibold mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            Let's Build Together
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Ready to Transform Your<br />
            <span className="text-slate-400">Operations?</span>
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to build intelligent, scalable systems that drive operational excellence and create lasting impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-sm text-slate-400">Government Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-slate-400">System Uptime</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}