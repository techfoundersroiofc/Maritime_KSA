"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      // 1. Slide Up entrance
      const slideUpTargets = gsap.utils.toArray(".gsap-slide-up");
      slideUpTargets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Fade In entrance
      const fadeInTargets = gsap.utils.toArray(".gsap-fade-in");
      fadeInTargets.forEach((target) => {
        gsap.fromTo(
          target,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: target,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. Stagger item container
      const staggerContainers = gsap.utils.toArray(".gsap-stagger-container");
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: container,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Refresh ScrollTrigger to parse new layout calculations
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up all ScrollTriggers on pathname unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return <>{children}</>;
}
