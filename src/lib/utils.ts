import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openURL(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) {
    console.error(`Element with id "${id}" not found.`);
    return;
  }

  element.scrollIntoView({ behavior: "smooth" });
};