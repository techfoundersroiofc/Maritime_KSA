"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { courses } from "@/app/data/courses";

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

export default function ContactForm() {
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
      console.log("Contact Enquiry Data:", data);
      toast.success("Enquiry Submitted Successfully!", {
        description: "Our admissions officer will contact you within 24 hours.",
        duration: 5000,
      });
      reset();
    } catch (err) {
      toast.error("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xs relative overflow-hidden group">
      {/* Subtle corner glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-500 pointer-events-none" />

      <h2 className="text-xl sm:text-2xl font-black text-blue-950 mb-6 tracking-tight text-left">
        Submit Admission Enquiry (Min 40% Marks Required)
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
              placeholder="Enter your name"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("fullName")}
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
              {...register("email")}
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
              placeholder="10-digit mobile number"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              Address or Location *
            </label>
            <input
              type="text"
              id="address"
              placeholder="City / State / Country"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("address")}
            />
            {errors.address && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Qualification */}
          <div className="space-y-2 flex flex-col items-start w-full">
            <label
              htmlFor="qualification"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              Educational Qualification *
            </label>
            <select
              id="qualification"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 focus:outline-none transition-all duration-300"
              {...register("qualification")}
            >
              <option value="12th">Passed 12th Standard</option>
              <option value="10th">Passed 10th Standard</option>
            </select>
            {errors.qualification && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.qualification.message}
              </span>
            )}
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
              {...register("courseId")}
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* English Marks */}
          <div className="space-y-2">
            <label
              htmlFor="englishMarks"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              English Marks (%) *
            </label>
            <input
              type="number"
              step="0.1"
              id="englishMarks"
              placeholder="Marks in English (Min 40%)"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("englishMarks")}
            />
            {errors.englishMarks && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.englishMarks.message}
              </span>
            )}
          </div>

          {/* Other Subjects Marks */}
          <div className="space-y-2">
            <label
              htmlFor="otherSubjectsMarks"
              className="text-xs font-black uppercase tracking-wider text-blue-955"
            >
              Other Subjects Marks (%) *
            </label>
            <input
              type="number"
              step="0.1"
              id="otherSubjectsMarks"
              placeholder="Avg Marks (Min 40%)"
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500/50 focus:bg-white rounded-2xl px-4 py-3.5 text-sm text-blue-950 placeholder-slate-400 focus:outline-none transition-all duration-300"
              {...register("otherSubjectsMarks")}
            />
            {errors.otherSubjectsMarks && (
              <span className="text-[10px] text-red-500 font-bold">
                {errors.otherSubjectsMarks.message}
              </span>
            )}
          </div>
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
