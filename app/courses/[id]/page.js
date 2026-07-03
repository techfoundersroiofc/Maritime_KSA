import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, CheckCircle, GraduationCap, Calendar, Eye, Compass, BookOpen } from "lucide-react";
import { courses } from "@/app/data/courses";

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

  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <Link
            href="/courses"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-orange-500 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
            Back to All Courses
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="bg-orange-600/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                {course.type}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {course.title}
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm flex items-center">
                <Clock className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                Course Duration: {course.duration}
              </p>
            </div>
            <Link
              href="/contact#enquiry"
              className="bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs px-6 py-3.5 rounded shadow-lg shadow-orange-600/10 transition-colors text-center shrink-0"
            >
              Apply / Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: overview & Eligibility */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white tracking-wide border-b border-slate-900 pb-3">
                Course Overview
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                {course.overview}
              </p>
            </div>

            {/* Eligibility standards */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-wide border-b border-slate-900 pb-3">
                Eligibility Standards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-slate-905/30 border border-slate-900 p-5 rounded">
                  <div className="w-9 h-9 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-3 shrink-0">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
                    Academic
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {course.eligibility.academic}
                  </p>
                </div>

                <div className="bg-slate-905/30 border border-slate-900 p-5 rounded">
                  <div className="w-9 h-9 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-3 shrink-0">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
                    Age Limits
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {course.eligibility.age}
                  </p>
                </div>

                <div className="bg-slate-905/30 border border-slate-900 p-5 rounded">
                  <div className="w-9 h-9 rounded bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-3 shrink-0">
                    <Eye className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">
                    Medical & Eye
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {course.eligibility.medical}
                  </p>
                </div>
              </div>
            </div>

            {/* Admission Process timeline */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-wide border-b border-slate-900 pb-3">
                Admission Pathway
              </h2>
              <div className="space-y-4">
                {course.admissionProcess.map((step, idx) => (
                  <div key={step} className="flex items-start space-x-4 bg-slate-900/20 border border-slate-900/50 p-4 rounded">
                    <span className="w-6 h-6 rounded-full bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-350 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Syllabus & Career info */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            {/* Syllabus summary */}
            <div className="bg-slate-900/30 border border-slate-900 rounded p-6">
              <h3 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center">
                <BookOpen className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                Key Subjects Covered
              </h3>
              <ul className="space-y-3">
                {course.subjects.map((sub) => (
                  <li key={sub} className="text-xs text-slate-400 flex items-start space-x-2">
                    <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career prospects */}
            <div className="bg-slate-900/30 border border-slate-900 rounded p-6">
              <h3 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center">
                <Compass className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                Cadet Career Progression
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                This course initiates a highly progressive career trajectory, ultimately leading to top command ranks:
              </p>
              <div className="border-l border-slate-800 ml-2 pl-4 space-y-3 text-[11px] text-slate-500">
                {course.careerPath.split("->").map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-600 border-2 border-slate-950" />
                    <span className="font-semibold text-slate-300">{step.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
