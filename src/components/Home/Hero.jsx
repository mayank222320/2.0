import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, Activity, Users, FileText, Globe, Map, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 pt-28 pb-32 lg:pt-36 lg:pb-40 text-white selection:bg-accent-500 selection:text-white">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-800/80 border border-brand-700/50 text-brand-100 text-xs font-semibold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              GovTech Innovation 
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-200">
                Public Infrastructure
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-100/80 max-w-xl leading-relaxed mb-10 font-light">
              We engineer scalable, secure, and data-driven platforms for government agencies. enhancing operational efficiency and transparency through advanced technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products/copmap"
                className="group inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-semibold rounded-xl shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:bg-brand-500 hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Discover Solutions
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Sales
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-10 border-t border-brand-800/50 pt-8">
               <div>
                  <div className="text-3xl font-bold text-white tracking-tight">20<span className="text-brand-400">+</span></div>
                  <div className="text-xs text-brand-300 font-medium uppercase tracking-wider mt-1">Government Partners</div>
               </div>
               <div className="w-px h-10 bg-brand-800"></div>
               <div>
                  <div className="text-3xl font-bold text-white tracking-tight">4.8<span className="text-brand-400">/5</span></div>
                  <div className="text-xs text-brand-300 font-medium uppercase tracking-wider mt-1">Impact Score</div>
               </div>
            </div>
          </motion.div>

          {/* Right Visual - Refined Software Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full flex items-center justify-center"
          >
             {/* Main Dashboard Container */}
             <div className="w-full max-w-lg bg-[#0f172a] rounded-xl border border-brand-700/50 shadow-2xl overflow-hidden flex flex-col relative z-10">
                 
                 {/* App Header */}
                 <div className="h-12 border-b border-brand-800/50 bg-brand-900/50 flex items-center justify-between px-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                       <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                       </div>
                       <div className="px-3 py-1 bg-brand-800 rounded text-[10px] text-brand-300 font-mono border border-brand-700/50 flex items-center gap-2">
                          <ShieldCheck className="w-3 h-3 text-brand-400" />
                          gov_secure_portal_v2.0
                       </div>
                    </div>
                    <div className="flex items-center gap-3 text-brand-400">
                       <Bell className="w-4 h-4" />
                       <div className="w-6 h-6 rounded-full bg-brand-800 border border-brand-700"></div>
                    </div>
                 </div>

                 <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 bg-brand-900/30 border-r border-brand-800/50 flex flex-col items-center py-4 gap-6">
                       <div className="p-2 bg-brand-600 rounded-lg text-white"><Map className="w-5 h-5" /></div>
                       <div className="p-2 hover:bg-brand-800/50 rounded-lg text-brand-400 transition-colors"><Activity className="w-5 h-5" /></div>
                       <div className="p-2 hover:bg-brand-800/50 rounded-lg text-brand-400 transition-colors"><Users className="w-5 h-5" /></div>
                       <div className="p-2 hover:bg-brand-800/50 rounded-lg text-brand-400 transition-colors"><FileText className="w-5 h-5" /></div>
                       <div className="mt-auto p-2 hover:bg-brand-800/50 rounded-lg text-brand-400 transition-colors"><Globe className="w-5 h-5" /></div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 bg-brand-950/50 p-6 flex flex-col gap-6">
                       
                       {/* Context Header */}
                       <div className="flex justify-between items-end">
                          <div>
                             <h3 className="text-white font-semibold text-lg">Command Center</h3>
                             <p className="text-brand-400 text-xs">Real-time Operations Monitoring</p>
                          </div>
                          <div className="flex gap-2">
                             <div className="px-3 py-1.5 bg-brand-600 text-white text-xs rounded-lg font-medium">Live View</div>
                             <div className="px-3 py-1.5 bg-brand-900 border border-brand-700 text-brand-300 text-xs rounded-lg">Analytics</div>
                          </div>
                       </div>

                       {/* Interactive Map Area */}
                       <div className="flex-1 bg-brand-900/40 rounded-xl border border-brand-800/50 relative overflow-hidden group">
                           {/* Map Grid Background */}
                           <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a20_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a20_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                           
                           {/* Map Elements */}
                           <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-brand-500 rounded-full shadow-[0_0_15px_#3b82f6]"></div>
                           <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-brand-500 rounded-full animate-ping opacity-75"></div>
                           
                           <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]"></div>
                           
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-brand-900/90 backdrop-blur-md rounded-lg border border-brand-700 text-center shadow-xl">
                              <div className="text-[10px] text-brand-400 uppercase tracking-wider mb-1">City Grid 12-A</div>
                              <div className="text-lg font-bold text-white leading-none">Status: Secure</div>
                           </div>
                       </div>

                       {/* Bottom Widgets */}
                       <div className="grid grid-cols-2 gap-4 h-24">
                          <div className="bg-brand-900/40 rounded-xl border border-brand-800/50 p-3 flex items-center gap-4">
                             <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                <Activity className="w-5 h-5 text-indigo-400" />
                             </div>
                             <div>
                                <div className="text-xl font-bold text-white">98.5%</div>
                                <div className="text-[10px] text-brand-400">System Efficiency</div>
                             </div>
                          </div>
                          
                          <div className="bg-brand-900/40 rounded-xl border border-brand-800/50 p-3 flex items-center gap-4">
                             <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                             </div>
                             <div>
                                <div className="text-xl font-bold text-white">Active</div>
                                <div className="text-[10px] text-brand-400">Cyber Protection</div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
             </div>

             {/* Ambient Glow behind Dashboard */}
             <div className="absolute -z-10 bg-brand-500/20 w-[90%] h-[90%] blur-[80px] rounded-full"></div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
