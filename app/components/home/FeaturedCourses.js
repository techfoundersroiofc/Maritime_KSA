"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { courses } from "@/app/data/courses";

export default function FeaturedCourses() {
  // We showcase the top 3 flagship courses on home page
  const featured = courses.slice(0, 3);

  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200/60 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gsap-slide-up">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="h-px w-8 bg-orange-600" />
              <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">
                Flagship Programs
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
              DG Shipping Approved Pre-Sea Training
            </h2>
          </div>
          <Link
            href="/courses"
            className="group text-orange-600 hover:text-orange-700 font-bold text-xs flex items-center transition-colors mt-4 md:mt-0"
          >
            <span>View All {courses.length} Courses</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gsap-stagger-container">
          {featured.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200/80 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 shadow-sm hover:-translate-y-1 gsap-stagger-item"
            >
              {/* Course Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-orange-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {course.type}
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6 grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-slate-500 text-xs mb-3">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span>{course.duration}</span>
                  </div>
                  
                  <h3 className="text-blue-950 font-bold text-lg group-hover:text-orange-600 transition-colors mb-3 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {course.overview}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mt-2">
                    <h4 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center">
                      <GraduationCap className="w-4 h-4 text-orange-600 mr-1.5" />
                      Academic Eligibility:
                    </h4>
                    <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                      {course.eligibility.academic}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-blue-950 font-bold text-xs py-3 rounded text-center transition-all flex items-center justify-center group/btn"
                  >
                    <span>Course Details & Careers</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
