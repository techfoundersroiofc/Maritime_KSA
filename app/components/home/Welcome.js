"use client";

import Link from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { Anchor, ShieldCheck, Cpu, Award, ArrowRight } from "lucide-react";
import { keyHighlights } from "@/app/data/statistics";

const iconMap = {
  0: ShieldCheck,
  1: Award,
  2: Anchor,
  3: Cpu
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Welcome() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: About Intro */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-2">
              <span className="h-px w-8 bg-orange-600" />
              <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">
                Welcome to PKIMSE
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight"
            >
              Shaping Disciplined Leaders for Global Maritime Career Opportunities
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm leading-relaxed">
              PKIMSE (KSA Maritime College) is recognized as one of the{" "}
              <strong className="text-blue-950 font-bold">
                best marine academies in India
              </strong>{" "}
              and the premier{" "}
              <strong className="text-blue-950 font-bold">
                merchant navy college in Tamil Nadu
              </strong>
              . As a cornerstone of the esteemed KSA Group of Institutions, we offer elite
              maritime training that equips cadets with the skills and discipline needed to excel in the global shipping industry.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm leading-relaxed">
              Our residential campus in Chidambaram is engineered to mimic actual shipboard environments,
              instilling standard maritime discipline, physical fitness, and hands-on professional expertise. We offer specialized guidance for{" "}
              <strong className="text-blue-950 font-bold">
                nautical science admission
              </strong>{" "}
              and{" "}
              <strong className="text-blue-950 font-bold">
                marine engineering admission
              </strong>
              , making PKIMSE the preferred choice for students seeking high-quality{" "}
              <strong className="text-blue-950 font-bold">
                maritime courses after 12th
              </strong>
              .
            </motion.p>

            <motion.p variants={fadeInUp} className="text-slate-600 text-sm leading-relaxed">
              Mentored by veteran Master Mariners and Chief Engineers, our practical training curriculum prepares cadets to secure high-paying{" "}
              <strong className="text-blue-950 font-bold">
                merchant navy jobs
              </strong>{" "}
              globally.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              variants={fadeInUp} 
              className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-6 gap-y-3"
            >
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-650" />
                <span>DG Shipping Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-655" />
                <span>A1 Audited Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-655" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-2">
              <NextLink
                href="/about"
                className="inline-flex items-center space-x-2 bg-blue-950 hover:bg-orange-600 text-white font-bold text-xs px-6 py-4 rounded transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </NextLink>
            </motion.div>
          </motion.div>

          {/* Right: Key Highlights Grid */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {keyHighlights.map((hl, index) => {
              const Icon = iconMap[index % 4];
              return (
                <motion.div
                  key={hl.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-slate-50/70 border border-slate-200/80 p-6 rounded-2xl relative hover:border-orange-500/30 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-orange-600/10 border border-orange-500/10 group-hover:border-orange-500/20 group-hover:bg-orange-500/20 flex items-center justify-center text-orange-650 mb-4 transition-all duration-300">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-blue-950 font-bold text-sm tracking-wide mb-2 group-hover:text-orange-650 transition-colors">
                      {hl.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {hl.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
