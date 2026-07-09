"use client";

import { stats } from "@/app/data/statistics";

export default function Stats() {
  return (
    <section className="relative bg-slate-100/60 py-16 border-y border-slate-200/60 overflow-hidden">
      {/* Glow decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-orange-550/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 justify-items-center gsap-stagger-container">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group gsap-stagger-item"
            >
              <div className="text-4xl sm:text-5xl font-black text-blue-950 mb-2 tracking-tight group-hover:text-orange-600 transition-colors duration-300 flex items-center justify-center">
                <span>{stat.value}</span>
                <span className="text-orange-600 font-black ml-0.5">{stat.suffix}</span>
              </div>
              <h3 className="text-slate-700 font-bold text-xs sm:text-sm uppercase tracking-wider mb-1">
                {stat.label}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500">
                {stat.subLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
