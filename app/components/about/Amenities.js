"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories, galleryItems } from "@/app/data/gallery";
import {
  Cpu,
  Anchor,
  Ship,
  Users,
  Trophy,
  Image as ImageIcon,
  ChevronRight,
} from "lucide-react";

const categoryIcons = {
  Simulators: Cpu,
  "Marine Workshop": Anchor,
  "Campus Infrastructure": Ship,
  "Cadet Life": Users,
  "Sports & Fitness": Trophy,
  All: ImageIcon,
};

export default function Amenities() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [failedImages, setFailedImages] = useState({});

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
              CAMPUS TOUR
            </span>
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Explore Our Campus Amenities & Facilities
          </h2>
          <p className="text-blue-950 text-md font-semibold max-w-xl mx-auto leading-relaxed">
            Our state-of-the-art infrastructure is custom-built to simulate
            modern shipboard environments and seafarer lifestyles.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const Icon = categoryIcons[cat] || ImageIcon;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border cursor-pointer select-none ${
                  isActive
                    ? "bg-blue-950 border-blue-950 text-white shadow-md"
                    : "bg-slate-50 border-slate-200 text-slate-655 hover:bg-slate-100 hover:text-blue-950"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const ItemIcon = categoryIcons[item.category] || ImageIcon;
              const hasFailed = failedImages[item.id];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden flex flex-col group hover:border-orange-550/30 hover:bg-white hover:shadow-xl transition-all duration-300 shadow-2xs relative"
                >
                  {/* Corner Gradient Glow Spot */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-orange-500/5 rounded-full blur-xl group-hover:bg-orange-500/10 group-hover:scale-150 transition-all duration-500 pointer-events-none" />

                  {/* Media Section with Shine Flash overlay */}
                  <div className="relative aspect-video w-full bg-linear-to-br from-blue-950/5 to-slate-200 overflow-hidden flex items-center justify-center">
                    {!hasFailed ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                        onError={() => handleImageError(item.id)}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      // Stylized Placeholder fallback
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-900 flex flex-col items-center justify-center p-6 text-center select-none">
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-orange-400 mb-3">
                          <ItemIcon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">
                          {item.category}
                        </span>
                      </div>
                    )}

                    {/* Brilliant Skewed Shine Sweep Flash */}
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                      <div className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
                    </div>

                    {/* Hover Overlay Badge */}
                    <div className="absolute top-4 left-4 bg-blue-950/90 text-white text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/10 tracking-widest uppercase backdrop-blur-xs select-none z-10">
                      {item.category}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4 relative z-10">
                    <div>
                      <h4 className="text-blue-950 font-black text-base tracking-tight leading-snug group-hover:text-orange-655 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-zinc-900/90 text-xs sm:text-sm leading-relaxed mt-2 font-medium">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Interactive Row */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-zinc-900/90 group-hover:text-orange-600 transition-colors duration-300">
                      <span>View Facility</span>
                      <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 text-zinc-900/90 group-hover:text-orange-600" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
