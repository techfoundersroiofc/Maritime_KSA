"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { COLLEGE_CONFIG } from "@/app/constants/config";

const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .min(1, "Full Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email Address is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .min(1, "Mobile Number is required"),
  address: z
    .string()
    .min(5, "Address or location must be at least 5 characters")
    .min(1, "Address or Location is required"),
  qualification: z.enum(["10th", "12th"], {
    errorMap: () => ({ message: "Please select 10th or 12th standard" }),
  }),
  englishMarks: z.coerce
    .number({ invalid_type_error: "English marks must be a valid number" })
    .min(40, "Eligibility Criteria: Minimum 40% required in English")
    .max(100, "Percentage cannot exceed 100%"),
  otherSubjectsMarks: z.coerce
    .number({ invalid_type_error: "Marks must be a valid number" })
    .min(40, "Eligibility Criteria: Minimum 40% required in other subjects")
    .max(100, "Percentage cannot exceed 100%"),
  courseId: z.string().min(1, "Please select the course you are interested in"),
  message: z.string().optional(),
});

export default function InquiryCTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      qualification: "12th",
      englishMarks: "",
      otherSubjectsMarks: "",
      courseId: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Enquiry data:", data);

      toast.success("Enquiry Submitted Successfully!", {
        description: "Our admissions officer will contact you within 24 hours.",
        duration: 5000,
      });

      reset();
    } catch (error) {
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <section
      id="enquiry"
      className="bg-white py-24 border-t border-slate-200/60 relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Left Column: Contact info & Eligibility checklist */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 gsap-slide-up">
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <span className="h-px w-8 bg-orange-600" />
                <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
                Start Your Journey in the Merchant Navy
              </h2>
              <p className="text-blue-950 text-md leading-relaxed font-normal">
                Have questions about sponsorships, eligibility, IMU-CET, or
                student life? Submit an enquiry and our admissions counselor
                will guide you through the process.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-lg flex items-center space-x-4 hover:border-orange-500/30 shadow-xs transition-colors duration-300">
                <div className="w-10 h-10 rounded bg-orange-600/10 border border-orange-500/10 flex items-center justify-center text-orange-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-900 uppercase tracking-widest font-bold">
                    Admissions Hotline
                  </h4>
                  <a
                    href={`tel:${COLLEGE_CONFIG.phone}`}
                    className="text-sm font-bold text-blue-950 hover:text-orange-600 transition-colors"
                  >
                    {COLLEGE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-lg flex items-center space-x-4 hover:border-orange-500/30 shadow-xs transition-colors duration-300">
                <div className="w-10 h-10 rounded bg-orange-600/10 border border-orange-500/10 flex items-center justify-center text-orange-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] text-slate-900 uppercase tracking-widest font-bold">
                    General Email
                  </h4>
                  <a
                    href={`mailto:${COLLEGE_CONFIG.email}`}
                    className="text-sm font-bold text-blue-950 hover:text-orange-600 transition-colors break-all"
                  >
                    {COLLEGE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-lg flex items-center space-x-4 hover:border-orange-500/30 shadow-xs transition-colors duration-300">
                <div className="w-10 h-10 rounded bg-orange-600/10 border border-orange-500/10 flex items-center justify-center text-orange-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[9px] text-blue-950 uppercase tracking-widest font-bold">
                    College Location
                  </h4>
                  <span className="text-sm font-semibold text-blue-950 leading-snug">
                    1089 , keerapalayam, Tamil Nadu 608602
                  </span>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="border-t border-slate-200/60 pt-6 space-y-3">
              <h4 className="text-blue-950 font-bold text-xs uppercase tracking-wider mb-2">
                Basic Admission Checklist
              </h4>
              <div className="flex items-center space-x-2 text-sm text-blue-950 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>10, +2 with Physics, Chemistry & Math (PCM)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-950 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Minimum 40% in English (10th or 12th)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-blue-950 font-semibold">
                <CheckCircle2 className="w-4.5 h-4.5 text-orange-600 shrink-0" />
                <span>Eye Sight: 6/6 (no color blindness)</span>
              </div>
            </div>
          </div>

          {/* Right Column: enquiry Form Card */}
          <div className="lg:col-span-7 bg-slate-50/50 border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md flex flex-col justify-center backdrop-blur-sm hover:border-orange-500/25 transition-all duration-300 gsap-slide-up">
            <h3 className="text-xl font-bold text-blue-950 mb-6 tracking-wide">
              Admission Enquiry Form 2026 (Min 40% Marks Required)
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-xs font-bold text-slate-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your name"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-red-500">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-slate-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold text-slate-700"
                  >
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="10-digit mobile number"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label
                    htmlFor="address"
                    className="text-xs font-bold text-slate-700"
                  >
                    Address or Location *
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="City / State / Country"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    {...register("address")}
                  />
                  {errors.address && (
                    <span className="text-[10px] text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Qualification */}
                <div className="space-y-2">
                  <label
                    htmlFor="qualification"
                    className="text-xs font-bold text-slate-700"
                  >
                    Education Qualification *
                  </label>
                  <select
                    id="qualification"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors"
                    {...register("qualification")}
                  >
                    <option value="12th">Passed 12th Standard</option>
                    <option value="10th">Passed 10th Standard</option>
                  </select>
                  {errors.qualification && (
                    <span className="text-[10px] text-red-500">
                      {errors.qualification.message}
                    </span>
                  )}
                </div>

                {/* Course Interested */}
                <div className="space-y-2">
                  <label
                    htmlFor="courseId"
                    className="text-xs font-bold text-slate-700"
                  >
                    Course Interested In *
                  </label>
                  <select
                    id="courseId"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none transition-colors"
                    {...register("courseId")}
                  >
                    <option value="">Select a Merchant Navy course</option>
                    <option value="dns">
                      General Purpose (GP) Rating - 6 Months
                    </option>
                    <option value="gp-rating">
                      Basic STCW Safety Training Course (BST) - 11 Days
                    </option>
                  </select>
                  {errors.courseId && (
                    <span className="text-[10px] text-red-500">
                      {errors.courseId.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* English Marks */}
                <div className="space-y-2">
                  <label
                    htmlFor="englishMarks"
                    className="text-xs font-bold text-slate-700"
                  >
                    English Marks (%) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="englishMarks"
                    placeholder="Marks in English (Min 40%)"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    {...register("englishMarks")}
                  />
                  {errors.englishMarks && (
                    <span className="text-[10px] text-red-500 font-bold block">
                      {errors.englishMarks.message}
                    </span>
                  )}
                </div>

                {/* Other Subjects Marks */}
                <div className="space-y-2">
                  <label
                    htmlFor="otherSubjectsMarks"
                    className="text-xs font-bold text-slate-700"
                  >
                    Other Subjects Marks (%) *
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    id="otherSubjectsMarks"
                    placeholder="Avg Marks (Min 40%)"
                    className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-colors"
                    {...register("otherSubjectsMarks")}
                  />
                  {errors.otherSubjectsMarks && (
                    <span className="text-[10px] text-red-500 font-bold block">
                      {errors.otherSubjectsMarks.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-slate-700"
                >
                  Message Request
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about yourself or enter your questions..."
                  className="w-full bg-white border border-slate-300 focus:border-orange-500/80 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-450 focus:outline-none transition-colors resize-none"
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-550 disabled:bg-orange-850 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all flex items-center justify-center space-x-2 group mt-2"
              >
                <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
                {!isSubmitting && (
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
