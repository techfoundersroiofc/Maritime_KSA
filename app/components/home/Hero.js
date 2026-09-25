"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  Award,
  Compass,
  GraduationCap,
} from "lucide-react";

const images = [
  { src: "/images/hero/1.jpg", alt: "PKIMSE Students" },
  { src: "/images/hero/DJI_0527.JPG", alt: "Marine Engine Workshop" },
  { src: "/images/hero/3.jpg", alt: "Campus Training" },
  { src: "/images/hero/4.jpg", alt: "Virtual Drive" },
  { src: "/images/hero/5.jpg", alt: "Premium Campus Hostels" },
  { src: "/images/hero/DJI_0536.JPG", alt: "Marine Engine Workshop" },
  { src: "/images/hero/6.webp", alt: "Students Higlight" },
  { src: "/images/hero/7.jpg", alt: "Marine life" },
  { src: "/images/hero/8.png", alt: "shipping" },
];

const quickLinks = [
  {
    id: 1,
    title: "Admissions Jan 2027",
    subtitle: "Apply Today",
    badge: "Govt. Approved",
    href: "/admissions#admissions",
    icon: GraduationCap,
    borderColor: "group-hover:border-orange-500/40",
    glowColor: "group-hover:shadow-orange-500/10",
    iconBg: "bg-orange-500/10 text-orange-500",
  },
  {
    id: 2,
    title: "Placement",
    subtitle: "100% assistance",
    badge: "Placement Cell",
    href: "/admissions#placements",
    icon: Award,
    borderColor: "group-hover:border-emerald-500/40",
    glowColor: "group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    id: 3,
    title: "Courses",
    subtitle: "GP Rating",
    badge: "10th & 12th science",
    href: "/courses",
    icon: Anchor,
    borderColor: "group-hover:border-blue-500/40",
    glowColor: "group-hover:shadow-blue-500/10",
    iconBg: "bg-blue-500/10 text-blue-500",
  },
  {
    id: 4,
    title: "Eco campus",
    subtitle: "Ac Hostels",
    badge: "Safe Residential",
    href: "/campus",
    icon: Compass,
    borderColor: "group-hover:border-amber-500/40",
    glowColor: "group-hover:shadow-amber-500/10",
    iconBg: "bg-amber-500/10 text-amber-600",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[50vh] xl:h-[90vh] flex flex-col justify-end overflow-hidden bg-blue-950">
      {/* Full-bleed background image carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft, premium gradient overlay to ensure card readability */}
        <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/20 to-blue-950/50 z-10" />
      </div>

      {/* Quick Links as simple text links overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-10 flex flex-wrap justify-center items-center gap-4">
        {quickLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="group bg-orange-600 text-white font-semibold text-sm md:text-base px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-orange-500/10 hover:border-transparent hover:-translate-y-0.5"
          >
            <span>{link.title}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}
