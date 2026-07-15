"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Home, Cpu } from "lucide-react";

export default function CampusHero() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-100 bg-white">
      {/* Background Image with elegant overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/campus/workstation.webp')" }}
      />
      {/* Overlay combining light slate/white wash and backdrop blur */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/80 via-slate-50/92 to-slate-50/95 backdrop-blur-xs" />

      {/* Soft light grid/glow details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        <motion.div
          className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200/60 text-orange-600 px-3.5 py-1.5 rounded-full shadow-xs mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
            Campus Life & Facilities
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-950 tracking-tight leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Campus &{" "}
            <span className="text-orange-600">Training Environment</span>
          </motion.h1>

          <motion.p
            className="text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PKIMSE operates a state-of-the-art residential campus at
            keerapalayam, Tamil Nadu. Experience a simulated naval setting
            equipped with modern simulators, heavy machinery workshop, and
            premium recreational amenities.
          </motion.p>
        </div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pt-8 border-t border-slate-200/60 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 border border-orange-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-sm text-blue-950 uppercase tracking-wide">
                DG Shipping Approved
              </h4>
              <p className="text-xs text-blue-950 font-medium mt-0.5">
                Full compliance with STCW standards.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-900 shrink-0 border border-blue-100">
              <Home className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-sm text-blue-950 uppercase tracking-wide">
                Fully Residential
              </h4>
              <p className="text-xs text-blue-950 font-medium mt-0.5">
                Modern hostel, mess, & sports facilities.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-sm text-blue-950 uppercase tracking-wide">
                Simulated Training
              </h4>
              <p className="text-xs text-blue-950 font-medium mt-0.5">
                Advanced bridge & engineering labs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
