"use client";

import { motion } from "framer-motion";
import { ShieldAlert, UserCheck, Clock, Ban } from "lucide-react";

const RULES_DATA = [
  {
    title: "Uniform & Grooming",
    detail:
      "Strict dress code matching designated maritime merchant navy uniform ranks at all times.",
    icon: UserCheck,
    color: "text-orange-600 bg-orange-50 border-orange-100/80",
    hoverBorder: "hover:border-orange-500/25 hover:shadow-orange-500/[0.02]",
  },
  {
    title: "Physical Routine",
    detail:
      "Mandatory morning physical training (PT) and drills starting sharp at 06:00 hrs daily.",
    icon: Clock,
    color: "text-blue-600 bg-blue-50 border-blue-100/80",
    hoverBorder: "hover:border-blue-500/25 hover:shadow-blue-500/[0.02]",
  },
  {
    title: "Zero Tolerance",
    detail:
      "Strict prohibition and immediate expulsion policy for drugs, alcohol, and ragging on campus.",
    icon: Ban,
    color: "text-rose-600 bg-rose-50 border-rose-100/80",
    hoverBorder: "hover:border-rose-500/25 hover:shadow-rose-500/[0.02]",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function CampusRules() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left"
    >
      {/* Left Column: Code of Conduct Card */}
      <motion.div
        variants={fadeInUp}
        className="lg:col-span-4 bg-linear-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-lg"
      >
        {/* Soft decorative visual sweeps */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-white/5 rounded-full blur-xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
            <ShieldAlert className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Campus Directives</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-black tracking-tight leading-tight">
              Student Code of Conduct
            </h3>
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
              All pre-sea programs are strictly residential. Students are
              required to live in college hostels, wear uniforms, and adhere to
              military-grade discipline. Leave is only granted under exceptional
              circumstances.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
          <p className="text-[10px] font-black tracking-wider text-slate-450 uppercase">
            Directorate General of Shipping Rules
          </p>
        </div>
      </motion.div>

      {/* Right Column: Grid of rules */}
      <motion.div
        variants={fadeInUp}
        className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {RULES_DATA.map((rule) => {
          const Icon = rule.icon;
          return (
            <motion.div
              key={rule.title}
              className={`bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${rule.hoverBorder} group cursor-default`}
              whileHover={{ y: -4 }}
            >
              <div className="space-y-4">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center ${rule.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-5 h-5 stroke-2" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-blue-950 font-black text-sm sm:text-base tracking-tight group-hover:text-orange-655 transition-colors">
                    {rule.title}
                  </h4>
                  <p className="text-blue-950 text-xs sm:text-sm leading-relaxed font-semibold">
                    {rule.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
