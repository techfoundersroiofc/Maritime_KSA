"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { courses } from "@/app/data/courses";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      pcmPercentage: "",
      courseId: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Contact Enquiry Data:", data);
      toast.success("Enquiry Form Submitted!", {
        description: "Our counseling desk will get back to you shortly.",
        duration: 5000,
      });
      reset();
    } catch (err) {
      toast.error("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xs relative overflow-hidden group">
      {/* Subtle corner glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500 pointer-events-none" />

      <h2 className="text-xl sm:text-2xl font-black text-blue-950 mb-6 tracking-tight text-left">
        Submit Admission Enquiry
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Your full name"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-[10px] text-red-500 font-bold">
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
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              Mobile Number *
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="10-digit number"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be a 10-digit number",
                },
              })}
            />
            {errors.phone && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* PCM % */}
          <div className="space-y-2">
            <label
              htmlFor="pcmPercentage"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              12th PCM Marks (%) *
            </label>
            <input
              type="number"
              id="pcmPercentage"
              placeholder="Physics, Chemistry, Math %"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("pcmPercentage", {
                required: "PCM percentage is required",
                min: { value: 40, message: "Minimum 40% required" },
                max: { value: 100, message: "Maximum 100%" },
              })}
            />
            {errors.pcmPercentage && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.pcmPercentage.message}
              </span>
            )}
          </div>
        </div>

        {/* Course Select */}
        <div className="space-y-2 flex flex-col items-start w-full">
          <label
            htmlFor="courseId"
            className="text-xs font-black uppercase tracking-wider text-blue-955"
          >
            Course Interested In *
          </label>
          <select
            id="courseId"
            className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none transition-all duration-300"
            {...register("courseId", { required: "Please select a course" })}
          >
            <option value="">Choose a program</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title} ({course.duration})
              </option>
            ))}
          </select>
          {errors.courseId && (
            <span className="text-[10px] text-red-500 font-bold">
              {errors.courseId.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-xs font-black uppercase tracking-wider text-blue-955"
          >
            Message / Questions
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="How can we help you? Write your questions here..."
            className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300 resize-none"
            {...register("message")}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-600 disabled:bg-orange-850 text-white font-extrabold py-4 rounded-full shadow-lg shadow-orange-600/15 transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer select-none text-xs uppercase tracking-wider relative overflow-hidden"
        >
          {/* Diagonal reflection shine flash sweep */}
          <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

          <span className="relative z-10">
            {isSubmitting ? "Submitting..." : "Send Message"}
          </span>
          {!isSubmitting && (
            <Send className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </button>
      </form>
    </div>
  );
}
