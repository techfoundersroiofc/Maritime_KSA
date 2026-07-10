"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, ArrowRight, Award, Compass, Sparkles } from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const backgroundImages = [
  "/images/hero/img1.jpg",
  "/images/hero/img2.png",
  "/images/hero/img3.png",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-900 py-20 md:py-28">
      {/* Background Image Carousel with Transition Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {backgroundImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === currentBg
                ? "opacity-60 lg:opacity-75 z-10 scale-100"
                : "opacity-0 z-0 scale-105"
            } transform duration-[2000ms]`}
          >
            <Image
              src={src}
              alt={`Maritime Campus Background ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover -scale-x-100"
            />
          </div>
        ))}

        {/* High-contrast responsive overlays to ensure text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/90 to-white/95 lg:bg-linear-to-r lg:from-white lg:via-white/95 lg:to-transparent/10 z-20" />

        {/* Glowing backdrop design elements */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 z-30 relative w-full">
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 pt-6">
          {/* Left Column: Core Text & Call-to-Actions */}
          <motion.div
            className="lg:col-span-7 text-left space-y-7"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Premium Floating Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-800 border border-orange-500/20 rounded-full px-4.5 py-1.5 hover:border-orange-500/40 transition-all duration-300 shadow-sm"
            >
              <Award className="w-4 h-4 text-orange-600 shrink-0" />
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">
                A1 Grade Approved Merchant Navy College
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-6xl md:text-[66px] lg:text-[74px] font-black tracking-tight text-blue-950 leading-[1.08] lg:leading-[1.05]"
            >
              Navigating Careers, <br />
              <span className="bg-linear-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xs">
                Commanding Oceans
              </span>
            </motion.h1>

            {/* Subtitle with Optimized SEO Keywords */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-800 text-base sm:text-xl leading-relaxed font-medium max-w-2xl"
            >
              Kickstart a{" "}
              <strong className="text-orange-600 font-extrabold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100/50 shadow-2xs">
                high-salary career after 12th science
              </strong>{" "}
              at PKIMSE, the{" "}
              <strong className="text-blue-950 font-bold">
                best maritime college in India with placement
              </strong>
              . Secure your future in the global shipping industry with our DG
              Shipping approved{" "}
              <strong className="text-blue-950 font-bold">
                merchant navy courses with placement
              </strong>{" "}
              and guaranteed sponsorships.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <Link
                href="/courses"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-550 text-white font-extrabold text-base px-10 py-4.5 rounded shadow-lg shadow-orange-650/20 hover:shadow-orange-650/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
              >
                <span>Explore Pre-Sea Programs</span>
                <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-950 border border-slate-200 hover:border-slate-350 font-extrabold text-base px-10 py-4.5 rounded transition-all duration-300 flex items-center justify-center shadow-md hover:-translate-y-0.5 backdrop-blur-xs"
              >
                <span>Admission Enquiry 2026</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Glassmorphic Admissions and Sponsorship Widget */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-orange-500/20 hover:shadow-[0_20px_50px_rgba(7,13,25,0.08)]">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold text-orange-600 tracking-wider uppercase flex items-center">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-orange-500 animate-pulse" />{" "}
                    Admissions Portal
                  </span>
                  <h3 className="text-blue-950 text-xl font-black mt-1">
                    August 2026 Batch
                  </h3>
                </div>
                <div className="flex items-center bg-emerald-500/10 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2 mr-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open
                </div>
              </div>

              {/* Quick Info Points */}
              <div className="space-y-5 py-6">
                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-650 shrink-0 mt-0.5 shadow-xs">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-950">
                      Direct Sponsorships
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Pre-sea sponsorship from leading global companies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-650 shrink-0 mt-0.5 shadow-xs">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-950">
                      100% Placement Support
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Dedicated placement cell with elite shipping lines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-650 shrink-0 mt-0.5 shadow-xs">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-blue-950">
                      Hostel & Campus Facilities
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Premium residential training with mock engine rooms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seats Allocation Progress Bar */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4.5 mb-6">
                <div className="flex justify-between items-center text-xs sm:text-sm font-extrabold text-slate-700 mb-2">
                  <span>Seat Reservations</span>
                  <span className="text-orange-600">84% Secured</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: "84%" }}
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-2.5 text-center font-medium">
                  Limited seats remaining for DNS & GP Rating courses.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  href="/admissions"
                  className="btn-shine w-full bg-blue-950 hover:bg-orange-650 text-white font-extrabold text-xs sm:text-sm py-4 rounded-lg transition-all duration-300 flex items-center justify-center uppercase tracking-wider select-none hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-blue-950/10 hover:shadow-orange-600/20"
                >
                  <span>Apply Online Now 2026</span>
                </Link>
                <a
                  href="/contact#prospectus"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs sm:text-sm py-3 rounded-lg transition-all duration-300 flex items-center justify-center uppercase tracking-wider select-none border border-slate-250/50 shadow-xs"
                >
                  <span>Download Prospectus</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Quick USPs / Bottom Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200/80 pt-12 text-left max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="bg-white/90 border border-slate-200 hover:border-orange-500/35 p-6 rounded-xl shadow-xs hover:shadow-lg backdrop-blur-sm flex items-start space-x-4.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/30 flex items-center justify-center text-orange-600 shrink-0 transition-transform group-hover:scale-105">
              <Anchor className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-base sm:text-lg font-black tracking-wide transition-colors group-hover:text-orange-600">
                DG Shipping Approved
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 mt-1 leading-relaxed">
                Conforming to IMO STCW conventions and Indian maritime
                standards.
              </p>
            </div>
          </div>

          <div className="bg-white/90 border border-slate-200 hover:border-orange-500/35 p-6 rounded-xl shadow-xs hover:shadow-lg backdrop-blur-sm flex items-start space-x-4.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/30 flex items-center justify-center text-orange-600 shrink-0 transition-transform group-hover:scale-105">
              <Award className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-base sm:text-lg font-black tracking-wide transition-colors group-hover:text-orange-600">
                A1 Outstanding Grading
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 mt-1 leading-relaxed">
                Accredited A1 Outstanding quality rating in audit inspections.
              </p>
            </div>
          </div>

          <div className="bg-white/90 border border-slate-200 hover:border-orange-500/35 p-6 rounded-xl shadow-xs hover:shadow-lg backdrop-blur-sm flex items-start space-x-4.5 transition-all duration-300 group">
            <div className="w-12 h-12 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/30 flex items-center justify-center text-orange-600 shrink-0 transition-transform group-hover:scale-105">
              <Compass className="w-5.5 h-5.5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-base sm:text-lg font-black tracking-wide transition-colors group-hover:text-orange-600">
                DNS Sponsorship
              </h3>
              <p className="text-xs sm:text-sm text-slate-650 mt-1 leading-relaxed">
                Sponsorship prior to course start secures 100% placement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
