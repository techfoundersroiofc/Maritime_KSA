"use client";

// News feed layout with featured announcement, interactive event image gallery, and animated upcoming events.
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  ArrowRight,
  Bell,
  BookOpen,
  Award,
  Compass,
  Clock,
} from "lucide-react";

const NEWS_ITEMS = [
  {
    id: 1,
    tag: "CAMPUS LAUNCH",
    icon: Award,
    title: "Grand Campus Inauguration Ceremony",
    date: "July 25, 2026",
    summary:
      "PKIMSE celebrated its official grand campus inauguration, attended by key maritime industry leaders, ship-management executives, and our inaugural batch of cadets. This milestone event marks the beginning of high-caliber sea-training at our state-of-the-art facility.",
    images: [
      "/images/news/1.JPG",
      "/images/news/2.JPG",
      "/images/news/3.JPG",
      "/images/news/4.JPG",
      "/images/news/5.JPG",
      "/images/news/6.JPG",
      "/images/news/7.JPG",
      "/images/news/8.JPG",
    ],
    link: "/gallery",
    badgeColor: "text-orange-600 bg-orange-50 border-orange-100",
    featured: true,
  },
  {
    id: 2,
    tag: "COMMENCEMENT",
    icon: Bell,
    title: "August 2026 Batch Admissions Open",
    date: "July 2, 2026",
    summary:
      "Admissions for B.Sc. Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS) are now open. Prospective cadets must submit their applications online before the priority deadline.",
    image: "/images/hero/1.jpg",
    link: "/admissions",
    badgeColor: "text-amber-655 bg-amber-50 border-amber-100",
  },
  {
    id: 3,
    tag: "PLACEMENT SUCCESS",
    icon: Award,
    title: "100% DNS Batch Placed in Anglo-Eastern & BSM",
    date: "June 10, 2026",
    summary:
      "We are proud to announce that the entire graduating batch of Diploma in Nautical Science (DNS) has secured placements onboard global container fleets and dry cargo ships.",
    image: "/images/campus/0M5A8301.JPG",
    link: "/admissions#placements",
    badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: 4,
    tag: "INFRASTRUCTURE",
    icon: Compass,
    title: "Inauguration of Liquid Cargo Handling Simulator",
    date: "May 28, 2026",
    summary:
      "PKIMSE has launched a new liquid cargo loading simulator unit on campus. Cadets can now practice loading/unloading hazardous crude and chemical cargoes in a controlled environment.",
    image: "/images/campus/Workstation_2.webp",
    link: "/campus",
    badgeColor: "text-purple-600 bg-purple-50 border-purple-100",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function NewsList() {
  const featuredNews = NEWS_ITEMS.find((item) => item.featured);
  const secondaryNews = NEWS_ITEMS.filter((item) => !item.featured);
  const FeaturedIcon = featuredNews.icon;

  const [activeFeaturedImage, setActiveFeaturedImage] = useState(
    featuredNews?.images?.[0] || featuredNews?.image,
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-20"
    >
      {/* 1. FEATURED ARTICLE (Full Width split container) */}
      {featuredNews && (
        <motion.div
          variants={fadeInUp}
          className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs hover:shadow-2xl hover:shadow-orange-500/3 hover:border-orange-500/25 transition-all duration-500 group relative overflow-hidden text-left"
        >
          {/* Diagonal sheen sweep on hover */}
          <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none" />

          {/* Left: Interactive Image Panel with thumbnails */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative aspect-video md:h-64 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group-hover:border-orange-200 transition-all duration-500">
              <Image
                src={activeFeaturedImage}
                alt={featuredNews.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Floating Icon Overlay */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center shadow-md z-30 select-none">
                <FeaturedIcon className="w-5 h-5" />
              </div>
              {/* Dark gradient overlay bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Event Gallery Thumbnails */}
            {featuredNews.images && featuredNews.images.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Event Highlights
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {featuredNews.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveFeaturedImage(img)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 shrink-0 ${
                        activeFeaturedImage === img
                          ? "border-orange-600 scale-105 shadow-sm shadow-orange-500/20"
                          : "border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Inauguration thumbnail ${idx + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Announcement Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span
                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border ${featuredNews.badgeColor}`}
              >
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
      <div className="space-y-8">
        <div className="flex items-center space-x-3 text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-550" />
          <h3 className="text-xl font-black text-blue-950 tracking-tight">
            More News & Updates
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryNews.map((news) => {
            const SecIcon = news.icon;
            return (
              <motion.div
                key={news.id}
                variants={fadeInUp}
                className="bg-white border border-slate-200/80 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:shadow-orange-500/2 hover:border-orange-500/25 transition-all duration-500 group relative overflow-hidden text-left"
                whileHover={{ y: -5 }}
              >
                {/* Top Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-blue-950/90 text-white flex items-center justify-center border border-white/10 backdrop-blur-xs select-none z-10">
                    <SecIcon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-4 relative z-10 grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${news.badgeColor}`}
                      >
                        {news.tag}
                      </span>
                      <div className="flex items-center text-slate-450 text-[10px] font-bold">
                        <Calendar className="w-3 h-3 mr-1 text-orange-600" />
                        <span>{news.date}</span>
                      </div>
                    </div>

                    <h3 className="text-blue-950 font-black text-sm sm:text-base tracking-tight leading-snug group-hover:text-orange-655 transition-colors line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-3">
                      {news.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <Link
                      href={news.link}
                      className="text-orange-655 hover:text-orange-700 font-extrabold text-xs flex items-center group/btn transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. UPCOMING EVENTS SECTION (COMING SOON PLACEHOLDER) */}
      <div className="space-y-8 pt-8 border-t border-slate-200">
        <div className="flex items-center space-x-3 text-left">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <h3 className="text-xl font-black text-blue-950 tracking-tight">
            Upcoming Events
          </h3>
        </div>

        <motion.div
          variants={fadeInUp}
          className="border border-slate-200 bg-linear-to-br from-slate-50 to-white p-10 sm:p-12 rounded-3xl flex flex-col items-center justify-center text-center group relative overflow-hidden shadow-xs"
        >
          {/* Animated glowing background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-orange-500/5 transition-all duration-700" />

          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-lg">
            {/* Animated Icon Circle */}
            <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-xs group-hover:bg-orange-50 group-hover:text-orange-600 group-hover:border-orange-100 transition-colors duration-500">
              {/* Outer pulsing rings */}
              <span
                className="absolute inset-0 rounded-2xl border border-blue-500/30 animate-ping opacity-75"
                style={{ animationDuration: "3s" }}
              />
              <span
                className="absolute inset-0 rounded-2xl border border-orange-550/20 animate-ping opacity-0 group-hover:opacity-75"
                style={{ animationDuration: "2.5s" }}
              />

              {/* Floating calendar icon */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Calendar className="w-10 h-10 stroke-[1.5]" />
              </motion.div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
                COMING SOON
              </span>
              <h4 className="text-2xl font-black text-blue-950 tracking-tight pt-2">
                Stay Tuned for Exciting Events
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                We are currently scheduling guest lectures, industry seminars,
                and safety workshops with international shipping partners.
                Registration links and schedules will be posted here soon.
              </p>
            </div>

            {/* Animated bouncing dots */}
            <div className="flex items-center space-x-2 pt-2">
              <span
                className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full bg-blue-550 animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
