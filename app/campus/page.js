import { SEO_METADATA } from "@/app/constants/seo";
import CampusHero from "@/app/components/campus/CampusHero";
import CampusFacilities from "@/app/components/campus/CampusFacilities";
import CampusRules from "@/app/components/campus/CampusRules";

export const metadata = {
  title: SEO_METADATA.campus.title,
  description: SEO_METADATA.campus.description,
  keywords: SEO_METADATA.campus.keywords.join(", "),
};

export default function CampusPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-jakarta overflow-x-hidden">
      {/* 1. Academic Hero Banner */}
      <CampusHero />
      {/* 2. Interactive Facilities & Residential Code of Conduct */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <CampusFacilities />
        <CampusRules />
      </section>
    </div>
  );
}
