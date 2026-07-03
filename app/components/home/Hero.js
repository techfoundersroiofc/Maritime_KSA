"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Anchor, ArrowRight, Award, Compass } from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Merchant Navy Cargo Ship"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 scale-100 transform transition-transform duration-[12000ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40" />

        {/* Glowing SaaS blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 z-10 text-center relative pt-8">
        {/* Floating badge with premium borders */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-full px-4.5 py-2 mb-8 shadow-2xl hover:border-orange-500/30 transition-all duration-300">
          <Award className="w-4 h-4 text-orange-500" />
          <span className="text-[10px] md:text-xs font-bold text-slate-350 tracking-widest uppercase">
            A1 Grade Approved Maritime Academy
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.12]">
          Navigating Careers, <br />
          <span className="bg-gradient-to-r from-orange-550 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
            Commanding Oceans
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          Join PKIMSE (KSA Maritime College), the premier DG Shipping approved
          institute in India. Step into a prestigious, high-salary global career
          in the Merchant Navy as a licensed Deck Officer or Marine Engineer.
        </p>

        {/* CTAs with modern shadow glow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20">
          <Link
            href="/courses"
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm px-8 py-4.5 rounded shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5 transition-all duration-350 flex items-center justify-center group"
          >
            <span>Explore Pre-Sea Programs</span>
            <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-slate-900/90 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-bold text-sm px-8 py-4.5 rounded transition-all duration-300 flex items-center justify-center backdrop-blur-md hover:-translate-y-0.5 shadow-xl"
          >
            <span>Admission Enquiry</span>
          </Link>
        </div>

        {/* Floating Quick USPs with stagger animate support */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-900/80 pt-12 text-left max-w-5xl mx-auto gsap-stagger-container">
          <div className="bg-slate-900/30 border border-slate-900/80 hover:border-orange-500/20 p-5 rounded-lg backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group gsap-stagger-item">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 transition-colors">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white text-sm font-bold tracking-wide transition-colors group-hover:text-orange-500">
                DG Shipping Approved
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Conforming to IMO STCW conventions and Indian maritime
                standards.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-900/80 hover:border-orange-500/20 p-5 rounded-lg backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group gsap-stagger-item">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white text-sm font-bold tracking-wide transition-colors group-hover:text-orange-500">
                A1 Outstanding Grading
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Accredited A1 Outstanding quality rating in audit inspections.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/30 border border-slate-900/80 hover:border-orange-500/20 p-5 rounded-lg backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group gsap-stagger-item">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white text-sm font-bold tracking-wide transition-colors group-hover:text-orange-500">
                DNS Sponsorship
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Sponsorship prior to course start secures 100% placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
