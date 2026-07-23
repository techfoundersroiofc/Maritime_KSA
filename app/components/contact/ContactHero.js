"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-800 bg-blue-950">
      {/* Background Image of Campus Hostel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/campus/hostel_1.webp')" }}
      />
      {/* Navy/black overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-950/40 via-blue-950/85 to-blue-950" />

      {/* Glowing Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
        <motion.div
          className="flex items-center justify-center space-x-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-white font-extrabold uppercase tracking-widest text-xs">
            Contact Us
          </span>
          <span className="h-px w-8 bg-orange-500" />
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-500 tracking-tight leading-none max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Connect With Admissions
        </motion.h1>

        <motion.p
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in touch with our admissions coordinators in Chidambaram, Tamil
          Nadu, for professional counseling and enrollment details.
        </motion.p>
      </div>
    </section>
  );
}
