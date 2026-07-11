"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Anchor } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function CoursesHero() {
  return (
    <section className="bg-white py-20 sm:py-28 relative overflow-hidden border-b border-slate-100">
      {/* Decorative subtle background glows */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200/60 text-orange-600 px-3.5 py-1.5 rounded-full shadow-xs"
            >
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest">
                KSA Maritime College
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 tracking-tight leading-tight"
            >
              DG Shipping Approved <br />
              <span className="text-orange-600">Maritime Programs</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-650 text-sm sm:text-base leading-relaxed max-w-xl font-medium"
            >
              Kickstart your career in the Merchant Navy. Perunthalaivar
              Kamarajar Institute of Maritime Science and Engineering (PKIMSE)
              offers specialized residential pre-sea and mandatory safety
              training programs designed to forge competent, disciplined, and
              skilled seafarers.
            </motion.p>

            {/* Core Badges Row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100"
            >
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 border border-orange-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-blue-950 uppercase tracking-wide">
                    100% Approved Curriculum
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Conforming to the latest D.G. Shipping guidelines and
                    international STCW standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-950 shrink-0 border border-blue-100">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-blue-950 uppercase tracking-wide">
                    Residential Cadet Regime
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Rigorous practical workshop training and simulated shipboard
                    environment.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Images with Drop Shadows */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]"
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
          >
            {/* Background Decorative Blob */}

            {/* Overlapping Main Image (Campus/Workstation) */}
            <motion.div
              className="absolute w-[80%] h-[260px] sm:h-[300px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl z-10 left-4 top-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/images/hero/img1.jpg"
                alt="Practical Maritime Workshop Training"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </motion.div>

            {/* Secondary Overlapping Image (GP Rating/STCW) */}
            <motion.div
              className="absolute w-[60%] h-[180px] sm:h-[220px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20 right-4 bottom-4 rotate-3 hover:rotate-0 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/images/courses/gp-rating.png"
                alt="GP Rating Training Activities"
                fill
                sizes="(max-width: 1024px) 100vw, 250px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
