"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories, galleryItems } from "@/app/data/gallery";

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* 1. Category Filter Navigation (Rounded segment pills) */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-b border-slate-100 pb-10">
        {galleryCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border cursor-pointer select-none ${
                isActive
                  ? "bg-blue-950 border-blue-950 text-white shadow-md shadow-blue-950/15"
                  : "bg-white border-slate-200 text-slate-655 hover:bg-slate-50 hover:text-blue-950"
              }`}
            >
              <span>{cat === "All" ? "All Media" : cat}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Photo Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col group hover:border-orange-550/30 hover:shadow-2xl hover:shadow-orange-500/[0.04] transition-all duration-300 relative shadow-2xs"
            >
              {/* Corner Gradient Glow Spot */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full blur-xl group-hover:bg-orange-500/10 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

              {/* Media image container with shine flash sweep */}
              <div className="relative aspect-video w-full bg-linear-to-br from-blue-950/5 to-slate-200 overflow-hidden flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Skewed Shine Sweep Flash */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  <div className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-800 ease-out" />
                </div>

                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-blue-950/90 text-white text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/10 tracking-widest uppercase backdrop-blur-xs select-none z-10">
                  {item.category}
                </div>
              </div>

              {/* Info Details Section */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 relative z-10">
                <div className="space-y-1.5">
                  <h4 className="text-blue-950 font-black text-base tracking-tight leading-snug group-hover:text-orange-655 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
