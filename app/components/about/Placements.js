"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Award,
  ShieldCheck,
  Ship,
  Users,
  ArrowRight,
  GraduationCap,
  Briefcase,
  FileCheck,
  Globe,
  Anchor,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Placements() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // GSAP context for safe cleanup in React
    const ctx = gsap.context(() => {
      // Subtle float animation for placement section background blobs
      gsap.to(".gsap-placements-blob-1", {
        y: -25,
        x: 15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gsap-placements-blob-2", {
        y: 25,
        x: -15,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: "100%",
      label: "DNS Placement Rate",
      desc: "Perfect placement record for our Diploma in Nautical Science batches.",
      icon: Award,
    },
    {
      value: "500+",
      label: "Alumni Sailing Globally",
      desc: "Our student officers sail worldwide on cargo, bulk, and tanker fleets.",
      icon: Globe,
    },
    {
      value: "12+",
      label: "Global Shipping Sectors",
      desc: "Comprehensive preparation for recruitment drives across top international ship management lines.",
      icon: Anchor,
    },
    {
      value: "25+",
      label: "Global Recruiters",
      desc: "Top international shipping companies participating in recruitment.",
      icon: Ship,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Pre-Sea Training & Academics",
      desc: "students complete comprehensive simulator, workshop, and safety instruction to comply with IMO STCW standards.",
      icon: GraduationCap,
    },
    {
      step: "02",
      title: "Placement Preparation & Screening",
      desc: "students undergo mock interviews, technical screening, and psychometric preparation to clear company selection drives.",
      icon: Briefcase,
    },
    {
      step: "03",
      title: "DGS Medical & CDC Issuance",
      desc: "Securing official DGS medical certificates and CDC (Continuous Discharge Certificate) seafarer log books.",
      icon: FileCheck,
    },
    {
      step: "04",
      title: "Vessel Sign-On & Sea Voyage",
      desc: "students join their assigned container, bulk, or crude carriers at international hub ports to start sailing.",
      icon: Ship,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white py-24 border-y border-slate-200/60 relative overflow-hidden"
    >
      {/* GSAP Animated Background Blobs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none gsap-placements-blob-1" />
      <div className="absolute bottom-1/3 right-10 w-md h-md bg-orange-500/5 rounded-full blur-3xl pointer-events-none gsap-placements-blob-2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
              PLACEMENTS
            </span>
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Our Historic Placement Records & Stats
          </h2>
          <p className="text-blue-950 font-semibold text-md max-w-xl mx-auto leading-relaxed">
            We bridge academic training with global industrial sea voyages,
            ensuring our students transition directly from classrooms to
            merchant navy officers.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 w-full"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-3xl flex flex-col shadow-2xs hover:shadow-xl hover:bg-white hover:border-orange-550/30 transition-all duration-300 relative group cursor-default min-h-[250px] h-full"
              >
                {/* Shine Sweep Flash */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <div className="absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                </div>

                {/* Soft Bottom-Right Glow Spot */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full blur-xl group-hover:bg-orange-500/10 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Stat Value */}
                  <span className="text-3xl sm:text-4xl font-black text-blue-950 block mb-2 tracking-tight group-hover:text-orange-655 transition-colors">
                    {stat.value}
                  </span>

                  {/* Stat Label */}
                  <h4 className="text-xs sm:text-sm font-black text-blue-950 uppercase tracking-wider mb-2">
                    {stat.label}
                  </h4>

                  {/* Stat Description */}
                  <p className="text-blue-950 text-xs sm:text-sm leading-relaxed mt-2 font-semibold">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Placement Pipeline Process (Interactive Timeline) */}
        <div className="bg-slate-50/40 border border-slate-200/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xs">
          {/* Symmetrical background ring decoration */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-dashed border-orange-500/10 pointer-events-none" />

          <div className="max-w-2xl mb-16 relative z-10">
            <h3 className="text-blue-950 font-black text-2xl tracking-tight mb-3">
              The student Placement Pipeline
            </h3>
            <p className="text-blue-950 text-xs sm:text-sm leading-relaxed font-semibold">
              We guide and groom each student step-by-step to secure eligibility
              clearances, CDC documentation, and sign-on clearance.
            </p>
          </div>

          {/* Interactive Connected Pathway */}
          <div className="relative">
            {/* Horizontal Timeline Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[28px] left-[7%] right-[7%] h-0.5 bg-slate-200/80 pointer-events-none z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10 w-full">
              {steps.map((item, idx) => {
                const StepIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="relative group flex flex-col items-center md:items-start text-center md:text-left"
                  >
                    {/* Node Icon Container */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200/80 text-slate-500 flex items-center justify-center relative z-10 group-hover:border-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-3xs cursor-default">
                        <StepIcon className="w-6 h-6" />
                      </div>

                      {/* Step Number Badge */}
                      <span className="absolute -top-2 -right-2 bg-orange-100 text-orange-600 text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border border-orange-200/50 shadow-2xs group-hover:bg-white group-hover:text-orange-600 z-20">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-2 mt-6 max-w-[280px]">
                      <h4 className="text-blue-950 font-black text-base tracking-tight group-hover:text-orange-655 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-blue-950 text-xs sm:text-sm leading-relaxed font-semibold">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* MoU / Job Assistance Banner */}
        <div className="mt-12 bg-linear-to-r from-blue-950 to-blue-900 border border-blue-950 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-lg">
          {/* Subtle decorative background elements */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-10 top-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-3xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Direct Career Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                MOU signed with leading shipping companies
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                We work closely with leading global shipping companies to offer
                you job assistance and practical sea-work programs. We help you
                transition smoothly from our campus directly onto merchant navy
                ships!
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 shrink-0">
              <div className="bg-white/5 backdrop-blur-xs border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-2">
                <Anchor className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold tracking-wider text-slate-100 uppercase">
                  Company Tie-Ups
                </span>
              </div>
              <div className="bg-white/5 backdrop-blur-xs border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold tracking-wider text-slate-100 uppercase">
                  Sea-Work Programs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
