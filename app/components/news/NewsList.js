"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Bell, BookOpen, Award, Compass } from "lucide-react";

const NEWS_ITEMS = [
  {
    id: 1,
    tag: "COMMENCEMENT",
    icon: Bell,
    title: "August 2026 Batch Admissions Open",
    date: "July 2, 2026",
    summary: "Admissions for B.Sc. Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS) are now open. Prospective cadets must submit their applications online before the priority deadline.",
    link: "/admissions",
    badgeColor: "text-orange-600 bg-orange-50 border-orange-100",
    featured: true
  },
  {
    id: 2,
    tag: "IMU-CET",
    icon: BookOpen,
    title: "IMU-CET 2026 Examination Guidance",
    date: "June 25, 2026",
    summary: "Qualified ranks in the Indian Maritime University entrance test (IMU-CET) are mandatory for DNS and degree programs. Review our screening test criteria to prepare effectively.",
    link: "/admissions",
    badgeColor: "text-blue-600 bg-blue-50 border-blue-100"
  },
  {
    id: 3,
    tag: "PLACEMENT SUCCESS",
    icon: Award,
    title: "100% DNS Batch Placed in Anglo-Eastern & BSM",
    date: "June 10, 2026",
    summary: "We are proud to announce that the entire graduating batch of Diploma in Nautical Science (DNS) has secured placements onboard global container fleets and dry cargo ships.",
    link: "/admissions#placements",
    badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-100"
  },
  {
    id: 4,
    tag: "INFRASTRUCTURE",
    icon: Compass,
    title: "Inauguration of Liquid Cargo Handling Simulator",
    date: "May 28, 2026",
    summary: "PKIMSE has launched a new liquid cargo loading simulator unit on campus. Cadets can now practice loading/unloading hazardous crude and chemical cargoes in a controlled environment.",
    link: "/campus",
    badgeColor: "text-purple-600 bg-purple-50 border-purple-100"
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
};

export default function NewsList() {
  const featuredNews = NEWS_ITEMS.find(item => item.featured);
  const secondaryNews = NEWS_ITEMS.filter(item => !item.featured);
  const FeaturedIcon = featuredNews.icon;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-12"
    >
      {/* 1. FEATURED ARTICLE (Full Width split container) */}
      {featuredNews && (
        <motion.div
          variants={fadeInUp}
          className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs hover:shadow-2xl hover:shadow-orange-500/[0.03] hover:border-orange-500/25 transition-all duration-500 group relative overflow-hidden text-left"
        >
          {/* Diagonal sheen sweep on hover */}
          <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none" />

          {/* Left: Interactive Icon Panel */}
          <div className="md:col-span-4 flex items-center justify-center bg-slate-50 border border-slate-150 aspect-square md:aspect-video rounded-2xl relative overflow-hidden group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors duration-500">
            <div className="absolute -bottom-8 -right-8 text-slate-100 group-hover:text-orange-500/5 group-hover:scale-115 transition-all duration-700 pointer-events-none">
              <FeaturedIcon className="w-36 h-36 stroke-[1.2]" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-500">
              <FeaturedIcon className="w-8 h-8" />
            </div>
          </div>

          {/* Right: Announcement Details */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border ${featuredNews.badgeColor}`}>
                {featuredNews.tag}
              </span>
              <div className="flex items-center text-slate-500 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-orange-655" />
                <span>{featuredNews.date}</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight leading-tight group-hover:text-orange-655 transition-colors">
              {featuredNews.title}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              {featuredNews.summary}
            </p>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <Link
                href={featuredNews.link}
                className="text-orange-655 hover:text-orange-700 font-extrabold text-xs sm:text-sm flex items-center group/btn transition-colors"
              >
                <span>Apply or Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. SECONDARY ARTICLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secondaryNews.map((news) => {
          const SecIcon = news.icon;
          return (
            <motion.div
              key={news.id}
              variants={fadeInUp}
              className="bg-white border border-slate-200/80 p-7 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-500/[0.02] hover:border-orange-500/25 transition-all duration-500 group relative overflow-hidden text-left"
              whileHover={{ y: -5 }}
            >
              {/* Background watermark */}
              <div className="absolute -bottom-6 -right-6 text-slate-50/80 group-hover:text-orange-500/5 group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                <SecIcon className="w-24 h-24 stroke-[1.2]" />
              </div>

              <div className="space-y-4 relative z-10 flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${news.badgeColor}`}>
                    {news.tag}
                  </span>
                  <div className="flex items-center text-slate-450 text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-orange-600" />
                    <span>{news.date}</span>
                  </div>
                </div>

                <h3 className="text-blue-950 font-black text-base tracking-tight leading-snug group-hover:text-orange-655 transition-colors">
                  {news.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed font-medium">
                  {news.summary}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex justify-end relative z-10">
                <Link
                  href={news.link}
                  className="text-orange-655 hover:text-orange-700 font-extrabold text-xs flex items-center group/btn transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
