import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { SITE } from "@/content/site"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openURL(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export function scrollToSection(section: string) {
  if (!SITE.sections.map(s => s.id).includes(section)) {
    console.error(`Section "${section}" does not exist in SITE.sections`);
    return;
  }

  const element = document.getElementById(section);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Element with ID "${section}" not found.`);
  }
}