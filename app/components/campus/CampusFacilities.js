"use client";

import { motion } from "framer-motion";
import { Compass, Wrench, Utensils, Dumbbell } from "lucide-react";

const FACILITIES_DATA = [
  {
    title: "Bridge Simulators",
    icon: Compass,
    description: "Equipped with state-of-the-art DGS-approved bridge maneuvering simulators, preparing cadets to steer large container ships and cargo vessels under severe weather and high traffic scenarios."
  },
  {
    title: "Auxiliary Workshop",
    icon: Wrench,
    description: "Includes actual marine diesel engines, pumps, electrical circuits, and machining systems. Cadets learn overhaul, valve grinding, electrical wiring, and machine diagnostics."
  },
  {
    title: "Cadet Hostel & Mess",
    icon: Utensils,
    description: "A fully residential, neat boarding facility. Serves nutritious vegetarian and non-vegetarian meals matching required caloric charts. Discipline is maintained via regular bunk inspections."
  },
  {
    title: "Fitness Center & Sports",
    icon: Dumbbell,
    description: "Features a modern gym, football ground, volleyball court, and swimming pool. Swim training is compulsory for cadet emergency survival certificates."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

export default function CampusFacilities() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left"
    >
      {FACILITIES_DATA.map((fac) => {
        const Icon = fac.icon;
        return (
          <motion.div
            key={fac.title}
            variants={fadeInUp}
            className="bg-white border border-slate-200/80 p-8 rounded-3xl flex items-start space-x-6 hover:border-orange-500/35 hover:shadow-2xl hover:shadow-orange-500/[0.04] transition-all duration-500 group cursor-default relative overflow-hidden"
            whileHover={{ y: -6 }}
          >
            {/* 1. Reflective Diagonal Flash Shine Sweep */}
            <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none" />

            {/* 2. Massive Floating Background Icon (Bottom Right) */}
            <div className="absolute -bottom-6 -right-6 text-slate-100/50 group-hover:text-orange-500/8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none z-0">
              <Icon className="w-28 h-28 stroke-[1.2]" />
            </div>

            {/* 3. Icon Container with Multi-Layer Rings */}
            <div className="relative shrink-0 z-10">
              {/* Outer pulse ring */}
              <span className="absolute inset-0 rounded-2xl bg-orange-100/50 scale-100 group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
              <div className="relative w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-655 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-xs group-hover:shadow-md group-hover:rotate-6">
                <Icon className="w-6 h-6 stroke-[2]" />
              </div>
            </div>

            {/* 4. Text Content */}
            <div className="space-y-2.5 relative z-10 flex-1">
              <h3 className="text-blue-950 font-black text-lg tracking-tight group-hover:text-orange-655 transition-colors duration-300">
                {fac.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                {fac.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
