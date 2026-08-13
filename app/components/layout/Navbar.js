"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";
import { cn } from "@/app/lib/utils";

// ==========================================
// Navigation Structure & Categories
// ==========================================
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Admissions & Placements", href: "/admissions" },
  {
    name: "Explore",
    isDropdown: true,
    items: [
      {
        name: "Campus Life",
        href: "/campus",
        description: "Facilities, hostel & student activities",
      },
      {
        name: "Gallery",
        href: "/gallery",
        description: "Photos and videos of our campus",
      },
      {
        name: "News & Events",
        href: "/news",
        description: "Latest updates, notices & happenings",
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

// ==========================================
// 1. TopBar Component
// ==========================================
function TopBar() {
  return (
    <div className="hidden xl:block bg-blue-950 text-slate-200 text-[11px] py-2 px-8 border-b border-blue-900/30 transition-all duration-300">
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

        {/* Center: Admissions Flowing Ticker */}
        <div className="relative w-full max-w-md mx-auto overflow-hidden py-2 px-4">
          <div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-blue-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-blue-950 to-transparent z-10 pointer-events-none" />

          <div className="animate-ticker flex space-x-10 text-[11px] font-semibold text-orange-400 tracking-wider uppercase select-none">
            <span>• Admissions Open 2026</span>
            <span>• Apply Online Today</span>
            <span>• DG Shipping Approved</span>
            <span>• Admissions Open 2026</span>
            <span>• Apply Online Today</span>
            <span>• DG Shipping Approved</span>
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
function Logo({ onClick, className }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("flex items-center space-x-1 group shrink-0", className)}
    >
      <div className="relative overflow-hidden rounded p-1 transition-all duration-300 group-hover:scale-105  flex items-center w-40 sm:w-44 lg:w-50 h-14 sm:h-16 lg:h-20">
        <Image
          src="/images/logo/logofinal1.png"
          alt="PKIMSE Logo"
          width={200}
          height={200}
          priority
          className="object-contain w-full h-full"
        />
      </div>
    </Link>
  );
}

// ==========================================
// 3. DesktopLinks Component with Dropdown
// ==========================================
function DesktopLinks({ pathname }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul className="flex items-center justify-center space-x-1 lg:space-x-2 xl:space-x-4 my-auto">
      {navLinks.map((link) => {
        if (link.isDropdown) {
          const isDropdownActive = link.items.some(
            (sub) => pathname === sub.href,
          );

          return (
            <li key={link.name} className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={cn(
                  "whitespace-nowrap text-[12px] lg:text-[13px] xl:text-[14px] font-bold tracking-wide transition-all duration-300 relative py-2 px-2 lg:px-2.5 flex items-center text-slate-200 hover:text-orange-400 outline-none cursor-pointer",
                  isDropdownActive && "text-orange-400 font-extrabold",
                )}
                aria-expanded={dropdownOpen}
              >
                <span>{link.name}</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 ml-1 transition-transform duration-200",
                    dropdownOpen && "rotate-180",
                  )}
                />
                {isDropdownActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                )}
              </button>

              {/* Dropdown Card */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-2 w-64 bg-blue-950/95 backdrop-blur-xl border border-blue-900/60 rounded-xl shadow-2xl py-3 px-2 transition-all duration-200 origin-top-left z-50",
                  dropdownOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none",
                )}
              >
                <div className="space-y-1">
                  {link.items.map((subItem) => {
                    const isSubActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setDropdownOpen(false)}
                        className={cn(
                          "block p-2 rounded-lg transition-all group hover:bg-blue-900/50",
                          isSubActive &&
                            "bg-blue-900/70 border-l-2 border-orange-500",
                        )}
                      >
                        <p
                          className={cn(
                            "text-xs font-bold text-slate-200 group-hover:text-orange-400 transition-colors",
                            isSubActive && "text-orange-400",
                          )}
                        >
                          {subItem.name}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                          {subItem.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        }

        const isActive = pathname === link.href;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn(
                "whitespace-nowrap text-[12px] lg:text-[13px] xl:text-[14px] font-bold tracking-wide transition-all duration-300 relative py-2 px-2 lg:px-2.5 text-slate-200 hover:text-orange-400",
                isActive &&
                  "text-orange-400 font-extrabold hover:text-orange-300",
              )}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
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
        "btn-shine bg-orange-600 hover:bg-orange-500 text-white text-[11px] lg:text-xs font-bold px-4 lg:px-5 py-2.5 rounded-full transition-all duration-300 flex items-center group tracking-wider uppercase hover:scale-[1.03] active:scale-[0.97] cursor-pointer select-none shrink-0",
        className,
      )}
    >
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-blue-950/98 backdrop-blur-2xl transition-all duration-500 ease-out flex flex-col justify-between p-6 md:p-10 lg:hidden",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-10",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <Logo onClick={() => setIsOpen(false)} />
        <button
          onClick={() => setIsOpen(false)}
          className="text-slate-200 hover:text-white p-2.5 rounded-lg bg-blue-900/50 border border-blue-800/40 hover:bg-blue-900 transition-all focus:outline-none"
          aria-label="Close Menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Drawer Links */}
      <div className="grow flex flex-col justify-center items-center my-6 overflow-y-auto max-h-[60vh] scrollbar-thin">
        <ul className="space-y-4 text-center w-full max-w-md">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <li key={link.name} className="w-full">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex items-center justify-center text-lg sm:text-xl font-bold tracking-wide text-slate-200 hover:text-orange-400 py-2 transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 ml-2 transition-transform",
                        mobileDropdownOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Accordion list */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 space-y-2 my-2 bg-blue-900/20 rounded-xl p-3 border border-blue-900/30",
                      mobileDropdownOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 py-0",
                    )}
                  >
                    {link.items.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-2 text-sm text-slate-300 hover:text-orange-400 font-medium",
                          pathname === sub.href && "text-orange-400 font-bold",
                        )}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            }

            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="group relative">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "inline-flex items-center text-lg sm:text-xl font-bold tracking-wide text-slate-200 hover:text-orange-400 transition-all duration-300",
                    isActive && "text-orange-400 font-extrabold",
                  )}
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Info & Admissions Button */}
      <div className="w-full max-w-lg mx-auto space-y-4 pt-4 border-t border-blue-900/45">
        <ApplyButton
          className="w-full py-3.5 text-center justify-center text-xs"
          onClick={() => setIsOpen(false)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-xs">
          <a
            href={`tel:${COLLEGE_CONFIG.phone}`}
            className="flex items-center hover:text-orange-400 transition-colors p-2.5 rounded-lg bg-blue-900/20 border border-blue-900/30"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400 mr-2 shrink-0" />
            <span className="font-semibold truncate">
              {COLLEGE_CONFIG.phone}
            </span>
          </a>
          <a
            href={`mailto:${COLLEGE_CONFIG.email}`}
            className="flex items-center hover:text-orange-400 transition-colors p-2.5 rounded-lg bg-blue-900/20 border border-blue-900/30"
          >
            <Mail className="w-3.5 h-3.5 text-orange-400 mr-2 shrink-0" />
            <span className="font-semibold truncate">
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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta">
      <TopBar />

      <nav
        className={cn(
          "px-4 md:px-8 transition-all duration-300 bg-blue-950/95 backdrop-blur-md py-3.5 md:py-5 shadow-lg border-b border-blue-900/40",
        )}
      >
        {/* Main Header Container: 3-Column Grid for True Center Alignment */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-[auto_1fr_auto] items-center gap-4">
          {/* Left Column: Logo */}
          <div className="flex items-center justify-start">
            <Logo />
          </div>

          {/* Middle Column: Centered Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center justify-center w-full">
            <DesktopLinks pathname={pathname} />
          </div>

          {/* Right Column: Apply Button & Mobile Toggle */}
          <div className="flex items-center justify-end space-x-3">
            <div className="hidden lg:block">
              <ApplyButton />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-slate-200 hover:text-white p-2.5 rounded-lg border border-blue-900/50 hover:bg-blue-900/40 focus:outline-none transition-all ml-auto"
              aria-label="Open Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenuOverlay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pathname={pathname}
      />
    </header>
  );
}
