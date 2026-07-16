"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Briefcase } from "lucide-react";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import AdmissionsTabContent from "@/app/components/admissions/AdmissionsTabContent";
import PlacementsTabContent from "@/app/components/placements/PlacementsTabContent";

export default function AdmissionsPlacementsTabs() {
  const [activeTab, setActiveTab] = useState("admissions");

  useEffect(() => {
    const handleHashChange = () => {
      if (
        typeof window !== "undefined" &&
        window.location.hash === "#placements"
      ) {
        setActiveTab("placements");
        const element = document.getElementById("tabs-container");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setActiveTab("admissions");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-700 pb-24 font-jakarta overflow-x-hidden">
      {/* 1. Dynamic Integrated Academic Banner */}
      <section className="relative py-28 sm:py-36 bg-blue-950 text-white overflow-hidden border-b border-slate-800">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/slide1.png"
            alt="Maritime Admissions and Placements"
            fill
            priority
            className="object-cover opacity-60 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/85 to-blue-950" />
        </div>

        {/* Soft grid/glow details */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs">
              PKIMSE Career Gateway
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-500 tracking-tight leading-none max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Admissions & Placements
          </motion.h1>

          <motion.p
            className="text-slate-350 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your journey from professional cadet training to a rewarding, global
            merchant navy career starts here. Explore our streamlined admission
            process and industry-leading recruitment statistics.
          </motion.p>
        </div>
      </section>

      {/* 2. Floating Tabs Selector Bar */}
      <div
        id="tabs-container"
        className="max-w-7xl mx-auto px-4 md:px-8 mt-[-32px] relative z-20 mb-20"
      >
        <div className="flex justify-center">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/80 p-1.5 rounded-full flex space-x-1.5 w-full max-w-md shadow-2xl relative">
            <button
              onClick={() => {
                setActiveTab("admissions");
                if (typeof window !== "undefined")
                  window.history.replaceState(null, "", "#admissions");
              }}
              className="relative flex-1 py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-wider transition-colors duration-300 flex items-center justify-center space-x-2 select-none cursor-pointer focus:outline-none group"
            >
              {activeTab === "admissions" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-orange-600 rounded-full shadow-lg shadow-orange-600/25 z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <FileText
                  className={cn(
                    "w-4 h-4 shrink-0 transition-colors duration-300",
                    activeTab === "admissions"
                      ? "text-white"
                      : "text-slate-400 group-hover:text-blue-950",
                  )}
                />
                <span
                  className={cn(
                    "transition-colors duration-300 font-extrabold",
                    activeTab === "admissions"
                      ? "text-white"
                      : "text-slate-650 group-hover:text-blue-950",
                  )}
                >
                  Admissions
                </span>
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab("placements");
                if (typeof window !== "undefined")
                  window.history.replaceState(null, "", "#placements");
              }}
              className="relative flex-1 py-3.5 px-6 rounded-full text-xs font-black uppercase tracking-wider transition-colors duration-300 flex items-center justify-center space-x-2 select-none cursor-pointer focus:outline-none group"
            >
              {activeTab === "placements" && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-orange-600 rounded-full shadow-lg shadow-orange-600/25 z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Briefcase
                  className={cn(
                    "w-4 h-4 shrink-0 transition-colors duration-300",
                    activeTab === "placements"
                      ? "text-white"
                      : "text-slate-400 group-hover:text-blue-950",
                  )}
                />
                <span
                  className={cn(
                    "transition-colors duration-300 font-extrabold",
                    activeTab === "placements"
                      ? "text-white"
                      : "text-slate-650 group-hover:text-blue-950",
                  )}
                >
                  Placements
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Content Panels */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatePresence mode="wait">
          {activeTab === "admissions" ? (
            <AdmissionsTabContent key="admissions" />
          ) : (
            <PlacementsTabContent key="placements" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
