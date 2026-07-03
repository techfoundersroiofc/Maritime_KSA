import Link from "next/link";
import { CheckCircle, ShieldCheck, FileText, Heart, Activity } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";
import { courses } from "@/app/data/courses";

export const metadata = {
  title: SEO_METADATA.admissions.title,
  description: SEO_METADATA.admissions.description,
  keywords: SEO_METADATA.admissions.keywords.join(", "),
};

export default function AdmissionsPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Admissions 2026
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How to Join PKIMSE
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Follow our step-by-step admissions guidelines. Make sure you meet the physical, academic, and medical requirements set by DG Shipping, Government of India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: steps and criteria */}
          <div className="lg:col-span-8 space-y-12">
            {/* Step-by-Step Guide */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-wide border-b border-slate-900 pb-3 flex items-center">
                <FileText className="w-5 h-5 text-orange-500 mr-2.5" />
                Admission Steps
              </h2>
              
              <div className="relative border-l border-slate-900 ml-4 pl-6 space-y-8">
                {/* Step 1 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">Check Eligibility</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Verify that your academic score (PCM percentage) and physical fitness align with your desired program. Check details under our <Link href="/courses" className="text-orange-500 underline">Courses page</Link>.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">Register & Pass IMU-CET</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    For degree (B.Sc, B.Tech) and DNS courses, qualifying the Indian Maritime University Common Entrance Test (IMU-CET) is mandatory. Registration typically commences in April.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">Fill College Application</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Complete the online application form. Submit academic credentials, 10th/12th marksheets, and identity verification documents.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">Entrance Test & Personal Interview</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Shortlisted candidates take the PKIMSE aptitude screening test followed by a technical/discipline interview before veteran mariners.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="relative">
                  <span className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-slate-950 border border-orange-500 text-orange-500 font-bold text-xs flex items-center justify-center">
                    5
                  </span>
                  <h3 className="text-white font-bold text-sm tracking-wide mb-2">DGS Approved Medical Check-Up</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Undergo medical testing by an authorized practitioner approved by the Directorate General of Shipping (DGS), India, certifying physical fitness and eyesight.
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Standards Card */}
            <div className="bg-slate-900/30 border border-slate-900 rounded p-6">
              <h3 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center">
                <Heart className="w-5 h-5 text-orange-500 mr-2.5" />
                Physical & Medical Fitness Guidelines
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Working at sea is physically demanding. Cadets must be free from any active medical ailments, chronic skin diseases, or cardiac conditions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Eyesight: 6/6 in each eye without visual aid for Deck officers. No color blindness.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Eyesight: up to +/- 2.5 permitted for Marine Engineers, ETO and GME.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>Hearing: Normal hearing capacity, checked via standard audiometry test.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <span>General: Normal speech, fit skeleton, and no visible speech impediments.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key deadlines / Contact */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <div className="bg-slate-900/30 border border-slate-900 rounded p-6">
              <h3 className="text-white font-bold text-sm tracking-wide mb-4 flex items-center">
                <Activity className="w-5 h-5 text-orange-500 mr-2.5" />
                Important Dates
              </h3>
              <ul className="space-y-4 text-xs">
                <li className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-400">Online Application Starts</span>
                  <span className="text-white font-semibold">April 1, 2026</span>
                </li>
                <li className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-400">IMU-CET Written Exam</span>
                  <span className="text-white font-semibold">June 2026</span>
                </li>
                <li className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-400">PKIMSE Interviews</span>
                  <span className="text-white font-semibold">July 2026</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-slate-400">Batch Commences</span>
                  <span className="text-white font-semibold">August 2026</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 rounded p-6 text-center space-y-4">
              <h4 className="text-white font-bold text-sm">Need Counselling Support?</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Contact our expert admissions advisors to resolve queries about DNS sponsorships, fee bank loans, and visa clearances.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs py-3 rounded shadow shadow-orange-600/10 transition-colors"
              >
                Connect Admissions Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
