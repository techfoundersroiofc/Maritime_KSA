"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-50 py-16 md:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/img1.jpg"
          alt="Merchant Navy Cargo Ship"
          fill
          priority
          sizes="100vw"
          className="object-cover -scale-x-100 opacity-75 transform transition-transform duration-12000 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent" />

        {/* Glowing SaaS blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-orange-550/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 z-10 relative w-full">
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 pt-6">
          {/* Left Column: Core Text & Call-to-Actions */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Premium Floating Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-orange-600/10 text-orange-700 border border-orange-500/10 rounded-full px-3.5 py-1 hover:border-orange-500/30 transition-all duration-300"
            >
              <Award className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[10px] font-extrabold tracking-widest uppercase">
                A1 Grade Approved Merchant Navy College
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-blue-950 leading-[1.12]"
            >
              Navigating Careers, <br />
              <span className="bg-linear-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                Commanding Oceans
              </span>
            </motion.h1>

            {/* Subtitle with Optimized SEO Keywords */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium max-w-2xl"
            >
              Kickstart a{" "}
              <strong className="text-blue-950 font-semibold">
                high-salary career after 12th science
              </strong>{" "}
              at PKIMSE, the{" "}
              <strong className="text-blue-950 font-semibold">
                best maritime college in India with placement
              </strong>
              . Secure your future in the global shipping industry with our DG
              Shipping approved{" "}
              <strong className="text-blue-950 font-semibold">
                merchant navy courses with placement
              </strong>{" "}
              and guaranteed sponsorships.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <Link
                href="/courses"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-550 text-white font-bold text-sm px-8 py-4 rounded shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
              >
                <span>Explore Pre-Sea Programs</span>
                <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-950 border border-slate-200 hover:border-slate-300 font-bold text-sm px-8 py-4 rounded transition-all duration-300 flex items-center justify-center shadow-xs hover:-translate-y-0.5"
              >
                <span>Admission Enquiry 2026</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Glassmorphic Admissions and Sponsorship Widget */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-orange-500/20">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-orange-600 tracking-wider uppercase flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-orange-500 animate-pulse" />{" "}
                    Admissions Portal
                  </span>
                  <h3 className="text-blue-950 text-lg font-black mt-0.5">
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
              <div className="space-y-4 py-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950">
                      Direct Sponsorships
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Pre-sea sponsorship from leading global companies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950">
                      100% Placement Support
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Dedicated placement cell with elite shipping lines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-blue-950">
                      Hostel & Campus Facilities
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5">
                      Premium residential training with mock engine rooms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Seats Allocation Progress Bar */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                  <span>Seat Reservations</span>
                  <span className="text-orange-600">84% Secured</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: "84%" }}
                  />
                </div>
                <p className="text-[10px] text-slate-500 mt-2 text-center">
                  Limited seats remaining for DNS & GP Rating courses.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  href="/admissions"
                  className="btn-shine w-full bg-blue-950 hover:bg-orange-600 text-white font-bold text-xs py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center uppercase tracking-wider select-none hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Apply Online Now 2026</span>
                </Link>
                <a
                  href="/contact#prospectus"
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center uppercase tracking-wider select-none border border-slate-200/50"
                >
                  <span>Download Prospectus</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Quick USPs / Bottom Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-200/80 pt-12 text-left max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div className="bg-white/80 border border-slate-200/80 hover:border-orange-500/30 p-5 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-sm font-bold tracking-wide transition-colors group-hover:text-orange-600">
                DG Shipping Approved
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Conforming to IMO STCW conventions and Indian maritime
                standards.
              </p>
            </div>
          </div>

          <div className="bg-white/80 border border-slate-200/80 hover:border-orange-500/30 p-5 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-sm font-bold tracking-wide transition-colors group-hover:text-orange-600">
                A1 Outstanding Grading
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Accredited A1 Outstanding quality rating in audit inspections.
              </p>
            </div>
          </div>

          <div className="bg-white/80 border border-slate-200/80 hover:border-orange-500/30 p-5 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-sm font-bold tracking-wide transition-colors group-hover:text-orange-600">
                DNS Sponsorship
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Sponsorship prior to course start secures 100% placement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
