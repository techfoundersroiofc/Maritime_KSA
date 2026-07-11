"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Train, Plane, Car } from "lucide-react";

const DIRECTIONS = [
  {
    mode: "By Road",
    desc: "Conveniently situated right on the Chidambaram Bypass Highway, accessible via intercity public and private buses.",
    icon: Car,
    color: "text-orange-600 bg-orange-50 border-orange-100"
  },
  {
    mode: "By Rail",
    desc: "Chidambaram Junction Railway Station (CDM) is located just 3 km from the main academic campus gates.",
    icon: Train,
    color: "text-blue-600 bg-blue-50 border-blue-100"
  },
  {
    mode: "By Air",
    desc: "Tiruchirappalli International Airport (TRZ) is approx. 150 km, and Chennai Airport (MAA) is 230 km away.",
    icon: Plane,
    color: "text-purple-600 bg-purple-50 border-purple-100"
  }
];

export default function ContactMap() {
  const latitude = 11.426372878200096;
  const longitude = 79.64243827934827;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xs text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Transit Directions */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-black text-blue-950 tracking-tight">
              Transit & Campus Directions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              We welcome parents and prospective candidates to visit our campus for counseling. Here are the most convenient ways to reach us:
            </p>
          </div>

          <div className="space-y-4">
            {DIRECTIONS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-50 border border-slate-150 rounded-2xl hover:border-orange-500/10 transition-all duration-300">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon className="w-4.5 h-4.5 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-black text-blue-950 uppercase tracking-wide">
                      {item.mode}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Interactive Google Map Frame */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative w-full h-full min-h-[350px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xs group">
            
            {/* Live Interactive Map Iframe */}
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full z-0"
            />

            {/* Floating Control Card in bottom corner */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl shadow-lg flex items-center justify-between gap-4 z-10 select-none">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-655 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-black text-blue-950 uppercase tracking-wider">PKIMSE Campus</h5>
                  <p className="text-[10px] text-slate-500 font-bold">11.426372, 79.642438</p>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-950 hover:bg-orange-655 text-[10px] font-black text-white px-4 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-1.5 uppercase tracking-wider select-none cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}
