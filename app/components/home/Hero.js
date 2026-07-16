"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  Award,
  Compass,
  GraduationCap,
} from "lucide-react";

const images = [
  { src: "/images/hero/slide1.png", alt: "PKIMSE Student Training" },
  { src: "/images/hero/slide2.png", alt: "Marine Engine Workshop" },
  { src: "/images/hero/slide3.png", alt: "Elite Placement Drives" },
  { src: "/images/hero/slide4.png", alt: "Premium Campus Hostels" },
];

const quickLinks = [
  {
    id: 1,
    title: "Admissions 2026",
    subtitle: "Apply Online Today",
    badge: "Govt. Approved",
    href: "/admissions#admissions",
    icon: GraduationCap,
    borderColor: "group-hover:border-orange-500/40",
    glowColor: "group-hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/10 text-orange-500",
  },
  {
    id: 2,
    title: "100% Placement Support",
    subtitle: "100% Job support guaranteed",
    badge: "Placement Cell",
    href: "/admissions#placements",
    icon: Award,
    borderColor: "group-hover:border-emerald-500/40",
    glowColor: "group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: 3,
    title: "Merchant Navy Courses",
    subtitle: "GP Rating & DNS Info",
    badge: "10th & 12th science",
    href: "/courses",
    icon: Anchor,
    borderColor: "group-hover:border-blue-500/40",
    glowColor: "group-hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 4,
    title: "Greenish campus & Ac hostels",
    subtitle: "Always Eco-Green campus & AC Hostels",
    badge: "Safe Residential",
    href: "/campus",
    icon: Compass,
    borderColor: "group-hover:border-amber-500/40",
    glowColor: "group-hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10 text-amber-600",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] flex flex-col justify-end overflow-hidden bg-blue-950">
      {/* Full-bleed background image carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft, premium gradient overlay to ensure card readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-blue-950/50 z-10" />
      </div>

      {/* Floating indicators / slide progress indicators */}
      <div className="absolute top-36 right-8 md:right-12 z-20 flex flex-col space-y-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              idx === index
                ? "bg-orange-500 h-12 shadow-lg shadow-orange-500/50"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Hero Content Area: Quick Links Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 sm:pb-16 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative overflow-hidden p-6 rounded-2xl border bg-white/90 hover:bg-white border-white/25 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-2.5 group flex flex-col justify-between min-h-[140px] ${link.borderColor} ${link.glowColor}`}
              >
                {/* Top Row: Icon and Small Badge */}
                <div className="flex items-start justify-between w-full">
                  <div
                    className={`p-3 rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 ${link.iconBg}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center text-[10px] font-black uppercase tracking-wider bg-slate-100/90 text-blue-950 border border-slate-200/50 px-2.5 py-0.5 rounded-md">
                    {link.badge}
                  </span>
                </div>

                {/* Bottom Row: Text, Subtext, and Arrow */}
                <div className="mt-6 flex items-end justify-between">
                  <div className="pr-4 text-left">
                    <h3 className="text-[16px] font-extrabold text-blue-950 group-hover:text-orange-500 transition-colors leading-snug">
                      {link.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 font-semibold mt-1 group-hover:text-slate-700 leading-tight">
                      {link.subtitle}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-orange-500 text-blue-950 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
                    <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
