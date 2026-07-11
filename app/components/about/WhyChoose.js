"use client";

import { motion } from "framer-motion";
import {
  Anchor,
  ShieldCheck,
  Ship,
  Users,
  Cpu,
  Award,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
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

export default function WhyChoose() {
  const reasons = [
    {
      title: "DG Shipping Approved & A1 Graded",
      description:
        "Fully approved by the Ministry of Ports, Shipping and Waterways, Government of India, conforming to ISO 9001:2015 standards audited by DNV GL.",
      icon: ShieldCheck,
      color: "blue",
    },
    {
      title: "Veteran Faculty Mentorship",
      description:
        "Mentorship by seasoned Master Mariners and Chief Engineers with decades of global sailing and academic teaching experience.",
      icon: Users,
      color: "orange",
    },
    {
      title: "Simulated Shipboard Routine",
      description:
        "A structured, semi-military residential campus with daily parades, drills, and physical training designed to prepare cadets for sea life.",
      icon: Ship,
      color: "blue",
    },
    {
      title: "Advanced Simulators",
      description:
        "Hands-on navigation, radar plotting, and liquid cargo handling drills on Class-A DGS approved simulators.",
      icon: Cpu,
      color: "orange",
    },
    {
      title: "Heavy Duty Workshop",
      description:
        "Cadets get to dismantle and rebuild actual ship auxiliary diesel engines, pumps, air compressors, and purifiers in our marine labs.",
      icon: Anchor,
      color: "blue",
    },
    {
      title: "Strong Placement Track Record",
      description:
        "Consistent placement records with top global ship owners, managers, and shipping agents on large international merchant vessels.",
      icon: Award,
      color: "orange",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-slate-200/60 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
              WHY CHOOSE US
            </span>
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Why Should Students Choose PKIMSE?
          </h2>
          <p className="text-slate-655 text-sm max-w-xl mx-auto leading-relaxed">
            We provide a complete, industry-compliant ecosystem designed to
            transform young cadets into confident, highly-skilled maritime
            professionals.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between shadow-2xs hover:shadow-xl hover:bg-white hover:border-orange-550/30 transition-all duration-300 group cursor-default relative overflow-hidden min-h-[300px]"
              >
                {/* 1. Corner Gradient Glow Spot */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-orange-500/5 rounded-full blur-xl group-hover:bg-orange-500/10 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                {/* 2. Dotted Pattern Grid Overlay */}
                <div className="absolute top-6 right-6 w-12 h-12 pointer-events-none opacity-20 group-hover:opacity-40 group-hover:rotate-45 transition-all duration-700">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="4" cy="4" r="2" fill="#ea580c" />
                    <circle cx="20" cy="4" r="2" fill="#ea580c" />
                    <circle cx="36" cy="4" r="2" fill="#ea580c" />
                    <circle cx="4" cy="20" r="2" fill="#ea580c" />
                    <circle cx="20" cy="20" r="2" fill="#ea580c" />
                    <circle cx="36" cy="20" r="2" fill="#ea580c" />
                    <circle cx="4" cy="36" r="2" fill="#ea580c" />
                    <circle cx="20" cy="36" r="2" fill="#ea580c" />
                    <circle cx="36" cy="36" r="2" fill="#ea580c" />
                  </svg>
                </div>

                {/* 3. Shine Sweep Flash */}
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                  <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Icon Wrapper */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-350 ${
                      reason.color === "orange"
                        ? "bg-orange-50 text-orange-600 border-orange-100/50 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600"
                        : "bg-blue-50 text-blue-950 border-blue-100/50 group-hover:bg-blue-950 group-hover:text-white group-hover:border-blue-950"
                    }`}
                  >
                    <Icon className="w-6.5 h-6.5" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-blue-950 font-black text-lg tracking-tight group-hover:text-orange-655 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>

                {/* 4. Bottom Interactive Footer */}
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-zinc-900/90 group-hover:text-orange-600 transition-colors duration-300">
                  <span>PKIMSE Advantage</span>
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 text-slate-400 group-hover:text-orange-600" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
