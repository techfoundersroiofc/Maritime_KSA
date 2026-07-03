"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Anchor, Clock, ArrowRight } from "lucide-react";
import { navLinks } from "@/app/data/navigation";
import { COLLEGE_CONFIG } from "@/app/constants/config";
import { cn } from "@/app/lib/utils";

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
      {/* Top Bar - Hidden on scroll and mobile/tablet screens */}
      <div
        className={cn(
          "hidden lg:flex bg-slate-950/85 backdrop-blur-md text-slate-400 text-[11px] py-2 px-8 border-b border-slate-900/60 justify-between items-center transition-all duration-300",
          scrolled
            ? "h-0 py-0 opacity-0 overflow-hidden border-none"
            : "h-auto opacity-100",
        )}
      >
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${COLLEGE_CONFIG.phone}`}
            className="flex items-center hover:text-orange-500 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-orange-555" />
            <span className="font-medium">{COLLEGE_CONFIG.phone}</span>
          </a>
          <a
            href={`mailto:${COLLEGE_CONFIG.email}`}
            className="flex items-center hover:text-orange-500 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 mr-1.5 text-orange-555" />
            <span className="font-medium">{COLLEGE_CONFIG.email}</span>
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-orange-555" />
            <span className="font-medium">{COLLEGE_CONFIG.workingHours}</span>
          </div>
          <span className="bg-orange-500/10 text-orange-500 border border-orange-500/20 font-bold px-3 py-0.5 rounded text-[9px] uppercase tracking-widest animate-pulse">
            Admissions Open 2026
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "px-4 md:px-8 transition-all duration-300 border-b border-transparent",
          scrolled
            ? "bg-slate-950/85 backdrop-blur-lg py-3.5 shadow-2xl shadow-slate-950/50 border-slate-900/60"
            : "bg-slate-950/30 backdrop-blur-xs py-5",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 md:w-13 md:h-13 overflow-hidden rounded bg-white p-1 border border-slate-800 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <Image
                src="/images/logo/PKIMSE.PNG"
                alt="PKIMSE Logo"
                fill
                priority
                sizes="(max-width: 768px) 44px, 52px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-wider leading-none group-hover:text-orange-500 transition-colors">
                PKIMSE
              </span>
              <span className="text-[7.5px] sm:text-[8px] md:text-[9px] text-slate-400 tracking-widest uppercase font-extrabold mt-1">
                KSA Maritime College
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-semibold tracking-wide transition-colors relative py-2.5 text-slate-350 hover:text-white",
                        isActive &&
                          "text-orange-550 font-bold hover:text-orange-550",
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/admissions"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-xs font-bold px-5 py-3 rounded shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center group ml-4"
            >
              <span>Apply Now 2026</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-slate-355 hover:text-white p-2.5 rounded-lg border border-transparent hover:border-slate-800/80 hover:bg-slate-900/40 focus:outline-none transition-all"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl transition-all duration-500 ease-out flex flex-col justify-between p-6 md:p-10 lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10",
        )}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-11 h-11 overflow-hidden rounded bg-white p-1 border border-slate-800 shadow-md">
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
              <span className="text-white font-black text-lg tracking-wider leading-none">
                PKIMSE
              </span>
              <span className="text-[7.5px] text-slate-400 tracking-widest uppercase font-extrabold mt-1">
                KSA Maritime College
              </span>
            </div>
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-350 hover:text-white p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 hover:bg-slate-900 transition-all focus:outline-none"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Navigation Links */}
        <div className="flex-grow flex flex-col justify-center items-center my-8 overflow-y-auto max-h-[60vh] scrollbar-thin">
          <ul className="space-y-6 text-center w-full max-w-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="group relative">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "inline-flex items-center text-2xl sm:text-3xl font-extrabold tracking-wide text-slate-300 hover:text-orange-500 transition-all duration-300 transform group-hover:scale-105",
                      isActive && "text-orange-500 scale-105 font-black",
                    )}
                  >
                    <span>{link.name}</span>
                  </Link>
                  {isActive && (
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-1 bg-linear-to-r from-orange-600 to-orange-400 rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom Contact and Call to Action Section */}
        <div className="w-full max-w-lg mx-auto space-y-6 pt-6 border-t border-slate-900">
          <Link
            href="/admissions"
            onClick={() => setIsOpen(false)}
            className="w-full bg-linear-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-orange-600/20 transition-all duration-300 flex items-center justify-center group"
          >
            <span>Apply Now 2026</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-400 text-sm">
            <a
              href={`tel:${COLLEGE_CONFIG.phone}`}
              className="flex items-center hover:text-orange-500 transition-colors p-3 rounded-lg bg-slate-950 border border-slate-900 hover:border-slate-800/80"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center mr-3 text-orange-500 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-semibold">{COLLEGE_CONFIG.phone}</span>
            </a>
            <a
              href={`mailto:${COLLEGE_CONFIG.email}`}
              className="flex items-center hover:text-orange-500 transition-colors p-3 rounded-lg bg-slate-950 border border-slate-900 hover:border-slate-800/80"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center mr-3 text-orange-500 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-semibold text-xs sm:text-sm truncate">
                {COLLEGE_CONFIG.email}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
