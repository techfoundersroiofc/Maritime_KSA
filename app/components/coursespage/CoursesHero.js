"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Anchor } from "lucide-react";

export default function CoursesHero() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-800 bg-blue-950 text-white">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/courses/dns.png"
          alt="PKIMSE College Campus Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/40 via-blue-950/85 to-blue-950" />
      </div>

      {/* Soft light radial gradient details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
        <motion.div
          className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 text-white px-3.5 py-1.5 rounded-full shadow-xs mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Compass className="w-3.5 h-3.5 animate-spin-slow text-orange-400" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
            PKIMSE Maritime College
          </span>
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            DG Shipping Approved <br />
            <span className="text-orange-600">Maritime Programs</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kickstart your career in the Merchant Navy. Perunthalaivar Kamarajar
            Institute of Maritime Science and Engineering (PKIMSE) offers
            specialized residential pre-sea and mandatory safety training
            programs designed to forge competent, disciplined, and skilled
            seafarers.
          </motion.p>
        </div>

        {/* Core Badges Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto pt-8 border-t border-white/20 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-xs hover:bg-white/15 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/30">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-sm text-white uppercase tracking-wide">
                100% Approved Curriculum
              </h4>
              <p className="text-xs text-slate-350 font-medium mt-0.5">
                Conforming to the latest D.G. Shipping guidelines and
                international STCW standards.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 shadow-xs hover:bg-white/15 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-blue-500/25 flex items-center justify-center text-blue-300 shrink-0 border border-blue-500/30">
              <Anchor className="w-5.5 h-5.5" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-sm text-white uppercase tracking-wide">
                Residential student Regime
              </h4>
              <p className="text-xs text-slate-350 font-medium mt-0.5">
                Rigorous practical workshop training and simulated shipboard
                environment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
