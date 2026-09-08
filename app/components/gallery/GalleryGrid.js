"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/app/data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [selectedIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, handleKeyDown]);

  return (
    <div className="w-full">
      {/* Photo Grid - Clean display without text or filter pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-4/3 w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer border border-slate-200/80 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-blue-950 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main Lightbox Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            >
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={galleryImages[selectedIndex]}
                  alt={`Gallery Image ${selectedIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
