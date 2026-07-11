"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, GraduationCap, Check } from "lucide-react";
import { courses } from "@/app/data/courses";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

export default function CoursesList() {
  // Select only GP Rating and BST courses as requested
  const featuredCoursesList = [
    courses.find((c) => c.id === "general-purpose-rating"),
    courses.find((c) => c.id === "basic-stcw-safety-training"),
  ].filter(Boolean);

  // High fidelity course-specific metadata matching the homepage
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
    <section className="bg-slate-50 py-20 sm:py-28 border-t border-slate-200/60 relative overflow-hidden">
      {/* Decorative premium radial gradient blobs */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-20 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
              <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                Offered Programs
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-blue-950 tracking-tight leading-tight">
              Pre-Sea & Mandatory Modular Safety Courses
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
              We offer two industry-standard courses that satisfy all
              requirements of the Directorate General of Shipping (DGS), India,
              and prepare you for onboarding.
            </p>
          </div>
        </motion.div>

        {/* Responsive Grid: 1 Column on Mobile, 2 Columns on Tablet and Desktop */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {featuredCoursesList.map((course) => {
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
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(7,13,25,0.06)] transition-all duration-300 shadow-sm"
              >
                {/* Course Image & Top Overlays */}
                <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/45" />

                  {/* Diagonal Sweep Shine Effect on Card Hover */}
                  <div className="absolute inset-0 w-[50%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-180%] group-hover:translate-x-[280%] transition-transform duration-1000 ease-out pointer-events-none" />

                  {/* Left Floating Badges */}
                  <div className="absolute top-7 left-7 flex flex-wrap gap-2">
                    {meta.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-md shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Right Flashing Status Badge */}
                  {meta.statusBadge.text && (
                    <div className="absolute top-7 right-7 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-2 rounded-lg flex items-center space-x-1.5 shadow-md">
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
                  <div className="absolute bottom-7 left-7 flex items-center space-x-2 bg-white text-blue-950 text-xs font-black px-4 py-2 rounded-xl shadow-md border border-slate-100">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Details Body */}
                <div className="p-6 sm:p-8 md:p-9 grow flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-blue-950 font-black text-xl sm:text-2xl group-hover:text-orange-600 transition-colors mb-4 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed mb-6 font-medium">
                      {course.overview}
                    </p>

                    {/* Course-Specific Detailed Specs Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60">
                      {meta.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="flex flex-col space-y-1">
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-extrabold">
                            {spec.label}
                          </span>
                          <span className="text-xs sm:text-sm font-black text-blue-950 truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bulleted and Highlighted Eligibility Section */}
                    <div className="border-t border-slate-100 pt-6">
                      <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center">
                        <GraduationCap className="w-5 h-5 text-orange-600 mr-2 shrink-0" />
                        Academic Eligibility Criteria
                      </h4>

                      <ul className="space-y-3.5 mt-2">
                        {meta.eligibilityPoints.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-xs sm:text-sm leading-relaxed text-slate-650 font-medium"
                          >
                            <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                              <Check className="w-3 h-3 text-orange-600 stroke-3" />
                            </span>
                            {point.highlight ? (
                              <span className="font-extrabold text-orange-950 bg-orange-50/80 border border-orange-200/50 px-2 py-0.5 rounded-md">
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
                  <div className="mt-9 pt-6 border-t border-slate-100">
                    <Link
                      href={`/courses/${course.id}`}
                      className="w-full bg-blue-950 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm py-4.5 rounded-xl text-center transition-all duration-300 flex items-center justify-center group/btn shadow-md hover:shadow-lg"
                    >
                      <span>Course Details & Careers</span>
                      <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform group-hover/btn:translate-x-1" />
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
