"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  FileText,
  Heart,
  Activity,
  Award,
  Compass,
  Briefcase,
  Quote,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { recruiters } from "@/app/data/recruiters";
import { testimonials } from "@/app/data/testimonials";
import { COLLEGE_CONFIG } from "@/app/constants/config";
import { cn } from "@/app/lib/utils";

export default function AdmissionsPlacementsTabs() {
  const [activeTab, setActiveTab] = useState("admissions");

  useEffect(() => {
    const handleHashChange = () => {
      if (
        typeof window !== "undefined" &&
        window.location.hash === "#placements"
      ) {
        setActiveTab("placements");
        // Scroll to the tab container if needed
        const element = document.getElementById("tabs-container");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setActiveTab("admissions");
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20 font-jakarta">
      {/* Dynamic Integrated Banner */}
      <section className="relative py-20 md:py-28 bg-slate-900/40 border-b border-slate-900/80 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_65%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-extrabold uppercase tracking-wider text-xs sm:text-[11px]">
              PKIMSE Career Gateway
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none max-w-4xl mx-auto">
            Admissions & Placements
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Your journey from cadet training to a high-paying career in the
            merchant navy starts here. Follow our professional admission
            guidelines and explore our outstanding placement records.
          </p>
        </div>
      </section>

      {/* Tabs Selector Bar */}
      <div
        id="tabs-container"
        className="max-w-7xl mx-auto px-4 md:px-8 mt-12 mb-16"
      >
        <div className="flex justify-center">
          <div className="bg-slate-900/80 border border-slate-800 p-1.5 rounded-full flex space-x-1 w-full max-w-md shadow-2xl">
            <button
              onClick={() => {
                setActiveTab("admissions");
                if (typeof window !== "undefined")
                  window.history.replaceState(null, "", "#admissions");
              }}
              className={cn(
                "flex-1 py-3 px-4 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 select-none cursor-pointer",
                activeTab === "admissions"
                  ? "bg-orange-650 text-white shadow-lg shadow-orange-600/20"
                  : "text-slate-400 hover:text-slate-200",
              )}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Admissions</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("placements");
                if (typeof window !== "undefined")
                  window.history.replaceState(null, "", "#placements");
              }}
              className={cn(
                "flex-1 py-3 px-4 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 select-none cursor-pointer",
                activeTab === "placements"
                  ? "bg-orange-650 text-white shadow-lg shadow-orange-600/20"
                  : "text-slate-400 hover:text-slate-200",
              )}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>Placements</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Panels */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {activeTab === "admissions" ? (
          /* ==========================================
             ADMISSIONS TAB CONTENT
             ========================================== */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-fadeIn">
            {/* Left Column: steps and criteria */}
            <div className="lg:col-span-8 space-y-12">
              {/* Step-by-Step Guide */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide border-b border-slate-900 pb-3 flex items-center">
                  <FileText className="w-5 h-5 text-orange-500 mr-2.5" />
                  Admission Steps
                </h2>

                <div className="relative border-l border-slate-800 ml-4 pl-6 space-y-8">
                  {/* Step 1 */}
                  <div className="relative group">
                    <span className="absolute left-[-35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      1
                    </span>
                    <h3 className="text-white font-bold text-sm tracking-wide mb-2 transition-colors group-hover:text-orange-400">
                      Check Eligibility
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Verify that your academic score (PCM percentage) and
                      physical fitness align with your desired program. Check
                      details under our{" "}
                      <Link
                        href="/courses"
                        className="text-orange-500 hover:underline font-semibold"
                      >
                        Courses page
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative group">
                    <span className="absolute left-[-35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      2
                    </span>
                    <h3 className="text-white font-bold text-sm tracking-wide mb-2 transition-colors group-hover:text-orange-400">
                      Register & Pass IMU-CET
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      For degree (B.Sc, B.Tech) and DNS courses, qualifying the
                      Indian Maritime University Common Entrance Test (IMU-CET)
                      is mandatory. Registration typically commences in April.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative group">
                    <span className="absolute left-[-35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      3
                    </span>
                    <h3 className="text-white font-bold text-sm tracking-wide mb-2 transition-colors group-hover:text-orange-400">
                      Fill College Application
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Complete the online application form. Submit academic
                      credentials, 10th/12th marksheets, and identity
                      verification documents.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative group">
                    <span className="absolute left-[-35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      4
                    </span>
                    <h3 className="text-white font-bold text-sm tracking-wide mb-2 transition-colors group-hover:text-orange-400">
                      Entrance Test & Personal Interview
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Shortlisted candidates take the PKIMSE aptitude screening
                      test followed by a technical/discipline interview before
                      veteran mariners.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="relative group">
                    <span className="absolute left-[-35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white">
                      5
                    </span>
                    <h3 className="text-white font-bold text-sm tracking-wide mb-2 transition-colors group-hover:text-orange-400">
                      DGS Approved Medical Check-Up
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Undergo medical testing by an authorized practitioner
                      approved by the Directorate General of Shipping (DGS),
                      India, certifying physical fitness and eyesight.
                    </p>
                  </div>
                </div>
              </div>

              {/* Medical Standards Card */}
              <div className="bg-slate-900/30 border border-slate-900/80 rounded-xl p-6 md:p-8 hover:border-slate-800 transition-all duration-300">
                <h3 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-orange-500 mr-2.5" />
                  Physical & Medical Fitness Guidelines
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Working at sea is physically demanding. Cadets must be free
                  from any active medical ailments, chronic skin diseases, or
                  cardiac conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>
                      Eyesight: 6/6 in each eye without visual aid for Deck
                      officers. No color blindness.
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>
                      Eyesight: up to +/- 2.5 permitted for Marine Engineers,
                      ETO and GME.
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>
                      Hearing: Normal hearing capacity, checked via standard
                      audiometry test.
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>
                      General: Normal speech, fit skeleton, and no visible
                      speech impediments.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key deadlines / Contact */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36">
              <div className="bg-slate-900/30 border border-slate-900/80 rounded-xl p-6">
                <h3 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center">
                  <Activity className="w-5 h-5 text-orange-500 mr-2.5" />
                  Important Dates
                </h3>
                <ul className="space-y-4 text-xs">
                  <li className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-400">
                      Online Application Starts
                    </span>
                    <span className="text-white font-semibold">
                      April 1, 2026
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-400">IMU-CET Written Exam</span>
                    <span className="text-white font-semibold">June 2026</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-900 pb-2">
                    <span className="text-slate-400">PKIMSE Interviews</span>
                    <span className="text-white font-semibold">July 2026</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-slate-400">Batch Commences</span>
                    <span className="text-white font-semibold">
                      August 2026
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/30 border border-slate-900/80 rounded-xl p-6 text-center space-y-4">
                <h4 className="text-white font-bold text-sm">
                  Need Counselling Support?
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Contact our expert admissions advisors to resolve queries
                  about DNS sponsorships, fee bank loans, and visa clearances.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-orange-600 hover:bg-orange-550 text-white font-bold text-xs py-3 rounded-lg shadow-lg shadow-orange-650/15 hover:shadow-orange-650/25 transition-all select-none hover:-translate-y-0.5"
                >
                  Connect Admissions Office
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ==========================================
             PLACEMENTS TAB CONTENT
             ========================================== */
          <div className="space-y-24 animate-fadeIn">
            {/* Stats and Placement Assistance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-extrabold uppercase text-orange-500 tracking-wider">
                    Placement Assistance
                  </span>
                  <span className="h-0.5 w-6 bg-orange-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Dedicated Placement Cell & Sponsorships
                </h2>
                <p className="text-sm leading-relaxed text-slate-400">
                  Our active Placement Cell works directly with ship management
                  corporations. We facilitate DNS sponsorships, on-campus
                  recruitments, technical tests preparation, and maritime visa
                  processing.
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  We regularly host recruitment seminars, mock interviews, and
                  technical brush-up sessions led by retired captains. This
                  rigorous process ensures that PKIMSE cadets have a high
                  success rate in shipping company selection exams.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/30 border border-slate-900/80 p-6 rounded-xl hover:border-slate-800 transition-colors">
                  <div className="text-4xl font-black text-white mb-1">
                    100%
                  </div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                    DNS Sponsorships
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    All selected Diploma in Nautical Science (DNS) cadets secure
                    sponsorship prior to course start.
                  </p>
                </div>

                <div className="bg-slate-900/30 border border-slate-900/80 p-6 rounded-xl hover:border-slate-800 transition-colors">
                  <div className="text-4xl font-black text-white mb-1">50+</div>
                  <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                    Recruiters
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Cadets sail globally with leading shipping and cruise
                    operators.
                  </p>
                </div>
              </div>
            </div>

            {/* Recruitment Partners Grid */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
                  SHIPPING CORPORATIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Sponsorship & Recruiting Partners
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {recruiters.map((rec) => (
                  <div
                    key={rec.name}
                    className="bg-slate-900/20 border border-slate-900/60 hover:border-orange-550/20 hover:bg-slate-900/40 p-6 rounded-lg text-center flex items-center justify-center min-h-[96px] transition-all group"
                  >
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors tracking-wide leading-snug">
                      {rec.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cadet Testimonials */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
                  ALUMNI REVIEWS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Cadets Sailing Globally
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Read how PKIMSE&apos;s training transformed cadets into
                  professional maritime officers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((test) => (
                  <div
                    key={test.id}
                    className="bg-slate-900/20 border border-slate-900/60 hover:border-slate-900 p-8 rounded-xl flex flex-col justify-between relative group hover:bg-slate-900/30 transition-all duration-300"
                  >
                    <Quote className="w-10 h-10 text-orange-600/5 absolute top-6 right-6 group-hover:text-orange-600/10 transition-colors" />
                    <div className="space-y-6">
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic relative z-10">
                        &quot;{test.quote}&quot;
                      </p>
                      <div className="border-t border-slate-900 pt-4 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-orange-500 font-black text-xs">
                          {test.name[0]}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">
                            {test.name}
                          </h4>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            {test.course}
                          </p>
                          <p className="text-[10px] text-orange-550 font-semibold mt-0.5">
                            {test.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
