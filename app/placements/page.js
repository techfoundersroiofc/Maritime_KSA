import Link from "next/link";
import { Award, ShieldCheck, Compass, Briefcase, ChevronRight, Quote } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";
import { recruiters } from "@/app/data/recruiters";
import { testimonials } from "@/app/data/testimonials";

export const metadata = {
  title: SEO_METADATA.placements.title,
  description: SEO_METADATA.placements.description,
  keywords: SEO_METADATA.placements.keywords.join(", "),
};

export default function PlacementsPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Placement Record
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Placements & Recruiter Partners
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            PKIMSE maintains a stellar placement record. Our cadets undergo rigorous pre-sea training and get selected by top international shipping companies.
          </p>
        </div>
      </section>

      {/* Stats and Placement Assistance */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Dedicated Placement Cell & Sponsorships
            </h2>
            <p className="text-sm leading-relaxed">
              Our active Placement Cell works directly with ship management corporations. We facilitate DNS sponsorships, on-campus recruitments, technical tests preparation, and maritime visa processing.
            </p>
            <p className="text-sm leading-relaxed">
              We regularly host recruitment seminars, mock interviews, and technical brush-up sessions led by retired captains. This rigorous process ensures that PKIMSE cadets have a high success rate in shipping company selection exams.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded">
              <div className="text-3xl font-black text-white mb-1">100%</div>
              <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">DNS Sponsorships</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                All selected Diploma in Nautical Science (DNS) cadets secure sponsorship prior to course start.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-900 p-6 rounded">
              <div className="text-3xl font-black text-white mb-1">50+</div>
              <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">Recruiters</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                cadets sail globally with leading shipping and cruise operators.
              </p>
            </div>
          </div>
        </div>

        {/* Recruitment Partners Grid */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
              SHIPPING CORPORATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Sponsorship & Recruiting Partners
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {recruiters.map((rec) => (
              <div
                key={rec.name}
                className="bg-slate-900/30 border border-slate-900/80 hover:border-slate-800 hover:bg-slate-900/50 p-6 rounded text-center flex items-center justify-center min-h-[90px] transition-all group"
              >
                <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors tracking-wide leading-snug">
                  {rec.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cadet Testimonials */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">
              ALUMNI REVIEWS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Cadets Sailing Globally
            </h3>
            <p className="text-slate-450 text-xs sm:text-sm">
              Read how PKIMSE's training transformed cadets into professional maritime officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-slate-900/30 border border-slate-900 p-8 rounded-lg flex flex-col justify-between relative"
              >
                <Quote className="w-10 h-10 text-orange-600/10 absolute top-6 right-6" />
                <div className="space-y-4">
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                  <div className="border-t border-slate-900/60 pt-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-900 flex items-center justify-center text-orange-500 font-black text-xs">
                      {test.name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{test.name}</h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{test.course}</p>
                      <p className="text-[10px] text-orange-500 font-semibold mt-0.5">{test.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
