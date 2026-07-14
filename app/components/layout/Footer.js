import Link from "next/link";
import Image from "next/image";
import { Anchor, Phone, Mail, MapPin, Heart } from "lucide-react";
import { footerLinks } from "@/app/data/navigation";
import { COLLEGE_CONFIG } from "@/app/constants/config";

export default function Footer() {
  return (
    <footer className="bg-[#050b14] text-slate-300 border-t border-slate-900/60 pt-20 pb-12 relative overflow-hidden font-jakarta">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.035),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(30,58,138,0.08),transparent_50%)] pointer-events-none" />
      {/* Subtle digital grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1528_1px,transparent_1px),linear-gradient(to_bottom,#0b1528_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-12 mb-16">
          {/* Brand Column (Span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="relative w-14 h-14 overflow-hidden rounded-lg bg-white p-1.5 border border-slate-800 transition-all duration-500 group-hover:rotate-[360deg] shadow-lg">
                <Image
                  src="/images/logo/PKIMSE.PNG"
                  alt="PKIMSE Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif tracking-wider text-2xl sm:text-3xl leading-none font-bold">
                  PKIMSE
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-350 font-sans max-w-md">
              PKIMSE is a premier institute for Merchant Navy training. Approved
              by DG Shipping, Government of India, we equip future seafarers
              with discipline, excellence, and global leadership skills.
            </p>

            {/* Modern DGS Accreditation Card */}
            <div className="bg-[#0b1325]/75 border border-slate-900 rounded-xl p-4 flex items-center space-x-3.5 shadow-inner hover:border-slate-800 transition-all duration-300 max-w-md">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                <Anchor className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-white font-black uppercase tracking-wider">
                  DG Shipping Approved
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 leading-normal">
                  Ministry of Ports & Shipping, Govt. of India (No: MT-209-X)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-serif text-lg tracking-wider pb-3 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] hover:text-orange-500 transition-colors duration-300 block w-fit text-slate-350 font-sans relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-orange-500 after:transition-all after:duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution (Span 2) */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h3 className="text-white font-serif text-lg tracking-wider pb-3 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-500">
              Institution
            </h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-[15px] hover:text-orange-500 transition-colors duration-300 block w-fit text-slate-350 font-sans relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-orange-500 after:transition-all after:duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support (Span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col space-y-6">
            <h3 className="text-white font-serif text-lg tracking-wider pb-3 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-orange-500">
              Admissions Office
            </h3>
            <ul className="space-y-4.5 text-sm sm:text-[15px] font-sans">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-1" />
                <span className="leading-relaxed text-slate-350">
                  {COLLEGE_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <a
                  href={`tel:${COLLEGE_CONFIG.phone}`}
                  className="text-slate-350 hover:text-white transition-colors font-semibold"
                >
                  {COLLEGE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <a
                  href={`mailto:${COLLEGE_CONFIG.email}`}
                  className="text-slate-350 hover:text-white transition-colors break-all font-semibold"
                >
                  {COLLEGE_CONFIG.email}
                </a>
              </li>
            </ul>

            {/* Social Media Circular Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COLLEGE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 text-slate-350 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] shadow-md"
                aria-label="Facebook Page"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a
                href={COLLEGE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 text-slate-350 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] shadow-md"
                aria-label="Instagram Profile"
              >
                <svg
                  className="w-4.5 h-4.5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
              <a
                href={COLLEGE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 text-slate-350 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] shadow-md"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={COLLEGE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-800 bg-slate-950 hover:border-orange-550/40 hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300 text-slate-350 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] shadow-md"
                aria-label="YouTube Channel"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.556a3.003 3.003 0 0 0 2.11 2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Centered Modern Bottom Bar */}
        <div className="border-t border-slate-900/60 pt-10 mt-10 flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-400 font-medium tracking-wide">
            <Link
              href="/privacy-policy"
              className="hover:text-orange-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-orange-500 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-sm sm:text-[15px] text-slate-450 font-medium tracking-wide mr-1">
              © {new Date().getFullYear()} PKIMSE Maritime College |
              <span className="ml-1">KSA Group of Institutions.</span> All
              Rights Reserved.
            </p>
            <div className="text-sm sm:text-[15px] text-slate-350 font-semibold flex items-center justify-center space-x-2 mt-2 bg-[#09101d]/60 px-6 py-3 rounded-full border border-slate-900/80 shadow-lg max-w-fit mx-auto">
              <span className="text-slate-450">Developed with</span>
              <Heart className="w-4 h-4 text-orange-500 fill-current animate-pulse inline shrink-0" />
              <span className="text-slate-450">by</span>
              <a
                href="https://www.foundersroi.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 font-bold hover:text-orange-400 transition-colors tracking-wide select-none"
              >
                FoundersROI
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
