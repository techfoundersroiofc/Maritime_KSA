"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Anchor,
  ShieldCheck,
  Ship,
  Check,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { recruiters } from "@/app/data/recruiters";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Advanced Simulators",
      icon: Compass,
      headline: "Real Vessel Bridge & Cargo Handling Simulation",
      tagline: "NAVIGATIONAL PREPARATION",
      description:
        "Our state-of-the-art simulators replicate modern merchant vessel operations. students gain practical navigation, radar plotting, ship maneuvering, and liquid cargo handling skills before their first onboard contract.",
      features: [
        "Full Mission Ship Bridge Simulator with 360° visual view",
        "Liquid Cargo Handling Simulator for tanker operation training",
        "GMDSS simulator suite for international communications",
        "Engine room simulator mimicking real ship plant controls",
      ],
      factsheet: {
        title: "Technical Sim Specifications",
        items: [
          { label: "Software System", value: "Transas Navi-Sailor 4000" },
          { label: "Approval Status", value: "D.G. Shipping Class-A Approved" },
          { label: "Visual Projection", value: "Real-Time 360-Degree Fields" },
          { label: "Vessel Models", value: "VLCCs, Bulk Carriers, Containers" },
        ],
      },
    },
    {
      title: "Heavy Marine Workshop",
      icon: Anchor,
      headline: "Hands-On Deck & Engine Workshop Training",
      tagline: "PRACTICAL SEAMANSHIP SKILLS",
      description:
        "The college operates heavy-duty maritime workshops featuring actual marine auxiliary diesel engines, pumps, air compressors, and purifiers. students dismantle, inspect, and rebuild shipboard machinery.",
      features: [
        "Fully equipped welding, gas-cutting, and machining labs",
        "Operational marine auxiliary diesel generator test unit",
        "Centrifugal and positive displacement pump training bays",
        "Lathe machines for turning, boring, and precision fitting",
      ],
      factsheet: {
        title: "Workshop Capabilities",
        items: [
          {
            label: "Hot Work Safety",
            value: "Gas Cutting & Electric Arc Welding",
          },
          {
            label: "Deck Gear Area",
            value: "Anchor Windlass & Splicing Benches",
          },
          { label: "Tool Sets", value: "Heavy-Duty Impact & Pneumatic Gear" },
          {
            label: "Machinery Units",
            value: "Alfa Laval Purifiers & Air Compressors",
          },
        ],
      },
    },
    {
      title: "Safety Drill Facilities",
      icon: ShieldCheck,
      headline: "STCW Firefighting & Lifeboat Launch Stations",
      tagline: "EMERGENCY DRILL COMPLIANCE",
      description:
        "Emergency preparedness is mandatory for Indian CDC applications. Our modular training facilities feature real gravity-davit lifeboats, survival tanks, and smoke halls for realistic training.",
      features: [
        "Personal Survival Techniques (PST) deep-water drill pool",
        "Fully operational gravity-davit enclosed lifeboat setup",
        "Fire Prevention and Firefighting (FPFF) mockups",
        "First Aid, breathing apparatus, and smoke room chambers",
      ],
      factsheet: {
        title: "Safety Drills Specs",
        items: [
          {
            label: "Survival Pool Depth",
            value: "2.5 Meters / Outdoor Drills",
          },
          {
            label: "Lifeboat Capacity",
            value: "24-Person Enclosed Davit Type",
          },
          { label: "Instructors", value: "Master Mariners & Chief Engineers" },
          { label: "DGS Standard", value: "STCW 2010 Manila Amendments" },
        ],
      },
    },
    {
      title: "Strict Naval Discipline",
      icon: Ship,
      headline: "Semi-Military Residential Cadet Regime",
      tagline: "LEADERSHIP & CHARACTER BUILD",
      description:
        "A career at sea requires high discipline, leadership, and emotional stability. Our structured residential hostel regime, morning muster, physical training, and drills build professional habits.",
      features: [
        "Mandatory morning parade, dress inspection, and march-past",
        "Daily physical training (PT), swimming sessions, and gym",
        "Structured evening studies and leadership rotation duties",
        "Strict adherence to D.G. Shipping codes and ship protocols",
      ],
      factsheet: {
        title: "Residential Standards",
        items: [
          {
            label: "Accommodations",
            value: "Cadet Hostel Blocks (Merchant Navy style)",
          },
          { label: "Muster Timing", value: "06:00 Hours Daily Parade" },
          { label: "Medical Cover", value: "24/7 Sick Bay & On-Call Doctor" },
          {
            label: "Stamina Regime",
            value: "Strict Fitness & Swimming Mandate",
          },
        ],
      },
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-t border-slate-200/70 overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          className="text-left max-w-3xl mb-14 sm:mb-20 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
              Institutional Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-blue-950 tracking-tight leading-tight">
            Industry-Approved Infrastructure
          </h2>
          <p className="text-blue-950 text-sm sm:text-base leading-relaxed max-w-2xl">
            From modern simulators to dedicated marine machinery workshops, we
            provide the D.G. Shipping compliant facilities needed to produce
            high-caliber merchant navy officers and safety personnel.
          </p>
        </motion.div>

        {/* Interactive Tabs Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start mb-20 lg:mb-28">
          {/* Tab Navigation (Left Column) */}
          <div className="md:col-span-4 flex flex-row md:flex-col gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory w-full">
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-4.5 p-5 rounded-2xl text-left shrink-0 transition-all duration-300 border snap-center group select-none ${
                    isActive
                      ? "bg-blue-950 border-blue-950 text-white shadow-lg shadow-blue-950/15"
                      : "bg-slate-50/70 border-slate-200/80 text-blue-950 hover:text-blue-950 hover:bg-slate-100/50 hover:border-slate-350/70"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-orange-600 border-orange-550/20 text-white"
                        : "bg-orange-600 border-white  text-white group-hover:text-orange-650 group-hover:bg-orange-500 group-hover:border-orange-200/50"
                    }`}
                  >
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[18px] tracking-wider">
                      {tab.title}
                    </h3>
                    <span
                      className={`text-[10px] uppercase tracking-widest mt-1 font-bold block ${
                        isActive ? "text-orange-400" : "text-blue-950"
                      }`}
                    >
                      {tab.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels (Right Column) */}
          <div className="md:col-span-8 w-full min-h-[480px] flex flex-col justify-between relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative overflow-hidden bg-slate-50/50 border border-slate-200 rounded-3xl p-6 sm:p-9 backdrop-blur-xs flex flex-col justify-between shadow-sm hover:border-orange-500/35 transition-all duration-300 grow"
              >
                {/* Active Tab shine sweep overlay */}
                <motion.div
                  key={`flash-${activeTab}`}
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none z-20"
                />

                <div className="space-y-6 relative z-10 w-full">
                  {/* Panel Top Title */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] sm:text-xs font-black text-orange-600 uppercase tracking-widest block">
                      {tabs[activeTab].tagline}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-black text-blue-950 leading-tight">
                      {tabs[activeTab].headline}
                    </h3>
                  </div>

                  {/* Panel Description */}
                  <p className="text-sm sm:text-base text-blue-950 leading-relaxed font-medium">
                    {tabs[activeTab].description}
                  </p>

                  {/* Panel Main Content Layout (Splits into Description Features + Factsheet) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-7 border-t border-slate-200/60 w-full">
                    {/* Left: Key Features (Bullet Points) */}
                    <div className="lg:col-span-7 space-y-3.5">
                      <h4 className="text-[10px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-3">
                        Key Capabilities
                      </h4>
                      {tabs[activeTab].features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-start space-x-3 text-blue-950"
                        >
                          <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            <Check className="w-3 h-3 text-orange-600 stroke-3" />
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed font-medium">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Right: Technical Factsheet Card */}
                    <div className="lg:col-span-5 w-full bg-white border border-slate-200 p-5 rounded-2xl shadow-xs self-start">
                      <h4 className="text-xs font-black text-blue-950 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center">
                        <CheckCircle2 className="w-4.5 h-4.5 text-orange-600 mr-2 shrink-0" />
                        {tabs[activeTab].factsheet.title}
                      </h4>
                      <div className="space-y-3.5">
                        {tabs[activeTab].factsheet.items.map(
                          (item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="flex flex-col space-y-1"
                            >
                              <span className="text-[10px] uppercase tracking-wider text-black font-extrabold">
                                {item.label}
                              </span>
                              <span className="text-xs sm:text-sm font-black text-blue-950 leading-tight">
                                {item.value}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
