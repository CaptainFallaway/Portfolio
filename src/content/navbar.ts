import { Github, Linkedin, WavingHand } from "@/components/icons";
import { Library, CircleUser } from "lucide-react";

import { GithubURL, LinkedinURL } from "@/content/socials";

import scrollManager from "@/lib/scrollManager";
import { openURL } from "@/lib/utils";

import type { Navbar } from "./types";

export const NAVBAR_ITEMS: Navbar = [
  {
    type: "button",
    item: {
      label: "Hello",
      icon: WavingHand,
      onClick: () => scrollManager.scrollToSection("hello"),
    },
  },
  {
    type: "button",
    item: {
      label: "About",
      icon: Library,
      onClick: () => scrollManager.scrollToSection("about"),
    },
  },
  {
    type: "button",
    item: {
      label: "Contact",
      icon: CircleUser,
      onClick: () => scrollManager.scrollToSection("socials"),
    },
  },
  { type: "separator" },
  {
    type: "button",
    item: {
      label: "Linkedin",
      icon: Linkedin,
      onClick: () => openURL(LinkedinURL),
    },
  },
  {
    type: "button",
    item: { label: "Github", icon: Github, onClick: () => openURL(GithubURL) },
  },
  { type: "separator" },
  { type: "theme-toggle" },
] as const;
