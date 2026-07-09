"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { navLinks } from "@/app/data/navigation";
import { COLLEGE_CONFIG } from "@/app/constants/config";
import { cn } from "@/app/lib/utils";

// ==========================================
// 1. TopBar Component
// ==========================================
function TopBar({ scrolled }) {
  return (
    <div
      className={cn(
        "hidden lg:block bg-blue-950 text-slate-200 text-[11px] py-2 px-8 border-b border-blue-900/30 transition-all duration-300",
        scrolled
          ? "h-0 py-0 opacity-0 overflow-hidden border-none"
          : "h-auto opacity-100",
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Contact Information */}
        <div className="flex items-center space-x-6 justify-start">
          <a
            href={`tel:${COLLEGE_CONFIG.phone}`}
            className="flex items-center hover:text-orange-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
            <span className="font-semibold">{COLLEGE_CONFIG.phone}</span>
          </a>
          <a
            href={`mailto:${COLLEGE_CONFIG.email}`}
            className="flex items-center hover:text-orange-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
            <span className="font-semibold text-slate-200">
              {COLLEGE_CONFIG.email}
            </span>
          </a>
        </div>

        {/* Center: Admissions Flowing Ticker with Fade Overlays */}
        <div className="relative w-full max-w-md mx-auto overflow-hidden py-2 px-4">
          <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-blue-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-blue-950 to-transparent z-10 pointer-events-none" />

          <div className="animate-ticker flex space-x-10 text-[11px] font-semibold text-orange-400 tracking-wider uppercase select-none">
            <span>• Admissions Open 2026</span>
            <span>• Apply Online Today </span>
            <span>• Direct Sponsorships Available</span>
            <span>• Admissions Open 2026</span>
            <span>• Apply Online Today </span>
            <span>• Direct Sponsorships Available</span>
          </div>
        </div>

        {/* Right Side: Working Hours */}
        <div className="flex items-center justify-end text-slate-200">
          <Clock className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
          <span className="font-semibold">{COLLEGE_CONFIG.workingHours}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. Logo Component
// ==========================================
function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-1 group">
      <div className="relative w-20 h-20 md:w-20 md:h-20 overflow-hidden rounded bg-white p-1 border border-slate-200 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo/PKIMSE.PNG"
          alt="PKIMSE Logo"
          fill
          unoptimized
          sizes="(max-width: 768px) 44px, 48px"
          className="object-contain"
        />
      </div>
    </Link>
  );
}

// ==========================================
// 3. DesktopLinks Component
// ==========================================
function DesktopLinks({ pathname }) {
  return (
    <ul className="flex items-center space-x-1 xl:space-x-4">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "whitespace-nowrap text-[12px] xl:text-[13.5px] font-semibold tracking-wide transition-colors relative py-2 px-2.5 text-slate-600 hover:text-blue-950",
                isActive && "text-orange-600 font-bold hover:text-orange-700",
              )}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-orange-600 rounded-full" />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// ==========================================
// 4. ApplyButton Component
// ==========================================
function ApplyButton({ className, onClick }) {
  return (
    <Link
      href="/admissions"
      onClick={onClick}
      className={cn(
        "btn-shine bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-300 flex items-center group tracking-wider uppercase hover:scale-[1.03] active:scale-[0.97] cursor-pointer select-none",
        className,
      )}
    >
      {/* Live Ping Status Indicator */}
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>Apply Now</span>
      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

// ==========================================
// 5. MobileMenuOverlay Component
// ==========================================
function MobileMenuOverlay({ isOpen, setIsOpen, pathname }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl transition-all duration-500 ease-out flex flex-col justify-between p-6 md:p-10 lg:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-10",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center space-x-3 group"
        >
          <div className="relative w-11 h-11 overflow-hidden rounded bg-white p-1 border border-slate-200">
            <Image
              src="/images/logo/PKIMSE.PNG"
              alt="PKIMSE Logo"
              fill
              priority
              sizes="44px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-blue-950 font-black text-lg tracking-wider leading-none">
              PKIMSE
            </span>
            <span className="text-[7.5px] text-slate-600 tracking-widest uppercase font-extrabold mt-1">
              KSA Maritime College
            </span>
          </div>
        </Link>

        {/* Close Toggle */}
        <button
          onClick={() => setIsOpen(false)}
          className="text-slate-650 hover:text-slate-900 p-2.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-all focus:outline-none"
          aria-label="Close Menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Ticker Links */}
      <div className="grow flex flex-col justify-center items-center my-8 overflow-y-auto max-h-[60vh] scrollbar-thin">
        <ul className="space-y-6 text-center w-full max-w-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="group relative">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "inline-flex items-center text-xl sm:text-2xl font-bold tracking-wide text-slate-700 hover:text-orange-600 transition-all duration-300 transform group-hover:scale-105",
                    isActive && "text-orange-600 scale-105 font-extrabold",
                  )}
                >
                  <span>{link.name}</span>
                </Link>
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-orange-600 rounded-full" />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Info & Admissions Button */}
      <div className="w-full max-w-lg mx-auto space-y-6 pt-6 border-t border-slate-200">
        <ApplyButton
          className="w-full py-3.5 text-center justify-center text-xs"
          onClick={() => setIsOpen(false)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600 text-sm">
          <a
            href={`tel:${COLLEGE_CONFIG.phone}`}
            className="flex items-center hover:text-orange-600 transition-colors p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-350"
          >
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 text-orange-600 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-semibold text-slate-800">
              {COLLEGE_CONFIG.phone}
            </span>
          </a>
          <a
            href={`mailto:${COLLEGE_CONFIG.email}`}
            className="flex items-center hover:text-orange-600 transition-colors p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-350"
          >
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 text-orange-600 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-semibold text-slate-800 truncate">
              {COLLEGE_CONFIG.email}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Main Navbar Export
// ==========================================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta">
      {/* Modular Top Bar */}
      <TopBar scrolled={scrolled} />

      {/* Main Brand & Navigation bar */}
      <nav
        className={cn(
          "px-4 md:px-8 transition-all duration-300 border-b",
          scrolled
            ? "bg-white/95 backdrop-blur-md py-3 border-slate-200/60"
            : "bg-white/80 backdrop-blur-sm py-4 border-slate-200/20",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />

          {/* Desktop Section */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <DesktopLinks pathname={pathname} />
            <ApplyButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-slate-700 hover:text-slate-900 p-2.5 rounded-lg border border-slate-200 hover:bg-slate-100 focus:outline-none transition-all"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenuOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pathname={pathname}
      />
    </header>
  );
}
