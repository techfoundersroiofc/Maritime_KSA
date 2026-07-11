import { notFound } from "next/navigation";
import { courses } from "@/app/data/courses";
import CourseDetailClient from "@/app/components/courses/CourseDetailClient";

// Pre-render pages for Lighthouse performance optimization
export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

// Dynamically generate metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return {};

  return {
    title: `${course.title} Eligibility & Admission 2026 | PKIMSE`,
    description: course.overview.slice(0, 160),
    keywords: course.seoKeywords.join(", "),
  };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} className="py-20" />;
}
