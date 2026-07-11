"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
};

export default function ContactDetails() {
  const details = [
    {
      title: "Main Residential Campus",
      info: COLLEGE_CONFIG.address,
      icon: MapPin,
      color: "text-orange-600 bg-orange-50 border-orange-100/80",
      link: "https://maps.google.com"
    },
    {
      title: "Admissions & Counselling",
      info: (
        <div className="space-y-1">
          <p className="text-slate-655 hover:text-blue-950 transition-colors">
            Phone: <a href={`tel:${COLLEGE_CONFIG.phone}`} className="font-bold">{COLLEGE_CONFIG.phone}</a>
          </p>
          <p className="text-slate-655 hover:text-blue-950 transition-colors">
            Alt: <a href={`tel:${COLLEGE_CONFIG.altPhone}`} className="font-bold">{COLLEGE_CONFIG.altPhone}</a>
          </p>
        </div>
      ),
      icon: Phone,
      color: "text-blue-600 bg-blue-50 border-blue-100/80"
    },
    {
      title: "Email Addresses",
      info: (
        <div className="space-y-1">
          <p className="text-slate-655 hover:text-blue-950 transition-colors break-all">
            Primary: <a href={`mailto:${COLLEGE_CONFIG.email}`} className="font-bold">{COLLEGE_CONFIG.email}</a>
          </p>
          <p className="text-slate-655 hover:text-blue-950 transition-colors break-all">
            Alt Support: <a href={`mailto:${COLLEGE_CONFIG.altEmail}`} className="font-bold">{COLLEGE_CONFIG.altEmail}</a>
          </p>
        </div>
      ),
      icon: Mail,
      color: "text-rose-600 bg-rose-50 border-rose-100/80"
    },
    {
      title: "Office Hours",
      info: COLLEGE_CONFIG.workingHours,
      icon: Clock,
      color: "text-purple-600 bg-purple-50 border-purple-100/80"
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8 text-left"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-black text-blue-950 tracking-tight">
          PKIMSE Campus Address
        </h2>
        <div className="h-0.5 w-16 bg-orange-655 rounded-full" />
      </div>

      <div className="space-y-4">
        {details.map((det, index) => {
          const Icon = det.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white border border-slate-200/80 p-5 rounded-2xl flex items-start space-x-4 hover:border-orange-500/25 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${det.color} group-hover:scale-105 transition-transform duration-300`}>
                <Icon className="w-5 h-5 stroke-2" />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-sm font-black text-blue-950 uppercase tracking-wider">{det.title}</h4>
                {typeof det.info === "string" ? (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {det.info}
                  </p>
                ) : (
                  <div className="text-xs sm:text-sm text-slate-655 font-medium">{det.info}</div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
