import { Github, Linkedin } from "@/components/logos";
import { HomeIcon, Library, CircleUser } from "lucide-react";

import { GithubURL, LinkedinURL } from "@/content/socials";

import { openURL, scrollOneViewHeight } from "@/lib/utils";

import type { Navbar } from "./types";

export const NAVBAR_ITEMS: Navbar = [
  {
    type: "button",
    item: {
      label: "Home",
      icon: HomeIcon,
      onClick: () => scrollOneViewHeight(0),
    },
  },
  {
    type: "button",
    item: {
      label: "About",
      icon: Library,
      onClick: () => scrollOneViewHeight(1),
    },
  },
  {
    type: "button",
    item: {
      label: "Contact",
      icon: CircleUser,
      onClick: () => scrollOneViewHeight(2),
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
];
