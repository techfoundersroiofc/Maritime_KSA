import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Welcome from "./components/home/Welcome";
import FeaturedCourses from "./components/home/FeaturedCourses";
import WhyChooseUs from "./components/home/WhyChooseUs";
import InquiryCTA from "./components/home/InquiryCTA";
import GSAPProvider from "./components/layout/GSAPProvider";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <GSAPProvider>
      <Toaster position="top-center" theme="dark" closeButton richColors />
      <Hero />
      <Stats />
      <Welcome />
      <FeaturedCourses />
      <WhyChooseUs />
      <InquiryCTA />
    </GSAPProvider>
  );
}
