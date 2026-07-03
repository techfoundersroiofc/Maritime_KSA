"use client";

import { useState } from "react";
import { Compass, Anchor, ShieldCheck, CheckCircle } from "lucide-react";
import { recruiters } from "@/app/data/recruiters";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Advanced Simulators",
      icon: Compass,
      headline: "Real Vessel Bridge & Cargo Handling Simulation",
      description: "Our state-of-the-art simulators replicate modern merchant vessel operations. Cadets gain practical navigation, radar plotting, ship maneuvering, and liquid cargo handling skills before their first ship contract.",
      features: [
        "Full Mission Ship Bridge Simulator with 360-degree field of view",
        "Liquid Cargo Handling Simulator for tanker operation training",
        "GMDSS simulator room for communication practice",
        "Engine room simulator mimicking real ship plant controls"
      ]
    },
    {
      title: "Heavy Marine Workshop",
      icon: Anchor,
      headline: "Hands-On Workshop Instruction",
      description: "The college operates a heavy-duty maritime workshop featuring actual marine auxiliary diesel generators, pumps, air compressors, and purification plants. Cadets dismantle, inspect, and rebuild shipboard machinery.",
      features: [
        "Fully equipped welding, piping, and machining labs",
        "Operational marine auxiliary diesel generator unit",
        "Centrifugal and positive displacement pump training bays",
        "Lathe machines for turning, boring, and precision fitting"
      ]
    },
    {
      title: "Strict Naval Discipline",
      icon: ShieldCheck,
      headline: "Semi-Military Residential Cadet Regime",
      description: "Maritime career requires high discipline, leadership, and emotional stability. Our structured hostel regime, morning muster, physical training, and safety drills build solid character and professional habits.",
      features: [
        "Mandatory morning parade, dress inspection, and march-past",
        "Physical training (PT), swimming, and gym sessions",
        "Structured evening studies and leadership duties",
        "First Aid, firefighting, and survival at sea (PST) drill pools"
      ]
    }
  ];

  return (
    <section className="bg-slate-950 py-24 border-t border-slate-900 overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 gsap-slide-up">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Why Choose PKIMSE
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Industry-Approved Infrastructure & Cadres
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            From modern simulators to dedicated marine machinery workshops, we provide everything needed 
            to produce high-caliber merchant navy officers.
          </p>
        </div>

        {/* Interactive Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 gsap-slide-up">
          {/* Tab Buttons */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-4 p-5 rounded-lg text-left shrink-0 transition-all duration-300 border ${
                    isActive
                      ? "bg-slate-900 border-orange-500/30 text-white shadow-xl shadow-orange-600/5"
                      : "bg-slate-950/20 border-slate-900 text-slate-450 hover:text-slate-200 hover:bg-slate-900/30"
                  }`}
                >
                  <div className={`w-10 h-10 rounded flex items-center justify-center border shrink-0 transition-colors duration-300 ${
                    isActive
                      ? "bg-orange-600/10 border-orange-500/30 text-orange-500"
                      : "bg-slate-900 border-slate-800 text-slate-550"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm tracking-wide">{tab.title}</h3>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest hidden sm:block mt-0.5 font-semibold">
                      Operational Excellence
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="lg:col-span-8 bg-slate-900/30 border border-slate-900 rounded-lg p-8 min-h-[380px] flex flex-col justify-between backdrop-blur-sm hover:border-orange-500/10 transition-colors duration-300">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                  PKIMSE ADVANTAGE
                </span>
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  {tabs[activeTab].headline}
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {tabs[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-900/60">
                {tabs[activeTab].features.map((feat) => (
                  <div key={feat} className="flex items-start space-x-3 text-slate-350">
                    <CheckCircle className="w-4.5 h-4.5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Placements Partner Section */}
        <div className="border-t border-slate-900/60 pt-16 gsap-slide-up">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">
              PLACEMENT PARTNERS
            </span>
            <h3 className="text-xl font-bold text-white">
              Cadets Placed with Top International Shipping Lines
            </h3>
          </div>

          {/* Recruiter Grids */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center items-center opacity-90 gsap-stagger-container">
            {recruiters.slice(0, 6).map((rec) => (
              <div
                key={rec.name}
                className="bg-slate-900/30 border border-slate-900/60 hover:border-orange-500/20 hover:bg-slate-900/50 p-4.5 rounded-lg text-center w-full min-h-[70px] flex items-center justify-center transition-all duration-300 group hover:-translate-y-0.5 gsap-stagger-item"
              >
                <span className="text-xs font-bold text-slate-405 group-hover:text-white transition-colors tracking-wider">
                  {rec.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
