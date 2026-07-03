import { HelpCircle } from "lucide-react";
import { faqs } from "@/app/data/faq";
import { SEO_METADATA } from "@/app/constants/seo";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export const metadata = {
  title: `Frequently Asked Questions (FAQ) | ${COLLEGE_CONFIG.name}`,
  description: "Get answers to frequently asked questions about join merchant navy, eligibility criteria, physical fitness standards, sponsorships, and admissions.",
};

export default function FAQPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Help Center
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Quickly resolve your queries about sponsorships, physical fitness standards, IMU-CET, and career progression.
          </p>
        </div>
      </section>

      {/* Accordion Questions */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="space-y-6">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-slate-900 rounded-lg p-6 bg-slate-900/20 select-none [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between font-semibold text-white cursor-pointer list-none text-sm tracking-wide">
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>{faq.question}</span>
                </div>
                <span className="text-orange-500 transition-transform group-open:rotate-180 font-black text-lg">
                  +
                </span>
              </summary>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 border-t border-slate-900/50 pt-4 pl-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
