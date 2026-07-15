"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  Award,
  Compass,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  GraduationCap,
  Building,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";

const slides = [
  {
    id: 1,
    image: "/images/hero/slide1.png",
    tagline: "🚀 Admissions Open 2026 - 2027",
    title: "Start a High-Salary Career After",
    highlight: "10th & 12th Science",
    subtitle:
      "Merchant Navy is the fastest route to a lucrative global career. Join PKIMSE for premier training with high-paying job opportunities right after school.",
    trustPoints: ["DG Shipping Approved (Govt of India)"],
    primaryBtn: "Apply Online Now 2026",
    primaryHref: "/admissions#admissions",
    secondaryBtn: "Download Prospectus",
    secondaryHref: "/contact#prospectus",
  },
  {
    id: 2,
    image: "/images/hero/slide2.png",
    tagline: "⚓ Job Assurance",
    title: "DG Shipping Approved Pre-Sea",
    highlight: "Merchant Navy Courses",
    subtitle:
      "Join directly after 10th or 12th. Get international standard training with modern simulators and fully equipped marine engine labs.",
    trustPoints: [
      "GP Rating Course (After 10th Pass)",
      "100% Practical and Simulator-based study",
    ],
    primaryBtn: "Explore Our Courses",
    primaryHref: "/courses",
    secondaryBtn: "Course Eligibility",
    secondaryHref: "/admissions#placements",
  },
  {
    id: 3,
    image: "/images/hero/slide3.png",
    tagline: "💼 100% Placement Support",
    title: "Guaranteed Placement Opportunities with",
    highlight: "Elite Shipping Lines",
    subtitle:
      "We partner with leading international shipping lines and logistics companies to secure placement assurance for all qualified cadets.",
    trustPoints: [
      "Dedicated placement cell with track record",
      "Career assistance until you join the vessel",
    ],
    primaryBtn: "Placement Statistics",
    primaryHref: "/admissions#placements",
    secondaryBtn: "Our Recruiters",
    secondaryHref: "/admissions#recruiters",
  },
  {
    id: 4,
    image: "/images/hero/slide4.png",
    tagline: "🏫 Safe & Secure Residential Campus",
    title: "World-Class Campus Facilities &",
    highlight: "Fully Equipped Hostels",
    subtitle:
      "Ensure your child's safety and growth in our comprehensive residential campus featuring high-quality hostels, clean dining, and sports fields.",
    trustPoints: [
      "24/7 Security & full residential supervision",
      "Advanced workshops, marine simulators & pool",
      "Nutritious, hygienic food served daily",
    ],
    primaryBtn: "Explore Campus Life",
    primaryHref: "/campus",
    secondaryBtn: "Campus Gallery",
    secondaryHref: "/gallery",
  },
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
    iconBg: "bg-orange-550/10 text-orange-600",
  },
  {
    id: 2,
    title: "100% Placements",
    subtitle: "Sponsorship Records",
    badge: "Direct Tie-ups",
    href: "/admissions#placements",
    icon: Award,
    borderColor: "group-hover:border-emerald-500/40",
    glowColor: "group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10 text-emerald-600",
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
    iconBg: "bg-blue-500/10 text-blue-600",
  },
  {
    id: 4,
    title: "Campus & Hostels",
    subtitle: "Facilities & Safety",
    badge: "Safe Residential",
    href: "/campus",
    icon: Compass,
    borderColor: "group-hover:border-amber-500/40",
    glowColor: "group-hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10 text-amber-600",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  return (
    <section className="relative py-5 flex items-center justify-center overflow-hidden bg-slate-900 ">
      {/* Background Image Carousel with Ken Burns Zoom Effect */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.8, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 6.5, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* High-contrast responsive overlays to ensure text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-white/98 via-white/95 to-white/98 lg:bg-linear-to-r lg:from-white lg:via-white/97 lg:to-transparent/20 z-10" />

        {/* Glowing backdrop design elements shifting colors based on active slide */}
        <div
          className={`absolute top-1/4 left-1/4 -translate-x-1/2 w-[450px] h-[450px] rounded-full blur-[140px] transition-all duration-1000 z-10 ${
            currentSlide === 0
              ? "bg-orange-500/10"
              : currentSlide === 1
                ? "bg-blue-500/10"
                : currentSlide === 2
                  ? "bg-emerald-500/10"
                  : "bg-amber-500/10"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full blur-[160px] transition-all duration-1000 z-10 ${
            currentSlide === 0
              ? "bg-blue-500/5"
              : currentSlide === 1
                ? "bg-orange-500/5"
                : currentSlide === 2
                  ? "bg-teal-500/5"
                  : "bg-orange-500/5"
          }`}
        />
      </div>

      {/* Hero Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 z-20 relative w-full flex flex-col justify-between h-full pt-10">
        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[48vh] lg:min-h-[52vh]">
          {/* Left Column: Animating Slide Copy */}
          <div className="lg:col-span-9 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
                className="space-y-6 md:space-y-7"
              >
                {/* Tagline / Badge */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-850 border border-orange-500/25 rounded-full px-4.5 py-1.5 shadow-sm hover:border-orange-500/40 transition-all duration-300 btn-shine"
                >
                  <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase">
                    {slides[currentSlide].tagline}
                  </span>
                </motion.div>

                {/* Animated Headline */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-blue-950 leading-[1.1] lg:leading-[1.05]"
                >
                  {slides[currentSlide].title} <br />
                  <span className="bg-linear-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xs">
                    {slides[currentSlide].highlight}
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="text-slate-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium max-w-3xl"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Trust Points (Crucial for 10th/12th parents & students) */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl pt-2"
                >
                  {slides[currentSlide].trustPoints.map((point, idx) => (
                    <motion.div
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                      className="flex items-center space-x-2.5"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-750">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
                >
                  <Link
                    href={slides[currentSlide].primaryHref}
                    className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-sm px-8 py-4 rounded shadow-lg shadow-orange-600/20 hover:shadow-orange-600/35 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>{slides[currentSlide].primaryBtn}</span>
                    <ArrowRight className="w-5 h-5 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                  <Link
                    href={slides[currentSlide].secondaryHref}
                    className="w-full sm:w-auto bg-white hover:bg-slate-50 text-blue-950 border border-slate-200 hover:border-slate-300 font-extrabold text-sm px-8 py-4 rounded transition-all duration-300 flex items-center justify-center shadow-md hover:-translate-y-0.5 backdrop-blur-xs"
                  >
                    <span>{slides[currentSlide].secondaryBtn}</span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Displays navigation arrows and play/pause controls) */}
          <div className="hidden lg:col-span-3 lg:flex flex-col items-end justify-center pr-4">
            <div className="flex items-center space-x-3 bg-white/80 border border-slate-200/50 p-2.5 rounded-full shadow-lg backdrop-blur-md">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-600 hover:text-white text-blue-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-600 hover:text-white text-blue-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm"
                aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-600 hover:text-white text-blue-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Timeline Slide Progress Indicator right above Bottom Navigation */}
        <div className="w-full bg-slate-200/50 h-1 rounded-full overflow-hidden mt-8 md:mt-12">
          {isPlaying && (
            <motion.div
              key={currentSlide}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              className="h-full bg-orange-500 rounded-full"
            />
          )}
        </div>

        {/* Interactive Bottom Navigation Cards mapping to Admissions, Placements, Courses, Campus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
          {quickLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.id}
                href={link.href}
                className={`relative overflow-hidden p-5 rounded-xl border bg-white/90 hover:bg-white border-slate-200/80 transition-all duration-300 backdrop-blur-md shadow-xs hover:shadow-xl hover:-translate-y-2 group flex flex-col justify-between min-h-[120px] ${link.borderColor} ${link.glowColor}`}
              >
                {/* Top Row: Icon and Small Badge */}
                <div className="flex items-start justify-between w-full">
                  <div
                    className={`p-2.5 rounded-lg transition-transform duration-300 group-hover:scale-105 ${link.iconBg}`}
                  >
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Trust Badge */}
                  <span className="inline-flex items-center text-[9px] font-black uppercase tracking-wider bg-slate-100 text-black border border-slate-200/50 px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                </div>

                {/* Bottom Row: Text, Subtext, and Arrow */}
                <div className="mt-4 flex items-end justify-between">
                  <div className="pr-4">
                    <h3 className="text-[15px] font-black text-blue-950 group-hover:text-orange-600 transition-colors leading-snug">
                      {link.title}
                    </h3>
                    <p className="text-[11px] text-black font-semibold mt-0.5 group-hover:text-slate-700">
                      {link.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator Button */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-600 text-blue-950 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Subtle bottom border accent light */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
