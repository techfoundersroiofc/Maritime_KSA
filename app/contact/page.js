import ContactHero from "@/app/components/contact/ContactHero";
import ContactDetails from "@/app/components/contact/ContactDetails";
import ContactForm from "@/app/components/contact/ContactForm";
import ContactMap from "@/app/components/contact/ContactMap";
import { SEO_METADATA } from "@/app/constants/seo";

export const metadata = {
  title: SEO_METADATA.contact.title,
  description: SEO_METADATA.contact.description,
  keywords: SEO_METADATA.contact.keywords.join(", "),
};

export default function ContactPage() {
  return (
    <div className="bg-slate-55 min-h-screen pb-24 font-jakarta overflow-x-hidden">
      {/* 1. Academic Contact Banner */}
      <ContactHero />

      {/* 2. Interactive details & enquiry form layout */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Details */}
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>

          {/* Right: Enquiry Form */}
          <div id="enquiry" className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* 3. Dedicated Campus Map & Transit directions panel */}
        <div className="pt-8">
          <ContactMap />
        </div>
      </section>
    </div>
  );
}
