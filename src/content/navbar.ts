import { Github, Linkedin } from "@/components/icons";

import { GithubURL, LinkedinURL } from "@/content/socials";

// import scrollManager from "@/lib/scrollManager";
import { scrollToSection } from "@/lib/utils";
import { openURL } from "@/lib/utils";

import type { Navbar, NavbarItem } from "./types/navbar";
import { SITE } from "./site";

const SectionNavButtons: NavbarItem[] = SITE.sections.map((section) => ({
  type: "button",
  item: {
    label: section.title,
    Icon: section.NavbarIcon,
    onClick: () => scrollToSection(section.id),
  },
}));

export const NAVBAR_ITEMS: Navbar = [
  ...SectionNavButtons,
  { type: "separator" },
  {
    type: "button",
    item: {
      label: "Linkedin",
      Icon: Linkedin,
      onClick: () => openURL(LinkedinURL),
    },
  },
  {
    type: "button",
    item: { label: "Github", Icon: Github, onClick: () => openURL(GithubURL) },
  },
  { type: "separator" },
  { type: "theme-toggle" },
] as const;
