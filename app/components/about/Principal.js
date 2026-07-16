"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Ship, BookOpen, Compass } from "lucide-react";

export default function Principal() {
  const memberships = [
    "Fellow Member of Institute of Marine Engineers (India)",
    "Member of Indian Society for Technical Education (ISTE)",
    "Member of Institution of Naval Architects (India)",
    "Member of International Association of Engineers",
  ];

  const specs = [
    {
      label: "Sailing Experience",
      value: "15 Years as Chief Engineer Officer",
      icon: Ship,
    },
    {
      label: "Vessel Specialties",
      value: "Bulk Carriers, Containers, Wood Chip Carriers",
      icon: Compass,
    },
    {
      label: "Credentials",
      value: "Marine Engineer Officer Class 1 (DGS India)",
      icon: ShieldCheck,
    },
    {
      label: "Trainer Credentials",
      value: "VICT & AECS Certified",
      icon: Award,
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative gradient background elements */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
            <span className="text-orange-600 font-extrabold uppercase tracking-wider text-xs sm:text-sm">
              ACADEMIC LEADERSHIP
            </span>
            <span className="h-0.5 w-8 bg-orange-600 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight leading-tight">
            Meet Our Principal
          </h2>
          <p className="text-blue-950 text-sm font-semibold max-w-xl mx-auto leading-relaxed">
            Led by a veteran Chief Engineer and Marine Superintendent with
            extensive shipboard and administrative expertise.
          </p>
        </div>

        {/* Profile Card Layout - Even 50/50 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          {/* Left Column: Image with Sweep Flash */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full min-h-[500px]"
          >
            <div className="relative flex-1 w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md group cursor-default">
              <Image
                src="/images/faculty/pkimse_college_princpal.jpeg"
                alt="Principal Abdul Rasheed"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* White Overlay Flash on Hover */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

              {/* Brilliant Skewed Shine Sweep Flash */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <div className="absolute inset-y-0 w-2/3 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-[25deg] -translate-x-[150%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
              </div>

              {/* Badge Overlay */}
              <div className="absolute top-6 left-6 bg-blue-950 text-white py-2.5 px-4.5 rounded-2xl border border-blue-900/30 flex items-center space-x-2 shadow-lg backdrop-blur-xs z-10">
                <Ship className="w-4 h-4 text-orange-400" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-orange-400">
                  Chief Engineer Officer
                </span>
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-8 z-10" />

              {/* Overlay Details */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-white font-black text-2xl tracking-tight leading-none mb-1">
                  Abdul Rasheed
                </h3>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                  Engineer Superintendent cum Principal
                </p>
                <div className="h-0.5 bg-orange-500/30 rounded-full w-12 mt-4 group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details and Memberships inside Symmetrical Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xs h-full"
          >
            {/* Overview Narrative */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight flex items-center">
                <Award className="w-6 h-6 text-orange-655 mr-2 shrink-0 animate-pulse" />
                Distinguished Maritime Career
              </h3>
              <p className="text-blue-950 text-xs sm:text-sm leading-relaxed font-semibold">
                Abdul Rasheed serves as the Engineer Superintendent cum Principal of
                Perunthalaivar Kamarajar Institute of Maritime Science and
                Engineering (PKIMSE). He holds a Marine Engineer Officer Class 1 Certificate
                of Competency, issued by the Directorate General of Shipping, Ministry of
                Ports, Shipping and Waterways, Government of India.
              </p>
              <p className="text-blue-950 text-xs sm:text-sm leading-relaxed font-semibold">
                With over 15 years of rigorous shipboard sailing experience, he has sailed
                in the capacity of Chief Engineer Officer on merchant fleet vessels flying
                both Indian and international flags. His practical sailing experience includes
                operations on heavy Bulk Carriers, Containers, and Wood Chip Carrier Self-Unloader
                type vessels.
              </p>
            </div>

            {/* Technical Specs Grid with Lucide Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-white border border-slate-200/70 p-5 rounded-2xl shadow-2xs">
              {specs.map((item, idx) => {
                const SpecIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 group/spec"
                  >
                    <div className="w-8.5 h-8.5 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0 mt-0.5 transition-colors duration-300 group-hover/spec:bg-orange-600 group-hover/spec:text-white">
                      <SpecIcon className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-450 block">
                        {item.label}
                      </span>
                      <p className="text-xs sm:text-[13px] font-bold text-blue-950 leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Memberships & Certifications */}
            <div className="space-y-5">
              {/* Professional Memberships */}
              <div className="space-y-4">
                <h4 className="text-[14px] font-black uppercase tracking-wider text-blue-950 flex items-center mb-2">
                  <BookOpen className="w-4 h-4 text-orange-600 mr-2 shrink-0" />
                  Professional Memberships & Affiliations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {memberships.map((membership, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-black bg-white border border-slate-200/60 p-3 rounded-xl hover:border-orange-500/20 transition-all duration-355 shadow-3xs"
                    >
                      <ShieldCheck className="w-4.5 h-4.5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold leading-relaxed text-black">
                        {membership}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications footer */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h5 className="text-[12px] font-black text-blue-950 uppercase tracking-normal">
                    Mandatory Certifications
                  </h5>
                  <p className="text-sm font-semibold text-blue-950">
                    Holds active VICT and AECS certifications approved by DGS
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
