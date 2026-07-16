import GalleryGrid from "@/app/components/gallery/GalleryGrid";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.gallery.title,
  description: SEO_METADATA.gallery.description,
  keywords: SEO_METADATA.gallery.keywords.join(", "),
};

export default function GalleryPage() {
  return (
    <div className="bg-slate-55 min-h-screen pb-24 font-jakarta overflow-x-hidden">
      {/* 1. Glassmorphic Hero Banner */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-b border-slate-800 bg-blue-950">
        {/* Background Image of Sea Survival Drills */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/images/campus/saftey.webp')" }}
        />
        {/* Navy/black overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/85 to-blue-950" />

        {/* Decorative Glowing Highlights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-white font-extrabold uppercase tracking-widest text-xs">
              Photo Gallery
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-orange-500 tracking-tight leading-none max-w-4xl mx-auto">
            PKIMSE Campus Media
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Take a look inside our simulation labs, heavy marine workshop, residential hostel block, and student training activities.
          </p>
        </div>
      </section>

      {/* 2. Interactive Photo & Video Filtering Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <GalleryGrid />
      </section>
    </div>
  );
}
