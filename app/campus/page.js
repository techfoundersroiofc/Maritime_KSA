import Link from "next/link";
import { Ship, ShieldAlert, Award, Coffee, Dumbbell, Compass, Anchor } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.campus.title,
  description: SEO_METADATA.campus.description,
  keywords: SEO_METADATA.campus.keywords.join(", "),
};

export default function CampusPage() {
  const facilities = [
    {
      title: "Bridge Simulators",
      icon: Compass,
      description: "Equipped with state-of-the-art DGS-approved bridge maneuvering simulators, preparing cadets to steer large container ships and cargo vessels under severe weather and high traffic scenarios."
    },
    {
      title: "Auxiliary Workshop",
      icon: Anchor,
      description: "Includes actual marine diesel engines, pumps, electrical circuits, and machining systems. Cadets learn overhaul, valve grinding, electrical wiring, and machine diagnostics."
    },
    {
      title: "Cadet Hostel & Mess",
      icon: Coffee,
      description: "A fully residential, neat boarding facility. Serves nutritious vegetarian and non-vegetarian meals matching required caloric charts. Discipline is maintained via regular bunk inspections."
    },
    {
      title: "Fitness Center & Sports",
      icon: Dumbbell,
      description: "Features a modern gym, football ground, volleyball court, and swimming pool. Swim training is compulsory for cadet emergency survival certificates."
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Campus Facilities
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Campus & Training Environment
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            PKIMSE operates a state-of-the-art residential campus at Chidambaram, Tamil Nadu. Experience a simulated naval setting equipped with modern simulators, heavy machinery workshop, and recreational amenities.
          </p>
        </div>
      </section>

      {/* Grid Facilities */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div key={fac.title} className="bg-slate-900/30 border border-slate-900 p-8 rounded-lg flex items-start space-x-5 hover:border-slate-800 transition-colors">
                <div className="w-12 h-12 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-base tracking-wide">{fac.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{fac.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cadet Residential Rules */}
        <div className="bg-slate-900/30 border border-slate-900 p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="space-y-4 max-w-xl">
              <h3 className="text-white font-extrabold text-xl flex items-center">
                <ShieldAlert className="w-6 h-6 text-orange-500 mr-2.5 shrink-0" />
                Residential Cadet Rules
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All pre-sea programs are strictly residential. Cadets are required to live in college hostels, wear uniforms, and adhere to military-grade discipline. Leave is only granted under exceptional circumstances with parents' approval.
              </p>
            </div>
            <div className="space-y-3.5 text-xs text-slate-300 w-full lg:max-w-xl">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Strict dress code matching maritime uniform ranks</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Morning physical training (PT) starts at 06:00 hrs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Zero tolerance policy for drugs, alcohol, and ragging</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>Smart phones and internet use restricted to designated hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
