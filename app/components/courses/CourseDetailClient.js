"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { 
  ArrowLeft, BookOpen, GraduationCap, Calendar, DollarSign, 
  Compass, FileText, Settings, Award, Anchor, Users, 
  CheckCircle2, Clock, ArrowRight, ShieldAlert, Eye, 
  Phone, Mail, X, Wrench, Waves, Flame, Info, Check
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
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define Navigation Items
  const navItems = useMemo(() => [
    { id: "overview", label: "Course Overview", icon: BookOpen },
    { id: "eligibility", label: "Eligibility Standards", icon: GraduationCap },
    (course.batchSchedule || course.commencement) && { 
      id: "schedule", 
      label: course.batchSchedule ? "Upcoming Batches" : "Batch Commencement", 
      icon: Calendar 
    },
    { id: "fees", label: "Fees & Scholarships", icon: DollarSign },
    { id: "pathway", label: "Admission Pathway", icon: Compass },
    course.withdrawalPolicy && { id: "refund", label: "Withdrawal Policy", icon: FileText },
    { id: "syllabus", label: "Course Syllabus", icon: Settings },
    { id: "career", label: "Career Progression", icon: Award },
    { id: "facilities", label: "Training Facilities", icon: Anchor },
    { id: "recruiters", label: "Prestigious Supporters", icon: Users },
  ].filter(Boolean), [course]);

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
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        <div>
          <p className="font-bold text-slate-900">Enquiry Submitted Successfully!</p>
          <p className="text-xs text-slate-600 mt-0.5">
            An admissions officer will contact you on {formData.phone} shortly.
          </p>
        </div>,
        { duration: 5000 }
      );
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "",
        message: ""
      });
      setSelectedBatch(null);
    }, 1200);
  };

  const openBookingModal = (batch = null) => {
    if (batch) {
      setSelectedBatch(batch);
      setFormData(prev => ({
        ...prev,
        message: `I would like to book a seat for the batch starting: ${batch.dates} at ${batch.location}.`
      }));
    }
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 pb-20 font-sans">
      {/* 1. Page Header Action Bar */}
      <div className="sticky top-[84px] md:top-[108px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3.5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/courses"
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-orange-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
            Back to All Courses
          </Link>
          
          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline text-xs text-slate-500 font-semibold">
              Admissions Open 2026 Batch
            </span>
            <button
              onClick={() => openBookingModal()}
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-md shadow-orange-600/10 hover:shadow-lg transition-all"
            >
              Apply / Enquire Now
            </button>
          </div>
        </div>
      </div>

      {/* 2. Premium Academic Banner */}
      <section className="relative py-16 sm:py-20 bg-blue-950 text-white overflow-hidden">
        {/* Decorative Grid overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <span className="bg-orange-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
                  {course.type}
                </span>
                <span className="bg-blue-900 border border-blue-800 text-slate-300 text-[10px] font-bold px-3 py-1 rounded">
                  D.G. Shipping Approved
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                {course.title}
              </h1>
              <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl">
                {course.overview.split(".")[0]}. Professional career training program satisfying all international maritime STCW standards.
              </p>
              
              {/* Specs pill indicators */}
              <div className="flex flex-wrap gap-y-3 gap-x-6 pt-3 text-xs text-slate-300 font-semibold">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                  Duration: {course.duration}
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                  {course.department}
                </span>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:w-96 shrink-0 space-y-4 shadow-xl">
              <div className="text-center pb-3 border-b border-white/10">
                <p className="text-[10px] uppercase tracking-wider text-orange-400 font-bold">Registration Status</p>
                <p className="text-lg font-extrabold text-white mt-1">Admissions Open 2026</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-350">Accreditation</span>
                  <span className="font-bold text-white text-right truncate max-w-[180px]">D.G. Shipping, India</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-350">Entrance Test</span>
                  <span className="font-bold text-white text-right truncate max-w-[180px]">{course.entranceTest.split("(")[0]}</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-350">Mode of Study</span>
                  <span className="font-bold text-white text-right">{course.type}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBookingModal()}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs py-3.5 rounded-lg text-center shadow-lg shadow-orange-600/20 hover:shadow-orange-600/35 transition-all cursor-pointer"
                >
                  Book Seat / Enquire Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Details Body Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* A. Left Sidebar Navigation (Desktop only, sticky) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-[200px] bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold px-3 mb-3">
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
                  className={`flex items-center space-x-2.5 px-3 py-3 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-950 shadow-xs border-l-2 border-blue-900 pl-2.5"
                      : "text-slate-500 hover:text-blue-950 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-orange-600" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* B. Mobile sticky tabs navigation */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-xl overflow-x-auto scrollbar-none flex whitespace-nowrap p-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
                    isActive
                      ? "bg-blue-950 text-white shadow-md"
                      : "bg-slate-100 text-slate-650 hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* C. Right Column: Course Content Panels */}
          <div className="lg:col-span-9 space-y-10">
            
            {/* PANEL 1: Overview */}
            <div id="overview" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Course Overview & Specifications
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-slate-650">
                  {course.overview}
                </p>
                <p className="text-sm leading-relaxed text-slate-650">
                  The training incorporates a highly disciplined academic curriculum integrated with extensive practical workshops, firefighting grids, water survival training at our campus pool, and mock vessel environments. All instructional elements satisfy strict international standards to ensure our cadets qualify for top-tier merchant navy assignments.
                </p>
              </div>

              {/* Specifications grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Accreditation</span>
                  <span className="text-xs font-black text-blue-950">D.G. Shipping Approved</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Department</span>
                  <span className="text-xs font-black text-blue-950">{course.department}</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Entrance Criteria</span>
                  <span className="text-xs font-black text-blue-950">{course.entranceTest.split(" ")[0]} Exam</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Mode of Training</span>
                  <span className="text-xs font-black text-blue-950">{course.duration} Residential</span>
                </div>
              </div>

              {/* Accreditation Box */}
              <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-4 flex items-start space-x-3 mt-4 text-left">
                <Info className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-black text-blue-950">Accreditation & Quality Audits</h4>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    {course.accreditation}. The academy is subject to rigorous periodic inspections by the Directorate General of Shipping and classification societies to ensure the highest standards of safety, simulation, and workshop instructions.
                  </p>
                </div>
              </div>
            </div>

            {/* PANEL 2: Eligibility Standards */}
            <div id="eligibility" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Eligibility Standards
                </h2>
              </div>
              
              <p className="text-xs text-slate-500">
                Please review the eligibility criteria carefully. Candidates must meet all requirements at the time of commencement to qualify for admission.
              </p>

              {/* 3-Column Card Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Academic Eligibility Card */}
                <div className="bg-slate-50 border border-slate-100 hover:border-orange-500/25 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-xs">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                      Academic
                    </h3>
                    <ul className="space-y-2 text-[11px] text-slate-650 leading-relaxed text-left">
                      {course.eligibilityTabs?.academic.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5 stroke-[3px]" />
                          {pt.highlight ? (
                            <span className="font-bold text-slate-900 bg-orange-50 px-1 py-0.5 rounded border border-orange-100">
                              {pt.text}
                            </span>
                          ) : (
                            <span>{pt.text}</span>
                          )}
                        </li>
                      )) || <li className="list-disc ml-4">{course.eligibility.academic}</li>}
                    </ul>
                  </div>
                </div>

                {/* Age Limits Card */}
                <div className="bg-slate-50 border border-slate-100 hover:border-orange-500/25 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-xs">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <h3 className="text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                      Age Limits
                    </h3>
                    <ul className="space-y-2 text-[11px] text-slate-650 leading-relaxed text-left">
                      {course.eligibilityTabs?.age.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5 stroke-[3px]" />
                          {pt.highlight ? (
                            <span className="font-bold text-slate-900 bg-orange-50 px-1 py-0.5 rounded border border-orange-100">
                              {pt.text}
                            </span>
                          ) : (
                            <span>{pt.text}</span>
                          )}
                        </li>
                      )) || <li className="list-disc ml-4">{course.eligibility.age}</li>}
                    </ul>
                  </div>
                </div>

                {/* Medical Card */}
                <div className="bg-slate-50 border border-slate-100 hover:border-orange-500/25 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-xs">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-4 shrink-0">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h3 className="text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                      Medical & Eyesight
                    </h3>
                    <ul className="space-y-2 text-[11px] text-slate-650 leading-relaxed text-left">
                      {course.eligibilityTabs?.medical.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5 stroke-[3px]" />
                          {pt.highlight ? (
                            <span className="font-bold text-slate-900 bg-orange-50 px-1 py-0.5 rounded border border-orange-100">
                              {pt.text}
                            </span>
                          ) : (
                            <span>{pt.text}</span>
                          )}
                        </li>
                      )) || <li className="list-disc ml-4">{course.eligibility.medical}</li>}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL 3: Upcoming Batches / Intake */}
            {(course.batchSchedule || course.commencement) && (
              <div id="schedule" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
                <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                  <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                  <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                    {course.batchSchedule ? "Batch Schedules & Booking" : "Batch Commencement Dates"}
                  </h2>
                </div>

                {course.batchSchedule ? (
                  /* Modular Course Batch table */
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500">
                      Select an upcoming weekly or monthly batch date below to book your seat. Online Exit Exams and E-learning completion are required.
                    </p>
                    
                    {course.modularSpecs && (
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 text-left">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Course ID</span>
                          <span className="text-[10px] font-extrabold text-blue-950 truncate">{course.modularSpecs.courseId}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Exit Exam</span>
                          <span className="text-[10px] font-extrabold text-blue-950 truncate">{course.modularSpecs.exitExam.split(" ")[0]}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">DGS ELearning</span>
                          <span className="text-[10px] font-extrabold text-blue-950 truncate">Mandatory</span>
                        </div>
                        <div className="flex flex-col md:col-span-2">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Elearning Hours</span>
                          <span className="text-[9px] font-extrabold text-blue-950 leading-tight">{course.modularSpecs.elearningHours}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold text-slate-400">Validity</span>
                          <span className="text-[10px] font-extrabold text-blue-950">{course.modularSpecs.validity}</span>
                        </div>
                      </div>
                    )}

                    <div className="overflow-x-auto rounded-xl border border-slate-200/60 shadow-xs">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-blue-950 text-white font-extrabold tracking-wider uppercase text-[10px] border-b border-blue-900">
                            <th className="py-4 px-4">Batch Dates</th>
                            <th className="py-4 px-4">Location / Mode</th>
                            <th className="py-4 px-4">Timings</th>
                            <th className="py-4 px-4 text-right">Course Fee</th>
                            <th className="py-4 px-4 text-center">Status / Booking</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {course.batchSchedule.map((batch, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                              <td className="py-4.5 px-4 font-extrabold text-blue-950">{batch.dates}</td>
                              <td className="py-4.5 px-4 font-semibold text-slate-600">{batch.location}</td>
                              <td className="py-4.5 px-4 text-slate-500 font-medium">{batch.timing}</td>
                              <td className="py-4.5 px-4 font-extrabold text-blue-950 text-right">{batch.price}</td>
                              <td className="py-4.5 px-4 text-center">
                                <div className="flex items-center justify-center space-x-3">
                                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide border ${
                                    batch.status === "Open" 
                                      ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                                      : "bg-amber-50 text-amber-700 border-amber-200"
                                  }`}>
                                    {batch.status}
                                  </span>
                                  <button
                                    onClick={() => openBookingModal(batch)}
                                    className="bg-blue-950 hover:bg-orange-600 text-white font-bold text-[10px] px-3 py-1.5 rounded transition-all cursor-pointer"
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
                  <div className="space-y-4 text-left">
                    <p className="text-xs text-slate-500">
                      Standard admission intake windows. Applications are closed upon matching seats quota per batch.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      {course.commencement.map((comm, idx) => (
                        <div 
                          key={idx} 
                          className={`border rounded-2xl p-5 flex flex-col justify-between space-y-4 ${
                            comm.active 
                              ? "bg-emerald-50/20 border-emerald-200/70" 
                              : "bg-slate-50 border-slate-100"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-extrabold text-blue-950">{comm.batch}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide border ${
                              comm.active 
                                ? "bg-emerald-100 text-emerald-800 border-emerald-200" 
                                : "bg-slate-200 text-slate-500 border-slate-300"
                            }`}>
                              {comm.active ? "Applications Open" : "Applications Closed"}
                            </span>
                          </div>
                          
                          <p className="text-xs text-slate-500 font-semibold">{comm.status}</p>
                          
                          {comm.active && (
                            <button
                              onClick={() => openBookingModal()}
                              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] py-2 rounded-lg transition-colors cursor-pointer mt-2"
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
            <div id="fees" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Fees & Scholarships
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Application Fee</span>
                  <span className="text-lg font-black text-blue-950">{course.fees.application}</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Tuition / Training Fee</span>
                  <span className="text-lg font-black text-blue-950">{course.fees.tuition}</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Caution Deposit</span>
                  <span className="text-lg font-black text-blue-950">{course.fees.caution}</span>
                </div>
                <div className="bg-blue-950 text-white p-5 rounded-2xl text-left flex flex-col justify-between shadow-md">
                  <span className="text-[10px] uppercase font-bold text-slate-300 block mb-1">Total Estimated Cost</span>
                  <span className="text-lg font-black text-orange-400">{course.fees.total}</span>
                </div>
              </div>

              {/* Inclusions note */}
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left">
                <h4 className="text-xs font-extrabold text-blue-950 mb-1 flex items-center">
                  <Info className="w-4 h-4 text-orange-600 mr-1.5 shrink-0" />
                  Fee Inclusions & Details:
                </h4>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  {course.fees.note} Admissions follow strict regulatory standards and fees must be deposited via banking channels.
                </p>
              </div>

              {/* Gold Scholarship Announcement */}
              {course.fees.discount && (
                <div className="bg-amber-50/60 border border-amber-200/85 text-amber-900 rounded-xl p-5 flex items-start space-x-3.5 shadow-xs text-left">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-black text-amber-950 uppercase tracking-wider">
                      Special Female Cadet Scholarship
                    </h3>
                    <p className="text-[11px] leading-relaxed text-slate-650">
                      In line with international maritime initiatives to promote female participation in commercial seafaring, the academy provides a <strong className="text-amber-900">{course.fees.discount}</strong>.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* PANEL 5: Admission Pathway */}
            <div id="pathway" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Admission Pathway
                </h2>
              </div>

              <div className="relative border-l border-slate-200 ml-4.5 pl-6 space-y-6 text-left">
                {course.admissionProcess.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle bullet step indicator */}
                    <span className="absolute left-[-35px] top-0 w-[22px] h-[22px] rounded-full bg-blue-950 border-2 border-white flex items-center justify-center text-white text-[9px] font-black shadow-xs">
                      {idx + 1}
                    </span>
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4.5 hover:shadow-xs transition-shadow">
                      <p className="text-xs font-extrabold text-blue-950 mb-1">Step {idx + 1}: {idx === 0 ? "Registration" : idx === 1 ? "Screening" : idx === 2 ? "Academic Review" : "Final Selection"}</p>
                      <p className="text-[11px] leading-relaxed text-slate-500">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 6: Withdrawal & Refund Policy */}
            {course.withdrawalPolicy && (
              <div id="refund" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
                <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                  <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                  <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                    Withdrawal & Refund Policy
                  </h2>
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-slate-500">
                    Withdrawal requests must be formally filed. Refund structures are governed by timelines prior to course commencement:
                  </p>
                  
                  <div className="overflow-hidden rounded-xl border border-slate-200/60 shadow-xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 text-blue-950 font-extrabold border-b border-slate-200 uppercase text-[9px] tracking-wider">
                          <th className="py-3 px-4">Withdrawal Period</th>
                          <th className="py-3 px-4 text-right">Refund / Cancellation Policy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {course.withdrawalPolicy.schedule.map((sch, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="py-3.5 px-4 font-bold text-slate-650">{sch.period}</td>
                            <td className="py-3.5 px-4 font-black text-blue-950 text-right">{sch.refund}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-left space-y-2">
                    <h4 className="text-xs font-bold text-blue-950 flex items-center">
                      <ShieldAlert className="w-4 h-4 text-orange-600 mr-1.5 shrink-0" />
                      Important Policy Notes:
                    </h4>
                    <ul className="list-disc ml-4 space-y-1.5 text-[10px] text-slate-500 leading-relaxed">
                      {course.withdrawalPolicy.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* PANEL 7: Syllabus */}
            <div id="syllabus" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Course Syllabus & Core Modules
                </h2>
              </div>
              
              <p className="text-xs text-slate-500">
                Cadets undergo comprehensive theoretical instruction coupled with intense simulator and lab training covering the following core modules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {course.subjects.map((sub, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-left">
                    <div className="w-6 h-6 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-blue-950">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PANEL 8: Career Path Flowchart */}
            <div id="career" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Career Progression Roadmap
                </h2>
              </div>

              <p className="text-xs text-slate-500">
                Merchant Navy careers offer highly progressive pathways. Below is the step-by-step career chart leading to top commanding ranks at sea:
              </p>

              <div className="relative border-l border-slate-200 ml-4.5 pl-6 space-y-5 text-left pt-1">
                {course.careerProgression?.map((prog, idx) => {
                  if (prog.text) {
                    return (
                      <p key={idx} className="text-[10px] text-orange-600 font-extrabold tracking-wider uppercase bg-orange-50 border border-orange-100/50 py-1.5 px-3 rounded-lg max-w-fit">
                        {prog.text}
                      </p>
                    );
                  }
                  return (
                    <div key={idx} className="relative">
                      {/* Compass bullet step indicator */}
                      <span className="absolute left-[-35px] top-1.5 w-[22px] h-[22px] rounded-full bg-orange-600 border-2 border-white flex items-center justify-center text-white text-[9px] font-black shadow-xs">
                        <Compass className="w-3 h-3" />
                      </span>
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4.5 hover:shadow-xs transition-shadow">
                        <p className="text-xs font-black text-blue-950 mb-0.5">{prog.title}</p>
                        <p className="text-[11px] leading-relaxed text-slate-500">{prog.desc}</p>
                      </div>
                    </div>
                  );
                }) || (
                  <div className="border-l border-slate-200 ml-2 pl-4 space-y-3 text-xs">
                    {course.careerPath.split("->").map((step, idx) => (
                      <div key={idx} className="relative py-1">
                        <span className="absolute left-[-21px] top-2 w-2.5 h-2.5 rounded-full bg-orange-600 border-2 border-white" />
                        <span className="font-semibold text-slate-800">{step.trim()}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* PANEL 9: Campus Facilities */}
            <div id="facilities" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  State-of-the-Art Training Facilities
                </h2>
              </div>

              <p className="text-xs text-slate-500">
                Practical instruction is delivered in highly specialized mock ups, workshops, and simulator suites, mimicking real shipboard operations:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1 text-left">
                {course.facilities.map((fac, idx) => {
                  // Assign icons based on facility index or title keywords
                  let IconComponent = Anchor;
                  if (fac.title.toLowerCase().includes("fire")) IconComponent = Flame;
                  else if (fac.title.toLowerCase().includes("engine") || fac.title.toLowerCase().includes("fitting")) IconComponent = Wrench;
                  else if (fac.title.toLowerCase().includes("pool") || fac.title.toLowerCase().includes("survival")) IconComponent = Waves;
                  else if (fac.title.toLowerCase().includes("simulat")) IconComponent = Eye;
                  
                  return (
                    <div 
                      key={idx} 
                      className="bg-slate-50 border border-slate-100 hover:border-orange-500/25 rounded-2xl p-5 transition-all duration-300 hover:shadow-xs group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 mb-4 shrink-0 transition-transform group-hover:scale-105">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-extrabold text-blue-950 mb-1.5">{fac.title}</h3>
                      <p className="text-[11px] leading-relaxed text-slate-500">{fac.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PANEL 10: Prestigious Supporters */}
            <div id="recruiters" className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 scroll-mt-28">
              <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                <span className="w-1.5 h-6 bg-orange-600 rounded-full" />
                <h2 className="text-xl font-extrabold text-blue-950 tracking-wide">
                  Prestigious Recruiters & Hiring Lines
                </h2>
              </div>

              <p className="text-xs text-slate-500">
                Our cadets are highly valued by top international shipping agencies. The college facilitates recruitment drives with global merchant companies:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                {course.supporters.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="bg-slate-50 border border-slate-100 rounded-xl py-4.5 px-4 text-center hover:bg-blue-50/20 hover:border-blue-200 transition-colors flex items-center justify-center"
                  >
                    <span className="text-xs font-black text-blue-950 tracking-wide">{partner}</span>
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
          <div className="relative bg-white border border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-blue-950 text-white py-5 px-6 flex items-center justify-between text-left">
              <div>
                <h3 className="text-base font-extrabold text-white">Course Enquiry & Booking</h3>
                <p className="text-[10px] text-slate-300 font-semibold mt-0.5">{course.title}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4 text-left">
              {selectedBatch && (
                <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg text-[11px] text-orange-900 font-semibold">
                  Selected Batch: {selectedBatch.dates} ({selectedBatch.location})
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. john@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Highest Qualification</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none transition-colors"
                >
                  <option value="">Select your qualification</option>
                  <option value="10th">10th Standard Pass</option>
                  <option value="12th PCM">12th Standard PCM Pass</option>
                  <option value="ITI">2-Year ITI Diploma</option>
                  <option value="Degree">B.E. / B.Tech / B.Sc Graduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Message / Enquiry Details</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Ask about batch seats, hostel availability, sponsorships, etc..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-250 focus:border-orange-500 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-950 hover:bg-orange-600 text-white font-extrabold text-xs py-3.5 rounded-lg text-center transition-all cursor-pointer shadow-md flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2" />
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
