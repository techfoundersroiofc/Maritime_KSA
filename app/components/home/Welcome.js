"use client";

import Image from "next/image";
import Link from "next/link";
import { Anchor, ShieldCheck, Ship, Users } from "lucide-react";
import { keyHighlights } from "@/app/data/statistics";

export default function Welcome() {
  const iconMap = [Ship, ShieldCheck, Users, Anchor];

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-orange-650/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: About Intro */}
          <div className="lg:col-span-6 flex flex-col space-y-6 gsap-slide-up">
            <div className="flex items-center space-x-2">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
                Welcome to PKIMSE
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Shaping Disciplined & Skilled Maritime Leaders
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              PKIMSE (KSA Maritime College) stands as a beacon of maritime excellence in Tamil Nadu, India. 
              As a core part of the trusted <strong>KSA Group of Institutions</strong>, we deliver premier maritime education, 
              meeting all domestic and international standards of safety, quality, and deck/engine operations.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Our residential campus at Chidambaram is designed to simulate shipboard conditions, 
              instilling standard maritime discipline, physical fitness, and professional skills. 
              Led by veteran Master Mariners and Chief Engineers, we help cadets transform into competent, 
              sought-after naval professionals.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-slate-900 border border-slate-800 hover:border-orange-500/30 text-white font-bold text-xs px-6 py-3.5 rounded transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right: Key Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 gsap-stagger-container">
            {keyHighlights.map((hl, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div
                  key={hl.title}
                  className="bg-slate-900/40 border border-slate-900/80 p-6 rounded-lg relative hover:border-orange-500/20 hover:bg-slate-900/60 transition-all duration-300 group gsap-stagger-item"
                >
                  <div className="w-10 h-10 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-500 mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2 group-hover:text-orange-500 transition-colors">
                    {hl.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
