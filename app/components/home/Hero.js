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
  { src: "/images/hero/img1.jpg", alt: "Elite Placement Drives" },
  { src: "/images/hero/slide4.png", alt: "Premium Campus Hostels" },
];

const quickLinks = [
  {
    id: 1,
    title: "Admissions 2026",
    subtitle: "Apply Today",
    badge: "Govt. Approved",
    href: "/admissions#admissions",
    icon: GraduationCap,
    borderColor: "group-hover:border-orange-500/40",
    glowColor: "group-hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/10 text-orange-500",
  },
  {
    id: 2,
    title: "Placement",
    subtitle: "100% assistance",
    badge: "Placement Cell",
    href: "/admissions#placements",
    icon: Award,
    borderColor: "group-hover:border-emerald-500/40",
    glowColor: "group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: 3,
    title: "Courses",
    subtitle: "GP Rating",
    badge: "10th & 12th science",
    href: "/courses",
    icon: Anchor,
    borderColor: "group-hover:border-blue-500/40",
    glowColor: "group-hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 4,
    title: "Eco campus",
    subtitle: "Ac Hostels",
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
    <section className="relative w-full h-[50vh] flex flex-col justify-end overflow-hidden bg-blue-950">
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
        <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/20 to-blue-950/50 z-10" />
      </div>

      {/* Quick Links as simple text links overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 flex flex-wrap justify-center items-center gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="group bg-orange-600 text-white font-semibold text-sm md:text-base px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-orange-500/10 hover:border-transparent hover:-translate-y-0.5"
          >
            <span>{link.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      {/* Hero Content Area: Quick Links Grid */}
      {/* <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 sm:pb-16 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative overflow-hidden p-3 sm:p-4 rounded-xl border bg-white/90 hover:bg-white border-white/25 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-1.5 group flex items-center justify-between gap-4 min-h-[90px] ${link.borderColor} ${link.glowColor}`}
              >
                <div className="flex items-center gap-3 mt-1.5">
                  <div
                    className={`p-2 rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shrink-0 ${link.iconBg}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[14px] font-extrabold text-blue-950 group-hover:text-orange-500 transition-colors leading-snug">
                      {link.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-semibold mt-0.5 group-hover:text-slate-700 leading-tight">
                      {link.subtitle}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-500 text-blue-950 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs mt-1.5">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div> */}
    </section>
  );
}
