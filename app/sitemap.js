import { courses } from "./data/courses";

export default async function sitemap() {
  const baseUrl = "https://pkimse.edu.in";

  // Static routes
  const routes = [
    "",
    "/about",
    "/courses",
    "/admissions",
    "/placements",
    "/campus",
    "/gallery",
    "/news",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic course routes
  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...courseRoutes];
}
