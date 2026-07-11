import NewsHero from "@/app/components/news/NewsHero";
import NewsList from "@/app/components/news/NewsList";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.news.title,
  description: SEO_METADATA.news.description,
  keywords: SEO_METADATA.news.keywords.join(", "),
};

export default function NewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-jakarta overflow-x-hidden">
      {/* 1. Academic News Banner */}
      <NewsHero />

      {/* 2. Announcements list */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <NewsList />
      </section>
    </div>
  );
}
