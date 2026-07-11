import { SEO_METADATA } from "@/app/constants/seo";
import Institution from "@/app/components/about/Institution";
import VisionMission from "@/app/components/about/VisionMission";
import Principal from "@/app/components/about/Principal";
import WhyChoose from "@/app/components/about/WhyChoose";
import Amenities from "@/app/components/about/Amenities";
import Placements from "@/app/components/about/Placements";
import Collaborations from "@/app/components/about/Collaborations";
import GSAPProvider from "@/app/components/layout/GSAPProvider";

export const metadata = {
  title: SEO_METADATA.about.title,
  description: SEO_METADATA.about.description,
  keywords: SEO_METADATA.about.keywords.join(", "),
};

export default function AboutPage() {
  return (
    <GSAPProvider>
      <div className="bg-white min-h-screen text-slate-700 pb-20 font-jakarta">
        {/* About the Institution */}
        <Institution />
        {/* Mission, Vision, Core Values, and Moral Policies */}
        <VisionMission />
        {/* About Principal */}
        <Principal />
        {/* Why Choose PKIMSE */}
        <WhyChoose />
        {/* Amenities Gallery */}
        <Amenities />
        {/* Placement Records */}
        <Placements />
        {/* Companies Tie-up and Collaboration */}
        <Collaborations />
      </div>
    </GSAPProvider>
  );
}
