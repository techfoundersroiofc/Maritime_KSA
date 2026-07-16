"use client";

import { motion } from "framer-motion";
import { recruiters } from "@/app/data/recruiters";
import { Handshake, Anchor } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function Collaborations() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-orange-550/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
              COLLABORATIONS
            </span>
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Companies Tie-up & Recruiting Partners
          </h2>
          <p className="text-blue-950 text-sm font-semibold max-w-xl mx-auto leading-relaxed">
            PKIMSE partners with global shipowners and top-tier ship management companies to host regular placement exams and secure sponsorships for our student officers.
          </p>
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl mb-16 flex flex-col md:flex-row gap-6 items-center justify-between"
        >
          <div className="space-y-3 max-w-2xl text-left">
            <h3 className="text-blue-950 font-black text-lg flex items-center">
              <Handshake className="w-5.5 h-5.5 text-orange-600 mr-2 shrink-0" />
              Sponsorship & Shipboard Placements
            </h3>
            <p className="text-blue-950 text-xs sm:text-sm leading-relaxed font-semibold">
              We coordinate placement activities with leading shipping conglomerates. Our students undergo rigorous mock test preps and psychometric grooming sessions to meet high standards set by the industry.
            </p>
          </div>
          
          <div className="flex items-center space-x-2.5 shrink-0 bg-white border border-slate-200 py-3 px-5 rounded-2xl shadow-2xs">
            <Anchor className="w-5 h-5 text-orange-600 animate-bounce" />
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Placement Drives</span>
              <span className="text-xs font-black text-blue-950">Active Recruiting Portals</span>
            </div>
          </div>
        </motion.div>

        {/* Recruiter Logo Grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-items-center items-center w-full"
        >
          {recruiters.map((rec) => (
            <motion.div
              key={rec.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-slate-50 border border-slate-200 hover:border-orange-500/35 hover:bg-white p-6 rounded-2xl text-center w-full min-h-[90px] flex items-center justify-center transition-all duration-300 group shadow-2xs hover:shadow-md cursor-default select-none"
            >
              <span className="text-xs sm:text-sm font-black text-blue-950 group-hover:text-orange-655 transition-colors tracking-wide leading-tight px-1 text-center">
                {rec.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
