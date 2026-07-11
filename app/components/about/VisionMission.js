"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Compass,
  Target,
  Shield,
  Heart,
  Award,
  Users,
  AlertCircle,
  Ban,
  Globe,
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

export default function VisionMission() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // GSAP context for safe cleanup in React
    const ctx = gsap.context(() => {
      // 1. Floating animation for top-left orange circle
      gsap.to(".gsap-orange-circle-1", {
        y: -40,
        x: 20,
        scale: 1.05,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Floating animation for bottom-right orange circle
      gsap.to(".gsap-orange-circle-2", {
        y: 35,
        x: -25,
        scale: 0.95,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Smooth rotation for dashed orange ring
      gsap.to(".gsap-orange-ring-rotate", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      // 4. Subtle hover/pulse on a small orange dot
      gsap.to(".gsap-orange-dot-pulse", {
        scale: 1.3,
        opacity: 0.8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const coreValues = [
    {
      title: "Safety First",
      description:
        "Absolute focus on maritime safety, environmental protection (MARPOL compliance), and proactive risk management.",
      icon: Shield,
      color: "blue",
    },
    {
      title: "Discipline & Integrity",
      description:
        "Instilling professional seafarer discipline, semi-military obedience, and strong ethical leadership principles.",
      icon: Award,
      color: "orange",
    },
    {
      title: "Professional Competence",
      description:
        "Fostering hands-on technical excellence, problem-solving capabilities, and a commitment to lifelong learning.",
      icon: Target,
      color: "blue",
    },
    {
      title: "Global Standards",
      description:
        "Aligning all educational training with international IMO STCW conventions and the requirements of global ship owners.",
      icon: Globe,
      color: "orange",
    },
  ];

  const moralPolicies = [
    {
      title: "Zero Tolerance for Harassment & Hazing",
      description:
        "We are committed to a safe, inclusive, and strictly monitored campus where bullying, ragging, or discrimination in any form is completely prohibited.",
      icon: Ban,
    },
    {
      title: "Alcohol and Drug-Free Campus",
      description:
        "Adherence to strict merchant navy sobriety policies. We maintain a zero-tolerance policy for substances to ensure safety and discipline.",
      icon: AlertCircle,
    },
    {
      title: "Ethical Conduct & MARPOL Compliance",
      description:
        "Instilling deep respect for marine life and ecosystems. Cadets learn to strictly follow rules that protect our oceans.",
      icon: Heart,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="bg-white py-24 border-y border-slate-200/60 relative overflow-hidden text-slate-650"
    >
      {/* GSAP Animated Orange Circles and Rings */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none gsap-orange-circle-1" />
      <div className="absolute bottom-1/4 right-10 w-112 h-112 bg-orange-500/5 rounded-full blur-3xl pointer-events-none gsap-orange-circle-2" />

      {/* Decorative Rotating Ring */}
      <div className="absolute top-10 right-1/4 w-[350px] h-[350px] rounded-full border border-dashed border-orange-500/10 pointer-events-none gsap-orange-ring-rotate" />

      {/* Pulsing Solid Dot */}
      <div className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-orange-500/10 pointer-events-none gsap-orange-dot-pulse" />

      {/* Decorative blue glows */}
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Mission & Vision Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50/70 border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden group hover:border-orange-550/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6"
          >
            {/* Sweep Shine Effect */}
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] pointer-events-none -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

            <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-350">
              <Compass className="w-7 h-7" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight group-hover:text-orange-655 transition-colors">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                To be globally acknowledged as a premier center of maritime
                education, supplying global shipping lines with highly
                disciplined, technically competent, and ethical Marine Officers
                who excel in the international seafaring arena.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50/70 border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden group hover:border-blue-900/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6"
          >
            {/* Sweep Shine Effect */}
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] pointer-events-none -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-950 shrink-0 group-hover:bg-blue-950 group-hover:text-white transition-all duration-350">
              <Target className="w-7 h-7" />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight group-hover:text-blue-950 transition-colors">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                To provide state-of-the-art simulator and workshop-based
                instruction, ensuring cadets comply with IMO STCW conventions.
                We strive to instill high standards of maritime discipline, team
                building, and leadership to prep students for challenges at sea.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="mb-28">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-black text-orange-600 uppercase tracking-widest block">
              OUR FOUNDATION
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Core Institutional Values
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              These guiding principles form the bedrock of our cadet training
              regime, driving absolute professionalism and excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-slate-50/70 border border-slate-200 p-7 rounded-2xl flex flex-col justify-between hover:border-orange-550/30 hover:bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden cursor-default shadow-2xs"
                >
                  {/* Sweep Shine Effect */}
                  <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] pointer-events-none -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        val.color === "orange"
                          ? "bg-orange-50 text-orange-600 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white"
                          : "bg-blue-50 text-blue-950 border border-blue-100 group-hover:bg-blue-950 group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="text-blue-950 font-black text-base tracking-tight mb-3 group-hover:text-orange-655 transition-colors">
                      {val.title}
                    </h4>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1 relative z-10 font-medium">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Moral Policies & Ethics */}
        <div>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-xs font-black text-orange-600 uppercase tracking-widest block">
              CAMPUS CONDUCT
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Moral Policies & Code of Ethics
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              We enforce strict compliance policies to cultivate a highly
              disciplined, safe, and professional environment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {moralPolicies.map((policy) => {
              const Icon = policy.icon;
              return (
                <motion.div
                  key={policy.title}
                  variants={fadeInUp}
                  className="bg-slate-50/70 border border-slate-200/80 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-550/30 hover:bg-white hover:shadow-xl transition-all duration-300 shadow-2xs cursor-default"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-100 rounded-full translate-x-8 -translate-y-8 group-hover:bg-orange-50 transition-colors duration-300" />

                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 mb-6 relative z-10 group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-200/50 transition-all duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  <h4 className="text-blue-950 font-black text-sm tracking-tight mb-3 relative z-10 group-hover:text-orange-655 transition-colors">
                    {policy.title}
                  </h4>
                  <p className="text-slate-655 text-xs sm:text-sm leading-relaxed relative z-10 font-medium">
                    {policy.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
