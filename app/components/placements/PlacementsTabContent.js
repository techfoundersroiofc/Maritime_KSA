"use client";

import { motion } from "framer-motion";
import { Briefcase, Quote } from "lucide-react";
import { recruiters } from "@/app/data/recruiters";
import { testimonials } from "@/app/data/testimonials";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function PlacementsTabContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
      className="space-y-24 text-left"
    >
      {/* Stats and Placement Assistance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div className="lg:col-span-7 space-y-6" variants={fadeInUp}>
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-xs font-extrabold uppercase text-orange-600 tracking-wider">
              Placement Assistance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Dedicated Placement Cell & Sponsorships
          </h2>
          <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-medium">
            Our active Placement & Corporate Relations Cell works in close coordination with leading global ship management
            corporations. We streamline pre-selection sponsorship interviews (particularly for DNS), coordinate campus
            placement drives, and guide cadets through visa and CDC applications.
          </p>
          <p className="text-sm sm:text-base text-slate-650 leading-relaxed font-medium">
            Cadets undergo technical training seminars, mock interviews, and simulated tests guided by retired captains
            and seasoned chief engineers, guaranteeing an excellent placement record for our trainees.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-white border border-slate-200/80 p-7 rounded-3xl shadow-xs hover:border-orange-500/25 transition-all text-left"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl font-black text-blue-950 mb-1.5 flex items-baseline">
              <span>100%</span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500 ml-1.5 animate-ping" />
            </div>
            <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-2.5">
              DNS Sponsorships
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              All selected Diploma in Nautical Science (DNS) cadets secure
              corporate sponsorships prior to batch start.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-slate-200/80 p-7 rounded-3xl shadow-xs hover:border-orange-500/25 transition-all text-left"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl font-black text-blue-950 mb-1.5">
              50+
            </div>
            <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-2.5">
              Recruitment Lines
            </h4>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Our extensive networking allows cadets to sail with top-tier international bulk, container, and tanker operators.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Recruitment Partners Grid */}
      <motion.div className="space-y-10" variants={fadeInUp}>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black text-orange-650 uppercase tracking-widest block">
            SHIPPING CORPORATIONS
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
            Sponsorship & Recruiting Partners
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {recruiters.map((rec) => (
            <motion.div
              key={rec.name}
              className="bg-white border border-slate-200 p-6 rounded-2xl text-center flex items-center justify-center min-h-[96px] shadow-2xs hover:border-orange-500/40 hover:shadow-md transition-all duration-300 group cursor-default relative overflow-hidden"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              {/* Subtly flash a left-to-right highlight bar on hover */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-orange-500/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="text-xs sm:text-sm font-black text-blue-950 group-hover:text-orange-650 transition-colors tracking-wide leading-snug">
                {rec.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cadet Testimonials */}
      <motion.div className="space-y-12" variants={fadeInUp}>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black text-orange-650 uppercase tracking-widest block">
            ALUMNI PORTFOLIO
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
            Cadets Sailing Globally
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">
            Hear firsthand reviews from PKIMSE alumni who are currently navigating international shipping lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              className="bg-white border border-slate-200/80 p-7 sm:p-9 rounded-3xl flex flex-col justify-between relative group hover:shadow-lg transition-all duration-300 text-left"
              whileHover={{ y: -4 }}
            >
              <Quote className="w-10 h-10 text-slate-100 absolute top-6 right-6 scale-150 group-hover:text-orange-550/10 group-hover:scale-160 transition-all duration-300" />
              <div className="space-y-6">
                <p className="text-slate-655 text-xs sm:text-sm leading-relaxed italic relative z-10 font-medium">
                  &quot;{test.quote}&quot;
                </p>
                <div className="border-t border-slate-100 pt-5 flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-650 font-black text-sm shrink-0">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="text-blue-950 font-black text-sm sm:text-base">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                      {test.course}
                    </p>
                    <p className="text-[11px] text-orange-650 font-extrabold mt-0.5 uppercase tracking-wider">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
