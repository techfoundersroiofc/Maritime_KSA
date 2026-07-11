"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { toast } from "sonner";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Calendar,
  DollarSign,
  Compass,
  FileText,
  Settings,
  Award,
  Anchor,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  Eye,
  Phone,
  Mail,
  X,
  Wrench,
  Waves,
  Flame,
  Info,
  Check,
} from "lucide-react";

export default function CourseDetailClient({ course }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define Navigation Items
  const navItems = useMemo(
    () =>
      [
        { id: "overview", label: "Course Overview", icon: BookOpen },
        {
          id: "eligibility",
          label: "Eligibility Standards",
          icon: GraduationCap,
        },
        (course.batchSchedule || course.commencement) && {
          id: "schedule",
          label: course.batchSchedule
            ? "Upcoming Batches"
            : "Batch Commencement",
          icon: Calendar,
        },
        { id: "fees", label: "Fees & Scholarships", icon: DollarSign },
        { id: "pathway", label: "Admission Pathway", icon: Compass },
        course.withdrawalPolicy && {
          id: "refund",
          label: "Withdrawal Policy",
          icon: FileText,
        },
        { id: "syllabus", label: "Course Syllabus", icon: Settings },
        { id: "career", label: "Career Progression", icon: Award },
        { id: "facilities", label: "Training Facilities", icon: Anchor },
        { id: "recruiters", label: "Prestigious Supporters", icon: Users },
      ].filter(Boolean),
    [course],
  );

  // Scroll spy effect to highlight active sidebar nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset for nav/header

      // Determine which section is currently active
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 140; // offset for nav/headers
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      toast.success(
        <div className="text-left">
          <p className="font-extrabold text-sm text-slate-900">
            Enquiry Submitted Successfully!
          </p>
          <p className="text-xs text-slate-600 mt-1">
            An admissions officer will contact you on {formData.phone} shortly.
          </p>
        </div>,
        { duration: 5000 },
      );
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        message: "",
      });
      setSelectedBatch(null);
    }, 1200);
  };

  const openBookingModal = (batch = null) => {
    if (batch) {
      setSelectedBatch(batch);
      setFormData((prev) => ({
        ...prev,
        message: `I would like to book a seat for the batch starting: ${batch.dates} at ${batch.location}.`,
      }));
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 py-20 text-slate-700 pb-20 font-jakarta">
      {/* 1. Page Header Action Bar */}
      <div className="sticky top-[84px] md:top-[108px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-4 px-4 md:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/courses"
            className="inline-flex items-center text-xs sm:text-sm font-extrabold text-slate-500 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft className="w-4.5 h-4.5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to All Courses
          </Link>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:flex items-center text-xs sm:text-sm text-slate-500 font-extrabold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-ping" />
              Admissions Open 2026 Batch
            </span>
            <button
              onClick={() => openBookingModal()}
              className="bg-orange-600 hover:bg-blue-950 hover:shadow-lg text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-orange-600/10 transition-all cursor-pointer"
            >
              Apply / Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* 2. Premium Academic Banner */}
      <section className="relative py-20 sm:py-24 bg-linear-to-b from-blue-950 via-blue-950 to-blue-900 text-white overflow-hidden border-b border-slate-800">
        {/* Decorative Grid overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.18),transparent)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="space-y-5 max-w-3xl text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-orange-600 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm">
                  {course.type}
                </span>
                <span className="bg-blue-900 border border-blue-800 text-slate-200 text-[10px] sm:text-xs font-extrabold px-3 py-1.5 rounded-md">
                  D.G. Shipping Approved
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-none text-white drop-shadow-sm">
                {course.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                {course.overview.split(".")[0]}. Professional career training
                program satisfying all international maritime STCW standards.
              </p>

              {/* Specs pill indicators */}
              <div className="flex flex-wrap gap-y-3 gap-x-8 pt-3 text-xs sm:text-sm text-slate-200 font-extrabold">
                <span className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-2 shrink-0" />
                  Duration: {course.duration}
                </span>
                <span className="flex items-center">
                  <Award className="w-5 h-5 text-orange-500 mr-2 shrink-0" />
                  {course.department}
                </span>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-7 lg:w-96 shrink-0 space-y-5 shadow-2xl text-left">
              <div className="text-center pb-4 border-b border-white/10">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-orange-400 font-black">
                  Registration Status
                </p>
                <p className="text-lg sm:text-xl font-black text-white mt-1">
                  Admissions Open 2026
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs sm:text-sm py-1">
                  <span className="text-slate-350 font-medium">
                    Accreditation
                  </span>
                  <span className="font-extrabold text-white text-right truncate max-w-[180px]">
                    D.G. Shipping, India
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm py-1">
                  <span className="text-slate-350 font-medium">
                    Entrance Test
                  </span>
                  <span className="font-extrabold text-white text-right truncate max-w-[180px]">
                    {course.entranceTest.split("(")[0]}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm py-1">
                  <span className="text-slate-350 font-medium">
                    Mode of Study
                  </span>
                  <span className="font-extrabold text-white text-right">
                    {course.type}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black text-xs sm:text-sm py-4 rounded-xl text-center shadow-lg shadow-orange-600/20 hover:shadow-orange-600/35 transition-all cursor-pointer"
                >
                  Book Seat / Enquire Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Details Body Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* A. Left Sidebar Navigation (Desktop only, sticky) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-[210px] bg-white border border-slate-200/80 rounded-3xl p-5 shadow-xs space-y-1 text-left">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-black px-3.5 mb-4">
              On This Page
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className={`flex items-center space-x-3 px-3.5 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-950 shadow-2xs border-l-3 border-blue-900 pl-3"
                      : "text-slate-500 hover:text-blue-950 hover:bg-slate-50"
                  }`}
                >
                  <Icon
                    className={`w-4.5 h-4.5 ${isActive ? "text-orange-600" : "text-slate-400"}`}
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* B. Mobile sticky tabs navigation */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-xl overflow-x-auto scrollbar-none flex whitespace-nowrap p-3 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-black shrink-0 transition-all ${
                    isActive
                      ? "bg-blue-950 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* C. Right Column: Course Content Panels */}
          <div className="lg:col-span-9 space-y-12">
            {/* PANEL 1: Overview */}
            <div
              id="overview"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Course Overview & Specifications
                </h2>
              </div>

              <div className="space-y-5 text-left">
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
                  {course.overview}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-medium">
                  The training incorporates a highly disciplined academic
                  curriculum integrated with extensive practical workshops,
                  firefighting grids, water survival training at our campus
                  pool, and mock vessel environments. All instructional elements
                  satisfy strict international standards to ensure our cadets
                  qualify for top-tier merchant navy assignments.
                </p>
              </div>

              {/* Specifications grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1.5">
                    Accreditation
                  </span>
                  <span className="text-sm sm:text-base font-black text-blue-950">
                    D.G. Shipping Approved
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1.5">
                    Department
                  </span>
                  <span className="text-sm sm:text-base font-black text-blue-950">
                    {course.department}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1.5">
                    Entrance Criteria
                  </span>
                  <span className="text-sm sm:text-base font-black text-blue-950">
                    {course.entranceTest.split(" ")[0]} Exam
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1.5">
                    Mode of Training
                  </span>
                  <span className="text-sm sm:text-base font-black text-blue-950">
                    {course.duration} Residential
                  </span>
                </div>
              </div>

              {/* Accreditation Box */}
              <div className="bg-blue-50/60 border border-blue-100/80 rounded-2xl p-5 sm:p-6 flex items-start space-x-4 mt-6 text-left">
                <Info className="w-5.5 h-5.5 text-blue-900 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider">
                    Accreditation & Quality Audits
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-650 font-medium">
                    {course.accreditation}. The academy is subject to rigorous
                    periodic inspections by the Directorate General of Shipping
                    and classification societies to ensure the highest standards
                    of safety, simulation, and workshop instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* PANEL 2: Eligibility Standards */}
            <div
              id="eligibility"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Eligibility Standards
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-medium text-left">
                Please review the eligibility criteria carefully. Candidates
                must meet all academic, physical, and medical standards at the
                time of commencement to qualify for admission.
              </p>

              {/* 3-Column Card Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
                {/* Academic Eligibility Card */}
                <div className="bg-slate-50 border border-slate-150 hover:border-orange-500/35 p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-350 group hover:shadow-xs text-left">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-5 shrink-0">
                      <GraduationCap className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-blue-950 font-black text-sm sm:text-base uppercase tracking-wider mb-4 border-b border-slate-200/50 pb-2">
                      Academic
                    </h3>
                    <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-750 leading-relaxed">
                      {course.eligibilityTabs?.academic.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5 stroke-[3px]" />
                          {pt.highlight ? (
                            <span className="font-extrabold text-orange-950 bg-orange-50 border border-orange-200/50 px-2 py-0.5 rounded-md">
                              {pt.text}
                            </span>
                          ) : (
                            <span className="font-medium">{pt.text}</span>
                          )}
                        </li>
                      )) || (
                        <li className="list-disc ml-4 font-medium">
                          {course.eligibility.academic}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Age Limits Card */}
                <div className="bg-slate-50 border border-slate-150 hover:border-orange-500/35 p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-350 group hover:shadow-xs text-left">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-5 shrink-0">
                      <Calendar className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-blue-950 font-black text-sm sm:text-base uppercase tracking-wider mb-4 border-b border-slate-200/50 pb-2">
                      Age Limits
                    </h3>
                    <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-750 leading-relaxed">
                      {course.eligibilityTabs?.age.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5 stroke-[3px]" />
                          {pt.highlight ? (
                            <span className="font-extrabold text-orange-950 bg-orange-50 border border-orange-200/50 px-2 py-0.5 rounded-md">
                              {pt.text}
                            </span>
                          ) : (
                            <span className="font-medium">{pt.text}</span>
                          )}
                        </li>
                      )) || (
                        <li className="list-disc ml-4 font-medium">
                          {course.eligibility.age}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Medical Card */}
                <div className="bg-slate-50 border border-slate-150 hover:border-orange-500/35 p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-350 group hover:shadow-xs text-left">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-5 shrink-0">
                      <Eye className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-blue-950 font-black text-sm sm:text-base uppercase tracking-wider mb-4 border-b border-slate-200/50 pb-2">
                      Medical & Eyesight
                    </h3>
                    <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-750 leading-relaxed">
                      {course.eligibilityTabs?.medical.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5 stroke-[3px]" />
                          {pt.highlight ? (
                            <span className="font-extrabold text-orange-950 bg-orange-50 border border-orange-200/50 px-2 py-0.5 rounded-md">
                              {pt.text}
                            </span>
                          ) : (
                            <span className="font-medium">{pt.text}</span>
                          )}
                        </li>
                      )) || (
                        <li className="list-disc ml-4 font-medium">
                          {course.eligibility.medical}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL 3: Upcoming Batches / Intake */}
            {(course.batchSchedule || course.commencement) && (
              <div
                id="schedule"
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                  <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                  <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                    {course.batchSchedule
                      ? "Batch Schedules & Booking"
                      : "Batch Commencement Dates"}
                  </h2>
                </div>

                {course.batchSchedule ? (
                  /* Modular Course Batch table */
                  <div className="space-y-6 text-left">
                    <p className="text-sm sm:text-base text-slate-600 font-medium">
                      Select an upcoming weekly or monthly batch date below to
                      book your seat. Online Exit Exams and E-learning
                      completion are required.
                    </p>

                    {course.modularSpecs && (
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-slate-50 border border-slate-150 p-5 rounded-2xl mb-4 text-left">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-1">
                            Course ID
                          </span>
                          <span className="text-xs sm:text-sm font-black text-blue-950 truncate">
                            {course.modularSpecs.courseId}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-1">
                            Exit Exam
                          </span>
                          <span className="text-xs sm:text-sm font-black text-blue-950 truncate">
                            {course.modularSpecs.exitExam.split(" ")[0]}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-1">
                            DGS ELearning
                          </span>
                          <span className="text-xs sm:text-sm font-black text-blue-950 truncate">
                            Mandatory
                          </span>
                        </div>
                        <div className="flex flex-col md:col-span-2">
                          <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-1">
                            Elearning Hours
                          </span>
                          <span className="text-[11px] sm:text-xs font-black text-blue-950 leading-tight">
                            {course.modularSpecs.elearningHours}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider mb-1">
                            Validity
                          </span>
                          <span className="text-xs sm:text-sm font-black text-blue-950">
                            {course.modularSpecs.validity}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-blue-950 text-white font-extrabold tracking-wider uppercase text-[10px] sm:text-xs border-b border-blue-900">
                            <th className="py-5 px-5">Batch Dates</th>
                            <th className="py-5 px-5">Location / Mode</th>
                            <th className="py-5 px-5">Timings</th>
                            <th className="py-5 px-5 text-right">Course Fee</th>
                            <th className="py-5 px-5 text-center">
                              Status / Booking
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/80">
                          {course.batchSchedule.map((batch, idx) => (
                            <tr
                              key={idx}
                              className="hover:bg-slate-50 transition-colors"
                            >
                              <td className="py-5 px-5 font-black text-blue-950 text-xs sm:text-sm">
                                {batch.dates}
                              </td>
                              <td className="py-5 px-5 font-semibold text-slate-600 text-xs sm:text-sm">
                                {batch.location}
                              </td>
                              <td className="py-5 px-5 text-slate-500 font-medium text-xs sm:text-sm">
                                {batch.timing}
                              </td>
                              <td className="py-5 px-5 font-black text-blue-950 text-right text-xs sm:text-sm">
                                {batch.price}
                              </td>
                              <td className="py-5 px-5 text-center">
                                <div className="flex items-center justify-center space-x-3.5">
                                  <span
                                    className={`px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wide border ${
                                      batch.status === "Open"
                                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                        : "bg-amber-50 text-amber-700 border-amber-200"
                                    }`}
                                  >
                                    {batch.status}
                                  </span>
                                  <button
                                    onClick={() => openBookingModal(batch)}
                                    className="bg-blue-950 hover:bg-orange-600 text-white font-extrabold text-[10px] sm:text-xs px-4 py-2 rounded-lg transition-all cursor-pointer"
                                  >
                                    Book Now
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  /* Regular Pre-sea Course Commencement list */
                  <div className="space-y-5 text-left">
                    <p className="text-sm sm:text-base text-slate-600 font-medium">
                      Standard admission intake windows. Applications are closed
                      upon matching seats quota per batch.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                      {course.commencement.map((comm, idx) => (
                        <div
                          key={idx}
                          className={`border rounded-2xl p-6 flex flex-col justify-between space-y-4 ${
                            comm.active
                              ? "bg-emerald-50/20 border-emerald-250"
                              : "bg-slate-50 border-slate-150"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-black text-blue-950">
                              {comm.batch}
                            </span>
                            <span
                              className={`px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wide border ${
                                comm.active
                                  ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                  : "bg-slate-200 text-slate-500 border-slate-300"
                              }`}
                            >
                              {comm.active
                                ? "Applications Open"
                                : "Applications Closed"}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-slate-600 font-semibold">
                            {comm.status}
                          </p>

                          {comm.active && (
                            <button
                              onClick={() => openBookingModal()}
                              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] sm:text-xs py-3 rounded-xl transition-all cursor-pointer shadow-xs mt-2"
                            >
                              Start Application
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* PANEL 4: Fees & Scholarships */}
            <div
              id="fees"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Fees & Scholarships
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-left">
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1">
                    Application Fee
                  </span>
                  <span className="text-lg sm:text-xl font-black text-blue-950">
                    {course.fees.application}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1">
                    Tuition / Training Fee
                  </span>
                  <span className="text-lg sm:text-xl font-black text-blue-950">
                    {course.fees.tuition}
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex flex-col justify-between">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1">
                    Caution Deposit
                  </span>
                  <span className="text-lg sm:text-xl font-black text-blue-950">
                    {course.fees.caution}
                  </span>
                </div>
                <div className="bg-blue-950 text-white p-5 rounded-2xl flex flex-col justify-between shadow-md border border-blue-900">
                  <span className="text-[10px] sm:text-xs uppercase font-extrabold text-slate-350 tracking-wider block mb-1">
                    Total Estimated Cost
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-orange-400">
                    {course.fees.total}
                  </span>
                </div>
              </div>

              {/* Inclusions note */}
              <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl text-left">
                <h4 className="text-xs sm:text-sm font-black text-blue-950 mb-2 flex items-center">
                  <Info className="w-5.5 h-5.5 text-orange-600 mr-2 shrink-0" />
                  Fee Inclusions & Details:
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  {course.fees.note} Admissions follow strict regulatory
                  standards and fees must be deposited via banking channels.
                </p>
              </div>

              {/* Gold Scholarship Announcement */}
              {course.fees.discount && (
                <div className="bg-amber-50/60 border border-amber-200/85 text-amber-950 rounded-2xl p-5 sm:p-6 flex items-start space-x-4 shadow-2xs text-left">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xs sm:text-sm font-black text-amber-950 uppercase tracking-widest">
                      Special Female Cadet Scholarship
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                      In line with international maritime initiatives to promote
                      female participation in commercial seafaring, the academy
                      provides a{" "}
                      <strong className="text-amber-900 font-extrabold">
                        {course.fees.discount}
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* PANEL 5: Admission Pathway */}
            <div
              id="pathway"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Admission Pathway
                </h2>
              </div>

              <div className="relative border-l-2 border-slate-200 ml-6 pl-8 space-y-8 text-left">
                {course.admissionProcess.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle bullet step indicator */}
                    <span className="absolute left-[-46px] top-0.5 w-8 h-8 rounded-full bg-blue-950 border-3 border-white flex items-center justify-center text-white text-xs font-black shadow-md">
                      {idx + 1}
                    </span>
                    <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 hover:shadow-xs transition-shadow">
                      <p className="text-sm font-black text-blue-950 mb-1.5 uppercase tracking-wide">
                        Step {idx + 1}:{" "}
                        {idx === 0
                          ? "Registration"
                          : idx === 1
                            ? "Screening"
                            : idx === 2
                              ? "Academic Review"
                              : "Final Selection"}
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-650 font-medium">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 6: Withdrawal & Refund Policy */}
            {course.withdrawalPolicy && (
              <div
                id="refund"
                className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                  <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                  <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                    Withdrawal & Refund Policy
                  </h2>
                </div>

                <div className="space-y-5 text-left">
                  <p className="text-sm sm:text-base text-slate-600 font-medium">
                    Withdrawal requests must be formally filed. Refund
                    structures are governed by timelines prior to course
                    commencement:
                  </p>

                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-blue-950 font-extrabold border-b border-slate-200 uppercase text-[10px] sm:text-xs tracking-wider">
                          <th className="py-4 px-5">Withdrawal Period</th>
                          <th className="py-4 px-5 text-right">
                            Refund / Cancellation Policy
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150">
                        {course.withdrawalPolicy.schedule.map((sch, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-slate-550/20 hover:bg-slate-50 transition-colors"
                          >
                            <td className="py-4 px-5 font-bold text-slate-650 text-xs sm:text-sm">
                              {sch.period}
                            </td>
                            <td className="py-4 px-5 font-black text-blue-950 text-right text-xs sm:text-sm">
                              {sch.refund}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl space-y-3">
                    <h4 className="text-xs sm:text-sm font-black text-blue-950 flex items-center">
                      <ShieldAlert className="w-5.5 h-5.5 text-orange-600 mr-2 shrink-0" />
                      Important Policy Notes:
                    </h4>
                    <ul className="list-disc ml-5 space-y-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {course.withdrawalPolicy.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* PANEL 7: Syllabus */}
            <div
              id="syllabus"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Course Syllabus & Core Modules
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-medium text-left">
                Cadets undergo comprehensive theoretical instruction coupled
                with intense simulator and lab training covering the following
                core modules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {course.subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3.5 bg-slate-50 border border-slate-150 p-4.5 rounded-2xl text-left group hover:border-orange-500/35 transition-colors"
                  >
                    <div className="w-7 h-7 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-blue-950 group-hover:text-orange-600 transition-colors">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 8: Career Path Flowchart */}
            <div
              id="career"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Career Progression Roadmap
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-medium text-left">
                Merchant Navy careers offer highly progressive pathways. Below
                is the step-by-step career chart leading to top commanding ranks
                at sea:
              </p>

              <div className="relative border-l-2 border-slate-200 ml-6 pl-8 space-y-6 text-left pt-1">
                {course.careerProgression?.map((prog, idx) => {
                  if (prog.text) {
                    return (
                      <p
                        key={idx}
                        className="text-[10px] sm:text-xs text-orange-600 font-black tracking-widest uppercase bg-orange-50 border border-orange-200/60 py-2 px-4.5 rounded-xl max-w-fit shadow-2xs"
                      >
                        {prog.text}
                      </p>
                    );
                  }
                  return (
                    <div key={idx} className="relative">
                      {/* Compass bullet step indicator */}
                      <span className="absolute left-[-46px] top-1.5 w-8 h-8 rounded-full bg-orange-600 border-3 border-white flex items-center justify-center text-white text-xs font-black shadow-md">
                        <Compass className="w-4 h-4" />
                      </span>
                      <div className="bg-slate-50 border border-slate-150 rounded-2xl p-5 hover:shadow-xs transition-shadow">
                        <p className="text-sm sm:text-base font-black text-blue-950 mb-1">
                          {prog.title}
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-650 font-medium">
                          {prog.desc}
                        </p>
                      </div>
                    </div>
                  );
                }) || (
                  <div className="border-l-2 border-slate-200 ml-2 pl-6 space-y-4 text-sm sm:text-base">
                    {course.careerPath.split("->").map((step, idx) => (
                      <div
                        key={idx}
                        className="relative py-2.5 flex items-center"
                      >
                        <span className="absolute left-[-31px] top-4.5 w-3.5 h-3.5 rounded-full bg-orange-600 border-3 border-white shadow-xs" />
                        <span className="font-extrabold text-blue-950">
                          {step.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* PANEL 9: Campus Facilities */}
            <div
              id="facilities"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  State-of-the-Art Training Facilities
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-medium text-left">
                Practical instruction is delivered in highly specialized mock
                ups, workshops, and simulator suites, mimicking real shipboard
                operations:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-left">
                {course.facilities.map((fac, idx) => {
                  let IconComponent = Anchor;
                  if (fac.title.toLowerCase().includes("fire"))
                    IconComponent = Flame;
                  else if (
                    fac.title.toLowerCase().includes("engine") ||
                    fac.title.toLowerCase().includes("fitting")
                  )
                    IconComponent = Wrench;
                  else if (
                    fac.title.toLowerCase().includes("pool") ||
                    fac.title.toLowerCase().includes("survival")
                  )
                    IconComponent = Waves;
                  else if (fac.title.toLowerCase().includes("simulat"))
                    IconComponent = Eye;

                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-150 hover:border-orange-500/35 rounded-2xl p-6 transition-all duration-350 hover:shadow-xs group"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-5 shrink-0 transition-transform group-hover:scale-105 shadow-2xs">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <h3 className="text-base font-black text-blue-950 mb-2">
                        {fac.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        {fac.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PANEL 10: Prestigious Supporters */}
            <div
              id="recruiters"
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-xs space-y-8 scroll-mt-28"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <span className="w-1.5 h-7 bg-orange-600 rounded-full" />
                <h2 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
                  Prestigious Recruiters & Hiring Lines
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-medium text-left">
                Our cadets are highly valued by top international shipping
                agencies. The college facilitates recruitment drives with global
                merchant companies:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4.5 pt-1">
                {course.supporters.map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-150 rounded-2xl py-5 px-4 text-center hover:bg-blue-50/20 hover:border-blue-300 hover:shadow-2xs transition-all flex items-center justify-center h-16 cursor-default"
                  >
                    <span className="text-xs sm:text-sm font-black text-blue-950 tracking-wide uppercase">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Booking / Enquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white border border-slate-200 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-blue-950 text-white py-6 px-7 flex items-center justify-between text-left">
              <div>
                <h3 className="text-lg font-black text-white">
                  Course Enquiry & Booking
                </h3>
                <p className="text-xs text-slate-350 font-semibold mt-1">
                  {course.title}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Modal Form */}
            <form
              onSubmit={handleEnquirySubmit}
              className="p-7 space-y-5 text-left"
            >
              {selectedBatch && (
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl text-xs sm:text-sm text-orange-950 font-bold">
                  Selected Batch: {selectedBatch.dates} (
                  {selectedBatch.location})
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest block">
                  Highest Qualification
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none transition-colors"
                >
                  <option value="">Select your qualification</option>
                  <option value="10th">10th Standard Pass</option>
                  <option value="12th PCM">12th Standard PCM Pass</option>
                  <option value="ITI">2-Year ITI Diploma</option>
                  <option value="Degree">B.E. / B.Tech / B.Sc Graduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest block">
                  Message / Enquiry Details
                </label>
                <textarea
                  name="message"
                  rows="3.5"
                  placeholder="Ask about batch seats, hostel availability, sponsorships, etc..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 focus:bg-white rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-950 hover:bg-orange-600 text-white font-black text-xs sm:text-sm py-4 rounded-xl text-center transition-all cursor-pointer shadow-md flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-white border-t-transparent animate-spin mr-2" />
                      <span>Processing Booking...</span>
                    </>
                  ) : (
                    <span>Submit Enquiry & Book Seat</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
