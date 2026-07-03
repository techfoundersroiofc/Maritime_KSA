import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function truncateText(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
