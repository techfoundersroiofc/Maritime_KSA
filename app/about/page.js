import Image from "next/image";
import { ShieldCheck, Compass, Target, Award, CheckCircle } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";
import { facultyList } from "@/app/data/faculty";
import { achievements, approvals } from "@/app/data/achievements";

export const metadata = {
  title: SEO_METADATA.about.title,
  description: SEO_METADATA.about.description,
  keywords: SEO_METADATA.about.keywords.join(", "),
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              KSA Maritime College
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            About Our Institution
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            PKIMSE is a leading maritime training academy, dedicated to forging competent navigation officers and marine engineers.
          </p>
        </div>
      </section>

      {/* Legacy and Vision/Mission */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              A Legacy of Maritime Educational Excellence
            </h2>
            <p className="text-sm leading-relaxed">
              PKIMSE was established under the prestigious <strong>KSA Group of Institutions</strong> with a clear vision: to establish a top-tier training ecosystem that bridges academic learning with heavy industrial shipboard practice. Today, we are recognized as a premier destination for students pursuing careers in the merchant navy.
            </p>
            <p className="text-sm leading-relaxed">
              Our residential campus mimics shipboard environments, preparing cadet officers to cope with long voyages, emergencies, cargo operations, and engineering watchkeeping. Our cadets sail on some of the largest crude tankers, container vessels, and bulk carriers worldwide.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Vision Card */}
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded relative">
              <div className="w-10 h-10 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">Our Vision</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To be globally acknowledged as a premier center of maritime education, supplying shipping lines with highly disciplined, competent, and ethical Marine Officers.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded relative">
              <div className="w-10 h-10 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">Our Mission</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To provide state-of-the-art simulator and workshop-based instruction, ensuring cadets comply with IMO STCW conventions while instilling standards of leadership.
              </p>
            </div>
          </div>
        </div>

        {/* Accreditations & Approvals */}
        <div id="accreditations" className="bg-slate-900/30 border border-slate-900 p-8 rounded-lg mb-24">
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="space-y-4 max-w-xl">
              <h3 className="text-white font-extrabold text-xl flex items-center">
                <ShieldCheck className="w-6 h-6 text-orange-500 mr-2.5" />
                DG Shipping Approved & Accredited
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All pre-sea degree, diploma, and rating programs are fully approved by the Directorate General of Shipping, Ministry of Ports, Shipping and Waterways, Government of India. Our training procedures conform to ISO 9001:2015 standards, verified by DNV GL.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-xl">
              {approvals.map((app) => (
                <div key={app} className="flex items-start space-x-2 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Leadership */}
        <div id="leadership" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
              OUR INSTRUCTORS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Led by Captains & Chief Engineers
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Our academic cadre comprises seasoned maritime professionals with decades of sailing and teaching experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyList.map((fac) => (
              <div key={fac.id} className="bg-slate-900/30 border border-slate-900 rounded overflow-hidden flex flex-col justify-between group hover:border-slate-800 transition-colors">
                <div className="p-6">
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                    {fac.role}
                  </span>
                  <h4 className="text-white font-bold text-base mt-2 group-hover:text-orange-500 transition-colors">
                    {fac.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{fac.experience}</p>
                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed border-t border-slate-900 pt-4">
                    {fac.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Timeline */}
        <div id="achievements">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
              MILESTONES
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Recent Milestones & Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach) => (
              <div key={ach.id} className="bg-slate-900/40 border border-slate-900 p-6 rounded relative flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="text-3xl font-black text-orange-600/30 block mb-2">
                    {ach.year}
                  </span>
                  <h4 className="text-white font-bold text-sm tracking-wide mb-2">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
