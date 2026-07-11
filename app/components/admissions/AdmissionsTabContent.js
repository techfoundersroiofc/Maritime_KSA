"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Activity, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/app/lib/utils";

// Structured Admissions timeline content
const ADMISSION_STEPS = [
  {
    id: 1,
    title: "Verify Academic Eligibility",
    badge: "Pre-requisite",
    badgeColor: "text-slate-500 bg-slate-100",
    description: "", // Handled with custom Link inside render
  },
  {
    id: 2,
    title: "Qualify the IMU-CET Written Exam",
    badge: "Entrance Test",
    badgeColor: "text-blue-800 bg-blue-50",
    description:
      "For degree programs (B.Sc, B.Tech) and DNS, qualifying the Indian Maritime University Common Entrance Test (IMU-CET) is mandatory. Registration typically commences in April/May annually.",
  },
  {
    id: 3,
    title: "Submit Online College Application",
    badge: "Registration",
    badgeColor: "text-emerald-800 bg-emerald-50",
    description:
      "Fill out the enrollment query or physical application form. Submit official transcripts, pass certificates, birth proof, and identification documents for verification.",
  },
  {
    id: 4,
    title: "Aptitude Screening & Panel Interview",
    badge: "Selection",
    badgeColor: "text-purple-800 bg-purple-50",
    description:
      "Shortlisted candidates must clear the PKIMSE proctored aptitude test covering PCM and English fundamentals, followed by a one-on-one personal interview with maritime captains and faculty.",
  },
  {
    id: 5,
    title: "DGS Approved Medical Fitness Test",
    badge: "Medical check",
    badgeColor: "text-amber-800 bg-amber-50",
    description:
      "Undergo and clear physical and ophthalmic diagnostics conducted exclusively by practitioners approved by the Directorate General of Shipping (DGS), Government of India.",
  },
];

// Physical diagnostic criteria categories
const MEDICAL_NORMS = [
  {
    category: "Deck Division",
    detail:
      "Deck Cadets: 6/6 unaided vision in each eye. Standard color vision check (no color blindness check).",
  },
  {
    category: "Engineering & Ratings",
    detail:
      "Engine Division: Eyesight up to +/- 2.5 permitted. Color blindness is not acceptable.",
  },
  {
    category: "Auditory Test",
    detail:
      "Hearing Capacity: Must pass normal auditory levels checked via certified audiometry testing.",
  },
  {
    category: "Skeletal Standards",
    detail:
      "General: Clear speech, strong bone framework, and zero physical defects or limitations.",
  },
];

// Dates timeline schema
const INTAKE_SCHEDULE = [
  { event: "Online Application Starts", date: "April 1, 2026" },
  { event: "IMU-CET Written Exam", date: "June 2026" },
  { event: "PKIMSE Entrance Drives", date: "July 2026" },
  { event: "Academic Classes Begin", date: "August 2026", highlight: true },
];

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

export default function AdmissionsTabContent() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
    >
      {/* Left Column: steps and criteria */}
      <div className="lg:col-span-8 space-y-16">
        {/* Step-by-Step Guide */}
        <motion.div className="space-y-8" variants={fadeInUp}>
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
            <span className="w-2 h-7 bg-orange-600 rounded-full" />
            <h2 className="text-2xl font-black text-blue-950 tracking-tight">
              Step-by-Step Admission Process
            </h2>
          </div>

          <div className="relative border-l-2 border-dashed border-slate-200/80 ml-6 pl-10 space-y-10 pt-2">
            {ADMISSION_STEPS.map((step) => (
              <motion.div
                key={step.id}
                className="relative group"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              >
                {/* Pulse Ring Indicator */}
                <span className="absolute left-[-57px] top-1.5 w-8 h-8 rounded-full bg-orange-50 border-2 border-orange-500 text-orange-600 font-black text-sm flex items-center justify-center shadow-xs transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white z-10">
                  {step.id}
                </span>
                {hoveredStep === step.id && (
                  <motion.span
                    layoutId="pulseRing"
                    className="absolute left-[-63px] top-0 w-11 h-11 rounded-full border border-orange-400 bg-orange-500/10 pointer-events-none"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <div className="bg-white border border-slate-200/80 hover:border-orange-500/25 p-7 rounded-2xl shadow-2xs hover:shadow-md transition-all duration-300 text-left">
                  <h3 className="text-blue-950 font-black text-base sm:text-lg tracking-tight mb-2 flex items-center justify-between">
                    <span>
                      {step.id}. {step.title}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md",
                        step.badgeColor,
                      )}
                    >
                      {step.badge}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {step.id === 1 ? (
                      <>
                        Ensure that your age, physical standards, and academic
                        transcripts (especially Physics, Chemistry, and
                        Mathematics percentage) match DGS guidelines. Detailed
                        checklists are available on our{" "}
                        <Link
                          href="/courses"
                          className="text-orange-600 hover:underline font-extrabold inline-flex items-center"
                        >
                          Courses Catalog{" "}
                          <ArrowRight className="w-3.5 h-3.5 ml-1 inline" />
                        </Link>
                        .
                      </>
                    ) : (
                      step.description
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Medical Standards Card */}
        <motion.div
          className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6 text-left"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <Heart className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-black text-blue-950 tracking-tight">
              Physical & Medical Fitness Norms
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
            Working at sea demands high physical endurance and split-second
            responsiveness. Candidates must possess robust health, clean medical
            history, and be completely free from chronic ailments, skin
            disorders, or cardiovascular conditions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            {MEDICAL_NORMS.map((norm, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3.5 bg-slate-50 border border-slate-150 p-5 rounded-2xl transition-all duration-300 hover:bg-orange-500/2 hover:border-orange-550/20"
                whileHover={{ scale: 1.015 }}
              >
                <CheckCircle2 className="w-5 h-5 text-orange-655 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-zinc-900 uppercase tracking-widest mb-1">
                    {norm.category}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-blue-950 leading-normal">
                    {norm.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Key deadlines / Contact */}
      <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
        <motion.div
          className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6 text-left"
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <Activity className="w-5 h-5 text-orange-600" />
            <h3 className="text-base sm:text-lg font-black text-blue-950 tracking-tight">
              Important Intake Schedule
            </h3>
          </div>
          <ul className="space-y-4 text-xs sm:text-sm font-medium text-slate-650">
            {INTAKE_SCHEDULE.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-slate-100 last:border-b-0 pb-3 last:pb-1 items-center"
              >
                <span>{item.event}</span>
                {item.highlight ? (
                  <span className="flex items-center space-x-2">
                    <span className="text-blue-950 font-black">
                      {item.date}
                    </span>
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </span>
                ) : (
                  <span className="text-blue-950 font-black">{item.date}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-linear-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-7 sm:p-8 shadow-xl space-y-5 text-center relative overflow-hidden group"
          variants={fadeInUp}
          whileHover={{ y: -3 }}
        >
          {/* Decorative background visual sweep */}
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />

          <h4 className="text-white font-black text-lg tracking-tight flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5 text-orange-500 animate-bounce" />
            <span>Need Admissions Advice?</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Connect with our certified admissions counselors to resolve doubts
            about sponsorships, hostel bookings, or bank study loans.
          </p>
          <Link
            href="/contact"
            className="block w-full bg-orange-600 hover:bg-orange-550 text-white font-black text-xs sm:text-sm py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98"
          >
            Connect Admissions Office
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
