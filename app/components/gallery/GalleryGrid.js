"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories } from "@/app/data/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Map gallery items to generated PNG images to ensure zero broken images
  const items = [
    {
      id: 1,
      category: "Simulators",
      title: "Full Mission Ship's Bridge Simulator",
      image: "/images/courses/dns.png",
      description: "Cadets undergoing advanced navigation simulation drills."
    },
    {
      id: 2,
      category: "Simulators",
      title: "Cargo Handling Simulator Room",
      image: "/images/courses/dns.png",
      description: "Plotting routes and simulator steering checks."
    },
    {
      id: 3,
      category: "Marine Workshop",
      title: "Marine Diesel Engine Assembly Unit",
      image: "/images/courses/marine-engineering.png",
      description: "Hands-on assembly of marine engines and diesel generators."
    },
    {
      id: 4,
      category: "Marine Workshop",
      title: "Auxiliary Valve and Pump Overhaul",
      image: "/images/courses/marine-engineering.png",
      description: "Cadets stripping and inspecting centrifugal pumps."
    },
    {
      id: 5,
      category: "Campus Infrastructure",
      title: "PKIMSE Academic Block",
      image: "/images/hero/hero-bg.png",
      description: "Modern campus facilities at Chidambaram, Tamil Nadu."
    },
    {
      id: 6,
      category: "Campus Infrastructure",
      title: "Cadet Residential Quarters",
      image: "/images/hero/hero-bg.png",
      description: "High-standard residential hostel blocks on campus."
    },
    {
      id: 7,
      category: "Cadet Life",
      title: "Daily Morning Parade & Drill",
      image: "/images/courses/nautical-science.png",
      description: "Cadets lined up for uniform check and morning muster."
    },
    {
      id: 8,
      category: "Cadet Life",
      title: "Survival Pool training",
      image: "/images/courses/nautical-science.png",
      description: "Practicing boarding lifeboats in the training pool."
    }
  ];

  const filteredItems = activeCategory === "All"
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Categories filter */}
      <div className="flex flex-wrap justify-center gap-3 border-b border-slate-900 pb-8">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs font-semibold px-4.5 py-2.5 rounded transition-all ${
              activeCategory === cat
                ? "bg-orange-600 text-white shadow-lg shadow-orange-600/15"
                : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-805"
            }`}
          >
            {cat === "All" ? "All Media" : cat}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/40 border border-slate-900 rounded-lg overflow-hidden group hover:border-slate-800 transition-colors shadow-xl"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-white font-bold text-sm tracking-wide">{item.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
