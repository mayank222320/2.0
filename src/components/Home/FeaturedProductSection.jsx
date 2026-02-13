import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle, Map, Activity, Shield } from 'lucide-react';

export default function FeaturedProductSection() {
  return (
    <section className="py-24 bg-brand-900 relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
         <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-800/50 border border-brand-700/50 text-brand-200 text-sm font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              CopMap Platform
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Strategic Command <br />
              <span className="text-accent-400">Center</span>
            </h2>
            
            <p className="text-lg text-brand-100/90 mb-10 leading-relaxed font-light">
              Real-time resource tracking and strategic deployment. CopMap transforms how law enforcement agencies visualize and manage operations.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Live Unit Tracking",
                "Bandobast Planning",
                "Incident Reporting",
                "Secure Comm Channels"
              ].map((item, index) => (
                <li key={index} className="flex items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <span className="text-white font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://copmap.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-900 font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Access Dashboard
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          {/* Map/Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative perspective-1000"
          >
             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-950 border border-brand-700 ring-1 ring-white/10 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out z-10 w-full aspect-video">
                
                {/* Simulated Map Interface */}
                <div className="absolute inset-0 bg-[#0f172a] opacity-80 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                     {/* Random Map Elements */}
                     <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                     <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_10px_#3b82f6]"></div>
                     
                     <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-ping delay-700"></div>
                     <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-[0_0_10px_#ef4444]"></div>

                     <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M150 150 L 400 300" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                     </svg>
                </div>

                {/* UI Overlay */}
                <div className="relative z-10 p-4 h-full flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between">
                       <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10 text-xs text-white">
                          Sector 4 Patrol
                       </div>
                       <div className="bg-black/50 backdrop-blur-md p-2 rounded-lg border border-white/10 text-xs text-white flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span> Live
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="bg-black/60 backdrop-blur-xl p-3 rounded-xl border border-white/10 w-48">
                          <div className="text-[10px] text-slate-400 uppercase">Unit Status</div>
                          <div className="flex items-center gap-2 mt-1">
                             <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center">
                                <Map className="w-4 h-4 text-white" />
                             </div>
                             <div>
                                <div className="text-xs font-bold text-white">Patrol Alpha</div>
                                <div className="text-[10px] text-emerald-400">On Route</div>
                             </div>
                          </div>
                       </div>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}