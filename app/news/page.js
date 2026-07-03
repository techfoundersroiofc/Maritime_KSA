import Link from "next/link";
import { Calendar, ArrowRight, Award, Compass, Bell } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.news.title,
  description: SEO_METADATA.news.description,
  keywords: SEO_METADATA.news.keywords.join(", "),
};

export default function NewsPage() {
  const newsList = [
    {
      id: 1,
      tag: "COMMENCEMENT",
      title: "August 2026 Batch Admissions Open",
      date: "July 2, 2026",
      summary: "Admissions for B.Sc. Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS) are now open. Prospective cadets must submit their applications online.",
      link: "/admissions"
    },
    {
      id: 2,
      tag: "IMU-CET",
      title: "IMU-CET 2026 Examination Guidance",
      date: "June 25, 2026",
      summary: "Qualified ranks in the Indian Maritime University entrance test (IMU-CET) are mandatory for DNS and degree programs. Review our screening test criteria to prepare effectively.",
      link: "/admissions"
    },
    {
      id: 3,
      tag: "PLACEMENT SUCCESS",
      title: "100% DNS Batch Placed in Anglo-Eastern & BSM",
      date: "June 10, 2026",
      summary: "We are proud to announce that the entire graduating batch of Diploma in Nautical Science (DNS) has secured placements onboard global container fleets and dry cargo ships.",
      link: "/placements"
    },
    {
      id: 4,
      tag: "INFRASTRUCTURE",
      title: "Inauguration of Liquid Cargo Handling Simulator",
      date: "May 28, 2026",
      summary: "PKIMSE has launched a new liquid cargo loading simulator unit on campus. Cadets can now practice loading/unloading hazardous crude and chemical cargoes in a controlled environment.",
      link: "/campus"
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
              News & Announcements
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Latest College Updates
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Stay updated with our academic dates, batch schedules, exam guidelines, placement drives, and achievements.
          </p>
        </div>
      </section>

      {/* News list */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        <div className="space-y-10">
          {newsList.map((news) => (
            <article
              key={news.id}
              className="bg-slate-900/20 border border-slate-900 p-8 rounded-lg space-y-4 hover:border-slate-800 transition-colors relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="bg-orange-600/10 border border-orange-500/20 text-orange-500 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {news.tag}
                </span>
                <div className="flex items-center text-slate-500 text-xs">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-orange-500" />
                  <span>{news.date}</span>
                </div>
              </div>

              <h2 className="text-white font-extrabold text-lg tracking-wide hover:text-orange-500 transition-colors">
                {news.title}
              </h2>

              <p className="text-xs text-slate-400 leading-relaxed">
                {news.summary}
              </p>

              <div className="pt-2 border-t border-slate-950/60 flex justify-end">
                <Link
                  href={news.link}
                  className="text-orange-500 hover:text-orange-400 font-bold text-xs flex items-center group transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
