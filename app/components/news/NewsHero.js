"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-800 bg-blue-950 text-white">
      {/* Background Image of Simulator workstation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/img3.png"
          alt="PKIMSE Simulator Workstation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/40 via-blue-950/85 to-blue-950" />
      </div>

      {/* Radial gradient details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-white font-extrabold uppercase tracking-widest text-xs">
            News & Announcements
          </span>
          <span className="h-px w-8 bg-orange-500" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Latest College <span className="text-orange-600">Updates</span>
        </motion.h1>

        <motion.p
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our academic dates, batch schedules, entrance exam
          guidelines, campus placement drives, and achievements.
        </motion.p>
      </div>
    </section>
  );
}
