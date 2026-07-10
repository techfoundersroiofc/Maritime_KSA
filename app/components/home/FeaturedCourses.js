"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, GraduationCap, Check } from "lucide-react";
import { courses } from "@/app/data/courses";

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function FeaturedCourses() {
  // Select only GP Rating and BST courses
  const featured = [
    courses.find((c) => c.id === "general-purpose-rating"),
    courses.find((c) => c.id === "basic-stcw-safety-training"),
  ].filter(Boolean);

  // Custom metadata for each course to make them feel highly specific and premium
  const courseMeta = {
    "general-purpose-rating": {
      badges: ["Pre-Sea Training"],
      statusBadge: { text: "Admissions Open", live: true },
      specs: [
        { label: "Accreditation", value: "D.G. Shipping Approved" },
        { label: "Departments", value: "Deck & Engine Crew" },
        { label: "Placement", value: "100% Support & Referral" },
        { label: "Intake Cycle", value: "Jan & July Batches" },
      ],
      eligibilityPoints: [
        {
          text: "10th Standard Pass from a recognized board",
          highlight: false,
        },
        {
          text: "Above 40% aggregate in Science & Mathematics",
          highlight: true,
        },
        {
          text: "Minimum 40% marks in English in 10th standard",
          highlight: true,
        },
        {
          text: "Or passed 2-Year ITI Course with min 50% marks",
          highlight: false,
        },
        {
          text: "Age: 17.5 to 25 Years at course commencement",
          highlight: false,
        },
      ],
    },
    "basic-stcw-safety-training": {
      badges: ["CDC Prerequisite"],
      statusBadge: { text: "Weekly Batches", live: true },
      specs: [
        { label: "Accreditation", value: "D.G. Shipping Approved" },
        { label: "Modules Covered", value: "PST, FPFF, EFA, PSSR" },
        { label: "Requirement", value: "INDoS Number Mandatory" },
        { label: "Exit Exam", value: "Institute Level Assessment" },
      ],
      eligibilityPoints: [
        {
          text: "Minimum 10th standard pass from recognized board",
          highlight: false,
        },
        {
          text: "INDoS Number is strictly mandatory to register",
          highlight: true,
        },
        {
          text: "Medical fitness certificate from DGS approved doctor",
          highlight: true,
        },
        {
          text: "Must complete DGS E-Learning modules & exam",
          highlight: false,
        },
      ],
    },
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24 border-t border-slate-200/60 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="space-y-3 sm:space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <span className="h-px w-8 bg-orange-600" />
              <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px] sm:text-xs">
                Flagship Courses
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight">
              DG Shipping Approved Training & Safety Courses
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed">
              Kickstart your career at sea with our fully accredited pre-sea
              rating and mandatory modular safety programs.
            </p>
          </div>
          <Link
            href="/courses"
            className="group text-orange-600 hover:text-orange-700 font-bold text-xs flex items-center transition-colors select-none shrink-0 self-start sm:self-end"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Responsive Grid: 1 Column on Mobile, 2 Columns on Tablet (md) and Desktop (lg) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {featured.map((course) => {
            const meta = courseMeta[course.id] || {
              badges: [],
              specs: [],
              eligibilityPoints: [],
              statusBadge: {},
            };

            return (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-2xl transition-all duration-300 shadow-sm"
              >
                {/* Course Image & Top Overlays */}
                <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Diagonal Sweep Shine Effect on Card Hover */}
                  <div className="absolute inset-0 w-[50%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-180%] group-hover:translate-x-[280%] transition-transform duration-1000 ease-out pointer-events-none" />

                  {/* Left Floating Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {meta.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-600 text-white text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1.5 rounded-md shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Right Flashing Status Badge */}
                  {meta.statusBadge.text && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg flex items-center space-x-1.5 shadow-md">
                      {meta.statusBadge.live && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                      )}
                      <span>{meta.statusBadge.text}</span>
                    </div>
                  )}

                  {/* Duration Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/95 backdrop-blur-xs text-blue-950 text-[10px] font-extrabold px-3 py-1.5 rounded-lg shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Details Body */}
                <div className="p-6 sm:p-8 grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-blue-950 font-black text-lg sm:text-xl group-hover:text-orange-600 transition-colors mb-3 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                      {course.overview}
                    </p>

                    {/* Course-Specific Detailed Specs Grid */}
                    <div className="grid grid-cols-2 gap-3.5 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-150">
                      {meta.specs.map((spec, specIdx) => (
                        <div
                          key={specIdx}
                          className="flex flex-col space-y-0.5"
                        >
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                            {spec.label}
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-black text-blue-950 truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bulleted and Highlighted Eligibility Section */}
                    <div className="border-t border-slate-100 pt-5">
                      <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-3 flex items-center">
                        <GraduationCap className="w-4.5 h-4.5 text-orange-600 mr-2" />
                        Academic Eligibility Criteria
                      </h4>

                      <ul className="space-y-2 mt-2">
                        {meta.eligibilityPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2.5 text-[11px] leading-relaxed text-slate-600"
                          >
                            <span className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-orange-600 stroke-3" />
                            </span>
                            {point.highlight ? (
                              <span className="font-bold text-slate-900 bg-orange-50/70 border border-orange-200/50 px-1.5 py-0.5 rounded-md">
                                {point.text}
                              </span>
                            ) : (
                              <span>{point.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Course Details Action Button */}
                  <div className="mt-8 pt-5 border-t border-slate-100">
                    <Link
                      href={`/courses/${course.id}`}
                      className="w-full bg-blue-950 hover:bg-orange-600 text-white font-bold text-xs py-3.5 sm:py-4 rounded-lg text-center transition-all duration-300 flex items-center justify-center group/btn shadow-md hover:shadow-lg"
                    >
                      <span>Course Details & Careers</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
