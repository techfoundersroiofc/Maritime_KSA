"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Anchor, ArrowRight, Award, Compass } from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-50 py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Merchant Navy Cargo Ship"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80 scale-100 transform transition-transform duration-12000 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-slate-50/45" />

        {/* Glowing SaaS blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-orange-550/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 z-10 text-center relative pt-8">
        {/* Floating badge with premium borders */}
        <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full px-4.5 py-2 mb-8 shadow-md hover:border-orange-500/30 transition-all duration-300">
          <Award className="w-4 h-4 text-orange-600" />
          <span className="text-[10px] md:text-xs font-bold text-slate-700 tracking-widest uppercase">
            A1 Grade Approved Maritime Academy
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-blue-950 mb-6 leading-[1.12]">
          Navigating Careers, <br />
          <span className="bg-linear-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
            Commanding Oceans
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-650 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Join PKIMSE (KSA Maritime College), the premier DG Shipping approved
          institute in India. Step into a prestigious, high-salary global career
          in the Merchant Navy as a licensed Deck Officer or Marine Engineer.
        </p>

        {/* CTAs with modern shadow glow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20">
          <Link
            href="/courses"
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-550 text-white font-bold text-sm px-8 py-4.5 rounded shadow-lg shadow-orange-600/35 hover:shadow-orange-650/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
          >
            <span>Explore Pre-Sea Programs</span>
            <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-950 border border-slate-300 hover:border-slate-400 font-bold text-sm px-8 py-4.5 rounded transition-all duration-300 flex items-center justify-center backdrop-blur-md hover:-translate-y-0.5 shadow-md"
          >
            <span>Admission Enquiry</span>
          </Link>
        </div>

        {/* Floating Quick USPs with stagger animate support */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-200/80 pt-12 text-left max-w-5xl mx-auto gsap-stagger-container">
          <div className="bg-white/80 border border-slate-200/80 hover:border-orange-500/30 p-5 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group gsap-stagger-item">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-sm font-bold tracking-wide transition-colors group-hover:text-orange-600">
                DG Shipping Approved
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Conforming to IMO STCW conventions and Indian maritime
                standards.
              </p>
            </div>
          </div>

          <div className="bg-white/80 border border-slate-200/80 hover:border-orange-500/30 p-5 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group gsap-stagger-item">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-sm font-bold tracking-wide transition-colors group-hover:text-orange-600">
                A1 Outstanding Grading
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Accredited A1 Outstanding quality rating in audit inspections.
              </p>
            </div>
          </div>

          <div className="bg-white/80 border border-slate-200/80 hover:border-orange-500/30 p-5 rounded-lg shadow-sm hover:shadow-md backdrop-blur-sm flex items-start space-x-4 transition-all duration-300 group gsap-stagger-item">
            <div className="w-11 h-11 rounded bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-blue-950 text-sm font-bold tracking-wide transition-colors group-hover:text-orange-600">
                DNS Sponsorship
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Sponsorship prior to course start secures 100% placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
