"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { stats } from "@/app/data/statistics";
import {
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Globe,
  Compass,
} from "lucide-react";

const iconMap = {
  1: Briefcase,
  2: Award,
  3: GraduationCap,
  4: Globe,
  5: Compass,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  },
};

const flashVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: "220%",
    transition: {
      delay: 0.35, // Sweeps across right as the card finishes its entry spring
      duration: 0.85,
      ease: "easeInOut",
    },
  },
};

function Counter({ targetValue, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, targetValue, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

function StatCard({ stat }) {
  const [hoverKey, setHoverKey] = useState(0);
  const IconComponent = iconMap[stat.id];

  return (
    <motion.div
      variants={cardVariants}
      className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs flex flex-col justify-between text-center transition-all duration-300 hover:border-orange-500/35 hover:bg-white/8 hover:shadow-2xl hover:shadow-orange-500/5 group hover:-translate-y-1.5 select-none"
      onMouseEnter={() => setHoverKey((prev) => prev + 1)}
    >
      {/* Sequential Shine/Flash Overlay */}
      <motion.div
        variants={flashVariants}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-[25deg] pointer-events-none z-20"
      />

      <div>
        {IconComponent && (
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 flex items-center justify-center text-slate-300 group-hover:text-orange-400 mx-auto mb-4 transition-all duration-300">
            <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </div>
        )}
        <div className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <Counter key={hoverKey} targetValue={stat.value} />
          <span className="text-orange-500 font-extrabold ml-0.5">
            {stat.suffix}
          </span>
        </div>
        <h3 className="text-orange-400 font-extrabold text-[11px] sm:text-xs uppercase tracking-widest mb-1.5">
          {stat.label}
        </h3>
      </div>
      <p className="text-[10px] sm:text-xs text-white/80 leading-normal border-t border-white/5 pt-2.5 mt-2">
        {stat.subLabel}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-linear-to-br from-blue-950 via-slate-900 to-blue-950 py-20 border-y border-blue-900/40 overflow-hidden">
      {/* Decorative orange/blue glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-orange-500/15 border border-orange-500/25 rounded-full px-3 py-1 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span className="text-[15px] font-extrabold text-orange-400 tracking-widest uppercase">
              PKIMSE Impact & Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Our Legacy in Numbers
          </h2>
          <p className="text-white/60 text-sm sm:text-md mt-2 tracking-wide">
            Over a decade of training elite maritime leaders who navigate global
            waterways.
          </p>
        </div>

        {/* Stats Grid with sequential stagger triggers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
