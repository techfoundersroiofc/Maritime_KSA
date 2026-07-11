import CoursesHero from "@/app/components/coursespage/CoursesHero";
import CoursesList from "@/app/components/coursespage/CoursesList";
import GSAPProvider from "@/app/components/layout/GSAPProvider";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.courses.title,
  description: SEO_METADATA.courses.description,
  keywords: SEO_METADATA.courses.keywords.join(", "),
};

export default function CoursesPage() {
  return (
    <GSAPProvider>
      <div className="bg-white min-h-screen text-slate-700 pb-20 font-jakarta">
        <CoursesHero />
        <CoursesList />
      </div>
    </GSAPProvider>
  );
}

