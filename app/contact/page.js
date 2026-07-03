import { Phone, Mail, MapPin, Clock, Anchor, Toaster } from "lucide-react";
import { SEO_METADATA } from "@/app/constants/seo";
import { COLLEGE_CONFIG } from "@/app/constants/config";
import ContactForm from "@/app/components/contact/ContactForm";

export const metadata = {
  title: SEO_METADATA.contact.title,
  description: SEO_METADATA.contact.description,
  keywords: SEO_METADATA.contact.keywords.join(", "),
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 pb-20">
      {/* Banner Section */}
      <section className="relative py-20 bg-slate-900/40 border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(249,115,22,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
              Contact Us
            </span>
            <span className="h-px w-8 bg-orange-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Connect With Admissions
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Get in touch with our admissions coordinators in Chidambaram, Tamil Nadu, for counselling and enrollment details.
          </p>
        </div>
      </section>

      {/* Main Details and Form */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-wide border-b border-slate-900 pb-3">
                PKIMSE Campus Address
              </h2>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-white">Main Residential Campus</h4>
                    <p className="leading-relaxed text-slate-400">{COLLEGE_CONFIG.address}</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-orange-500 mr-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-white">Admissions & Counselling</h4>
                    <p className="text-slate-450 hover:text-white transition-colors">
                      Phone: <a href={`tel:${COLLEGE_CONFIG.phone}`}>{COLLEGE_CONFIG.phone}</a>
                    </p>
                    <p className="text-slate-450 hover:text-white transition-colors">
                      Alt: <a href={`tel:${COLLEGE_CONFIG.altPhone}`}>{COLLEGE_CONFIG.altPhone}</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-orange-500 mr-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-white">Email Addresses</h4>
                    <p className="text-slate-450 hover:text-white transition-colors break-all">
                      Primary: <a href={`mailto:${COLLEGE_CONFIG.email}`}>{COLLEGE_CONFIG.email}</a>
                    </p>
                    <p className="text-slate-450 hover:text-white transition-colors break-all">
                      Alt Support: <a href={`mailto:${COLLEGE_CONFIG.altEmail}`}>{COLLEGE_CONFIG.altEmail}</a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-orange-500 mr-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-white">Office Hours</h4>
                    <p className="text-slate-450 leading-relaxed">{COLLEGE_CONFIG.workingHours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mock Google Map Placeholder for Lighthouse 100/100 performance */}
            <div className="bg-slate-900/30 border border-slate-900 rounded-lg p-6 space-y-4">
              <h3 className="text-white font-bold text-sm">Interactive Map Location</h3>
              <div className="relative h-60 w-full rounded bg-slate-950 border border-slate-900 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-10 h-10 text-orange-500 mb-2 animate-bounce" />
                <h4 className="text-xs font-bold text-white">KSA Educational Campus</h4>
                <p className="text-[10px] text-slate-500 mt-1 max-w-xs leading-relaxed">
                  Bypass Road, Chidambaram, Tamil Nadu, 608001
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-[10px] font-semibold text-orange-500 px-4 py-2 border border-slate-800 hover:border-slate-700 rounded transition-all mt-4 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div id="enquiry" className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
