import Link from "next/link";
import Image from "next/image";
import {
  Anchor,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { footerLinks } from "@/app/data/navigation";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export default function Footer() {
  return (
    <footer className="bg-[#070d19] text-slate-400 border-t border-slate-900/60 pt-20 pb-12 relative overflow-hidden font-jakarta">
      {/* Subtle, elegant dark radial background fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/20 via-[#070d19] to-[#070d19] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="relative w-12 h-12 overflow-hidden rounded bg-white p-1 border border-slate-800 transition-transform duration-300 group-hover:scale-105 shadow-md">
                <Image
                  src="/images/logo/PKIMSE.PNG"
                  alt="PKIMSE Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif tracking-wider text-2xl leading-none">
                  PKIMSE
                </span>
                <span className="text-[8px] text-slate-450 tracking-widest uppercase font-extrabold mt-1">
                  KSA Maritime College
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-sans">
              PKIMSE (KSA Maritime College) is a premier institute for Merchant Navy training. Approved by DG Shipping, Government of India, we equip future seafarers with discipline, excellence, and leadership.
            </p>
            <div className="flex items-center space-x-3 pt-1">
              <a
                href={COLLEGE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-900 bg-slate-950 hover:border-orange-550/40 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-orange-550 shadow-sm"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a
                href={COLLEGE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-900 bg-slate-950 hover:border-orange-550/40 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-orange-550 shadow-sm"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"/>
                </svg>
              </a>
              <a
                href={COLLEGE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-900 bg-slate-950 hover:border-orange-550/40 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-orange-550 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={COLLEGE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-900 bg-slate-950 hover:border-orange-550/40 flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-orange-550 shadow-sm"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.556a3.003 3.003 0 0 0 2.11 2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:pl-6">
            <h3 className="text-white font-serif italic text-lg tracking-wide border-b border-slate-900 pb-2.5 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors duration-300 block w-fit text-slate-400 font-sans relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-orange-550 after:transition-all after:duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Accreditation Column */}
          <div className="lg:pl-4">
            <h3 className="text-white font-serif italic text-lg tracking-wide border-b border-slate-900 pb-2.5 mb-6">
              Institution
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors duration-300 block w-fit text-slate-400 font-sans relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-orange-550 after:transition-all after:duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-white font-serif italic text-lg tracking-wide border-b border-slate-900 pb-2.5 mb-6">
              Admissions Office
            </h3>
            <ul className="space-y-4 text-sm font-sans">
              <li className="flex items-start">
                <MapPin className="w-4.5 h-4.5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-350">
                  {COLLEGE_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4.5 h-4.5 text-orange-500 mr-3 shrink-0" />
                <a
                  href={`tel:${COLLEGE_CONFIG.phone}`}
                  className="text-slate-350 hover:text-white transition-colors font-medium"
                >
                  {COLLEGE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4.5 h-4.5 text-orange-500 mr-3 shrink-0" />
                <a
                  href={`mailto:${COLLEGE_CONFIG.email}`}
                  className="text-slate-350 hover:text-white transition-colors break-all font-medium"
                >
                  {COLLEGE_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-900/60 flex items-center space-x-2 text-xs text-slate-400 font-serif italic">
              <Anchor className="w-4 h-4 text-orange-500 shrink-0" />
              <span>DG Shipping Approved Institute No: MT-209-X</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900/60 pt-8 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
          <div>
            <p className="text-slate-500 font-medium">
              © {new Date().getFullYear()} {COLLEGE_CONFIG.name}. All Rights Reserved.
            </p>
            <p className="text-slate-650 mt-1.5 font-medium">
              Developed by{" "}
              <a
                href="https://www.foundersroi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-orange-500 transition-colors underline flex-inline items-center"
              >
                FoundersROI <ExternalLink className="w-3 h-3 inline ml-0.5" />
              </a>
            </p>
          </div>
          <div className="flex space-x-6 text-slate-550 font-medium">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
