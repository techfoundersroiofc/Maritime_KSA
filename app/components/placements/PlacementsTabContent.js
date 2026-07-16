"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { recruiters } from "@/app/data/recruiters";
import { testimonials } from "@/app/data/testimonials";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function PlacementsTabContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
      className="space-y-24 text-left"
    >
      {/* Stats and Placement Assistance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div className="lg:col-span-7 space-y-6" variants={fadeInUp}>
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-xs font-extrabold uppercase text-orange-600 tracking-wider">
              Placement Assistance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Dedicated Placement Cell
          </h2>
          <p className="text-sm sm:text-base text-blue-950 leading-relaxed font-semibold">
            Our active Placement & Corporate Relations Cell works in close
            coordination with leading global ship management corporations. We
            streamline placement preparation (particularly for DNS), coordinate
            campus placement drives, and guide students through visa and CDC
            applications.
          </p>
          <p className="text-sm sm:text-base text-blue-950 leading-relaxed font-semibold">
            students undergo technical training seminars, mock interviews, and
            simulated tests guided by retired captains and seasoned chief
            engineers, guaranteeing an excellent placement record for our
            trainees.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          variants={fadeInUp}
        >
          <motion.div
            className="bg-white border border-slate-200/80 p-7 rounded-3xl shadow-xs hover:border-orange-500/25 transition-all text-left"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl font-black text-blue-950 mb-1.5 flex items-baseline">
              <span>100%</span>
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500 ml-1.5 animate-ping" />
            </div>
            <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-2.5">
              DNS Approved
            </h4>
            <p className="text-xs text-blue-950 font-semibold leading-relaxed">
              Our Diploma in Nautical Science (DNS) program is fully approved
              and complies with DGS academic standards.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-slate-200/80 p-7 rounded-3xl shadow-xs hover:border-orange-500/25 transition-all text-left"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl sm:text-5xl font-black text-blue-950 mb-1.5">
              50+
            </div>
            <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-2.5">
              Recruitment Lines
            </h4>
            <p className="text-xs text-blue-950 font-semibold leading-relaxed">
              Our extensive networking allows students to sail with top-tier
              international bulk, container, and tanker operators.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cadet Testimonials Carousel */}
      <motion.div className="space-y-12 pb-8" variants={fadeInUp}>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block">
            ALUMNI PORTFOLIO
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
            Students Sailing Globally
          </h3>
          <p className="text-blue-950 text-xs sm:text-sm font-semibold">
            Hear firsthand reviews from PKIMSE alumni who are currently navigating international shipping lines.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-12">
          {/* Main Card */}
          <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-[32px] shadow-xs hover:shadow-lg transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]"
              >
                {/* Left side: Photo */}
                <div className="md:col-span-5 relative min-h-[300px] md:min-h-full w-full bg-slate-100 overflow-hidden group">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating role badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-orange-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md inline-block">
                      {testimonials[currentIndex].role}
                    </span>
                  </div>
                </div>

                {/* Right side: Quote details */}
                <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative bg-slate-50/20 text-left">
                  {/* Decorative big quote icon */}
                  <Quote className="w-16 h-16 text-slate-100 absolute top-6 right-6 scale-150 pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <div className="space-y-1">
                      <h4 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-orange-600 font-bold uppercase tracking-wider">
                        {testimonials[currentIndex].course}
                      </p>
                    </div>

                    <p className="text-blue-950 text-sm sm:text-base leading-relaxed italic font-semibold">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </p>
                  </div>

                  <div className="border-t border-slate-200/60 pt-6 mt-8 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      PKIMSE Alumni Profile
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-[-8px] sm:left-[-24px] top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-blue-950 hover:bg-orange-600 hover:text-white p-3 sm:p-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-[-8px] sm:right-[-24px] top-1/2 -translate-y-1/2 bg-white border border-slate-200 text-blue-950 hover:bg-orange-600 hover:text-white p-3 sm:p-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-orange-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
