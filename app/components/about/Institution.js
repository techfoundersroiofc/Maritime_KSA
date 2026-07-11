"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  GraduationCap,
  Ship,
  Compass,
} from "lucide-react";
import { approvals } from "@/app/data/achievements";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
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

export default function Institution() {
  return (
    <div className="w-full">
      {/* 1. Premium Hero Header with Background Image */}
      <section className="relative h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-bg.png"
            alt="PKIMSE College Campus Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep Navy/Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-white" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center text-white space-y-5 pt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-4"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center space-x-2.5"
            >
              <span className="h-0.5 w-8 bg-orange-500 rounded-full" />
              <span className="text-orange-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm">
                KSA Maritime College
              </span>
              <span className="h-0.5 w-8 bg-orange-500 rounded-full" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white drop-shadow-sm"
            >
              About Our Institution
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-xs"
            >
              PKIMSE is a premier maritime training academy under the
              prestigious KSA Group of Institutions, dedicated to forging
              competent navigation officers and marine engineers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Narrative & Accreditation Section */}
      <section className="bg-white pb-24 pt-8 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-5">
                <div className="flex items-center space-x-2">
                  <span className="h-0.5 w-6 bg-orange-600 rounded-full" />
                  <span className="text-orange-600 font-extrabold uppercase tracking-widest text-[10px] sm:text-xs">
                    OUR LEGACY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
                  A Legacy of Maritime Educational Excellence
                </h2>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
                  Perunthalaivar Kamarajar Institute of Maritime Science and
                  Engineering (PKIMSE) was established under the prestigious{" "}
                  <strong>KSA Group of Institutions</strong> with a clear
                  vision: to establish a top-tier training ecosystem that
                  bridges academic learning with heavy industrial shipboard
                  practice. Today, we are recognized as a premier destination
                  for students pursuing careers in the merchant navy.
                </p>
                <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                  Our residential campus mimics shipboard environments,
                  preparing cadet officers to cope with long voyages,
                  emergencies, cargo operations, and engineering watchkeeping.
                  Our cadets sail on some of the largest crude tankers,
                  container vessels, and bulk carriers worldwide.
                </p>
              </motion.div>

              {/* Highlights row */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-950 shrink-0">
                    <GraduationCap className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-blue-950 uppercase tracking-wide">
                      Structured Cadet Life
                    </h4>
                    <p className="text-xs text-slate-550 mt-0.5">
                      Rigorous, disciplined regime that builds character and
                      seafarer leadership.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100/75 flex items-center justify-center text-orange-600 shrink-0">
                    <Ship className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-blue-950 uppercase tracking-wide">
                      Global Sailing Pathways
                    </h4>
                    <p className="text-xs text-slate-550 mt-0.5">
                      Direct onboarding access with elite global merchant
                      shipping lines.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Card (Accreditations & Image Frame) */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Main Decorative Card with Background Campus Image */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group min-h-[440px] flex flex-col justify-end p-8">
                {/* Background Image of Campus */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/campus/workstation.webp"
                    alt="PKIMSE Campus Infrastructure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/85 to-blue-950/30" />
                </div>

                {/* Floating approval Badge */}
                <div className="absolute top-6 left-6 bg-orange-600 text-white text-[10px] font-black tracking-widest uppercase px-3.5 py-2 rounded-xl shadow-lg border border-orange-500/20 flex items-center space-x-1.5 z-10">
                  <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>DGS Approved</span>
                </div>

                {/* Card Content Overlay */}
                <div className="relative z-10 space-y-5 text-white text-left">
                  <div className="space-y-2">
                    <h3 className="font-black text-xl sm:text-2xl tracking-tight text-white flex items-center">
                      <ShieldCheck className="w-6 h-6 text-orange-400 mr-2 shrink-0" />
                      DG Shipping Approved
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      All degree, diploma, and rating programs are fully
                      approved by the Directorate General of Shipping, Ministry
                      of Ports, Shipping and Waterways, Government of India. Our
                      training procedures conform to ISO 9001:2015 standards,
                      verified by DNV GL.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-white/10">
                    {approvals.map((app, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2 text-slate-200"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] sm:text-xs font-bold leading-relaxed">
                          {app}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
