import GalleryGrid from "@/app/components/gallery/GalleryGrid";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.gallery.title,
  description: SEO_METADATA.gallery.description,
  keywords: SEO_METADATA.gallery.keywords.join(", "),
};

export default function GalleryPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Photo Gallery
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            PKIMSE Campus Media
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Take a look inside our simulation labs, heavy marine workshop, residential hostel block, and cadets training activities.
          </p>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <GalleryGrid />
      </section>
    </div>
  );
}
