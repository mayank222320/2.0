import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CallToActionSection() {
  return (
    <section className="relative py-28 bg-brand-900 overflow-hidden isolate">
       <div className="absolute inset-0 bg-brand-950 overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-800/30 rounded-full blur-[200px] animate-pulse-slow"></div>
       </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto"
        >
          <div className="mx-auto flex w-16 h-16 rounded-full bg-brand-800 justify-center items-center mb-6 border border-brand-700 shadow-xl">
             <Target className="w-8 h-8 text-accent-400" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
             Ready to Modernize Your Operations?
          </h2>
          
          <p className="text-lg lg:text-xl text-brand-200/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
             Join the forward-thinking organizations using EyeQlytics for smarter, faster, and more secure public infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-brand-900 font-bold rounded-xl shadow-2xl hover:bg-brand-50 hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/40 transition-colors duration-300 backdrop-blur-sm"
            >
               View Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}