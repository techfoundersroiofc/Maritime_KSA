import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export const metadata = {
  title: `Terms & Conditions | ${COLLEGE_CONFIG.name}`,
  description: "Read the terms and conditions governing admission, enrollment, code of conduct, and use of PKIMSE Maritime College resources.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-orange-500 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-orange-500" />
            <h1 className="text-3xl font-black text-white tracking-tight">Terms & Conditions</h1>
          </div>
          <p className="text-xs text-slate-500">Last updated: July 3, 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-400">
          <p>
            Welcome to the official website of <strong>{COLLEGE_CONFIG.name}</strong>. By accessing this website or enrolling in our academic programs, you agree to comply with the terms and conditions outlined below.
          </p>

          <h2 className="text-white font-bold text-base mt-8">1. Admission and Enrollment</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Submitting an enquiry form does not guarantee admission. Formal admission is subject to qualifying in IMU-CET, clearing our entrance interview, and passing DGS-approved medical tests.</li>
            <li>Cadets are selected based on academic merits, fitness compliance, and character audits. All candidate documents are subject to verification.</li>
          </ul>

          <h2 className="text-white font-bold text-base mt-8">2. Fees and Refund Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fee structures for pre-sea programs include boarding, laundry, books, uniform, and simulator fees.</li>
            <li>If a candidate withdraws after course commencement, refunds will be issued according to the rules set by the college and the Directorate General of Shipping guidelines.</li>
          </ul>

          <h2 className="text-white font-bold text-base mt-8">3. Code of Conduct</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cadets are expected to maintain military-grade discipline. Ragging, alcohol consumption, smoking, and damage to institute properties will lead to immediate expulsion without fee refunds.</li>
            <li>Cadets must achieve at least 85% attendance in theory and 100% in practical simulator/workshop classes to qualify for university examinations.</li>
          </ul>

          <h2 className="text-white font-bold text-base mt-8">4. Liability Limitation</h2>
          <p>
            The college takes every safety precaution during heavy workshop, parade, and swimming pool survival drills. However, the college cannot be held liable for accidental injuries sustained during training beyond our standard insurance coverages.
          </p>

          <h2 className="text-white font-bold text-base mt-8">5. Amendments</h2>
          <p>
            The management reserves the right to amend the rules, code of conduct, and fee scales in compliance with Government or IMU regulations.
          </p>
        </div>
      </section>
    </div>
  );
}
