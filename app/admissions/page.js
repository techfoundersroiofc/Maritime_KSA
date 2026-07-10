import { SEO_METADATA } from "@/app/constants/seo";
import AdmissionsPlacementsTabs from "./AdmissionsPlacementsTabs";

export const metadata = {
  title: SEO_METADATA.admissions.title,
  description: SEO_METADATA.admissions.description,
  keywords: SEO_METADATA.admissions.keywords.join(", "),
};

export default function AdmissionsPage() {
  return <AdmissionsPlacementsTabs />;
}
