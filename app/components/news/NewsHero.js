"use client";

import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-100 bg-white">
      {/* Background Image of Simulator workstation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/campus/Workstation_2.webp')" }}
      />
      {/* Overlay combining light slate/white wash and backdrop blur */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/90 via-slate-50/95 to-slate-50/98 backdrop-blur-xs" />

      {/* Mesh and radial gradient details on top of image overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-orange-655 font-extrabold uppercase tracking-widest text-xs">
            News & Announcements
          </span>
          <span className="h-px w-8 bg-orange-500" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-950 tracking-tight leading-none max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Latest College Updates
        </motion.h1>

        <motion.p
          className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our academic dates, batch schedules, entrance exam guidelines, campus placement drives, and achievements.
        </motion.p>
      </div>
    </section>
  );
}
