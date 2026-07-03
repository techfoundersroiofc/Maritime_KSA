import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export const metadata = {
  title: `Privacy Policy | ${COLLEGE_CONFIG.name}`,
  description:
    "Read the Privacy Policy of PKIMSE Maritime College. Learn how we handle and protect cadet and visitor data.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-6 h-6 text-orange-500" />
            <h1 className="text-3xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xs text-slate-500">Last updated: July 3, 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-400">
          <p>
            At <strong>{COLLEGE_CONFIG.name}</strong>, we prioritize the privacy
            and security of our cadets, parents, applicants, and visitors. This
            Privacy Policy details the types of information we collect, how we
            use it, and the safety measures we employ to secure it.
          </p>

          <h2 className="text-white font-bold text-base mt-8">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information when you fill out admission enquiry
            forms, contact us via phone/email, or register on our portal. This
            information includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full Name, Date of Birth, Gender, and Nationality.</li>
            <li>
              Contact details: mobile number, email address, parent&apos;s
              contact.
            </li>
            <li>
              Academic marks: 10th and 12th standard marksheets (PCM
              percentages).
            </li>
            <li>
              Medical fitness data (eyesight, chronic conditions) as required by
              DGS.
            </li>
          </ul>

          <h2 className="text-white font-bold text-base mt-8">
            2. How We Use Your Information
          </h2>
          <p>
            We use the collected information solely for institutional purposes,
            specifically:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Evaluating admission eligibility according to DG Shipping
              criteria.
            </li>
            <li>
              Communicating application progress, counseling dates, and fee
              schedules.
            </li>
            <li>Improving our website experience and diagnostic services.</li>
            <li>
              Fulfilling legal and regulatory mandates set by maritime
              authorities.
            </li>
          </ul>

          <h2 className="text-white font-bold text-base mt-8">
            3. Data Sharing
          </h2>
          <p>
            We do not sell, rent, or trade applicant or cadet data to marketing
            firms. We share data only with authorized bodies, such as:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The Indian Maritime University (IMU) and Directorate General of
              Shipping for enrollment and exam clearances.
            </li>
            <li>
              Partner shipping companies for cadetship sponsorships and
              placement recruitments.
            </li>
          </ul>

          <h2 className="text-white font-bold text-base mt-8">4. Security</h2>
          <p>
            We employ commercial-grade security firewalls and SSL encryption to
            protect your data. However, no transmission over the internet can be
            guaranteed 100% secure.
          </p>

          <h2 className="text-white font-bold text-base mt-8">5. Contact Us</h2>
          <p>
            If you have questions about this policy, contact us at:{" "}
            <a
              href={`mailto:${COLLEGE_CONFIG.email}`}
              className="text-orange-500 underline"
            >
              {COLLEGE_CONFIG.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
