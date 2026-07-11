"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, BookOpen, Search } from "lucide-react";
import { courses } from "@/app/data/courses";

export default function CourseList() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    { name: "All", label: "All Programs" },
    { name: "Officer", label: "Officer Training (B.Sc, B.Tech, DNS)" },
    { name: "Specialist", label: "Graduate & Rating (GME, ETO, GP Rating)" }
  ];

  const filteredCourses = courses.filter((course) => {
    // Category match
    let matchesCategory = true;
    if (filter === "Officer") {
      matchesCategory = ["bsc-nautical-science", "btech-marine-engineering", "diploma-nautical-science"].includes(course.id);
    } else if (filter === "Specialist") {
      matchesCategory = ["graduate-marine-engineering", "general-purpose-rating", "electro-technical-officer"].includes(course.id);
    }

    // Search query match
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) || 
                          course.overview.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-900 pb-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setFilter(cat.name)}
              className={`text-xs font-semibold px-4.5 py-2.5 rounded transition-all ${
                filter === cat.name
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/10"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-805"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:max-w-xs">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-slate-900 focus:border-orange-500/50 rounded-lg pl-10 pr-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
          />
          <Search className="w-4 h-4 text-slate-600 absolute left-3.5 top-3" />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course, index) => (
            <motion.div
              layout
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/40 border border-slate-900 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-orange-500/20 hover:bg-slate-900/60 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {course.type}
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-6 grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-base group-hover:text-orange-500 transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {course.overview}
                  </p>

                  <div className="bg-slate-950/50 rounded p-4 border border-slate-950">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center">
                      <BookOpen className="w-3.5 h-3.5 text-orange-500 mr-1.5" />
                      Key Core Subjects:
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-slate-500">
                      {course.subjects.slice(0, 4).map((sub) => (
                        <li key={sub} className="truncate">• {sub}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-white font-bold text-xs py-3 rounded text-center transition-all flex items-center justify-center group/btn"
                  >
                    <span>View Eligibility & Admissions</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16 border border-slate-900 rounded-lg">
          <p className="text-slate-500 text-sm">No courses match your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
