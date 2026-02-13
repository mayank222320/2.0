import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials as testimonialsData } from '../../constants/data.js';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-brand-900 relative overflow-hidden backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-brand-950 -z-10 skew-y-1 transform origin-bottom-left"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-brand-400 font-bold uppercase tracking-wider text-xs mb-3">Community TRUST</h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Voices from the  <span className="text-brand-400">Frontline</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-brand-800/40 backdrop-blur-md rounded-2xl p-8 border border-brand-700/50 hover:bg-brand-800/60 transition-colors duration-300 flex flex-col justify-between"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                 <Quote className="text-brand-900 w-6 h-6 fill-current" />
              </div>

              <div className="mb-6">
                 <div className="flex gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="h-4 w-4 text-accent-400 fill-accent-400" />
                   ))}
                 </div>
                 <blockquote className="text-base text-brand-50 font-medium leading-relaxed italic opacity-90">
                   "{testimonial.quote}"
                 </blockquote>
              </div>

              <div className="flex items-center gap-4 border-t border-brand-700/50 pt-5 mt-auto">
                <div className="h-10 w-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-sm shadow-inner ring-2 ring-brand-500/50">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.author}</div>
                  <div className="text-xs text-brand-300 font-mono uppercase tracking-wide">{testimonial.organization}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}